import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "../common/NavBar";
import Social from '../social/Social'
import DynamicForm from '../dynamic-form/DynamicForm'
import Checkbox from '../Lecture-36/checkbox'
import ProductList from '../Lecture-36/productList'
import TODO from '../Lecture-37/todo'

function Routers() {
  return (
    <Router>
      <header>
        <NavBar />
        <Routes>
          <Route path="/social" element={<Social />} />
          <Route path="/dynamic-form" element={<DynamicForm />} />
          <Route path="/checkbox" element={<Checkbox />} />
          <Route path="/productList" element={<ProductList />} />
          <Route path="/todo" element={<TODO />} />
        </Routes>
      </header>
    </Router>
  );
}
export default Routers;
