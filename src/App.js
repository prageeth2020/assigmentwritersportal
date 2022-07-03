
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./ui/login";
import Main from "./ui/main";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main/>}/>
            <Route path="/login" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
