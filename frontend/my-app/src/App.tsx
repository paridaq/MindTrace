
import Home from "./homepage/Home"
import Nav from "./navbar/Nav"
import People from "./people/People"
import { Routes, Route } from "react-router"
import Questions from "./questionpage/Questions"

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/people" element={<People />} />
        <Route path="/questions" element={<Questions />} />
      </Routes>
    </>
  )
}

export default App
