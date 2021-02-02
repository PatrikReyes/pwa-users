import React, { useEffect, useState } from "react";
import { Table, Alert } from "react-bootstrap";
export default function Users() {
  const [state, setState] = useState([]);
  const [online, setOnline] = useState(true);
  const url = "http://jsonplaceholder.typicode.com/users";
  useEffect(() => {
    fetch(url)
      .then((data) => {
        data.json().then((res) => {
          setState(res);
          localStorage.setItem("users", JSON.stringify(res));
        });
        setOnline(true);
      })
      .catch((e) => {
        const usersLocal = localStorage.getItem("users");
        setState(JSON.parse(usersLocal));
        setOnline(false);
      });
  }, []);

  return (
    <>
      {!online ? <Alert variant="warning">Estas en modo offline</Alert> : null}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>User Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {state.map((item, i) => (
            <tr key={i}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.username}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
