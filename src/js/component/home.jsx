import React from "react";
import NavBar from "./NavBar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";

const Home = () => {
	return (
		<div>
			<NavBar />
			<div class="container fluid">
				<Jumbotron />
				<Card />
			</div>
		</div>
	);
};

export default Home;
