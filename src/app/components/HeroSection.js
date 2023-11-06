import React from "react";
import heroStyles from "@/app/styles/herosection.module.css";
import styles from "@/app/styles/common.module.css";
import { Inter } from "next/font/google";
import Link from "next/link";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

const HeroSection = ({ title, desc, imageUrl }) => {
  return (
    <main className={heroStyles.main_section}>
      <div className={styles.container}>
        <div className={styles.grid_two_section}>
          <div className={heroStyles.hero_content}>
            <div className={styles.resh1}>
              <h1>{title}</h1>
            </div>
            <p>{desc}</p>
            <Link href="/movies">
              <button className={inter.className}>Explore Movies</button>
            </Link>
          </div>
          <div className={`${heroStyles.hero_image}`}>
            <Image
              className={styles.resimage}
              src={imageUrl}
              alt="Netflix"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>

      <div className={heroStyles["custom-shape-divider-bottom-1688373595"]}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className={heroStyles["shape-fill"]}
          ></path>
        </svg>
      </div>
    </main>
  );
};

export default HeroSection;
