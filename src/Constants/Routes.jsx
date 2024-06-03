import React, {Suspense} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {appLinks} from "./links";
import Navbar from "./components/NavBar/navbar";

const Intro = React.lazy(() => import("./components/Intro/intro"));
const Skills = React.lazy(() => import("./components/Skills/skills"));
const Team = React.lazy(() => import("./components/Team/team"));
const Contacts = React.lazy(() => import("./components/Contacts/contacts"));

function BaseRouter() {
  return (
    <>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Navbar />
          <Routes>
            <Route exact path={appLinks?.Intro} element={<Intro/>}/>
            <Route path={appLinks?.Skills} element={<Skills/>}/>
            <Route path={appLinks?.Team} element={<Team/>}/>
            <Route path={appLinks?.Contacts} element={<Contacts/>}/>
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default BaseRouter;