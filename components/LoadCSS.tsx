"use client"

import { useEffect } from "react"

export default function LoadCSS() {
  useEffect(() => {
    const link = document.createElement("link")
    link.rel = "stylesheet"
    link.href = "/styles/main.css"
    document.head.appendChild(link)
  }, [])

  return null
}