import Image from 'next/image';
import { InnerLayout } from '../components/InnerLayout';
import { Button } from './Button';

export const Hero = () => {
  return (
    <div className="pb-10 overflow-x-hidden">
      <div className="absolute top-0 z-0 flex flex-col items-end w-full h-full mt-0 pointer-events-none left-1/2">
        <div className="hidden w-full transition-all transform rounded-r-none rounded-tl-none bg-blue-100/70 h-[400px] rounded-bl-large md:block"></div>
      </div>
      <InnerLayout className="relative">
        <section className="z-10 grid md:grid-cols-2">
          <div className="relative text-center md:text-left">
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
    </div>
  );
};
