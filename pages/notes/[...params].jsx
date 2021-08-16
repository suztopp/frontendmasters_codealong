import React from 'react'
import { useRouter } from 'next/router'

export default function NotePage() {
  const router = useRouter()
  // /notes/1/2/3/4 = [1,2,3,4]
  const { params } = router.query //whatever you put in the filename
  // console.log(params)

  return (
    <div>
      <h1>NOTE {params}</h1>
    </div>
  )
}