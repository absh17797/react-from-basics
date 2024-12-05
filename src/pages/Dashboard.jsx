import React, { useEffect } from 'react'
import { toast } from 'react-toastify';
const Dashboard = () => {
  useEffect(() => {
    toast.success('Only acess by protected routes',{
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  })
  return (
    <div>Dashboard - Only acess by protected routes</div>
  )
}

export default Dashboard