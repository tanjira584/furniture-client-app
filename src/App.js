import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import PageNotFound from "./components/Pages/404/404";
import AddProduct from "./components/Pages/AddIProduct/AddProduct";
import Login from "./components/Pages/Auth/Login";
import RequireAuth from "./components/Pages/Auth/RequireAuth";
import Signup from "./components/Pages/Auth/Signup";
import Home from "./components/Pages/Home/Home";
import Inventory from "./components/Pages/Inventory/Inventory";
import ProductDetails from "./components/Pages/ProductDetails/ProductDetails";

function App() {
    return (
        <div className="">
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route
                    path="/inventory"
                    element={
                        <RequireAuth>
                            <Inventory></Inventory>
                        </RequireAuth>
                    }
                ></Route>
                <Route
                    path="/product/:id"
                    element={
                        <RequireAuth>
                            <ProductDetails></ProductDetails>
                        </RequireAuth>
                    }
                ></Route>
                <Route
                    path="/add-item"
                    element={
                        <RequireAuth>
                            <AddProduct></AddProduct>
                        </RequireAuth>
                    }
                ></Route>
                <Route path="/login" element={<Login></Login>}></Route>
                <Route path="/signup" element={<Signup></Signup>}></Route>
                <Route
                    path="/*"
                    element={<PageNotFound></PageNotFound>}
                ></Route>
            </Routes>
            <ToastContainer />
        </div>
    );
}

export default App;
