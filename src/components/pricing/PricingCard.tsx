import { BsPatchCheckFill } from 'react-icons/bs';
import { Plan } from '../../data/plans';
interface Props {
  plan: Plan;
}

const PricingCard = ({ plan }: Props) => {
  return (
    <div
      className={`cursor-default flex flex-col p-6 mx-auto w-full text-center text-gray-900 bg-white rounded-lg border border-gray-300 dark:border-stone-900 xl:p-8 dark:bg-primary-950 dark:text-white hover:border-primary-300 hover:bg-primary-50 dark:hover:bg-primary-900 hover:shadow-2xl ${
        plan.mostPopular ? 'relative border-primary-600 border-2 mp-container' : ''
      }`}
    >
      {plan.mostPopular && (
        <div className="absolute -top-5 right-0 left-0 mx-auto w-32 rounded-full bg-gradient-to-b from-primary-400 to-primary-800 px-3 py-2 text-sm font-medium text-white mp-highlight">
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
          <li key={feature} className="flex items-center space-x-3">
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
  );
};

export default PricingCard;
