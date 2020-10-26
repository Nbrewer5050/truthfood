import React from "react";
import "./App.css";
import NavBar from "./Components/navBar/navBar";
import Footer from './Components/footer/footer';
import "bootstrap/dist/css/bootstrap.min.css";
import Catalog from './Components/catalog/catalog';
import Todo from "./todo.jsx"




function App() {
  return (

    <div className="App">

      <NavBar></NavBar>

      <img alt="food" src="https://pixabay.com/get/57e9d6414e54aa14f6d1867dda353678153cdce05057784e_1920.jpg"></img>

      <div className="container">
        <Catalog></Catalog>

        <Todo></Todo>
      </div>
    

      <Footer></Footer>
    </div>

  );
}

export default App;


