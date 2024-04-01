import "./App.css";
import AppointmentList from "./components/Doctors/AppointmentList";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <AppointmentList />
    </div>
  );
}

export default App;
