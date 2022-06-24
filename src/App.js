import { Route, Routes } from "react-router";
import Home from "./views/Home";
import Series from "./views/Series";

const App = () => {
  return (
    <div className="box-border my-0 mx-0 py-0 px-0 bg-[#313131] w-full h-full">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/series" element={<Series/>} />
      </Routes>
    </div>
  );
}

export default App;
