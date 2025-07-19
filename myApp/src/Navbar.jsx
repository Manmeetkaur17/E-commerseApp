import './Navbar.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import React from 'react';
import LocationOnSharpIcon from '@mui/icons-material/LocationOnSharp';
import { Link } from 'react-router-dom';

export default function Navbar(){
    return(

        <div className="nav">
            <div className="nav-logo">MyShop</div>
            <div style={{width:'20%', display:'flex', flexDirection:'column', alignItems:'center',gap:'0'}}>
            <div style={{marginBottom:'-20px',marginTop:'5px'}}>
               <p style={{fontSize:'10px'}}> Deliver to Ropar,140111</p>
            </div>
            <div style={{marginTop:'-15x'}}>
                <LocationOnSharpIcon /> <Link href=""> <b style={{fontSize:'20px', color:'white'}}> Update Location </b> </Link>
            </div>
            </div>
            <div className="menu">
            <input
              type="text"
              className="search-bar"
              placeholder="Search..."
             
            />

                <ul>
                    <li><Link to="/CardsContent"> Home</Link></li>
                    <li className="dropdown">
                      <span className="dropbtn">Products</span>
                      <div className="dropdown-content">
                        <Link to="/products/electronics">Electronics</Link>
                        <Link to="/products/appliances">Home Appliances</Link>
                        <Link to="/products/gadgets">Gadgets</Link>
                      </div>
                    </li>
                    <li><Link to="/Orders">Orders <LoadingIconButton/></Link></li>
                </ul>
            </div>
        </div>

        
    )
}


function LoadingIconButton() {
    const [loading, setLoading] = React.useState(false);
    React.useEffect(() => {
      const timeout = setTimeout(() => {
        setLoading(false);
      }, 2000);
      return () => clearTimeout(timeout);
    });
    return (
      <Tooltip title="Click to see loading">
        <IconButton onClick={() => setLoading(true)} loading={loading}>
          <ShoppingCartIcon style={{ color: 'white' }} fontSize="large" />
        </IconButton>
      </Tooltip>
    );
  }
