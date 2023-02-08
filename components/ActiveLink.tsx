import { useRouter } from 'next/router'
import Link from 'next/link'
import React, { Children, Fragment, ReactElement } from 'react'
import { NextPage } from 'next'

interface IProps {
  activeClassName: string,
  href: string,
  as?: string
}

const ActiveLink: NextPage<IProps> = ({ children, activeClassName, href, as }) => {
  const { asPath } = useRouter()
  const child = Children.only(children) as ReactElement
  const childClassName = child.props.className || ''

  const className =
    asPath === href || asPath === as
      ? `${childClassName} ${activeClassName}`.trim()
      : childClassName

  return (
    <Fragment>
      {
        <Link href={href} as={as}>
          {React.cloneElement(child, {
            className: className || null,
          })}
        </Link>
      }
    </Fragment>

  )
}

export default ActiveLink
