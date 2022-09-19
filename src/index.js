import React from "react";
import { createRoot } from "react-dom/client";

import "bootstrap/dist/css/bootstrap.css";
import CountersList from "./components/countersList";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<CountersList />);
