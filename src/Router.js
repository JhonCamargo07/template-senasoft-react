//src > Router.js
import Error404 from './pages/Error404';
import Dashboard from './pages/Dashboard';
import Usuarios from './pages/Usuarios';
import Inicio from './pages/Inicio';
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio />}></Route>
          <Route path="/Users" element={<Usuarios />}></Route>
          <Route path="*" element={<Error404 />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default Router;