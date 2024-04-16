import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Containers/Dashboard";
import Trello from "./Containers/Trello";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/trello" element={<Trello />} /> 
        <Route path="/*" element={<Dashboard />} /> 
      </Routes>
    </BrowserRouter>
  )
}

export default App
