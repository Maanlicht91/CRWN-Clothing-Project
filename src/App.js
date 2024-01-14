import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./routes/home/home.component";

const Navigation = () => {
  return (
    <div>
      <div>
        <h1>I am the navigation</h1>
      </div>
      <Outlet/>
    </div>
  );
};
const Shop = () => {
  return <h1>I am the shop page</h1>;
};
const App = () => {
  //! to render homepage with navi we need to use "index"
  return (
    <Routes>
      <Route path="/" element={<Navigation/>}>
        <Route index element={<Home />} /> 
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
