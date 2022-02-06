import React from 'react';
import { Button} from 'antd';
import {MenuOutlined, CloseOutlined} from '@ant-design/icons';
import styled from 'styled-components';
import landingImg from '../images/malusi-msomi-cpHZQ7zg9aQ-unsplash.jpg'

const LandingImgWrapper = styled.div`
    position: relative;
    width: 100%;
    background: gray;
    overflow: hidden;
    max-height: 700px;
    >img{
        position: relative;
        width: 100%;
        /* top: 50%;
        left: 50%;
        transform: translate(-50%,-50%) */
    }
`
const LandingHeadlineWrapper = styled.div`
    position: absolute;
    width: 600px;
    z-index: 99; // de modificat  asta
    top: 30%;
    left: 50%;
    transform: translate(-50%,-50%);
    text-shadow: 2px 2px 10px white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    >h1{
        font-size: 60px;
    }
    >div{
        margin: auto;
    }
`


const Section_1_Wrapper = styled.div`
    position: relative;
    max-width: 1200px;
    width: 100%;
    padding: 0 10px;
    padding-top: 50px;
    margin: auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    >h1{
        position: relative;
        width: 100%;
        text-decoration: underline;
    }
`

const Section_2_Wrapper = styled.div`
    margin-top: 50px;
    >.cardsWrapper{
        position: relative;
        width: 100%;
        max-width: 1200px;
        background: grey;
        margin: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        >.card{
            position: relative;
            width: 100%;
            max-width: 400px;
            height: 400px;
            background: darkgray;
            border: 1px solid black;
            box-sizing: border-box;
            padding: 10px 0;
            >.icon{
                position: relative;
                width: 100%;
                display: flex;
                justify-content: center;
                >*{
                    width: 100%;
                    /* width: 150px;
                    height: 150px; */
                    border-radius: 50%;
                    font-size: 70px;
                    padding-bottom: 10px;

                }
            }
            >.title{
                position: relative;
                text-align: center;
                padding: 0 10px;
                width: 100%;
            }
            >.content{
                position: relative;
                width: 100%;
                padding: 0 10px;
                margin-top: 30px;
            }
        }
    }
`

export default function LandingPageContent() {
  return (
    <div className='content'>
        <LandingHeadlineWrapper>
            <h1>Ceva headline acilea</h1>
            <Button size= 'large' ghost={true}>click me</Button>
        </LandingHeadlineWrapper>
        <LandingImgWrapper>
            <img src={landingImg}/>
        </LandingImgWrapper>
        <Section_1_Wrapper>
            <h1>Ceva scris aici</h1>
            <div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of</p>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. </p>
            </div>
        </Section_1_Wrapper>
        <Section_2_Wrapper>
            <div className='cardsWrapper'>
                <div className='card'>
                    <div className='icon'><CloseOutlined/></div>
                    <div className='title'><h1>Titlu</h1></div>
                    <div className='content'><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p></div>
                </div>
                <div className='card'>
                    <div className='icon'><CloseOutlined/></div>
                    <div className='title'><h1>Titlu</h1></div>
                    <div className='content'><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p></div>
                </div>
                <div className='card'>
                    <div className='icon'><CloseOutlined/></div>
                    <div className='title'><h1>Titlu</h1></div>
                    <div className='content'><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p></div>
                </div>
                <div className='card'>
                    <div className='icon'><CloseOutlined/></div>
                    <div className='title'><h1>Titlu</h1></div>
                    <div className='content'><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p></div>
                </div>
                <div className='card'>
                    <div className='icon'><CloseOutlined/></div>
                    <div className='title'><h1>Titlu</h1></div>
                    <div className='content'><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p></div>
                </div>
                <div className='card'>
                    <div className='icon'><CloseOutlined/></div>
                    <div className='title'><h1>Titlu</h1></div>
                    <div className='content'><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p></div>
                </div>
            </div>
        </Section_2_Wrapper>

    </div>
  )
}
