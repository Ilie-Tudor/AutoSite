import React from 'react';
import styled from 'styled-components';
import NavigationDrawer from './NavigationDrawer';

import colors from '../themes/defaultTheme';


const NavbarWrapper = styled.div`
    position: relative;
    top: 0;
    left: 0;
    background: ${colors.primary_color};
    width: 100%;
    height: 60px;
    padding: 0 20px;
    display: flex;
    >.logoWrapper{
        position: relative;
        display: inline-block;
        width: 50px;
        height: 50px;
        top: 50%;
        transform: translateY(-50%);
        >div{
            position: relative;
            top: 50%;
            left: 50%;
            font-size: 20px;
            text-align: center;
            transform: translate(-50%,-50%);
            color: white;
        }
    }
    >.menuWrapper{
        position: relative;
        display: inline-block;
        top: 50%;
        transform: translateY(-50%);
        margin-left: auto;
        display: flex;
        justify-content: end;
        align-items: center;
    }
`

export default function Header() {
  return (
    <NavbarWrapper>
        <div className='logoWrapper'>
            <div> Logo</div>
        </div>
        <div className='menuWrapper'>
            <NavigationDrawer/>
        </div>
    </NavbarWrapper>
  )
}
