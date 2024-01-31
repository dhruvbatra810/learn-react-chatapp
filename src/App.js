import { Route } from "react-router-dom";
import Home from "./pages/home"
function App() {
  return (
    <div className="App">
     <Route path="/" Component={<Home />}/>
    </div>
  );
}

export default App;
