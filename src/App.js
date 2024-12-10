import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ComponentRoutes from "./components/ComponentRoutes";
import "./App.css";
function App() {
  return (
    <>
      <BrowserRouter>
        <div className="app_container">
          <Header />
          <div className="main_content">
            <ComponentRoutes />
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
