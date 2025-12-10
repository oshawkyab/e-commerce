import { useEffect, useState } from "react";
import styles from "./header.module.css";
import { Link, Links, useLocation } from "react-router-dom";

// icons
import { FaUserPlus } from "react-icons/fa";
import { MdLogin, MdMenu } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { MdKeyboardArrowDown } from "react-icons/md";

const BottomHeader = () => {
  const [categories, setCategories] = useState([]);
  const [toggleBtn, setToggleBtn] = useState(false);
  const currentLocation = useLocation();

  // nav links
  const navLinks = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "About",
      url: "/about",
    },
    {
      title: "Blog",
      url: "/blog",
    },
    { 
      title: "Accessories",
      url: "/accessories",
    },
    {
      title: "Contact",
      url: "/contact",
    },
  ];

  // fetch categories
  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className={styles.bottomHeader}>
      <div className="container flex items-center justify-between">
        <nav className="nav flex items-center gap-20">
          <div className="category_nav w-56 relative">
            <div
              onClick={() => setToggleBtn((prev) => !prev)}
              className="category_btn cursor-pointer flex items-center h-16 w-full justify-between"
            >
              <FiMenu fontSize={24} fontWeight={700} color="white" />
              <p className={styles.categoryBtnParagraph}>Browse Category</p>
              <MdKeyboardArrowDown
                fontSize={24}
                fontWeight={700}
                color="white"
              />
            </div>

            <div
              className={`category_list border rounded-br rounded-bl border-t-0 absolute top-full w-full max-h-96 overflow-y-auto flex flex-col ${
                styles.categoryList
              } ${toggleBtn ? styles.active : ""} gap-3 overflow-x-hidden`}
            >
              {categories.map((category) => {
                return (
                  <Link
                    to={`/${category.name}`}
                    className="w-full p-2 border-b border-gray-400 hover:bg-gray-200 transition duration-300"
                    key={category.slug}
                  >
                    {category.name}
                  </Link>
                );
              })}
            </div>
          </div>

          <div className={`${styles.navLinks} flex gap-10`}>
            {navLinks.map((link) => {
              return (
                <Link
                  to={`${link.url}`}
                  className={`${styles.navLink} ${
                    currentLocation.pathname === link.url ? "active" : ""
                  }`}
                >
                  {link.title}
                </Link>
              );
            })}
          </div>
        </nav>

        <div className="fav_cart_icon flex gap-10 items-center">
          <div className="icon cursor-pointer">
            <MdLogin color="#fff" className={styles.icon} fontSize={26} />
          </div>
          <div className="icon cursor-pointer">
            <FaUserPlus className={styles.icon} color="#fff" fontSize={26} />
          </div>
        </div>

        {/* menu */}
        <div className={styles.menuToggle}>
          <MdMenu fontSize={30} color="#fff" />
        </div>
      </div>
    </div>
  );
};

export default BottomHeader;
