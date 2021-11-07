import { withRouter } from 'next/router';
import Link from 'next/link';
import React, { ReactElement } from 'react';

interface CustomLinkProps {
  children: ReactElement;
  router: any;
  href: string;
  as?: string;
  replace?: boolean;
}

export const CustomLink = withRouter(
  ({ router, children, ...props }: CustomLinkProps) => (
    <Link {...props}>
      <a
        className={
          `/${router.pathname.split('/')[1]}` === props.href
            ? `font-bold text-blue-500`
            : ''
        }>
        {children}
      </a>
    </Link>
  )
);
