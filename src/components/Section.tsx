interface Props {
  children: React.ReactNode;
}
const Section = ({ children }: Props) => {
  return <div className="max-w-7xl mx-auto p-2 md:p-6">{children}</div>;
};

export default Section;