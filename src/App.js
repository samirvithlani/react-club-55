import logo from "./logo.svg";
import "./App.css";
import { Users } from "./components/Users";
import Footer from "./Footer";
import { Header } from "./Header";

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
  return (
    <>
      <div className="App">
        <Header/>
        <Users/>
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
        <Footer/>
      </div>
    </>
  );
}

export default App;
