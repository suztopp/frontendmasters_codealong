import styles from '../styles/Home.module.css'
import React from 'react'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container} style={{ fontSize: "30px" }}>
      <h1>INDEX PAGE</h1>

      <Link href="/notes">
        <a>NOTES</a>
      </Link>

    </div>
  )
}
