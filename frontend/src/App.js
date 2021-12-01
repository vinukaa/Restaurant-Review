import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import AdminHeroIndex from "./components/Admin/Hero/AdminHeroIndex";
import Products from "./components/Products";
import { foodData } from "./pages/OrderFoodsData";
import { productAdminData } from "./components/Admin/Products/AdminData";
import ViewRestaurant from "./components/Products/ViewRestaurant";
import { GlobalStyle } from "./globalStyles";
import Form from "./pages/Form";
import LoginForm from "./pages/LoginForm";
import Restaurant from "./pages/Restaurant";
import AdminProductsIndex from "./components/Admin/Products/AdminProductsIndex";
import TravelHero from "./pages/TravelHero";
import TravelCard from "./pages/TravelCard";
import DrinkCard from "./pages/DrinkCard";
import DrinkHero from "./pages/DrinkHero";
import Foods from "./pages/OrderFoods";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart"; 

function App() {
  return (
    <Router>
      <Switch>
      <Route exact path="/admin">
        <GlobalStyle />
        <AdminHeroIndex />
        <AdminProductsIndex heading="My Restaurants" data={productAdminData} />
      </Route>


        <Route exact path="/">
          <Home/>
        </Route>

        <Route path="/cart"> 
          <Cart />
        </Route>
 

        <Route path="/view-restaurant">
          <ViewRestaurant />
        </Route>

        //register
        <Route path="/form-signup">
          <Form />
        </Route>

        //login
        <Route path="/login">
          <LoginForm />
        </Route>

        <Route path="/travel">
          <TravelHero />
          <TravelCard />
          <Footer />
        </Route>

        <Route path="/drinks">
          <DrinkHero />
          <DrinkCard />
          <Footer />
        </Route>

        <Route path="/add-res">
          <Restaurant />
        </Route>

        <Route path="/order-food">
        {/* <GlobalStyle /> */}
        <Foods heading="Top Rated Foods" data={foodData} />
        </Route>
        
      </Switch>
    </Router>
  );
}

export default App;
