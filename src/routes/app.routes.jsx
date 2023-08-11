import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Details } from "../pages/Details";
import { CreateDish } from "../pages/CreateDish";
import { SignUp } from "../pages/SignUp";

export function AppRoutes() {
    return (
        <Routes>\
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />}/>
            <Route path="/:id" element={<Details />} />
            <Route path="/create" element={<CreateDish />} />
        </Routes>
    );
};