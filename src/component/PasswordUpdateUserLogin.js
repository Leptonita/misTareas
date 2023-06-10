import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserLock, faCircleXmark, faCircleCheck, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { OverlayLogin, Header, Form, DivInput, Input, Icon, DivBtns, ErrorMessage, BtnsIds, DivMessage } from './Login-styled';
import { useNavigate } from "react-router-dom";
//import { useParams } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import { getItemsByCondition, updateItem } from '../application/api'
import { GlobalStyles } from '../styles/Global';
import useTheme from '../hook/useTheme';
import { ThemeProvider } from 'styled-components';
import { light, dark, happy } from '../styles/Theme.styled';

const PasswordUpdateUserLogin = () => {
    //const { mail } = useParams();
    /** we get the user email from the url parameter mail  */
    const query = new URLSearchParams(useLocation().search);
    const mail = query.get('mail');
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [email, setEmail] = useState(mail);
    const [password, setPassword] = useState('');
    const [validPassword, setValidPassword] = useState(false);
    const [typeInput, setTypeInput] = useState("password");
    const [iconPw, setIconPw] = useState(faEyeSlash);
    const [validEmail, setValidEmail] = useState(false);
    const [isFound, setIsFound] = useState(false);
    const [message, setMessage] = useState("Escribir nueva contraseña para " + email);
    const { selectedTheme, setSelectedTheme, toggleTheme } = useTheme(happy)

    useEffect(() => {
        getUserData();
    }, []);

    const getUserData = async () => {
        const us = await getItemsByCondition("ListaUsers", "email", email);
        setUser(us[0]);
    }

    const updateUserPw = () => {
        updateItem("ListaUsers", user.id, { ...user, "password": password });
    }

    useEffect(() => {
        passwordValidation();
    }, []);

    useEffect(() => {
        if (isFound) {
            navigate('/mistareas');
        }
    }, [isFound]);

    /* 
        const handleEmail = (event) => {
            const inputEmail = event.target.value;
    
            //email no empty
            if (inputEmail !== undefined) {
                setEmail(inputEmail);
            }
        } */
    const handlePassword = (event) => {
        const inputPassword = event.target.value;
        //password validation
        if (inputPassword !== undefined) {
            setPassword(inputPassword);
        }
    }

    const passwordValidation = () => {
        //password validation: 8 to 12 elements
        const expression = /^.{8,12}$/;
        (expression.test(password)) ? setValidPassword(true) : setValidPassword(false);
        // console.log({ validPassword });
    }

    /**/     const emailValidation = () => {
        //email validation
        const expression = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        (expression.test(email)) ? setValidEmail(true) : setValidEmail(false);
        //console.log({ validEmail });
    }

    const handlePasswordFs = async (event) => {
        event.preventDefault();
        emailValidation();
        passwordValidation();

        const userIdStored = await getItemsByCondition("ListaUsers", "email", email)
        console.log({ userIdStored }, { user }, "****************");
        //if user's email  already exists in users Array in localStorage


        if (userIdStored.length > 0) {
            console.log({ userIdStored }, 'encontrado', "userIdStored.id", userIdStored[0].id);
            setIsFound(true);
            updateItem("ListaUsers", userIdStored[0].id, { ...user, "password": password })
            //setUserLS(userStored);
            setMessage('Hemos actualizado la contraseña: ' + password);
            //console.log("email user:", email);

        } else {
            setMessage('Correo electrónico no registrado');
        }
    }

    const hadleTooglePw = () => {
        if (typeInput === "password") {
            setIconPw(faEye);
            setTypeInput("text");
        } else {
            setIconPw(faEyeSlash);
            setTypeInput("password");
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();
        setEmail('');
        setPassword('');
        setValidPassword(false);

        setIsFound(false);

    }


    return (
        <ThemeProvider theme={selectedTheme}>
            <GlobalStyles />

            <OverlayLogin>
                <Form onSubmit={onSubmit}>
                    <Header>
                        misTareas <FontAwesomeIcon icon={faUserLock} />
                        <br />
                        <DivMessage>{message}</DivMessage>
                    </Header>
                    <DivInput>

                        <Input name="Password" type={typeInput} placeholder="Nueva contraseña" value={password}
                            onChange={handlePassword}
                            onKeyUp={passwordValidation}
                            onBlur={passwordValidation}
                            isValid={validPassword}
                        />
                        <Icon onClick={hadleTooglePw} valid={validPassword} style={{ cursor: 'pointer' }}>
                            {validPassword
                                ? <FontAwesomeIcon icon={iconPw} style={{ color: "#1f9e34", }} />
                                : <FontAwesomeIcon icon={iconPw} style={{ color: "#f00000", }} />
                            }
                        </Icon>

                        <ErrorMessage valid={validPassword}>
                            {validPassword ? "" : "se requieren de 8 a 12 caracteres"}
                        </ErrorMessage>

                    </DivInput>

                    <DivBtns>
                        {/* ,logC  sigC*/}
                        <BtnsIds onClick={handlePasswordFs}> Enviar </BtnsIds>
                    </DivBtns>
                    <br />

                </Form>
            </OverlayLogin >

        </ThemeProvider>
    )

}
export default PasswordUpdateUserLogin;