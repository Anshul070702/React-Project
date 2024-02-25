import React from "react";
import "./App.css";
import {
  Footer,
  Blog,
  Possibility,
  Features,
  Header,
  WhatGPT,
} from "./containers/Index2";
import { CTA, Brand, NavBar } from "./components/Index1";
const App = () => {
  return (
    <div className="App">
      <div className="gradient_bg">
        <NavBar />
        <Header />
      </div>
      <Brand />
      <WhatGPT />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
