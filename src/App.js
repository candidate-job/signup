import "./App.css";
import SignUp from "./SignUp";

console.log("process", process.env.REACT_APP_BUCKET_NAME);
function App() {
  return (
    <div className="App">
      <SignUp />
    </div>
  );
}

export default App;
