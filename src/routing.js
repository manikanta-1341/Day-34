import React from "react"
import { BrowserRouter, Routes, Route} from "react-router-dom"
import App from "./App"
import ListBooks from "./books"
import CreateBook from "./create"
import EditBook from "./edit_book"
import DeleteBook from "./delete"
import BookProfile from "./book_profile"
export default function Routing () {
    return(
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}></Route>
                <Route path="/books" element={<ListBooks/>}></Route>
                <Route path="/book/:id" element={<BookProfile/>}></Route>
                <Route path ="/create-book" element={<CreateBook/>}></Route>
                <Route path ="/edit-book/:id" element={<EditBook/>}></Route>
                <Route path ="/delete-book/:id" element={<DeleteBook/>}></Route>

            </Routes>
        </BrowserRouter>
        </>
    );
}