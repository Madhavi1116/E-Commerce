import logo from './logo.svg';
import './App.css';
import React, { useMemo, useState } from 'react';
import RegistrationForm from './Tasks/RegistrationForm';
import LiveClock from './Tasks/LiveClock';
import Routing from './Tasks/Routing';
import StateClass from './Tasks/StateClass';
import NoteApp from './Tasks/NoteApp';
import Pagination from './Tasks/Pagination';
import Home from './E-commerce/Pages/Home';
import Navbar from './E-commerce/Pages/Navbar';
import Category from './E-commerce/Pages/Category';
import { Provider } from 'react-redux';
import store from './E-commerce/Store/Store';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cart from './E-commerce/Pages/Cart';
import { lightTheme, darkTheme } from './E-commerce/Themes';
import { useSelector } from 'react-redux';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import ProductDetails from './E-commerce/Pages/ProductDetails';

function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }
  const currentTheme = useMemo(() => {
      return theme === "light" ? lightTheme : darkTheme;
    }, [theme]);


  return (
    <div>
      {/* <RegistrationForm /> */}
      {/* <LiveClock /> */}
      {/* <NoteApp /> */}
      {/* <Pagination /> */}
      {/* <Routes /> */}
      {/* <Routing /> */}
      {/* <StateClass /> */}
      <Provider store={store}>
        <ThemeProvider theme={currentTheme}>
          <CssBaseline />
          <Router>
            <Navbar toggleTheme={toggleTheme} currentTheme={theme} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/category/:category" element={<Category />} />
              <Route path="/Cart" element={<Cart />} />
              <Route path="/product/:id" element = {<ProductDetails />} />
            </Routes>
          </Router>
        </ThemeProvider>
      </Provider>
    </div>
  );
}

export default App;

// import React, { useMemo, useState } from 'react';
// import './App.css';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import { ThemeProvider } from '@emotion/react';
// import { CssBaseline } from '@mui/material';
// import { useSelector } from 'react-redux';

// // Import Components
// import RegistrationForm from './Tasks/RegistrationForm';
// import LiveClock from './Tasks/LiveClock';
// import Routing from './Tasks/Routing';
// import StateClass from './Tasks/StateClass';
// import NoteApp from './Tasks/NoteApp';
// import Pagination from './Tasks/Pagination';
// import Home from './E-commerce/Pages/Home';
// import Navbar from './E-commerce/Pages/Navbar';
// import Category from './E-commerce/Pages/Category';
// import Cart from './E-commerce/Pages/Cart';
// import ProductDetails from './E-commerce/Pages/ProductDetails';

// // Store and Themes
// import store from './E-commerce/Store/Store';
// import { lightTheme, darkTheme } from './E-commerce/Themes';

// function App() {
//   // State and theme toggling logic
//   const [theme, setTheme] = useState("light");
//   const toggleTheme = () => {
//     setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
//   };

//   const currentTheme = useMemo(() => {
//     return theme === "light" ? lightTheme : darkTheme;
//   }, [theme]);

//   return (
//     <div>
//       <Provider store={store}>
//         <ThemeProvider theme={currentTheme}>
//           <CssBaseline />
//           <Router>
//             {/* Navbar with theme toggling */}
//             <Navbar toggleTheme={toggleTheme} currentTheme={theme} />

//             {/* Routes for different pages */}
//             <Routes>
//               <Route path="/" element={<Home />} />
//               <Route path="/category/:category" element={<Category />} />
//               <Route path="/Cart" element={<Cart />} />
//               <Route path="/product/:id" element={<ProductDetails />} />
//               {/* Add more routes as needed */}
//             </Routes>
//           </Router>
//         </ThemeProvider>
//       </Provider>
//     </div>
//   );
// }

// export default App;
