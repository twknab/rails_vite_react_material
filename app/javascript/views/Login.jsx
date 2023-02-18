import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [data, setData] = React.useState([]);

  useEffect(() => {
    fetch("/api/v1/users")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <h1>Login</h1>
      <Link to="/register">Register</Link>
    </div>
  );
};

export default Login;
