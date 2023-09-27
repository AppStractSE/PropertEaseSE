import ThemeToggler from './ThemeToggler';

const Navigation = () => {
  return (
    <div className="drawer">
      <input id="navbar-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col bg-base-300">
        <div className="navbar max-w-7xl mx-auto">
          <div className="flex-none lg:hidden">
            <label htmlFor="navbar-drawer" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </label>
          </div>
          <div className="flex-1 px-2 mx-2">PropertEase</div>
          <div className="flex-none">
            <ul className="menu menu-horizontal items-center gap-2">
              <li className="hidden lg:block">
                <a>Skapa konto</a>
              </li>
              <li className="hidden lg:block border border-slate-500 rounded">
                <a>Logga in</a>
              </li>
              <li>
                <ThemeToggler />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="drawer-side">
        <label htmlFor="navbar-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200">
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
