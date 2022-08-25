import logo from "./logo.svg";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceFrownOpen } from "@fortawesome/free-regular-svg-icons";

function App() {
    return (
        <div className="">
            <h2 className="text-center text-danger">
                Hello React! You are awesome!
            </h2>
            <FontAwesomeIcon icon={faFaceFrownOpen}></FontAwesomeIcon>
        </div>
    );
}

export default App;
