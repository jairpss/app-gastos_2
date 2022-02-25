import React, {useState} from 'react'
import {Helmet} from 'react-helmet'
import {Header, Title, HeaderContainer} from './../elements/Header'
import {Form, Input, BtnContainer} from '../elements/FormElements'
import ButtonHeader from './../elements/ButtonHeader'
import ImgLogin from './../images/registered.png' 
import {auth} from './../firebase/firebaseConfig'
import {useNavigate} from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth'

const UserRegister = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')
    const [alertState, setAlertState] = useState(false)
    const [alert, setAlert] = useState({})

    const handleChange = (e) => {
        switch(e.target.name) {
            case 'email':
                setEmail(e.target.value);
                break;
            case 'password':
                setPassword(e.target.value);
                break;
            case 'password2':
                setPassword2(e.target.value);
                break;
            default:
                break;
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setAlertState(false);
        setAlert({});

        const regExpression = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;
        if(!regExpression.test(email)){
            setAlertState(true);
            setAlert({
                tipo: 'error',
                mensaje: 'Provide a valid email address'
            });
            return;
        }
        if(email === '' || password === '' || password2 === ''){
            setAlertState(true);
            setAlert({
                tipo: 'error',
                mensaje: 'Por favor llena todos los campos'
            });
            
            return;
        }
        if(password !== password2){
            setAlertState(true);
            setAlert({
                tipo: 'error',
                mensaje: 'Las contraseñas no coinciden'
            });
            return;
        }
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            navigate('/');
        } catch(error){
            setAlertState(true);

            let message;
            switch(error.code){
                case 'auth/invalid-password':
                    message = 'The password needs at least 6 characters.'
                    break;
                case 'auth/email-already-in-use':
                    message = 'This email is already in use.'
                    break;
                case 'auth/invalid-email':
                    message = 'This email is not valid.'
                    break;
                default:
                    message = 'It is been an error creating the account.'
                    break;
            }
            setAlert({
                tipo: 'error',
                mensaje: message
            });
        }
    }

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

            <Form onSubmit={handleSubmit}>
                <img src={ImgLogin} className="login-img" alt="Logo"/>
                <Input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={email}
                    onChenge={handleChange}
                />
                <Input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChenge={handleChange}
                />
                <Input
                    type="password"
                    name="password2"
                    placeholder="Confirm Password"
                    value={password2}
                    onChenge={handleChange}
                />
                <BtnContainer>
                    <ButtonHeader as='button' primario type='submit'>Create Account</ButtonHeader>
                </BtnContainer>
            </Form>
        </>
     );
} 
 
export default UserRegister