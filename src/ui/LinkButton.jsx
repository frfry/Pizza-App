import { Link, useNavigate } from 'react-router-dom';

function LinkButton({ children, to }) {
  const navigate = useNavigate();
  const classes = 'text-sm text-blue-500 hover:text-blue-600 hover:underline';
  if (to === '-1')
    return (
      <button onClick={() => navigate(-1)} className={classes}>
        {children}
      </button>
    );
  return (
    <Link to={to} className={classes}>
      {children}
    </Link>
  );
}

export default LinkButton;
