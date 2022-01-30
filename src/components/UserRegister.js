import React from 'react'
import {Helmet} from 'react-helmet'
import {Header, Title, HeaderContainer} from './../elements/Header'
import {Form, Input, BtnContainer} from '../elements/FormElements'
import ButtonHeader from './../elements/ButtonHeader'
import ImgLogin from './../images/registered.png' 


const UserRegister = () => {
    return ( 
        <>
            <Helmet>
                <title>Create Account</title>
            </Helmet>

            <Header>
                <HeaderContainer>
                    <Title>Create Account</Title>
                    <div>
                        <ButtonHeader to='/login'>Login</ButtonHeader>
                    </div>
                </HeaderContainer>
            </Header>

            <Form>
                <img src={ImgLogin} className="login-img" alt="Logo"/>
                <Input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                />
                <Input
                    type="password"
                    name="password"
                    placeholder="Password"
                />
                <Input
                    type="password"
                    name="password2"
                    placeholder="Confirm Password"
                />
                <BtnContainer>
                    <ButtonHeader as='button' primario type='submit'>Create Account</ButtonHeader>
                </BtnContainer>
            </Form>
        </>
     );
} 
 
export default UserRegister