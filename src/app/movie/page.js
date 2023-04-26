import React from 'react'
import MovieCard from '../components/MovieCard';
import styles from "@/app/styles/common.module.css";

const movie = async () => {

	await new Promise((resolve) => setTimeout(resolve, 2000));


  const URL = process.env.RAPID_KEY;
const options = {
	method: 'GET',
	headers: {
		'content-type': 'application/octet-stream',
		'X-RapidAPI-Key': '62a56b975amsh9b2aa794a6756d7p1da61djsnfabd05f3bd58',
		'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
	}
};

const res = await fetch(URL, options);
const data = await res.json();
const main_data = data.titles;
// console.log(data);
  return (
    <>
	<section className={styles.movieSection}>
		<div className={styles.container}>
		<h1>Series & Movie </h1>
		<div className={styles.card_section}>
	{
		main_data.map((curElem) => {
			return <MovieCard key={curElem.id} {...curElem}/>
	})
}
</div>
	</div>
	</section>
	</>
  )
}

export default movie