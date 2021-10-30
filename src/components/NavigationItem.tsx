import Link from 'next/link';
import { useRouter } from 'next/router';

export const NavigationItem = ({ text, url = '#' }) => {
  const router = useRouter();

  return (
    <li key={text}>
      <Link key={text} href={url}>
        <a
          className={`${
            router.pathname.startsWith(url) && 'font-bold text-blue-500'
          }`}>
          {text}
        </a>
      </Link>
    </li>
  );
};
