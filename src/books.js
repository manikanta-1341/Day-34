import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, Outlet, useLocation } from "react-router-dom";

export default function ListBooks() {
  const nav = useNavigate();
  const location = useLocation();
  const [state, setState] = useState([]);
  const [display, setDisplay] = useState(false);
  useEffect(() => {
    async function fetch_api() {
      let api = await axios.get(
        "https://62136dcaf43692c9c6044e88.mockapi.io/books"
      );
      await setState(api.data);
    }
    fetch_api();
    // dateChange();
  }, []);
  function dateChange() {
    state.map((e) => (e.createdAt = new Date(e.createdAt)));
  }
  
  return (
    <>
      <div className="table_data">
        {
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Author</th>
                <th>Subject</th>
                <th>Published On</th>
                <th>Actions</th>
              </tr>
            </thead>
            {state.map((e) => (
              <tbody key={e.id}>
                <tr>
                  <td>{e.id}</td>
                  <td>{e.name}</td>
                  <td>{e.author}</td>
                  <td>{e.subject}</td>
                  <td>{e.createdAt}</td>
                  <td>
                    &nbsp;
                    <button
                      onClick={() => nav(`/edit-book/${e.id}`, { state: e })}
                    >
                      Edit
                    </button>{" "}
                    &nbsp;
                    <button onClick={() => nav(`/delete-book/${e.id}`,{ state: e})}>Delete</button>&nbsp;
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        }
      </div>
      <div className="back_btn_div">
        <button className="back_btn" onClick={() => nav("/")}>
          Go Back
        </button>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
}
