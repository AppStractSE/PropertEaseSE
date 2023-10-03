import { BsPatchCheckFill } from 'react-icons/bs';
import { plans } from '../data/plans';
interface Props {
  scrollRef?: React.RefObject<HTMLElement>;
}
const Pricing = ({ scrollRef }: Props) => {
  return (
    <section ref={scrollRef} className="bg-white dark:bg-[#191919]" id="pricing">
      <div className="py-8 px-4 mx-auto max-w-screen-2xl lg:py-16 lg:px-6">
        <div className="max-w-screen-md text-center md:text-left mb-8 lg:mb-12">
          <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">Prisplaner för alla</h2>
          <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
            Välj den plan som passar dig bäst. Alla planer har 1 månads gratis provperiod.
          </p>
        </div>
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`flex flex-col p-6 mx-auto w-full text-center text-gray-900 bg-white rounded-lg border border-gray-300 dark:border-stone-900 xl:p-8 dark:bg-primary-950 dark:text-white hover:border-primary-300 hover:bg-primary-50 dark:hover:bg-primary-900 ${
                plan.mostPopular ? 'relative border-primary-600 border-2' : ''
              }`}
            >
              {plan.mostPopular && (
                <div className="absolute -top-5 right-0 left-0 mx-auto w-32 rounded-full bg-gradient-to-b from-primary-400 to-primary-800 px-3 py-2 text-sm font-medium text-white">
                  Mest populär
                </div>
              )}
              <h3 className="mb-4 text-2xl font-semibold">{plan.name}</h3>
              <p className="font-light text-gray-500 sm:text-lg dark:text-gray-200">{plan.description}</p>
              <div className="flex justify-center items-baseline my-8">
                <span className="mr-2 text-5xl font-bold">{plan.price}kr</span>
                <span className="text-gray-500 dark:text-gray-400">/månad</span>
              </div>
              <ul role="list" className="mb-8 space-y-4 text-left">
                {plan.features.map((feature) => (
                  <li className="flex items-center space-x-3">
                    <BsPatchCheckFill size={28} className="text-primary-600 dark:text-green-400" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://property.appstract.se/register"
                className="mt-auto text-white bg-primary-600 dark:bg-primary-700 dark:hover:bg-primary-800 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
              >
                Läs mer
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
