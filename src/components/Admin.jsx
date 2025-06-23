import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Admin() {
  const { token, user } = useContext(AuthContext);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!token) return;

    fetch("http://localhost:5000/admin/users", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Admin API response:", data);
        if (Array.isArray(data)) {
          setUsers(data);
        } else {
          setError(data.error || "You are not authorized to view this page.");
        }
      });
  }, [token]);

  if (!user?.is_admin) {
    return <h2>Access denied. Admins only.</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <ul>
        {users.map((u) => (
          <li key={u.id}>
            {u.username} {u.is_admin ? "(Admin)" : ""}
          </li>
        ))}
      </ul>
    </div>
  );
}
