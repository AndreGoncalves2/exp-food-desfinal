import { BrowserRouter } from "react-router-dom";

import { AuthRoutes } from "./auth.routes";
import { UserRoutes } from "./user.routes";

export function Routes() {
    return (
        <BrowserRouter>
            <UserRoutes />
        </BrowserRouter>
    );
}