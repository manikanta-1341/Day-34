import {useState , useEffect} from "react"
import { useParams , useNavigate} from "react-router-dom"
import axios from "axios"

export default function BookProfile () { 
    const {id} = useParams()
    const nav = useNavigate()
    const [state, setState] = useState([])
    useEffect(()=>{
    async function fetch_api() {
        let api = await axios.get(
        `https://62136dcaf43692c9c6044e88.mockapi.io/books/`
        );
        let keys=api.data.filter((e) => e.id===id)
        await setState(keys);
    }
    fetch_api();
    // dateChange();
    },[])
    return(
        <>
        <div className="profile_container">
            <div className="header">
                <h2>Profile of book</h2>
            </div>
                {state.map((e) =>(
                    <div className="body" key= {e.id}>
                        <label>Name:</label>
                        <span>{e.name}</span><br/><br/>
                        <label>Author:</label>
                        <span>{e.author}</span><br/><br/>
                        <label>Subject:</label>
                        <span>{e.subject}</span><br/><br/>
                        <label>Published On:</label>
                        <span>{e.createdAt}</span><br/>
                    </div>
                ))}
                <div className="footer">
                    <button className="back_btn" onClick={() =>nav("/books")}>Go Back</button>
                </div>
        </div>
        </>
    );
}