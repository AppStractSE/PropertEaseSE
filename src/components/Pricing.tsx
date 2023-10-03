import { plans } from '../data/plans';
import PricingCard from './pricing/PricingCard';
import PricingGrid from './pricing/PricingGrid';
interface Props {
  scrollRef?: React.RefObject<HTMLElement>;
}
const Pricing = ({ scrollRef }: Props) => {
  return (
    <section ref={scrollRef} className="bg-white dark:bg-[#191919]">
      <div className="py-8 px-4 mx-auto max-w-screen-2xl lg:py-16 lg:px-6">
        <div className="max-w-screen-md text-center md:text-left mb-8 lg:mb-12">
          <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">Prisplaner för alla</h2>
          <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
            Välj den plan som passar dig bäst. Alla planer har 1 månads gratis provperiod.
          </p>
        </div>
        <PricingGrid>
          {plans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </PricingGrid>
      </div>
    </section>
  );
};

export default Pricing;
