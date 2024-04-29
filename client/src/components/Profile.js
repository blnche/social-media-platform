// import React from 'react';
import { Button, Flex, Typography, Avatar, Image, Card } from 'antd';
import { PlusCircleOutlined, MessageOutlined, UserOutlined, EnvironmentOutlined, HeartOutlined } from '@ant-design/icons';
const { Title } = Typography;

export default function Profile() {
    return (
        <>
            {/* <Header /> */}
            <main>
                <h2>Hello Profile</h2>
                <Flex className="userInfos" justify='center' align='center'>
                            <Avatar shape='square' size={64} src={'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'} />
                    <Flex vertical>
                        <Flex>
                            <Title level={3}>Firstname Lastname</Title>
                        </Flex>
                        <Flex vertical>
                            <p>X trips this year</p>
                            <p>X trips in total</p>
                        </Flex>
                    </Flex>
                    <Flex vertical gap="small" align='start'>
                        <Button type="text" icon={<PlusCircleOutlined />}>Follow</Button>
                        <Button type="text" icon={<MessageOutlined />}>Message</Button>
                    </Flex>
                </Flex>
                <section className="userPostList">
                    <Flex wrap='wrap' justify='center' gap='small'>
                        <Image 
                            width={110}
                            preview={{
                                imageRender: () => (
                                    <Card
                                        style={{
                                            width: 350,
                                        }}
                                    >
                                        <Flex vertical align='center'>
                                            <img src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" className="userProfilePicture" height='200px' width='200px' style={{borderRadius: '0.5rem'}}/>
                                            <Flex style={{width: '100%'}} justify='space-evenly'>
                                                <Flex gap='small' justify='space-around'>
                                                    <EnvironmentOutlined/>
                                                    <p>Okinawa, Japon</p>
                                                </Flex>
                                                <Flex gap='small' justify='space-around'>
                                                    <HeartOutlined />
                                                    <MessageOutlined />
                                                </Flex>
                                            </Flex>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cras fermentum odio eu feugiat.</p>
                                        </Flex>
                                    </Card>
                                ), toolbarRender: () => null,
                            }}
                            src='https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
                        />
                        <Image 
                            width={110}
                            preview={{
                                imageRender: () => (
                                    <Card
                                        style={{
                                            width: 350,
                                        }}
                                    >
                                        <Flex vertical align='center'>
                                            <img src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" className="userProfilePicture" height='200px' width='200px' style={{borderRadius: '0.5rem'}}/>
                                            <Flex style={{width: '100%'}} justify='space-evenly'>
                                                <Flex gap='small' justify='space-around'>
                                                    <EnvironmentOutlined/>
                                                    <p>Okinawa, Japon</p>
                                                </Flex>
                                                <Flex gap='small' justify='space-around'>
                                                    <HeartOutlined />
                                                    <MessageOutlined />
                                                </Flex>
                                            </Flex>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cras fermentum odio eu feugiat.</p>
                                        </Flex>
                                    </Card>
                                ), toolbarRender: () => null,
                            }}
                            src='https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
                        />
                        <Image 
                            width={110}
                            preview={{
                                imageRender: () => (
                                    <Card
                                        style={{
                                            width: 350,
                                        }}
                                    >
                                        <Flex vertical align='center'>
                                            <img src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" className="userProfilePicture" height='200px' width='200px' style={{borderRadius: '0.5rem'}}/>
                                            <Flex style={{width: '100%'}} justify='space-evenly'>
                                                <Flex gap='small' justify='space-around'>
                                                    <EnvironmentOutlined/>
                                                    <p>Okinawa, Japon</p>
                                                </Flex>
                                                <Flex gap='small' justify='space-around'>
                                                    <HeartOutlined />
                                                    <MessageOutlined />
                                                </Flex>
                                            </Flex>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cras fermentum odio eu feugiat.</p>
                                        </Flex>
                                    </Card>
                                ), toolbarRender: () => null,
                            }}
                            src='https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
                        />
                        <Image 
                            width={110}
                            preview={{
                                imageRender: () => (
                                    <Card
                                        style={{
                                            width: 350,
                                        }}
                                    >
                                        <Flex vertical align='center'>
                                            <img src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" className="userProfilePicture" height='200px' width='200px' style={{borderRadius: '0.5rem'}}/>
                                            <Flex style={{width: '100%'}} justify='space-evenly'>
                                                <Flex gap='small' justify='space-around'>
                                                    <EnvironmentOutlined/>
                                                    <p>Okinawa, Japon</p>
                                                </Flex>
                                                <Flex gap='small' justify='space-around'>
                                                    <HeartOutlined />
                                                    <MessageOutlined />
                                                </Flex>
                                            </Flex>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cras fermentum odio eu feugiat.</p>
                                        </Flex>
                                    </Card>
                                ), toolbarRender: () => null,
                            }}
                            src='https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
                        />
                        <Image 
                            width={110}
                            preview={{
                                imageRender: () => (
                                    <Card
                                        style={{
                                            width: 350,
                                        }}
                                    >
                                        <Flex vertical align='center'>
                                            <img src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" className="userProfilePicture" height='200px' width='200px' style={{borderRadius: '0.5rem'}}/>
                                            <Flex style={{width: '100%'}} justify='space-evenly'>
                                                <Flex gap='small' justify='space-around'>
                                                    <EnvironmentOutlined/>
                                                    <p>Okinawa, Japon</p>
                                                </Flex>
                                                <Flex gap='small' justify='space-around'>
                                                    <HeartOutlined />
                                                    <MessageOutlined />
                                                </Flex>
                                            </Flex>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cras fermentum odio eu feugiat.</p>
                                        </Flex>
                                    </Card>
                                ), toolbarRender: () => null,
                            }}
                            src='https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
                        />
                        <Image 
                            width={110}
                            preview={{
                                imageRender: () => (
                                    <Card
                                        style={{
                                            width: 350,
                                        }}
                                    >
                                        <Flex vertical align='center'>
                                            <img src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" className="userProfilePicture" height='200px' width='200px' style={{borderRadius: '0.5rem'}}/>
                                            <Flex style={{width: '100%'}} justify='space-evenly'>
                                                <Flex gap='small' justify='space-around'>
                                                    <EnvironmentOutlined/>
                                                    <p>Okinawa, Japon</p>
                                                </Flex>
                                                <Flex gap='small' justify='space-around'>
                                                    <HeartOutlined />
                                                    <MessageOutlined />
                                                </Flex>
                                            </Flex>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cras fermentum odio eu feugiat.</p>
                                        </Flex>
                                    </Card>
                                ), toolbarRender: () => null,
                            }}
                            src='https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
                        />
                        
                    </Flex>
                </section>
            </main>
            {/* <Footer /> */}
        </>
        // User profile picture
        // User Posts list
        // Post actions : view post location, follow user (if user not connected and doesn't follow), like post, open post comments 
        // open post comments : add comment, remove user connected comment, like comment, signal comment, view user profile

        // If user profile === user conected

        // Profile actions : settings, view followers list, view following list
        // followers list : remove followers
        // following list : search by username user, stop following
        // search by username : follow, message

        // Else if user profile !== user connected

        // Profile actions : follow user, message user

    );
}