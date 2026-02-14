
import Home from "./homepage/Home"
import Nav from "./navbar/Nav"
import People from "./people/People"
import Books from "./books/Books"
import { Routes, Route } from "react-router"
import Questions from "./questionpage/Questions"
import Register from "./register/Register"
import Todo from "./todo/Todo"

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/people" element={<People />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/books" element={<Books />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </>
  )
}

export default App
