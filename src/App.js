import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import { Alert } from "react-bootstrap";

function App() {
  return (
    <div className="container">
      <Header />
      <Alert variant="success">
        <Alert.Heading>
          Hi there!👋 I appreciate you for checking this out
        </Alert.Heading>
        <p>
          This is built using JavaScript to be precise React.js and
          React-Bootstrap as the CSS library.
        </p>
      </Alert>
      <Footer />
    </div>
  );
}

export default App;
