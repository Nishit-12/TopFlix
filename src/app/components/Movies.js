import React from 'react';
import styles from "@/app/styles/common.module.css"
import Image from "next/image";
import Link from "next/link";

const Movies = (curElement) => {

    const {id, type, title, synopsis} = curElement.jawSummary;

    return (
        <>
            <div className={styles.card}>

                <div className={styles.card_image}>
                    <Image src={curElement.jawSummary.backgroundImage.url} alt={"MovieImage"} width={260} height={200}/>
                </div>

                <div className={styles.card_data}>

                    <h2>{title.substring(0,18)}</h2>
                    <p>
                        {`${synopsis.substring(0,66)}...`}
                    </p>

                    <Link href={`/movies/${id}`}>
                        <button>Read More</button>
                    </Link>

                </div>

            </div>
        </>
    );
};

export default Movies;