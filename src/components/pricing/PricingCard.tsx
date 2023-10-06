import { HiOutlineCheck } from 'react-icons/hi';
import { Plan } from '../../data/plans';

interface Props {
  plan: Plan;
}

const PricingCard = ({ plan }: Props) => {
  return (
    <div
      className={`flex flex-col w-full md:w-[18rem] lg:w-[20rem] md:min-h-[420px] cursor-default p-4 md:p-6 xl:p-8 text-left md:text-center text-gray-900
      bg-white rounded-lg border  dark:bg-[#121212] dark:text-white hover:border-primary-300 hover:bg-primary-50 dark:hover:bg-primary-900 shadow-xl hover:shadow-2xl dark:shadow-none ${
        plan.mostPopular
          ? 'relative border-primary-600 dark:border-primary-900 border-2 mp-container'
          : 'border-gray-300 dark:border-stone-950'
      }`}
    >
      {plan.mostPopular && (
        <div className="mb-4 md:mb-0 md:absolute md:-top-3 right-3 md:right-0 md:left-0 md:mx-auto w-32 rounded md:rounded-full bg-gradient-to-b from-primary-400 to-primary-800 px-2 py-1 text-xs text-center font-medium text-white mp-highlight">
          Mest populär
        </div>
      )}
      <div className="flex flex-col justify-between">
        <div>
          <h3 className="mb-2 text-xl md:text-2xl font-semibold">{plan.name}</h3>
          <p className="font-light text-gray-500 sm:text-lg dark:text-gray-200 md:h-[60px]">{plan.description}</p>
        </div>
        <div className="flex md:justify-center items-baseline my-2 md:my-8 border-b pb-4 md:pb-8 border-gray-500">
          <span className="mr-2 text-xl md:text-5xl font-bold">{plan.price}kr</span>
          <span className="text-gray-500 dark:text-gray-400">/månad</span>
        </div>
      </div>
      <ul role="list" className=" mb-6 md:mb-8 space-y-2 md:space-y-4 text-left pt-2 md:pt-0">
        {plan.features.map((feature) => (
          <li key={feature} className="flex space-x-2">
            <div className='mt-1'>
            <HiOutlineCheck />
            </div>
            <div>{feature}</div>
          </li>
        ))}
      </ul>
      <div className="mt-auto">
        <a
          href="https://property.appstract.se/register"
          className="text-white bg-primary-600 block dark:bg-primary-700 dark:hover:bg-primary-800 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-12 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
        >
          Kom igång
        </a>
      </div>
    </div>
  );
};

export default PricingCard;
