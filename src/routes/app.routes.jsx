import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Details } from "../pages/Details";
import { CreateDish } from "../pages/CreateDish";
import { SignUp } from "../pages/SignUp";
import { MyFavorites } from "../pages/MyFavorites";

export function AppRoutes() {
    return (
        <Routes>\
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />}/>
            <Route path="/dish/:id" element={<Details />} />
            <Route path="/create" element={<CreateDish />} />
            <Route path="/favorite" element={<MyFavorites />} />
        </Routes>
    );
};