import React from 'react'
import {Helmet} from 'react-helmet'
import {Header, Title, HeaderContainer} from './../elements/Header'
import {Form, Input, BtnContainer} from '../elements/FormElements'
import ButtonHeader from './../elements/ButtonHeader'
import ImgLogin from './../images/key.png' 

const Login = () => {
    return ( 
        <>
            <Helmet>
                <title>Login</title>
            </Helmet>

            <Header>
                <HeaderContainer>
                    <Title>Login</Title>
                    <div>
                        <ButtonHeader to='/user-registration'>Create account</ButtonHeader>
                    </div>
                </HeaderContainer>
            </Header>

            <Form>
                <img src={ImgLogin} className="login-img2" alt="Logo"/>
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
                <BtnContainer>
                    <ButtonHeader as='button' primario type='submit'>Login</ButtonHeader>
                </BtnContainer>
            </Form>
        </>
     );
}
 
export default Login;