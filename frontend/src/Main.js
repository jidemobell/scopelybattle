import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App"
import Login from "./Login";

function Main() {
    return (
        <div>
            <BrowserRouter>
                    <Routes>
                        <Route path="/login" element={<Login />} />
                        <Route path="/landing" element={<App />} />
                    </Routes>
            </BrowserRouter>
        </div>
    );
}

export default Main;
