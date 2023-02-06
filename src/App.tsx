import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AppProvider } from "./Context";

import { MainPage, DetailPage } from "./Theme";

import "./App.scss";

function App() {
  return (
    <div className="App_container">
      <AppProvider>
        <Router>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/details/:id" element={<DetailPage />} />
          </Routes>
        </Router>
      </AppProvider>
    </div>
  );
}

export default App;
