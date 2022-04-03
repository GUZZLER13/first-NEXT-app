import React from "react"
import Link from "next/Link"

export default function index() {
  return (
    <>
      <h1>This is page CONTACT</h1>
      <Link href="/">Go Home</Link>
      <style jsx>{`
        h1 {
          color: red;
          text-align: center;
        }
      `}</style>
    </>
  )
}
