import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Topbar = () => { 
  return (
    <nav className="topbar">
      <Link href="/" className="flex items-center gap-4">
        <Image src="/logo.svg" alt="Logo" width={28} height={28} />
      </Link>
    </nav>
  )
}

export default Topbar