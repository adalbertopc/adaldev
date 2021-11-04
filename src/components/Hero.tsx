import Image from 'next/image';
import { Button } from './Button';

export const Hero = () => {
  return (
    <>
      <span className="z-0 pointer-events-none absolute top-0 right-0 flex flex-col items-end mt-0">
        <span className="container hidden transition-all w-screen h-96 max-w-sm transform rounded-tl-none rounded-bl-large rounded-r-none md:block md:max-w-sm lg:max-w-lg xl:max-w-2xl bg-blue-100 opacity-70"></span>
      </span>
      <section className="z-10 grid md:grid-cols-2">
        <div className="">
          <h2 className="font-semibold mb-4 text-4xl leading-tight md:text-5xl md:leading-tight">
            Hello I'm Adalberto Prado and I'm a Fullstack Developer
          </h2>
          <div className="mb-6">
            <p className="font-headings text-lg">
              I'm a Fullstack Developer with a passion for building web
              applications.
            </p>
          </div>
          <div className="mb-6 flex gap-4">
            <Button text="View Projects" href="#projects" />
            <Button
              text="Read Blog"
              href="#blog"
              color="text-blue-700"
              bgColor="bg-white"
              bgColorHover=""
              extraClasses="border-2 border-blue-700"
            />
          </div>
        </div>
        <div className="md:ml-28">
          <Image
            src="/assets/img/casual-life-3d-14.png"
            width="400"
            height="400"
            alt="Adalberto Prado"
            className=""
          />
        </div>
      </section>
    </>
  );
};
