import { useState } from "react";
import styles from "./style.module.css";
import clsx from "clsx";
import { BsSearch } from "react-icons/bs";
import rand from "./assets/rand.png";

function App() {
  const [sidebarExpanded, setSidebarExpanded] = useState(false);

  const onToggleSidebar = () => setSidebarExpanded(!sidebarExpanded);
  return (
    <>
      <div
        className={clsx(
          styles.leftSidebarDefault,
          sidebarExpanded && styles.leftSidebarExpanded
        )}
      >
        <button onClick={onToggleSidebar}>Open</button>1
      </div>

      <div
        className={clsx(styles.main, sidebarExpanded && styles.mainExpanded)}
      >
        <div className={styles.content}>
          <div className={styles.searchContainer}>
            <p className={styles.searchTitle}>Search Item</p>
            <div className={styles.searchInput}>
              <input placeholder="Apple Watch, Samsung S21, Macbook Pro, ..." />
              <BsSearch />
            </div>
          </div>
          <div class={styles.gridContainer}>
            <div class={styles.gridItem}>
              <div className={styles.gridImage}>
                <img src={rand} />
              </div>
              <div className={styles.productInfo}>
                <p className={styles.productTitle}>Apple Watch</p>
                <span className={styles.productType}>Series 5 SE</span>
                <div>
                  <span className={styles.productPrice}>$ 529.99</span>
                </div>
              </div>
            </div>
            <div class={styles.gridItem}>
              <div className={styles.gridImage}>
                <img src={rand} />
              </div>
            </div>
            <div class={styles.gridItem}>
              <div className={styles.gridImage}>
                <img src={rand} />
              </div>
            </div>
            <div class={styles.gridItem}>
              <div className={styles.gridImage}>
                <img src={rand} />
              </div>
            </div>
            <div class={styles.gridItem}>
              <div className={styles.gridImage}>
                <img src={rand} />
              </div>
            </div>
            <div class={styles.gridItem}>
              <div className={styles.gridImage}>
                <img src={rand} />
              </div>
            </div>
            <div class={styles.gridItem}>
              <div className={styles.gridImage}>
                <img src={rand} />
              </div>
            </div>
            <div class={styles.gridItem}>
              <div className={styles.gridImage}>
                <img src={rand} />
              </div>
            </div>
            <div class={styles.gridItem}>
              <div className={styles.gridImage}>
                <img src={rand} />
              </div>
            </div>
            <div class={styles.gridItem}>
              <div className={styles.gridImage}>
                <img src={rand} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.rightSidebar}>bag</div>
      </div>
    </>
  );
}

export default App;
