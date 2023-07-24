import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Details } from "../pages/Details";
import { CreateDish } from "../pages/CreateDish";

export function AppRoutes() {
    return (
        <Routes>\
            <Route path="/" element={<Home />} />
            <Route path="/:id" element={<Details />} />
            <Route path="/create" element={<CreateDish />} />
        </Routes>
    );
};