import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";



let cardsInfo = [
		{title:'Poodle',
		 image: 'https://http2.mlstatic.com/D_NQ_NP_926795-MLM29002065272_122018-O.webp',
		 description:'Poodles are regarded as one of the most intelligent breeds in the world.', 
		 url: 'https://dogtime.com/dog-breeds/poodle#:~:text=Poodles%20are%20regarded%20as%20one,t%20physically%20and%20mentally%20stimulated.'},
		{title:'Pomeranian', 
		 image: 'https://www.purina.co.uk/sites/default/files/styles/square_medium_440x440/public/2022-07/Pomeranian1.jpg?h=60f40036&itok=o-Gng8D3',
		 description:'They are highly energetic, intelligent, and often exhibit a confident and curious.',
		 url: 'https://dogtime.com/dog-breeds/pomeranian'},
		{title:'Golden Retriever',
		 image: 'https://www.vidavetcare.com/wp-content/uploads/sites/234/2022/04/golden-retriever-dog-breed-info.jpeg',
		 description:'Golden retrievers are outgoing, playful, and gentle. They are also friendly, and intelligent.',
		 url: 'https://www.dailypaws.com/dogs-puppies/dog-breeds/golden-retriever'},
		{title:'White Husky', 
		 image: 'https://i.pinimg.com/originals/33/a0/0a/33a00a5cae0071e00c0fd32d317a3469.jpg',
		 description:'The White Husky is known for being friendly, which negates his use as a guard dog.',
		 url: 'https://www.hepper.com/white-husky/'}
        ]

//create your first component

	const Home = () => {
		return (
			<div className="container text-center">
				<Navbar/>
				<Jumbotron/>				
				<div className="row align-items">
					{
						cardsInfo.map ((value, index) => {
						return <Card title={value.title} image={value.image} description={value.description} url={value.url} key={index} />
						})
					}	
				</div>
				<Footer/>
			</div>
		);
	};

export default Home;
