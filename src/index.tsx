import { createRoot } from "react-dom/client";
import "./shared/model/static/scss/globalStyles.scss";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import App from "./App";

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
);
