import "./App.css";

// Import Redux Modules
import { Provider } from "react-redux";
import reduxStore from "./reduxStore";

import RootLayout from "./RootLayout";

function App() {

  return (
    <Provider store={reduxStore}>
      <RootLayout />
    </Provider>
  );
}

export default App;
