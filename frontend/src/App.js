
import './App.css';

import React from "react";
import { Header } from './Myconponent/Header';
import { Profile } from './Myconponent/Profile';
import { Footer } from './Myconponent/Footer';
import Profile_view from './Myconponent/Profile_view';

function App() {
  return (
    <>
      <Header />
      <Profile />
      <Footer />
      <Profile_view/>
    </>
  );
}
export default App;
