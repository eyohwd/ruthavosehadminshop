import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route,  } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/Login";
import { useSelector } from "react-redux";
//import { Redirect } from "react-router-dom/cjs/react-router-dom";
import { Redirect } from "react-router-dom";
import Homes from "./pages/test/Homes";
import Homez from "./pages/test2/Homez";




function App() {
 // const admin = useSelector((state)=>state.user.currentUser)
 // const admin = false;
  const admin = JSON.parse(localStorage.getItem("user"))?.isAdmin
 // console.log(admin)

 //const admin = () =>{
 //if (JSON.parse(localStorage.getItem("user")).isAdmin){
   //   return  JSON.parse(localStorage.getItem("user")).isAdmin
  // } else {
     //   return ""
   // }
//};
console.log(admin)
  return (
      <Homez/>
    
    /*
    <Homes />
    <Router>
      <Switch>
      <Route  path ="/login" >
      <Login/> 
        </Route>
       { admin ? (<>
        <Topbar />
      <div className="container">
      
        <Sidebar />
        <Route exact path="/">
            <Home />
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/user/:userId">
            <User />
          </Route>
          <Route path="/newUser">
            <NewUser />
          </Route>
          <Route path="/products">
            <ProductList />
          </Route>
          <Route path="/product/:productId">
            <Product />
          </Route>
          <Route path="/newproduct">
            <NewProduct />
          </Route>
        
      </div>
      </>) : (<Login/>)}
      </Switch>
    </Router> */
       );
}

export default App;
