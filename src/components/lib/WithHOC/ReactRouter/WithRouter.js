import {
  useNavigate,
  useLocation,
  useParams,
  useSearchParams,
} from 'react-router-dom';

export const withRouter = (Component) => {
  const Wrapper = (props) => {
    const navigate = useNavigate();
    const location = useLocation();
    const params = useParams();
    const [searchParams, setSearchParams] = useSearchParams({});

    return (
      <Component
        navigate={navigate}
        location={location}
        params={params}
        searchParam={searchParams}
        onSearchParams={setSearchParams}
        {...props}
      />
    );
  };

  return Wrapper;
};
