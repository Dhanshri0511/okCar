import AdminBuyers from "./components/AdminBuyers/AdminBuyers";
import AdminRequest from "./components/AdminRequest/AdminRequest";
import { Routes, Route } from "react-router-dom";
import DealersModel from "./components/Dealers/DealersModel";

//Admin🤴
import AdminPage from "./components/Admin/AdminPage";
import DealerManegment from "./components/Admin/DealerManegment";
import Notification from "./components/Admin/Notification";
import UserRequest from "./components/Admin/UserRequest";

import SignIn from "./components/SignIn/SignIn.jsx";
import Register from "./components/SignUp/SignUp.jsx";

import NotFound from "./components/NotFound/NotFound.jsx";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import AddCar from "./components/AddCar/AddCar";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import CarCard from "./components/CarDetailsCard/CarDetails";

import RequireAuth from "./features/RequireAuth";
import AppLayout from "./components/appLayout/AppLayout";
import { OnlyAdmin } from "./config/role";

import CantAccess from "./components/cantAccess/CantAccess";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<Register />} />

        <Route
          element={<RequireAuth allowedRoles={[...Object.values(OnlyAdmin)]} />}
        >
          <Route element={<AdminPage />}>
            <Route path="/dealersmanegment" element={<DealerManegment />} />
            <Route path="/userrequest" element={<UserRequest />} />
            <Route path="/notification" element={<Notification />} />
          </Route>
        </Route>
        <Route element={<AppLayout />}>
          <Route path="/adminrequest" element={<AdminRequest />} />

          <Route path="/" element={<Home />} />
          <Route path="/adminbuyers" element={<AdminBuyers />} />
          <Route path="/dealer" element={<DealersModel />} />

          <Route path="/addcar" element={<AddCar />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
          <Route path="/cardetails" element={<CarCard />} />
          <Route path="/access" element={<CantAccess />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
