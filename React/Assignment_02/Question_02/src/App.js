import './App.css';
import React, { useState } from "react";
import Signin from "./components/Signin";
import Signup from './components/Signup';

function App() {
  const [page, setPage] = useState(false)
  function handlePage(e) {
    e.preventDefault();
    setPage(!page)
  }
  console.log(page);

  return (
    <div className="app">
      {
        page ? <Signup handlePage={handlePage} /> :
          <Signin handlePage={handlePage} />
      }
    </div>
  );
}
export default App;
