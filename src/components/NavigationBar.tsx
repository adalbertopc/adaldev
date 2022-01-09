import { NavigationItem } from './NavigationItem';
import { navigationItems } from '../constants/navigationItems';
export const NavigationBar = () => {
  return (
    <nav className="z-10 hidden lg:block">
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
  );
};
