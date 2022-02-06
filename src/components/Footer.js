import React from 'react';
import styled from 'styled-components';
import colors from '../themes/defaultTheme';


const FooterWrapper = styled.div`
    position: relative;
    width: 100%;
    margin-top: 100px;
    background: ${colors.primary_color};
    >.footerContent{
        position: relative;
        width: 100%;
        max-width: 1200px;
        padding: 20px 10px;
        margin: auto;
        >.socialWrapper{
            position: relative;
            width: 100%;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            >.logo{
                width: 100%;
                text-align: center;
            }
            >ul{
                position: relative;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-wrap: wrap;
                padding: 0;
                >li{
                    list-style: none;
                    margin: 0 10px;
                    color: ${colors.auxiliary_color2};
                }
            }
        }
        >.footerMenuWrapper{
            position: relative;
            width: 100%;
            display: flex;
            justify-content: space-evenly;
            flex-wrap: wrap;
            margin-top: 10px;
            >.menuSection{
                width: 100%;
                max-width: 200px;
                margin: 10px;
                
                >div{
                    position: relative;
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    >a{
                        color: ${colors.auxiliary_color5};
                        :hover{
                            color: ${colors.auxiliary_color3};
                        }
                    }
                }
                >h3{
                    color: ${colors.auxiliary_color2};
                }
                >h3>div{
                    position: relative;
                    padding: 0 2px;
                    display: inline-block;
                    text-decoration: underline;
                    
                }
            }

        }
        >.copyrightWrapper{
            color: ${colors.auxiliary_color5};
            width: 100%;
            margin-top: 50px;
            text-align: center;
        }
    }
`

export default function Footer() {
  return (
      <FooterWrapper>
          <div className='footerContent'>
              <div className='socialWrapper'>
                    <div className='logo'><h1>Logo</h1></div>
                    <ul>
                        <li>Facebook</li>
                        <li>Instagram</li>
                        <li>Altceva</li>
                    </ul>
              </div>
              <div className='footerMenuWrapper'>
                    <div className='menuSection'>
                        <h3><div> Legal</div></h3>
                        <div>
                            <a>Terms of service</a>
                            <a>Conditions</a>
                        </div>
                    </div>
                    <div className='menuSection'>
                        <h3><div> Legal</div></h3>
                        <div>
                            <a>Link</a>
                            <a>Link</a>
                            <a>Link</a>
                        </div>
                    </div>
                    <div className='menuSection'>
                        <h3><div> Menu</div></h3>
                        <div>
                            <a>About</a>
                            <a>Services</a>
                            <a>Contact</a>
                        </div>
                    </div>
                    <div className='menuSection'>
                        <h3><div> Where to find us</div></h3>
                        <div>
                            <a>07 n-am cartela</a>
                            <a>emailus@gmail.com</a>
                            <a>Gmail link sau ceva</a>
                        </div>
                    </div>
              </div>
              <div className='copyrightWrapper'>
                    <p>2022 &copy; Copyright by Ilie Tudor</p>
              </div>
          </div>
      </FooterWrapper>
  )
}
