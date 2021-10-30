import Link from 'next/link';
interface ButtonProps {
  type?: 'button' | 'submit' | 'reset' | undefined;
  text: string;
  href?: string;
  isNextLink?: boolean;
  color?: string;
  bgColor?: string;
  bgColorHover?: string;
  extraClasses?: string;
}

export const Button = ({
  type,
  text,
  href,
  isNextLink,
  color = 'text-white',
  bgColor = 'bg-blue-700',
  bgColorHover = 'bg-blue-600',
  extraClasses = '',
}: ButtonProps) => {
  const styles = `inline-flex items-center justify-center px-4 py-2 transition-colors ${bgColor} hover:${bgColorHover} ${color} rounded-md ${extraClasses}`;
  return href ? (
    isNextLink ? (
      <Link href={href}>
        <a href={href} className={styles}>
          {text}
        </a>
      </Link>
    ) : (
      <a href={href} className={styles}>
        {text}
      </a>
    )
  ) : (
    <button type={type} className={styles}>
      {text}
    </button>
  );
};
