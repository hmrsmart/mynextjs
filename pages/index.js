import Link from "next/link"
import Login from '/components/login';
import styles from "/components/header.module.css"


export default function Home() {
  return (
    <>
    <Login />
    <nav>
        <ul className={styles.navItems}>
          <li className={styles.navItem}>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/myprot">
              <a>MyProt</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/protected">
              <a>Protected</a>
            </Link>
          </li>
        </ul>
      </nav>
   </>
  )
}
