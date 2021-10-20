import logo from './logo.svg';
import './App.css';
import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";

// function App() {
//   return (
//     <div className="App.js">
//       <header className="App-header">
//         Welcome to our Homepage
//        {/* img src={logo} className="App-logo" alt="logo" /> */}
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

const App = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  return (
    <div
      className="App.js"
      style={{
        
      }}
    >
      <h2 className="title">Welcome to our new Homepage</h2>
      <Button
        className="dish_choice"
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        MENU
      </Button>
      <Menu
        className="menu"
        keepMounted
        anchorEl={anchorEl}
        onClose={handleClose}
        open={Boolean(anchorEl)}
      >
        <MenuItem onClick={handleClose}>Pizza</MenuItem>
        <MenuItem onClick={handleClose}>Salad</MenuItem>
        <MenuItem onClick={handleClose}>Drinks</MenuItem>
        <MenuItem onClick={handleClose}>Sweets</MenuItem>
      </Menu>
    </div>
  );
};
  
export default App;