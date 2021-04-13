import React from "react";
import "./App.css";
import Login from "./pages/login";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import DragDrop from "./pages/dragdrop";
import FaceDetection from "./pages/faceDetection";
import Accordion from "./pages/Accordion";
import MoreTabFull from "./pages/MoreTabFull";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Accordion} />
      <Route exact path="/dragdrop" component={DragDrop} />
      <Route exact path="/face" component={FaceDetection} />
      <Route exact path="/moretab" component={Accordion} />
      <Route exact path="/moretabfull" component={MoreTabFull} />
    </Router>
  );
}

export default App;
