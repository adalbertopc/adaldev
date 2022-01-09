import Image from 'next/image';
import { InnerLayout } from './InnerLayout';
import { Button } from './Button';
interface ImageWithTextProps {
  imagePosition?: 'left' | 'right';
  image?: string;
  alt?: string;
  title?: string;
  children?: any;
  textColor?: string;
  background?: string;
  buttonText?: string;
  buttonHref?: string;
  buttonIsNextLink?: boolean;
}

export const ImageWithText = ({
  imagePosition = 'left',
  image,
  alt,
  title,
  children,
  textColor,
  background,
  buttonText,
  buttonHref,
  buttonIsNextLink,
}: ImageWithTextProps) => {
  return (
    <div className={`${background}`}>
      <InnerLayout>
        <section className={`min-h-[300px] grid md:grid-cols-2 gap-6 py-14`}>
          <div className="text-center md:text-left">
            {title && (
              <h3 className="mb-2 text-3xl font-semibold md:text-4xl md:mb-4">
                {title}
              </h3>
            )}
            {children && <div className="mb-6 text-lg">{children}</div>}
            {buttonText && (
              <Button href={buttonHref || '#'} isNextLink={buttonIsNextLink}>
                {buttonText}
              </Button>
            )}
          </div>
          <div
            className={`flex justify-center ${
              imagePosition === 'left' && 'order-first'
            }`}>
            <div className="relative w-56 h-56 mt-4 transition-all md:mt-0 xs:w-80 xs:h-80 md:w-auto md:h-auto">
              {image && (
                <Image
                  src={image}
                  layout="fill"
                  alt={alt}
                  objectFit="contain"
                />
              )}
            </div>
          </div>
        </section>
      </InnerLayout>
    </div>
  );
};
