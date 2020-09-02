import React from 'react';
import {useState, useEffect} from 'react';
import index from './index.css';

//functional component
const App = () => {

 
	const[updates, setNewupdates] = useState([])
	//one more state
	const[search, setSearchQuery] = useState('India');
	//one more state
	const[url, setUrl] = useState('https://hn.algolia.com/api/v1/search?query=react');

	const findnews = () => {
		//find new based on react
		fetch(`https://hn.algolia.com/api/v1/search?query=${search}`)
		//fetch('https://hn.algolia.com/api/v1/search?query=react')
		//convert into json
		.then(result => result.json())
		//setNewupdates pass
	//then(data=>console.log(data))
		.then(data=>setNewupdates(data.hits))
		.catch(err=>console.log(err));
	}

	useEffect(()=>{
		findnews()
	},[url])

	const makeChange =(e) => {
		//based on user input
		setSearchQuery(e.target.value)
	}

	const handleinput= (e) => {
		//prevent page behaviour
		e.preventDefault()
		setUrl(`https://hn.algolia.com/api/v1/search?query=${search}`)
	}



	return(
		<div>
			<h1> News App Project </h1>	
			<form onSubmit={handleinput}>
				<input type="text" value={search} onChange={makeChange}/>
				<button class="example_a"> Search news here </button>

			</form>
			{updates.map((n,i) => (
				<div className="content">
				<p key={i}> {n.title}</p>
				</div>
			))}

		</div>
		)

}
export default App;
