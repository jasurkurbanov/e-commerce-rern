import styles from "./index.module.css";
import { BagAddIcon } from "../../assets/icons";

export const Product = ({ data: { name, type, price, img } }) => {
  return (
    <div className={styles.productItem}>
      <div className={styles.productImage}>
        <img src={img} />
      </div>
      <div className={styles.productInfo}>
        <span className={styles.productTitle}>
          {name} <br />
          <span className={styles.productType}>{type}</span>
        </span>

        <div className={styles.productBucketAdd}>
          <span className={styles.productPrice}>{price}</span>
          <button className="primary">
            <BagAddIcon />
          </button>
        </div>
      </div>
    </div>
  );
};
