import styles from "./header.module.css";
import { Link } from "react-router-dom";

// import images
import logo from "../../../public/img/logo.png";

// import icons
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

const TopHeader = () => {
  return (
    <div className="top_header">
      <div className={`container flex items-center justify-between px-0 py-4`}>
        {/* =======// logo //========== */}
        <Link className="text-4xl font-semibold" to="/">
          <img className={styles.logo} src={logo} alt="logo-ecommerce" />
        </Link>

        {/* =======// logo //========== */}

        {/* ====// form for search //===== */}

        <form
          action=""
          className={`w-lg flex items-center rounded-full ${styles.searchBox}`}
        >
          <input
            type="text"
            className={`h-11 w-md rounded-full ${styles.searchInp}`}
            name="search"
            placeholder="Search for products"
          />

          <button
            className={`h-11 w-16 flex items-center justify-center text-xl rounded-e-full ${styles.searchBtn}`}
            type="submit"
          >
            <FaSearch color="white" />
          </button>
        </form>

        {/* ====// form for search //===== */}

        {/* ======// icons header //====== */}
        <div className="header_icons flex gap-7 items-center">
          <div className={styles.icon}>
            <FaRegHeart fontSize={30} />
            <span className={styles.count}>0</span>
          </div>

          <div className={styles.icon}>
            <FaShoppingCart fontSize={30} />
            <span className={styles.count}>0</span>
          </div>
        </div>

        {/* ======// icons header //====== */}
      </div>
    </div>
  );
};

export default TopHeader;
