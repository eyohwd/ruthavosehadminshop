import React from 'react';
import "./homes.css";
import { Search, ShopOutlined, ShoppingCartOutlined } from '@material-ui/icons';
import { Badge } from '@material-ui/core';
import Slider from '../../tetsComponents/slider/Slider';
import Categories from '../../tetsComponents/categories/Categories';
import Products from '../../tetsComponents/products/Products';
import NewsLetter from '../../tetsComponents/newsLetter/NewsLetter';


const Homes = () => {
  return (
    <div>
        <div className='navbar'>
          <div className='wrapper'>
            <div className='left'>
            <span className='language'>EN</span>
                <div className='searchContainer'>
                    <Search style={{fontSize: "20px"}}/>
                   <input/>
                </div>
            </div>
            <div className='center'>
                <h1>EYOH SHOP.</h1>
            </div>
            <div className='right'>
                <div className='menuItem'>REGISTER</div>
                <div className='menuItem'>LOGIN</div>
                <div className='menuItem'>
                    <Badge badgeContent={4} color='primary'>
                        <ShoppingCartOutlined/>
                    </Badge>
                </div>
            </div>
          </div>
          
          
        </div>
        <Slider/>
        <Categories/>
          <Products/>
          <NewsLetter/>
    </div>
  );
}

export default Homes;
