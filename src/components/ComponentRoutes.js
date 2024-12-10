import { Routes, Route, Navigate } from "react-router-dom";
import AboutPage from "../Pages/Aboutpage";
import Contactpage  from "../Pages/Contactpage";
import Main from "./Main";
function ComponentRoutes(){
    return(
        <>
        <Routes>
            <Route path="/" element={<Navigate to="/main" />} />
            <Route path="/main" element={<Main />} />
            <Route path="/about" element={<AboutPage/>} />
            <Route path="/contact" element={<Contactpage/>} />
        </Routes>
        </>
    )
}

export default ComponentRoutes;