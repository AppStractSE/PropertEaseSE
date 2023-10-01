import { BsArrowRight } from 'react-icons/bs';

interface Props {
  scrollToContact: () => void;
}

const Hero = ({ scrollToContact }: Props) => {
  return (
    <section className="dark:bg-primary-800 bg-primary-200">
      <div className="grid max-w-screen-2xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-24 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 lg:mb-8 text-3xl font-bold tracking-tight leading-none md:text-4xl xl:text-5xl dark:text-white">
            Fastighetsskötsel. Enkelt.
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-800 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-100">
            Effektiv fastighetsadministration för professionella fastighetsskötare och ägare är vår specialitet.
            <br />
            Vi erbjuder en användarvänlig plattform som är skräddarsydd för att effektivt hantera alla aspekter av
            fastighetsförvaltning.
          </p>
          <a
            onClick={scrollToContact}
            className="cursor-pointer inline-flex items-center justify-center px-6 py-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none"
          >
            <span>Till prisplaner</span>
            <BsArrowRight size={20} className="ml-2" />
          </a>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="mockup" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
