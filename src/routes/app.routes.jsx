import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Details } from "../pages/Details";
import { DishEdit } from "../pages/DishEdit";


export function AppRoutes() {
    return (
        <Routes>\
            <Route path="/" element={<Home />} />
            <Route path="/:id" element={<Details />} />
            <Route path="/edit/:id" element={<DishEdit />} />
        </Routes>
    );
};