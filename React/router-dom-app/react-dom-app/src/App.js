import { Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Contactlist from "./components/contactlist.jsx";
import AddContact from "./components/addcontact.jsx";
import EditContact from "./components/editcontact.jsx";
import ViewContact from "./components/viewcontact.jsx";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element ={<Contactlist />} />
        <Route path="/add" element ={<AddContact />} />
        <Route path="/edit/:id" element ={<EditContact />} />
        <Route path="/view/:id" element ={<ViewContact />} />
      </Routes>
    </div>
  );
}

export default App;
