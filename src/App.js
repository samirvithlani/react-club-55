import logo from "./logo.svg";
import "./App.css";
import { Users } from "./components/Users";
import Footer from "./Footer";
import { Header } from "./Header";
import { Navbar } from "./components/Navbar";
import {  Route, Routes } from 'react-router-dom';

import { Employee } from "./components/employee/Employee";
import { AboutUs } from "./components/employee/AboutUs";
import { EmployeeDetail } from "./components/employee/EmployeeDetail";
import { ContactUs } from "./components/employee/ContactUs";
import { DashBoard } from "./components/employee/DashBoard";
import { Error404 } from "./components/Error404";
import { StoreData } from "./components/employee/StoreData";
import ProtectedRoutes from "./components/ProtectedRoutes";
import { UserRegistration } from "./forms/UserRegistration";
import { StudentRegistration } from "./forms/StudentRegistration";
import { ApiDemo1 } from "./api/ApiDemo1";
import { Students } from "./context/Students";
import { AppContext } from "./context/context";
import { Developers } from "./components/dev/Developers";
import { DynamicComponent } from "./components/DynamicComponent";
import { EmployeeRegistrationForm } from "./forms/EmployeeRegistrationForm";
import { ProductRegistation } from "./forms/ProductRegistation";
import { ApiDemo2 } from "./api/ApiDemo2";
import { UpdateUser } from "./api/UpdateUser";
import { GetQueryDemo } from "./query/GetQueryDemo";
import { DynamicForm } from "./forms/DynamicForm";
import usePrivateRoute from "./components/PrivateRoutes";
import { APiDemo3 } from "./api/APiDemo3";
import { UserUpdate } from "./api/UserUpdate";
import { UserServiceComp } from "./components/UserServiceComp";
import { AddUserService } from "./query/AddUserService";


function App() {
  var a = 10;
  var sName = "Sachin";
  var salary = 12345.67;
  var isIndian = true;

  var user = {
    name: "raj",
    email: "raj@gmail.com",
    mobile: "1234567890",
  };

  var students = [
    {
      id: 1,
      name: "Raj",
      email: "raj@gmail.com",
    },
    {
      id: 2,
      name: "jay",
      email: "jay@gmail.com",
    },
    {
      id: 3,
      name: "Amit",
      email: "Amit@gmail.com",
    },
  ];

  //jsx
  const isAuthenticated = true;
  const PrivateRoute = usePrivateRoute(isAuthenticated, "/store"); 
  return (
    <>
      <div className="App">
        <Navbar />
        {/* <UserServiceComp/> */}
        <AddUserService/>
        {/* <DynamicForm/> */}
        
        {/* <DynamicComponent/> */}
        {/* <EmployeeRegistrationForm/> */}
        {/* <ProductRegistation/> */}
        <AppContext.Provider value={{ user }}>
          
          <Routes>
            {/* <PrivateRoute path ="/apidemo2" element={<ApiDemo2/>}></PrivateRoute> */}
            <Route element={<ProtectedRoutes />}>
              <Route path="/" element={<DashBoard />}></Route>
              <Route path="/employee" element={<Employee />}></Route>
              <Route path="/aboutus" element={<AboutUs />}></Route>
            </Route>
            <Route
              path="/employee/employeeDetail/:id"
              element={<EmployeeDetail />}
            ></Route>
            <Route path="/contactus" element={<ContactUs />}></Route>
            {/* <Route path = "/*" element={<h1>404</h1>}></Route> */}
            <Route path="/*" element={<Error404 />}></Route>
            <Route path="/store" element={<StoreData />}></Route>
            <Route path="/userreg" element={<UserRegistration />}></Route>
            <Route path="/stureg" element={<StudentRegistration />}></Route>
            {/* <Route element={<Fileter/>}> */}
              <Route path="/apidemo1" element={<ApiDemo1 />}></Route>
              <Route path="/apidemo3" element={<APiDemo3 />}></Route>
            {/* </Route> */}
            
            
            {/* <Route path="/apidemo2" element={<ApiDemo2 />}></Route> */}
            
            <Route path="/students" element={<Students />}></Route>
            <Route path="/dev" element={<Developers/>}></Route>
            <Route path="/updateuser/:id" element={<UpdateUser/>}></Route>
            <Route path="/userupdate/:id" element={<UserUpdate/>}></Route>
            <Route path="/getquery" element={<GetQueryDemo/>}></Route>
          </Routes>
          
        </AppContext.Provider>
        {/* <Header/>
        <Users/> */}
        {/* <h1>HEllo</h1>
        <h1>{sName}</h1>
        <h2>{salary}</h2>
        <h3>{isIndian ? "Indian" : "Not Indian"}</h3>
        <h1>Name = {user.name}</h1>
        <h2>email : {user.email}</h2>
        <h3>Mobile :-{user.mobile}</h3>
        <div className="App">
          <h1>Student Details</h1>
          <table border="1">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {students.map((s) => {
                return (
                  <tr>
                    <td>{s.id}</td>
                    <td>{s.name}</td>
                    <td>{s.email}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <Footer/> */}
        <Footer />
      </div>
    </>
  );
}

export default App;
