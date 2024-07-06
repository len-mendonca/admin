import "./App.css";

import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Databases from "./Databases/Databases";
import Zilla from "./Databases/Zilla/Zilla";
import ZillaData from "./Databases/Zilla/ZillaData/ZillaData";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/database" element={<Databases />} />
          <Route path="/database/zilla" element={<Zilla />} />
          <Route path="/database/zilla/udupi" element={<ZillaData />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
