import React from 'react'
import styles from "@/app/styles/navbar.module.css";
import Link from 'next/link';

const Nav = () => {
  return (
     <nav className={styles.navbar}>
        <div >
        <ul className={styles.navbarList}>
            <li className={styles.navbarItem}>
                <Link className={styles.navbarLink} href="/" >
                   Home
                </Link>
                <Link className={styles.navbarLink} href="/about" >
                   About
                </Link>
                <Link className={styles.navbarLink} href="/movie" >
                   Movie
                </Link>
                <Link className={styles.navbarLink} href="/contact" >
                   Contact
                </Link>

        </li>
        </ul>



            </div>
   

    </nav>
  )
}

export default Nav;