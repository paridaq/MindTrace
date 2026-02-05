import Home from "./homepage/Home"
import Nav from "./navbar/Nav"
import People from "./people/People"
import { BrowserRouter as Router, Routes, Route } from "react-router"

function App() {


  return (
    <>
      {/* <h1>what s app niga</h1>
      <Nav />
      <Home /> */}
      <Routes>
        <Route path="/people" element={<People />} />
      </Routes>
    </>
  )
}

export default App
