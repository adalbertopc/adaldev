import Image from 'next/image';
import { InnerLayout } from '../components/InnerLayout';
import { Button } from './Button';

export const Hero = () => {
  return (
    <InnerLayout>
      <span className="absolute top-0 right-0 z-0 flex flex-col items-end mt-0 pointer-events-none">
        <span className="container hidden w-screen max-w-sm transition-all transform bg-blue-100 rounded-r-none rounded-tl-none h-96 rounded-bl-large md:block md:max-w-sm lg:max-w-lg xl:max-w-2xl opacity-70"></span>
      </span>
      <section className="z-10 grid md:grid-cols-2">
        <div className="text-center md:text-left">
          <h2 className="mb-4 text-4xl font-semibold leading-tight md:text-5xl md:leading-tight">
            Hello I'm Adalberto Prado and I'm a Fullstack Developer
          </h2>
          <div className="mb-6">
            <p className="text-lg font-headings">
              I'm a Fullstack Developer with a passion for building web
              applications.
            </p>
          </div>
          <div className="flex justify-center gap-4 mb-6 md:justify-start">
            <Button href="#projects">View Projects</Button>
            <Button
              href="#blog"
              color="text-blue-700"
              bgColor="bg-white"
              bgColorHover=""
              extraClasses="border-2 border-blue-700">
              Read Blog
            </Button>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="relative w-56 h-56 mt-4 transition-all md:mt-0 xs:w-80 xs:h-80 md:w-auto md:h-auto">
            <Image
              src="/assets/img/adal_macbook.png"
              layout="fill"
              alt="Adalberto Prado"
              objectFit="contain"
            />
          </div>
        </div>
      </section>
    </InnerLayout>
  );
};
