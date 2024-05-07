import { Route, Routes } from 'react-router-dom';
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from 'react-redux';

import Home from './pages/Home';
import Inventory from './pages/Inventory';
import Header from './components/Header'
import Sales from './pages/Sales';
import './App.css';

function App() {
  const error = useSelector((state) => state?.error);
  if (error) {
    toast.error(error?.message ?? "Something went wrong");
  }
  return (
    <div className="App">
     
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/inventory' element={<Inventory/>} />
      <Route path='/sales' element={<Sales/>} />
    </Routes>

    <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: "",
          duration: 1300,
          style: {
            background: "#111",
            color: "#fff",
            border: "1px solid ",
          },

          // Default options for specific types
          success: {
            duration: 1300,
            theme: {
              primary: "green",
              secondary: "black",
            },
          },
        }}
      />
  </div>
  )
}

export default App;
