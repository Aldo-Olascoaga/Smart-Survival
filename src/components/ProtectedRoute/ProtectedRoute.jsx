const ProtectedRoute = ({ children }) => {
  const loggedIn = localStorage.getItem('token');
  if (!loggedIn) {
    return window.location.replace(
      'https://main.drvblo32vuwsq.amplifyapp.com/login'
    );
  }
  return children;
};

export default ProtectedRoute;
