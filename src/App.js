import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollTop from "./components/layout/ScrollTop";

import HomePage from "./components/home/HomePage";

import HotelPage from "./components/accommodations/hotels/HotelPage";
import GuesthousePage from "./components/accommodations/guesthouse/GuesthousePage";
import BBPage from "./components/accommodations/bb/BBPage";
import DetailPage from "./components/accommodations/details/DetailPage";

import SearchHome from "./components/search/SearchHome";
import BookPage from "./components/accommodations/details/BookPage";
import LoginPage from "./components/login/LoginPage";
import ContactPage from "./components/contact/ContactPage";

import DashboardPage from "./components/dashboard/DashboardPage";
import BookingEnquiryPage from "./components/dashboard/posts/BookingEnquiryPage";
import ContactMessagePage from "./components/dashboard/posts/ContactMessagesPage";
import AddPost from "./components/dashboard/posts/AddPost";

import Nav from "./components/layout/Nav";
import { AuthProvider } from "./context/AuthContext"; //imports auth, sucess login

import "./sass/style.scss";

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Nav />
          <ScrollTop>
            <div className="container">
              <Switch>
                <Route exact path="/">
                  <HomePage />
                </Route>
                <Route path="/login">
                  <LoginPage />
                </Route>
                <Route path="/contact">
                  <ContactPage />
                </Route>
                <Route path="/search">
                  <SearchHome />
                </Route>

                <Route path="/detail/:id">
                  <DetailPage />
                </Route>
                <Route path="/book/:id">
                  <BookPage />
                </Route>
                <Route path="/hotels">
                  <HotelPage />
                </Route>
                <Route path="/guesthouse">
                  <GuesthousePage />
                </Route>
                <Route path="/bb">
                  <BBPage />
                </Route>

                <Route path="/dashboard" exact>
                  <DashboardPage />
                </Route>
                <Route path="/dashboard/posts/bookingenquiry" exact>
                  <BookingEnquiryPage />
                </Route>
                <Route path="/dashboard/posts/contactmessage" exact>
                  <ContactMessagePage />
                </Route>
                <Route path="/dashboard/posts/add">
                  <AddPost />
                </Route>
              </Switch>
            </div>
          </ScrollTop>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
