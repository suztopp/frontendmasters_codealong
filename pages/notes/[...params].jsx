import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function NotePage() {
  const router = useRouter()
  // /notes/1/2/3/4 = [1,2,3,4]
  const { params } = router.query //whatever you put in the filename
  // console.log(params)

  return (
    <div style={{ textAlign: 'center', fontSize: '30px' }}>
      <h1>NOTE {params}</h1>

      <Link href="/">
        <a>INDEX</a>
      </Link>
    </div>
  )
}