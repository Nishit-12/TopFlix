import React from 'react';
import Link from "next/link";
import styles from "@/app/styles/common.module.css"
import Movies from "@/app/components/Movies";

const Movie = async () => {

    const url = process.env.RAPID_KEY;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '1e158c542bmsha5016a6481cf8fap1c358fjsn004c082f2182',
            'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
        }
    };

    const res = await fetch(url, options);
    const data = await res.json();

    const main_data = data.titles;
    console.log(data)


    return (
        <>
            <section className={styles.movieSection}>
                <div className={styles.container}>
                    <h1>Movies & Series</h1>
                    <div className={styles.card_section}>
                    {
                        main_data.map((curElement) => {

                            return <Movies key={curElement.id} {...curElement}/>

                        })
                    }
                    </div>
                </div>

            </section>
        </>
    );
};

export default Movie;