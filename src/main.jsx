import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./styles/tailwind.css";
import "./index.css";

import Home from "./pages/Home";
import SingleNews from "./pages/SingleNews";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/news/:slug" element={<SingleNews />} />
            </Routes>
        </HashRouter>
    </StrictMode>,
);
