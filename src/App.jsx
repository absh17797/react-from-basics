import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppRouter from './routes/AppRouter.jsx';
import { AuthProvider } from './context/AuthContext';
import Header from './layouts/Header';
import Footer from './layouts/Footer.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="d-flex flex-column vh-100">
        {/* <AppRouter /> */}
        <Header />
        <AuthProvider>
          <AppRouter />
        </AuthProvider>
        <Footer />
      </div>
    </>
  )
}

export default App
