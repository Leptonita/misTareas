import { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserLock, faCircleXmark, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { OverlayLogin, Header, Form, DivInput, Input, Icon, DivBtns, ErrorMessage, BtnsIds, DivMessage } from './Login-styled';
import { useNavigate } from "react-router-dom";
import emailjs from '@emailjs/browser';
import { getItemsByCondition } from '../application/api'
import { GlobalStyles } from '../styles/Global';
import useTheme from '../hook/useTheme';
import { ThemeProvider } from 'styled-components';
import { light, dark, happy } from '../styles/Theme.styled';

const UpdateUserLogin = () => {

    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [email, setEmail] = useState("");
    const [validEmail, setValidEmail] = useState(false);

    const [isFound, setIsFound] = useState(false);
    const [message, setMessage] = useState("Cambiar contraseña de la cuenta:");
    const { selectedTheme, setSelectedTheme, toggleTheme } = useTheme(happy)

    const formUpdate = useRef();

    useEffect(() => {
        getUserData();
    }, []);

    const getUserData = async () => {
        const us = await getItemsByCondition("ListaUsers", "email", email);
        setUser(us);
    }

    useEffect(() => {
        emailValidation();
    }, []);

    /** direct redirection if email is found    
     useEffect(() => {
            if (isFound) {
               navigate('/pwd/' + user[0].email);
            }
        }, [isFound]); 
        
        */

    const handleEmail = (event) => {
        const inputEmail = event.target.value;

        //email no empty
        if (inputEmail !== undefined) {
            setEmail(inputEmail);
        }
    }

    const emailValidation = () => {
        //email validation
        const expression = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        (expression.test(email)) ? setValidEmail(true) : setValidEmail(false);
        //console.log({ validEmail });
    }

    const handleEmailFs = async (event) => {
        event.preventDefault();
        emailValidation();

        const userStored = await getItemsByCondition("ListaUsers", "email", email)

        //if user's email  already exists 
        if (userStored) {

            if (userStored.length > 0) {
                setUser(userStored);
                console.log('TO REMOVE', 'encontrado', "id", userStored[0].id);
                setIsFound(true);
                sendEmail();
                //setMessage('Te enviaremos email con instrucciones');
                //setMessage(htmlMessage())
                console.log("email user:", email);
            } else {
                //hay que recoger error conexion FS
                setMessage('Hay un problema, email no encontrado ');
            }
        } else {
            setMessage('Correo electrónico no registrado');
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();
        setEmail('');

        //setUserLS(null);
        setValidEmail(false);

        setIsFound(false);
    }
    /*
        const htmlMessage = () => {
            return { __html: "<a href=\"mailto:email@example.com?subject= \' Hello \' &body=\'Just popped in to say hello\'\">Click to Send an Email</a>", }
        }
         const webURL = {{
            __html: ${`https://www.hilovisual.tv/mt/pwd/${user[0].email}`}
        }}; */

    //const bodyEmail = `Puedes modificar tu contraseña en: ${webURL} `;

    const sendEmail = () => {
        // e.preventDefault();  prevents the page from reloading when you hit “Send”

        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, formUpdate.current, process.env.REACT_APP_PUBLIC_KEY)
            .then((result) => {
                // show the user a success message
                setMessage("email en camino");
                console.log(result.text);
            }, (error) => {
                // show the user an error
                setMessage("algo no funciona");
                console.log(error.text);
            });
    };


    console.log({ message });
    return (
        <ThemeProvider theme={selectedTheme}>
            <GlobalStyles />

            <OverlayLogin>
                <Form onSubmit={onSubmit} ref={formUpdate}>
                    <Header>
                        misTareas <FontAwesomeIcon icon={faUserLock} />
                        <br />
                        <DivMessage>{message}</DivMessage>
                    </Header>
                    <DivInput>
                        <Input name="user_email" type="email" placeholder="Correo electrónico" value={email}
                            onChange={handleEmail}
                            onKeyUp={emailValidation}
                            onBlur={emailValidation}
                            isValid={validEmail}
                        />

                        <Icon valid={validEmail}>
                            {validEmail
                                ? <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1f9e34", }} />
                                : <FontAwesomeIcon icon={faCircleXmark} style={{ color: "#f00000", }} />
                            }
                        </Icon>
                        <ErrorMessage valid={validEmail}>
                            {validEmail ? "" : "Email no válido, debe contener al menos letras o números, una @ y un . (punto)."}
                        </ErrorMessage>

                    </DivInput>

                    <DivBtns>
                        {/*  {isFound && <div dangerouslySetInnerHTML={htmlMessage()} ></div>} */}
                        <BtnsIds onClick={handleEmailFs}> Enviar </BtnsIds>
                    </DivBtns>
                    <br />

                </Form>
            </OverlayLogin >

        </ThemeProvider>
    )

}
export default UpdateUserLogin;