import Image from "next/image";
import styles from "./poster.module.css";

export const metadata = {
  title: "AI for Young Lawyers Forum — Social Poster",
};

export default function PosterPage() {
  return (
    <main className={styles.canvas} aria-label="AI for Young Lawyers Forum social poster">
      <div className={styles.colours} aria-hidden="true">
        <span className={styles.blue} />
        <span className={styles.green} />
        <span className={styles.lilac} />
        <span className={styles.orange} />
      </div>

      <Image
        className={styles.logo}
        src="/aiyltext.svg"
        alt="AI for Young Lawyers Forum"
        width={991}
        height={449}
        priority
      />

      <Image
        className={styles.watermark}
        src="/aiyl.svg"
        alt=""
        width={1356}
        height={938}
        priority
        aria-hidden="true"
      />

      <h1 className={styles.headline}>
        Law, technology,
        <br />
        judgment &amp; the next
        <br />
        generation of practice.
      </h1>

      <div className={styles.details}>
        <span className={styles.date}>Sat, Aug 15</span>
        <span className={styles.time}>13:30–18:00</span>
        <span className={styles.venue}>
          Philip K. H. Wong Theatre
          <br />
          The University of Hong Kong
        </span>
      </div>
    </main>
  );
}
