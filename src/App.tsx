import { AppProvider } from "./Context";
import { MainPage } from "./Theme";

const App = () => (
  <AppProvider>
    <MainPage />
  </AppProvider>
);

export default App;
