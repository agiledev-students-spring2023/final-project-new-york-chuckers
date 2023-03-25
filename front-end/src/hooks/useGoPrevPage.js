import { useNavigate } from 'react-router-dom';

export const useGoPrevPage = () => {
  const navigate = useNavigate();

  return [() => navigate(-1)];
};
