import { useNavigate } from 'react-router-dom';

export const BackButton = () => {
  const navigate = useNavigate();
  
  const handleGoBack = () => {
    navigate(-1); // Go back to previous page in history
  };

  return (
    <button
      onClick={handleGoBack}
      className="text-gray-500 mb-6 hover:text-audiophile-orange transition-colors duration-200"
    >
      Go Back
    </button>
  );
};
