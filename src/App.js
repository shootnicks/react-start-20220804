import logo from './logo.svg';
import './App.css';
import Header from "./module/Header.jsx";
import Navbar from "./module/Navbar";
import Profile from "./module/Profile";

function App() {
    return (
        <div className="App">
            <Header/>
            <Navbar/>
            <Profile/>
        </div>
    );
}

export default App;
