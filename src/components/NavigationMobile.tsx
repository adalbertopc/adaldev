import { NavigationItem } from './NavigationItem';
import { navigationItems } from '../constants/navigationItems';
import { useState } from 'react';
import { MenuAlt1Icon } from '@heroicons/react/solid';

export const NavigationMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <button className="w-8 h-8" onClick={handleToggle}>
        <MenuAlt1Icon className="" />
      </button>
      <nav
        className={`${isOpen ? 'block' : 'hidden'} md:hidden
      absolute container p-4 left-0 w-full bg-white shadow-lg z-50
      `}>
        <ul className="flex justify-between items-center gap-5">
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
