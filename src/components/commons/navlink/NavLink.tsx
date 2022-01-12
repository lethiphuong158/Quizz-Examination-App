import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import classNames from 'classnames'

interface NavLinkProps {
  className?: string
  href: string
  exact?: boolean
}

const NavLink: React.FC<NavLinkProps> = ({ href, exact = false, className, children, ...props }) => {
  const { pathname } = useRouter()
  const isActive = exact ? pathname === href : pathname.startsWith(href)

  return (
    <Link href={href}>
      <a className={classNames(className, { active: isActive })} {...props}>
        {children}
      </a>
    </Link>
  )
}

export default NavLink
