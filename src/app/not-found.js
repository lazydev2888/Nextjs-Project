import Link from 'next/link'
import React from 'react'
import styles from "@/app/styles/common.module.css"


const NotFound = () => {
  return ( 
    <section className={styles.container}>
        <div className={styles.error_page}>
            <h1>404</h1>
            <h2>Not Found</h2>
            <p>Could not find requested resources</p>
            <Link href="/">
                <button>
                    Go Back
                </button>
            </Link>
        </div>
    </section>
  )
}

export default NotFound;