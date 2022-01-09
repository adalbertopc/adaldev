interface InnerLayoutProps {
  children: any;
  className?: string;
}

export const InnerLayout = ({ children, className }: InnerLayoutProps) => {
  return (
    <div
      className={`container max-w-6xl px-4 mx-auto md:px-6 ${className || ''}`}>
      {children}
    </div>
  );
};
