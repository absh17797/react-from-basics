import { useState } from 'react'
import './App.css'
import AppRouter from './routes/AppRouter.jsx';
import { AuthProvider } from './context/AuthContext';
import Header from './layouts/Header';
import Footer from './layouts/Footer.jsx';

function App() {
  return (
    <>
      <div className="d-flex flex-column vh-100">
        {/* <AppRouter /> */}
        <AuthProvider>
          <Header />
          <AppRouter />
        </AuthProvider>
        <Footer />
      </div>
    </>
  )
}

export default App
