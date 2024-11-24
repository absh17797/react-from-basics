// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../components/NavBar'
// import Home from '../pages/Home';
// import AboutUs from '../pages/AboutUs';
// import Contact from '../pages/ContactUs';

// const AppRouter = () => {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about-us" element={<AboutUs />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </Router>
//   );
// };

// export default AppRouter;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PublicRoutes from './PublicRoutes';
import ProtectedRoutes from './ProtectedRoutes';
import Home from '../pages/Home';
import AboutUs from '../pages/AboutUs';
import Contact from '../pages/ContactUs';
import Dashboard from '../pages/Dashboard';
import Counter from '../pages/Counter';
import Profile from '../components/Profile/Profile';


const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<PublicRoutes><Home /></PublicRoutes>} />
        <Route path="/about-us" element={<PublicRoutes><AboutUs /></PublicRoutes>} />
        <Route path="/contact" element={<PublicRoutes><Contact /></PublicRoutes>} />
        <Route path="/counter" element={<PublicRoutes><Counter /></PublicRoutes>} />
        <Route path="/profile" element={<PublicRoutes><Profile /></PublicRoutes>} />

        {/* Protected Routes */}
        <Route path="/admin" element={<ProtectedRoutes role="admin"><Dashboard /></ProtectedRoutes>} />
      </Routes>
    </Router>
  );
};

export default AppRouter;

