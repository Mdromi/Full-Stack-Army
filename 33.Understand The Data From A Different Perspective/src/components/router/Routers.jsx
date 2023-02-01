import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "../common/NavBar";
import Social from '../social/Social'
import DynamicForm from '../dynamic-form/DynamicForm'
import Checkbox from '../Lecture-36/checkbox'
import ProductList from '../Lecture-36/productList'
import TODO from '../Lecture-37/todo'
import Calculator from '../Lecture-38-39/calculator' 
import ContactForm from '../Lecture-40/ContactForm'
import UseEffect from '../Lecture-41/UseEffect'

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
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/contactForm" element={<ContactForm />} />
          <Route path="/useEffect" element={<UseEffect />} />
        </Routes>
      </header>
    </Router>
  );
}
export default Routers;
