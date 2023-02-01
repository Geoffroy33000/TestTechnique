import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AppProvider } from "./Context";

import { MainPage } from "./Theme";

import "./App.scss";

const App = () => (
  <div className="App_container">
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </Router>
    </AppProvider>
  </div>
);

export default App;
