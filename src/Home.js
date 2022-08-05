import { useState } from "react";
import styles from "./style.module.css";
import clsx from "clsx";
import {
  BsSearch,
  BsFillInfoCircleFill,
  BsArrowBarRight,
} from "react-icons/bs";

import { ImExit } from "react-icons/im";
import { Product } from "./components/product";
import productsJSON from "./data/products.json";
import { Link } from "react-router-dom";
import { CheckoutIcon, HomeIcon, LogoIcon } from "./assets/icons";

function Home() {
  const [query, setQuery] = useState();
  const [filteredProducts, setFilteredProducts] = useState(productsJSON);

  const onHandleChange = (e) => setQuery(e.target.value);

  const onSearch = () => {
    setFilteredProducts(
      productsJSON.filter((item) =>
        item.name.toLocaleLowerCase().includes(query.toLocaleLowerCase())
      )
    );
  };

  return (
    <>
      <nav className={styles.leftSidebarDefault}>
        <span className={styles.logoText}>SOLID</span>

        <div>
          <Link to="/invoices">
            <HomeIcon />
          </Link>

          <Link to="/invoices">
            <CheckoutIcon />
          </Link>

          <Link to="/invoices">
            <BsFillInfoCircleFill size={22} />
          </Link>
        </div>
        <button className="text">
          <ImExit color="#E5252C" size={22} />
        </button>
      </nav>

      <div className={styles.main}>
        <div className={styles.content}>
          <div className={styles.searchContainer}>
            <p className={styles.searchTitle}>Search Item</p>
            <div className={styles.searchInput}>
              <input
                placeholder="Apple Watch, Samsung S21, Macbook Pro, ..."
                onChange={onHandleChange}
              />
              <button className="primary" onClick={onSearch}>
                <BsSearch />
              </button>
            </div>
          </div>
          <div className={styles.productsContainer}>
            {filteredProducts.map((data, idx) => (
              <Product data={data} key={idx} />
            ))}
          </div>
        </div>
        <div className={styles.rightSidebar}>
          <button className="primary">
            <CheckoutIcon />
            View Bag
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
