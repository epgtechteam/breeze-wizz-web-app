// components/Header.js
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/logo-banner.png";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header
      className={`${styles.header} header sticky top-0 bg-white shadow-md z-50 p-4 flex justify-between items-center`}
    >
      <div>
        <Image
          src={logo} // Path to your image
          alt="breeze-wizz-logo"
          height={70}
        />
      </div>
      <div></div>
      <nav className={styles.navLinks}>
        <ul className="flex">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/offers">Offers</Link>
          </li>
          <li>
            <Link href="#">Services</Link>
          </li>
          <li>
            <Link href="#">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
