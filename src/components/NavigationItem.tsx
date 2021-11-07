import { CustomLink } from './CustomLink';

export const NavigationItem = ({ text, url = '#' }) => {
  return (
    <li key={text}>
      <CustomLink key={text} href={url}>
        <a>{text}</a>
      </CustomLink>
    </li>
  );
};
