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
import Counter from '../components/Counter';
import Profile from '../pages/Profile';
import ToDoList from '../components/ToDo/ToDoList';
import ToDoAddUpdate from '../components/ToDo/ToDoAddUpdate';
import Products from '../pages/Products';
import Cart from '../components/CartListing';
import { CartProvider } from '../context/CartContext';


const AppRouter = () => {
  return (
    <Router>
      {/* <Header /> */}
      <Navbar />
      <Routes>
      {/*  
      FOR TESTING - PENDING
        <Route path="/" element={<PublicRoutes>
          <CartProvider>
            <Products />
          </CartProvider>
        </PublicRoutes>} />

        <Route path="/about-us" element={
          <PublicRoutes>
            <CartProvider>
              <Cart />
          </CartProvider>
          </PublicRoutes>
        }/> 
      */}
        <Route path="/" element={<PublicRoutes><Home /></PublicRoutes>} />
        <Route path="/about-us" element={<PublicRoutes><AboutUs /></PublicRoutes>} />
        <Route path="/contact" element={<PublicRoutes><Contact /></PublicRoutes>} />

        {/* Assignment 1 - Cart Counter and State & rops   */}
        <Route path="/counter" element={<PublicRoutes><Counter /></PublicRoutes>} />
        <Route path="/profile" element={<PublicRoutes><Profile /></PublicRoutes>} />
        {/* Assignment 2  - ToDo List */}
        <Route path="/todos" element={<PublicRoutes><ToDoList /></PublicRoutes>} />
        <Route path="/todos/add" element={<PublicRoutes><ToDoAddUpdate /></PublicRoutes>} />
        <Route path="/todos/edit/:id" element={<PublicRoutes><ToDoAddUpdate /></PublicRoutes>} />

        {/* Assignment 3 - Use Context */}
        <Route path="/products" element={<PublicRoutes><Products /></PublicRoutes>} />

        {/* Protected Routes */}
        <Route path="/admin" element={<ProtectedRoutes role="admin"><Dashboard /></ProtectedRoutes>} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
};

export default AppRouter;

