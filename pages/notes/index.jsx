import React from 'react'
import Link from 'next/link'

export default function Notes() {

  const notes = new Array(15).fill(1).map((e, i) => ({id: i, title: `Note: ${i}`}))

  return (
    <div style={{ textAlign: 'center', fontSize: '30px' }}>
      <h1>NOTES PATH</h1>

      <Link href="/">
        <a>INDEX</a>
      </Link>

      {notes.map(note => (
        <div>
            <Link key={note.id} href="/notes/[id]" as={`/notes/${note.id}`}>
              <a>
                <strong>{note.title}</strong>
              </a>
            </Link>
        </div>
      ))}
      
    </div>
  )
  
}