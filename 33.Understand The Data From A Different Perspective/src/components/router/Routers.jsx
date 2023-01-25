import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "../common/NavBar";
import Social from '../social/Social'
import DynamicForm from '../dynamic-form/DynamicForm'

function Routers() {
  return (
    <Router>
      <header>
        <NavBar />
        <Routes>
          <Route path="/social" element={<Social />} />
          <Route path="/dynamic-form" element={<DynamicForm />} />
        </Routes>
      </header>
    </Router>
  );
}
export default Routers;
