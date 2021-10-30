import { Button } from './Button';

export const Hero = () => {
  return (
    <div className="grid mt-8 md:grid-cols-2">
      <div className="">
        <h2 className="font-semibold mb-4 text-4xl md:text-5xl">
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
    </div>
  );
};
