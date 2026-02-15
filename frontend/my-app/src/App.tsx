
import { Routes, Route } from "react-router"
import Home from "./homepage/Home"
import Nav from "./navbar/Nav"
import People from "./people/People"
import Books from "./books/Books"
import Questions from "./questionpage/Questions"
import Register from "./register/Register"
import Todo from "./todo/Todo"
import Dashboard from "./dashboard/Dashboard"

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
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  )
}

export default App
