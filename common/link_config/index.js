import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const LinkConfig = ({ href, children }) => {
  const router = useRouter()
  let className = children.props.className || ''
  if ((router.pathname.split('/'))[1] === (href.split('/'))[1]) {
    className = `${className} active`
  }

  return <Link href={href}>{React.cloneElement(children, { className })}</Link>
}

export default LinkConfig