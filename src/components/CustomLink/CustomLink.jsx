import { Link } from 'react-router-dom';

function CustomLink({ pathname, from, children, onClick }) {
  return (
    <Link
      onClick={onClick && onClick}
      to={{
        pathname,
        state: {
          from,
        },
      }}
    >
      {children}
    </Link>
  );
}

export default CustomLink;