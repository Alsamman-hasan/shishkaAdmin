import { FC } from "react";
import "./app.scss";
import { PersistGate } from "redux-persist/integration/react";
import { persist } from "./redux/store";
import Snackbars from "./components/Snackbars/Snackbars";
import AppRouter from "AppRoutes";

const App: FC = () => {
  return (
    <div className="app">
      <PersistGate loading={null} persistor={persist}>
        <div className="app__snackbars-container">
          <AppRouter />
          <Snackbars />
        </div>
      </PersistGate>
    </div>
  );
};
export default App;
