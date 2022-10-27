import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Framework = () => {
  const [frameworks, setFrameworks] = useState([]);
  useEffect(() => {
    fetch("https://educational-assignment-ten-server.vercel.app/frameworks")
      .then((res) => res.json())
      .then((data) => setFrameworks(data));
  }, []);

  return (
    <div className="mt-4 bg-info rounded p-4">
      <h2>Frameworks:</h2>
      <div>
        {frameworks.map((framework) => (
          <p className="m-0" key={framework.id}>
            <Link
              className="fs-6 text-decoration-none text-white"
              to={`/details/${framework.id}`}
            >
              {framework.name}
            </Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Framework;
