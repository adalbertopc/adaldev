import Link from 'next/link';
import { NavigationBar } from './NavigationBar';
import { NavigationMobile } from './NavigationMobile';

export const Header = () => {
  return (
    <header className="z-10 flex items-center justify-between mt-4 mb-12">
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gray-500 rounded-md"></div>
          <h1 className="text-lg font-bold font-headings">
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
