import Link from 'next/link';
interface ButtonProps {
  children: any;
  type?: 'button' | 'submit' | 'reset' | undefined;
  href?: string;
  isNextLink?: boolean;
  color?: string;
  bgColor?: string;
  bgColorHover?: string;
  extraClasses?: string;
}

export const Button = ({
  children,
  type,
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
          {children}
        </a>
      </Link>
    ) : (
      <a href={href} className={styles}>
        {children}
      </a>
    )
  ) : (
    <button type={type} className={styles}>
      {children}
    </button>
  );
};
