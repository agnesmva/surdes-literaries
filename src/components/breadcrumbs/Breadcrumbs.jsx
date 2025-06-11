import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { HiChevronRight } from 'react-icons/hi';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <nav className="flex items-center text-l text-gray-600 mb-4 mt-1.5 ml-20">
      <Link to="/" className="hover:text-[#1C9997] transition-colors">
        Início
      </Link>
      
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;
        
        return (
          <React.Fragment key={name}>
            <HiChevronRight className="mx-2 text-gray-400" />
            {isLast ? (
              <span className="text-[#1C9997] font-medium capitalize">
                {name.replace(/-/g, ' ')}
              </span>
            ) : (
              <Link
                to={routeTo}
                className="hover:text-[#1C9997] transition-colors capitalize"
              >
                {name.replace(/-/g, ' ')}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};

export default Breadcrumbs;