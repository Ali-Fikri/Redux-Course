import { useState } from "react";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Form from "./components/Form";

import "./app.scss";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isChanged, setIsChanged] = useState(false);

  const addUser = (e) => {
    e.preventDefault();
    setIsChanged(true);
  };

  return (
    <>
      <Header name={name} isChanged={isChanged} />
      <main>
        <Sidebar name={name} isChanged={isChanged} />
        <Form setName={setName} setEmail={setEmail} addUser={addUser} />
      </main>
    </>
  );
}

export default App;
