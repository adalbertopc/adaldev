import Link from 'next/link';

export const NavigationItem = ({ text, url = '#' }) => {
  return (
    <li key={text}>
      <Link key={text} href={url}>
        <a>{text}</a>
      </Link>
    </li>
  );
};
