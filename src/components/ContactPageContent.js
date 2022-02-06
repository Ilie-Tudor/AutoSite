import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { MailOutlined, PhoneOutlined, CompassOutlined } from '@ant-design/icons';
import styled from 'styled-components';

import colors from '../themes/defaultTheme';


const ContentWrapper = styled.div`
    position: relative;
    width: 100%;
    >.contactInfoWrapper{
        position: relative;
        width: 100%;
        max-width: 1200px;
        margin: auto;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        >.infoBoxWrapper{
            position: relative;
            min-width: 300px;
            max-width: 395px;
            height: 200px;
            width: 100%;
            background: ${colors.secondary_collor4};
            border-left: 1px solid white;
            border-right: 1px solid white;
            border-bottom: 1px solid white;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            >.infoIcon{
                font-size: 35px;
                position: relative;
                width: 100%;
                text-align: center;
                padding: 10px;   
            }
            >.infoContent{
                position: relative;
                width: 100%;
                text-align: center;
                padding: 10px;
                color: ${colors.auxiliary_color5}; 
            }
        }
    }
    >.formWrapper{
        position: relative;
        width: 100%;
        max-width: 1200px;
        margin: auto;
        margin-top: 50px;
        padding: 0 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        >div{
            padding: 10px 45px;
            border: 1px solid ${colors.primary_color};
            margin: 0 5px;
            box-sizing: border-box;
            width: 100%;
            max-width: 1200px;
        }
        .formHeader{
            font-size: 30px;
            padding: 10px 0;
        }
        .formContent{
            position: relative;
            width: 100%;
            
        }
        
    }
    >.mapsWrapper{
        position: relative;
        width: 100%;
        display: flex;
        justify-content: center;
        margin-top: 50px;
        >div{
            position: relative;
            display: inline-block;
            width: 100%;
            max-width: 1200px;
            padding: 10px;
            display: flex;
            justify-content: flex-end;
            box-sizing: border-box;
            >iframe{
                width: 50%;
                max-width: 600px;
                height: 600px;
            }
        }

    }

`

export default function ContactPageContent() {


    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <ContentWrapper>
            <div className='contactInfoWrapper'>
                <div className='infoBoxWrapper'>
                    <div className='infoIcon'><MailOutlined style={{ color: colors.auxiliary_color5 }} /></div>
                    <div className='infoContent'>Ceva@gmail.com</div>
                </div>
                <div className='infoBoxWrapper'>
                    <div className='infoIcon'><PhoneOutlined style={{ color: colors.auxiliary_color5 }} /></div>
                    <div className='infoContent'>07 n-am cartela</div>
                </div>
                <div className='infoBoxWrapper'>
                    <div className='infoIcon'><CompassOutlined style={{ color: colors.auxiliary_color5 }} /></div>
                    <div className='infoContent'>adresa trebuie trecuta aici</div>
                </div>
            </div>

            <div className='formWrapper'>
                <div>

                    <div className='formHeader'>Write to us</div>
                    <div className='formContent'>

                        <Form
                            layout='vertical'
                            name="basic"

                            labelCol={{
                                span: 6,
                            }}


                            initialValues={{
                                remember: true,
                            }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete="off"
                        >
                            <Form.Item
                                label="Name"
                                name="Name"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Name!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="Surname"
                                name="Surname"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Surname!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="Email"
                                name="Email"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Email!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="Phone"
                                name="Phone"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Phone!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="Message"
                                name="Message"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Message!',
                                    },
                                ]}
                            >
                                <Input.TextArea showCount maxLength={1024} rows={8}/>
                            </Form.Item>


                            <Form.Item
                                wrapperCol={{
                                    offset: 0,
                                }}
                            >
                                <Button type="primary" htmlType="submit">
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>

            <div className='mapsWrapper'>
                <div>
                    <iframe src={"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1424.7030103869229!2d26.010993!3d44.424833!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b20050554af8ff%3A0x9abbed5d829f3986!2sSC.PAMIR%20TORB%20MOTORS%20SRL.!5e0!3m2!1sro!2sro!4v1644157931739!5m2!1sro!2sro"} allowfullscreen={"true"} loading={"lazy"}></iframe>
                </div>
            </div>

        </ContentWrapper>
    );
}
