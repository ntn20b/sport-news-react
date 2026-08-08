import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./styles/tailwind.css";
import "./index.css";

import Home from "./pages/Home";
import SingleNews from "./pages/SingleNews";
import BlogCategory from "./pages/BlogCategory";

// START LIBRERY FOR QUERY
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
// END LIBRERY FOR QUERY

createRoot(document.getElementById("root")).render(
    <StrictMode>
        {/* START QUERY */}
        <QueryClientProvider client={queryClient}>
            <HashRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/news/:slug" element={<SingleNews />} />
                    <Route path="/category/:slug" element={<BlogCategory />} />
                </Routes>
            </HashRouter>
        </QueryClientProvider>
        {/* END QUERY */}
    </StrictMode>,
);
