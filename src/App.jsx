import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Form from "./components/Form";

import './app.scss'

function App() {
  return (
    <>
      <Header />
      <main>
        <Sidebar />
        <Form />
      </main>
    </>
  );
}

export default App;
