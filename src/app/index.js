import React from "react";
import { render } from "react-dom";

import { Home } from "./components/Home";
class App extends React.Component {
	render() {
		return (

			<div>
			   <h1>Hello</h1>
			   <Home/>
			</div>

		 );
	}
}

render(<App />, window.document.getElementById("app"));