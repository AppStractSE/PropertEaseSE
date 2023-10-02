import { BsPatchCheckFill } from 'react-icons/bs';
import { features } from '../data/features';

const Features = () => {
  return (
    <section className="bg-white dark:bg-stone-900">
      {features.map((feature, index) => (
        <div className="max-w-screen-2xl mx-auto gap-16 xl:gap-32 lg:grid lg:grid-cols-2 px-4 py-8 lg:py-14">
          <div
            className={`font-light text-gray-500 sm:text-lg dark:text-gray-400 divide-y divide-slate-300 ${
              index % 2 === 0 ? 'order-2' : ''
            }`}
          >
            <div>
              <h2 className="mb-4 text-4xl tracking-tight font-bold text-black dark:text-white">{feature.title}</h2>
              <p className="mb-4 whitespace-pre-line">{feature.description}</p>
            </div>
            <ul role="list" className="mb-8 space-y-4 text-left mt-12 pt-12">
              {feature.features.map((feature) => (
                <li className="flex space-x-3">
                  <BsPatchCheckFill size={28} className="text-primary-600 dark:text-green-400" />
                  <div>
                    <div className="text-black dark:text-white">{feature.title}</div>
                    <div className="text-sm">{feature.description}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <img className="rounded-md" src={feature.image} alt={feature.title} />
        </div>
      ))}
    </section>
  );
};

export default Features;
