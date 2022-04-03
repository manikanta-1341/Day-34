import { useLocation, useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
export default function DeleteBook(){
    const location = useLocation()
    const nav = useNavigate()
    const [id, setId] = useState(location.state.id)
    const Delete = async (id) => {
        let api = await axios.delete(
        `https://62136dcaf43692c9c6044e88.mockapi.io/books/${id}`
        );
        await nav("/books")
    };
    Delete(id)

}