import { Routes, Route } from "react-router-dom";

import { HomePage } from "../pages/Home";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/store" element={<div>Loja</div>} />
    <Route path="/mac" element={<div>Mac</div>} />
    <Route path="/ipad" element={<div>iPad</div>} />
    <Route path="/iphone" element={<div>iPhone</div>} />
    <Route path="/watch" element={<div>Watch</div>} />
    <Route path="/airpods" element={<div>AirPods</div>} />
    <Route path="/tv-home" element={<div>TV e Casa</div>} />
    <Route path="/entertainment" element={<div>Entretenimento</div>} />
    <Route path="/accessories" element={<div>Acessórios</div>} />
    <Route path="/support" element={<div>Suporte</div>} />
    <Route path="/search" element={<div>Busca</div>} />
    <Route path="/shop/bag" element={<div>Sacola</div>} />
    <Route path="*" element={<div>404</div>} />
  </Routes>
);

export default AppRoutes;
