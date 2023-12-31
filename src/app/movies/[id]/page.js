import React from "react";
import styles from "@/app/styles/common.module.css";
import Image from "next/image";
import Link from "next/link";

const Page = async ({ params }) => {
  const id = params.id;

  const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "1e158c542bmsha5016a6481cf8fap1c358fjsn004c082f2182",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };

  const res = await fetch(url, options);
  const data = await res.json();

  const main_data = data[0].details;

  return (
    <div className={styles.container}>
      <Link href={"/movies"}>
        <h2 className={styles.movie_title}>
          Netflix \ <span>{main_data.type}</span>
        </h2>
      </Link>
      <div className={styles.card_section}>
        <div>
          <Image
            className={styles.resimageid}
            src={main_data.backgroundImage.url}
            alt={main_data.title}
            width={600}
            height={300}
          />
        </div>
        <div className={styles.restext}>
          <h1>{main_data.title}</h1>
          <p>{main_data.synopsis}</p>
        </div>
      </div>
    </div>
  );
};

export default Page;
