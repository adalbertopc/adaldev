interface ButtonProps {
  type: 'button' | 'submit' | 'reset' | undefined;
  text: string;
  outlined?: boolean;
  href?: string;
}

export const Button = ({ type, text, outlined, href }: ButtonProps) => {
  const styles = ``;
  return href ? (
    <a href={href}>{text}</a>
  ) : (
    <button type={type} className={styles}>
      {text}
    </button>
  );
};
