import { createRoot } from "react-dom/client";
import App from "./App";

import "./global.css";

createRoot(document.getElementById("root")).render(<App />);

// paired -> <App></App>
// self closed ->  <App>

// camelcase => firstName
// kababcase => first-name
// snakecase => first_name
// pascalcase => FirstName
