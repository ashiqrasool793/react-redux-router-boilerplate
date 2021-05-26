import React from "react";
import "./App.css";
import Login from "./pages/login";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import DragDrop from "./pages/dragdrop";
import FaceDetection from "./pages/faceDetection";
import Accordion from "./pages/Accordion";
import MoreTabFull from "./pages/MoreTabFull";
import MoreTabNoNav from "./pages/MoreTabNoNav";
import login from "./pages/login";
import Support from "./pages/Support";
import ScrollToTop from "./util/ScrollToTop";
import Suggestion from "./pages/Suggestion";
import Scheduler from "./pages/Scheduler";
import QRScanner from "./pages/QRScanner";
import Dashboard from "./pages/dashboard";

function App() {
  return (
    <Router>
      <ScrollToTop>
        <Route exact path="/" component={login} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/dragdrop" component={DragDrop} />
        <Route exact path="/face" component={FaceDetection} />
        <Route exact path="/moretab" component={Accordion} />
        <Route exact path="/moretabfull" component={MoreTabNoNav} />
        <Route exact path="/support" component={Support} />
        <Route exact path="/suggest" component={Suggestion} />
        <Route exact path="/scheduler" component={Scheduler} />
        <Route exact path="/qrscan" component={QRScanner} />
      </ScrollToTop>
    </Router>
  );
}

export default App;
