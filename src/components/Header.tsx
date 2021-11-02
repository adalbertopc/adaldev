import Link from 'next/link';
import { NavigationBar } from './NavigationBar';
import { NavigationMobile } from './NavigationMobile';

export const Header = () => {
  return (
    <header className="z-10 mt-4 flex justify-between items-center">
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-3">
          <div className="bg-gray-500 w-8 h-8 rounded-md"></div>
          <h1 className="font-headings font-bold text-lg">
            <Link href="/">
              <a>adal.dev</a>
            </Link>
          </h1>
        </div>
      </div>
      <NavigationBar />
      <NavigationMobile />
    </header>
  );
};
