interface Props {
  children: React.ReactNode;
}

const PricingGrid = ({ children }: Props) => {
  return <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">{children}</div>;
};

export default PricingGrid;
