interface Props {
  children: React.ReactNode;
}

const PricingGrid = ({ children }: Props) => {
  return <div className="space-y-6 grid md:flex gap-4 md:gap-6 xl:gap-10 justify-center md:space-y-0">{children}</div>;
};

export default PricingGrid;
