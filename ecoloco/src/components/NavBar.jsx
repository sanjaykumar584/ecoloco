import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/firebase';

function NavBar() {
  const [user, setUser] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // For mobile menu toggle
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser); // User is signed in
      } else {
        setUser(null); // Redirect to login if signed out
      }
    });

    return () => unsubscribe(); // Cleanup on unmount
  }, [navigate]);

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleProfileClick = () => {
    navigate('/profile');
  };

  return (
    <nav className="relative px-8 py-4 flex justify-between items-center bg-white">
      <img
        className="h-10 cursor-pointer"
        src={'./src/assets/logo.png'}
        alt="Logo"
        onClick={() => navigate('/')}
      />
      <div className="lg:hidden">
        <button
          className="navbar-burger flex items-center text-blue-600 p-3"
          onClick={handleMenuToggle}
        >
          <svg
            className="block h-4 w-4 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Mobile menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </button>
      </div>

      <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
			<li><Link to="/" className="text-sm text-gray-400 hover:text-gray-500">Home</Link></li>
			<li className="text-gray-300">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
				</svg>
			</li>
			<li><Link to="/about" className="text-sm text-gray-400 hover:text-gray-500" >About Us</Link></li>
			<li className="text-gray-300">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
				</svg>
			</li>
			<li><Link to="/enquiry" className="text-sm text-gray-400 hover:text-gray-500" >Enquiry</Link></li>
			<li className="text-gray-300">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
				</svg>
			</li>
			<li><Link to="/services" className="text-sm text-gray-400 hover:text-gray-500" >Services</Link></li>
		</ul>	

      <div>
        {user ? (
          <img
            className="h-10 cursor-pointer"
            src={'./src/assets/user.png'}
            alt="User Profile"
            onClick={handleProfileClick}
          />
        ) : <button 
				onClick={() => {
					navigate('/login')
				}}
				className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-gray-100 hover:text-green-600 transition-colors">
                Sign In
              </button>}
      </div>
    </nav>
  );
}

export default NavBar;