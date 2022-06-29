import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { AppRoutes } from "./router";
import "./style/global.scss";
const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<>
		<BrowserRouter>
			<React.StrictMode>
				<Toaster />
				<AppRoutes />
			</React.StrictMode>
		</BrowserRouter>
	</>
);

reportWebVitals();
