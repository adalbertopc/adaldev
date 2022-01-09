import { useState } from 'react';
import { MenuAlt1Icon } from '@heroicons/react/solid';
import { NavigationItem } from './NavigationItem';
import { navigationItems } from '../constants/navigationItems';

export const NavigationMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <div className="z-10 block lg:hidden">
      <button className="block w-8 h-8 lg:hidden" onClick={handleToggle}>
        <MenuAlt1Icon className="" />
      </button>
      <nav
        className={`${isOpen ? 'block' : 'hidden'} lg:hidden
      absolute container p-4 left-0 w-full bg-white shadow-lg z-50
      `}>
        <ul className="flex items-center justify-between gap-5">
          {navigationItems.map((navigationItem) => (
            <NavigationItem
              key={navigationItem.text}
              text={navigationItem.text}
              url={navigationItem.url}
            />
          ))}
        </ul>
      </nav>
    </div>
  );
};
