import logo from "./logo.svg";
import "./App.css";
import { useNavigate } from "react-router-dom"
function App() {
  const nav = useNavigate();
  return (
    <>
    <div className="home_page">
      <h1>Library</h1>
      <h3><button onClick={() => nav("/books")}>List Books</button></h3>
      <div className="creation">
        <button className="register" onClick={() => nav("/create-book")}>
          Register New Book
        </button>
      </div>
    </div>

    </>
  );
}

export default App;
