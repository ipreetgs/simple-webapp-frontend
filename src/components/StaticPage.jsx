// src/components/StaticPage.jsx
import { useEffect, useState } from "react";

export default function StaticPage({ endpoint }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/${endpoint}`)
      .then((res) => res.json())
      .then(setData);
  }, [endpoint]);

  return (
    <div>
      <h2>{endpoint.toUpperCase()}</h2>
      {data.map((d, i) => (
        <div key={i}>
          <h4>{d.title}</h4>
          <p>{d.description}</p>
        </div>
      ))}
    </div>
  );
}
