import React, { useState } from 'react';


export default function App(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(true); // replace true with your own state for tracking login status

  const handleLogout = () => {
    // perform logout actions here (e.g. clear cookies, session data, etc.)
    setIsLoggedIn(false); // update login status to reflect logout
  };

  if (isLoggedIn) {
    return (
      <button  onClick={handleLogout}>Logout</button>
    );
  } else {
    return null; // render nothing if user is already logged out
  }
}




