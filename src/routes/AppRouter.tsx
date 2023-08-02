import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { PageLayout } from "../layouts/PageLayout";


export const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<PageLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
