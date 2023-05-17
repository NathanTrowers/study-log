import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InfoIcon from '../InfoIcon';
import { validateRegistration } from '../../Validators/RegistrationValidator';
import { post } from '../../Utils/Request';
import { formMessages, setFailMessage, setSuccessMessage } from '../../Utils/Message';
import '../_styles/Form.css';

const Register = () => {
    const [ formData, setFormData ] = useState({});
    const [ message, setMessage ] = useState({});
    const navigate = useNavigate();

    const handleChange = ({ target }) => {
        setFormData(values => ({...values, [target.name]: target.value}));
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (validateRegistration(formData)) {
            try {
                const response = await post('/auth/sign-up', {
                    email:      formData.email,
                    password:   formData.password,
                    userName:   formData.userName
                });

                response.status === 202
                    ? setMessage(setSuccessMessage('You\'re registered and ready to check in!'))
                    : new Error();
                setTimeout(() => navigate('/login'), 3000);
                return ;
            } catch (error) {
                setMessage(setFailMessage('error'));
                return;
            }
        }
        setMessage(setFailMessage('invalid'));
    }

    return (
        <>
            {message && 
                <div data-test='message' className={message.class}>
                    {message.text}
                </div>
            }
            <form className='signUpForm' data-testid='form' onSubmit={handleSubmit}>
                    <input
                        data-test='email-input'
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email || ''}
                        onChange={handleChange}
                    />
                    <InfoIcon
                        infoBubbleText={formMessages.EMAIL_FORMAT}
                    />
                    <input
                        data-test='password-input'                 
                        type="password"
                        name="password" 
                        placeholder="Password"
                        vaule={formData.password || ''}
                        onChange={handleChange}
                    />
                    <InfoIcon
                        infoBubbleText={formMessages.PASSWORD_FORMAT}
                    />
                    <input
                        data-test='password-confirmation-input'                 
                        type="password"
                        name="passwordConfirmation" 
                        placeholder="Password Confirmation"
                        vaule={formData.passwordConfirmation || ''}
                        onChange={handleChange}
                    />
                    <InfoIcon
                        infoBubbleText={formMessages.PASSWORD_CONFIRMATION}
                    />
                    <input
                        data-test='username-input'                 
                        type="text"
                        name="userName" 
                        placeholder="Username"
                        vaule={formData.userName || ''}
                        onChange={handleChange}
                    />
                    <InfoIcon
                        infoBubbleText={formMessages.USERNAME_FORMAT}
                    />
                    <button className='button' name="register-button" value="submit">
                        Sign-up
                    </button>
                </form>
            </>
    );
}

export default Register;
