import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const handleNavigation = () => {
    const email = 'chrissession44@gmail.com';
    const session = 'React-Hooks-Session_June10';

    navigate(`/chris/${encodeURIComponent(email)}/${session}`);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Welcome to Home</h2>
      <button onClick={handleNavigation}>
        Go to Chris's Session
      </button>
    </div>
  );
}

export default Home;
