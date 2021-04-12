import React from "react";
import "./App.css";
import Login from "./pages/login";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import DragDrop from "./pages/dragdrop";
import FaceDetection from "./pages/faceDetection";
import Accordion from "./pages/Accordion";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Accordion} />
      <Route exact path="/dragdrop" component={DragDrop} />
      <Route exact path="/face" component={FaceDetection} />
      <Route exact path="/accordion" component={Accordion} />
    </Router>
  );
}

export default App;
