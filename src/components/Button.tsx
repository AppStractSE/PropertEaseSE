interface Props {
  title: string;
  className?: string;
  href?: string;
  colors?: string;
  openInNewTab?: boolean;
}

const Button = ({ title, className, href, colors, openInNewTab }: Props) => {
  return (
    <a target={openInNewTab ? '_blank' : '_self'} href={href}>
      <div
        className={`
          border
          rounded-lg
          font-medium
          text-center
          text-xs
          transition-all
          duration-300
          ease-in-out
          focus:ring-0
          focus:outline-none
          ${colors}
          ${className ? className : ''}
        `}
      >
        {title}
      </div>
    </a>
  );
};

export default Button;
