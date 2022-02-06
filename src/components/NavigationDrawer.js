import React from 'react';
import { useState } from 'react';
import { Button, Drawer } from 'antd';
import {MenuOutlined, CloseOutlined} from '@ant-design/icons';
import colors from '../themes/defaultTheme';
import styled from 'styled-components';
import useWindowSize from '../customHooks/useWindowSize';


const WideScreenLinksWrapper  = styled.div`
    position: relative;
    >*{
        font-size: 15px;
        margin: 0 20px;
        padding: 5px;
        color: ${colors.auxiliary_color2};
        :hover{
            color: ${colors.auxiliary_color3};
        }
    }

`
const CloseDrawerIconStyle = styled.div`
    color: ${colors.auxiliary_color2};
    :hover{
        color: ${colors.auxiliary_color3};
    }
`
const CloseDrawerIcon = (props,  children)=>{
    return(
        <CloseDrawerIconStyle>
            <CloseOutlined/>
        </CloseDrawerIconStyle>
        
    )
}

const DrawerContentStyle = styled.div`
    padding-top: 20px;
    >p>a{
        font-size: 15px;
        color: ${colors.auxiliary_color2};
        :hover{
            color: ${colors.auxiliary_color3};
        }
    }
`

const DrawerContent = (props,  children)=>{
    return(
        <DrawerContentStyle>
            <p>
                <a  href='/'>About</a>
            </p>
            <p>
                <a  href='/'>Services</a>
            </p>
            <p>
                <a  href='/'>Contact</a>
            </p>
        </DrawerContentStyle>
        
    )
}

export default function NavigationDrawer() {

    const [visible, setVisible] = useState(false);
    const { width, heigth } = useWindowSize();

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    if (width < 1200)
        return (
            <>
                <Button type="text" onClick={showDrawer} size={'large'} icon={<MenuOutlined style={{color: 'white', fontSize: '22px'}} />}>
                    
                </Button>
                <Drawer title="Basic Drawer" 
                        placement="left" 
                        onClose={onClose} 
                        visible={visible} 
                        keyboard={true}
                        width={250} 
                        title={<h3 style={{color: colors.auxiliary_color2, padding: 0, margin: 0}}>Menu</h3>}
                        closeIcon={<CloseDrawerIcon/>}
                        drawerStyle={{backgroundColor: colors.primary_color, color: colors.auxiliary_color2}}
                        headerStyle={{backgroundColor: colors.primary_color,borderColor: colors.auxiliary_color2}}
                        contentWrapperStyle={{borderColor: colors.secondary_collor2}}
                        >

                  <DrawerContent/>
                    
                </Drawer>
            </>
        );
    else
        return (
            <WideScreenLinksWrapper>
                <a href='/'>About</a>
                <a href='/'>Services</a>
                <a href='/'>Contact</a>
            </WideScreenLinksWrapper>
        );

}
