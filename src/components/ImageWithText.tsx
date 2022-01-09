import { Button } from './Button';

interface ImageWithTextProps {
  image?: string;
  alt?: string;
  title?: string;
  text?: string;
  textColor?: string;
  background?: string;
  buttonText?: string;
  buttonHref?: string;
}

export const ImageWithText = ({
  image,
  alt,
  title,
  text,
  textColor,
  background,
  buttonText,
  buttonHref,
}: ImageWithTextProps) => {
  return (
    <section className={`min-h-[300px] grid md:grid-cols-2 py-6 ${background}`}>
      <div>
        {title && <h3 className="text-xl font-bold">{title}</h3>}
        {text && <p className="text-lg">{text}</p>}
        {buttonText && <Button href={buttonHref}>{buttonText}</Button>}
      </div>
      <div className="flex justify-center">
        <div className="relative w-56 h-56 mt-4 transition-all md:mt-0 xs:w-80 xs:h-80 md:w-auto md:h-auto">
          {image && (
            <Image src={image} layout="fill" alt={alt} objectFit="contain" />
          )}
        </div>
      </div>
    </section>
  );
};
