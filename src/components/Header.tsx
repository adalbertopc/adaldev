import Link from 'next/link';
import { NavigationBar } from './NavigationBar';

export const Header = () => {
  return (
    <header className="max-w-6xl mx-auto">
      <div className="flex items-center gap-3">
        <div className="bg-gray-500 w-8 h-8 rounded-md"></div>
        <h1 className="font-headings font-bold text-lg">
          <Link href="/">
            <a>adal.dev</a>
          </Link>
        </h1>
      </div>
      <NavigationBar />
    </header>
  );
};
