import { NavigationItem } from './NavigationItem';

const navigationItems = [
  {
    text: 'Home',
    url: '/',
  },
  {
    text: 'Blog',
    url: '/blog',
  },
  {
    text: 'Portfolio',
    url: '/portfolio',
  },
];

export const NavigationBar = () => {
  return (
    <nav>
      <ul>
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
