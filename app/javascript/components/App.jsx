import React from "react";

const App = () => {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    fetch("/api/v1/users")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div>
      {/* TODO: React router would go here to various internal SPAs*/}
      <h1>Users</h1>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr key={user.email}>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
