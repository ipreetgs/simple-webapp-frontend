import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function IsAdminLoginUI() {
  const { token, user } = useContext(AuthContext);
  const [pin, setPin] = useState("");
  const [verified, setVerified] = useState(false);
  const [form, setForm] = useState({ username: "", password: "", action: "create" });
  const [message, setMessage] = useState("");

  const verifyPin = () => {
    if (pin === "2312") setVerified(true);
    else setMessage("Invalid PIN");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    const endpoint = form.action === "create" ? "/admin/create" : "/admin/delete";

    const res = await fetch(`http://localhost:5000${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        username: form.username,
        password: form.password,
        pin,
      }),
    });

    const data = await res.json();
    if (data.message) setMessage(data.message);
    else setMessage(data.error || "Something went wrong");
  };

  if (!user?.is_admin) return <p>Only admins can access this page.</p>;

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Secure Admin Panel</h2>

      {!verified ? (
        <div>
          <label>Enter PIN to access:</label>
          <br />
          <input type="password" value={pin} onChange={(e) => setPin(e.target.value)} />
          <button onClick={verifyPin}>Verify</button>
          {message && <p>{message}</p>}
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Action:
            <select value={form.action} onChange={(e) => setForm({ ...form, action: e.target.value })}>
              <option value="create">Create Admin</option>
              <option value="delete">Delete Admin</option>
            </select>
          </label>
          <br />
          <label>Username:</label>
          <input
            type="text"
            value={form.username}
            onChange={(e) => setForm({ ...form, username: e.target.value })}
            required
          />
          <br />
          {form.action === "create" && (
            <>
              <label>Password:</label>
              <input
                type="password"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                required
              />
              <br />
            </>
          )}
          <button type="submit">{form.action === "create" ? "Create Admin" : "Delete Admin"}</button>
          {message && <p>{message}</p>}
        </form>
      )}
    </div>
  );
}
