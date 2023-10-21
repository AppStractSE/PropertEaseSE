interface Props {
  title: string;
  className?: string;
  href?: string;
  openInNewTab?: boolean;
}

const NavButton = ({ title, className, href, openInNewTab }: Props) => {
  return (
    <a target={openInNewTab ? '_blank' : '_self'} href={href}>
      <div className={`border-b-2 transition-all duration-500 ${className ? className : ''}`}>{title}</div>
    </a>
  );
};

export default NavButton;
