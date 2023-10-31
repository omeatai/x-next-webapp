import Image from "next/image";
import Link from "next/link";
import styles from "./Card.module.css";
import cls from "classnames";

const Card = (props) => {
  return (
    <div className="card">
      <Link href={props.href} as={""}>
        <a className={styles.cardLink}>
          <div className={cls("glass", styles.cardContainer)}>
            <div className={styles.cardHeaderWrapper}>
              <h2 className={styles.cardHeader}>{props.name}</h2>
            </div>
            <div className={styles.cardImageWrapper}>
              <Image
                className={styles.cardImage}
                src={props.imgUrl}
                alt={props.name}
                width={260}
                height={160}
                priority={true}
                // placeholder="blur"
                // blurDataURL={defaultImage}
                // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default Card;
