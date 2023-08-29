import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Details } from "../pages/Details";
import { CreateDish } from "../pages/CreateDish";
import { SignUp } from "../pages/SignUp";
import { MyFavorites } from "../pages/MyFavorites";
import { EditDish } from "../pages/EditDish";
import { Order } from "../pages/Oder";

export function AppRoutes() {
    return (
        <Routes>\
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />}/>

            <Route path="/dish/:id" element={<Details />} />
            <Route path="/create" element={<CreateDish />} />
            <Route path="/dish/edit/:id" element={<EditDish />} />

            <Route path="/favorite" element={<MyFavorites />} />
            <Route path="/order" element={<Order />} />

        </Routes>
    );
};