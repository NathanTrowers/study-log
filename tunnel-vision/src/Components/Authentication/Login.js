import { useState } from 'react';
import { useDispatch , useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectUser, setUser } from '../User/UserSlice';
import { validateLogin } from '../../Validators/LoginValidator';
import { post } from '../../Utils/Request';
import { setFailMessage, setSuccessMessage } from '../../Utils/Message';
import '../_styles/Form.css';

const Login = () => {
    const [ formData, setFormData ] = useState({});
    const [ message, setMessage ] = useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useSelector(selectUser);  // the success message only shows when this is present.

    const handleChange = ({ target }) => {
        setFormData(values => ({...values, [target.name]: target.value}));
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (validateLogin(formData)) {
            try {
                const response = await post('/auth/login', {
                    email:      formData.email,
                    password:   formData.password
                });

                storeUserInfo(response);
                setTimeout(() => navigate('/home'), 3000);
                return ;
            } catch (error) {
                setMessage(setFailMessage('error'));
                return;
            }
        }
        setMessage(setFailMessage('invalid'));
    }

    const storeUserInfo = response => {
        const { dateCreated, email, userName } = response.data.user;
        dispatch(
            setUser({dateCreated, email, userName})
        );
        
        return setMessage(setSuccessMessage(`${response.data.message}  Welcome ${userName}`));
    }

    return (
        <>
            {message && 
            <div data-test='message' className={message.class}>
                {message.text}
            </div>}
            <form className='form' data-testid='form' onSubmit={handleSubmit}>
                <input
                    data-test='email-input'
                    type="email"
                    name="email"
                    placeholder="name@example.com"
                    value={formData.email || ''}
                    onChange={handleChange}
                />
                <input
                    data-test='password-input'                 
                    type="password"
                    name="password" 
                    placeholder="Example!123"
                    vaule={formData.password || ''}
                    onChange={handleChange}
                />
                <button className='button' name="login-button" value="submit">
                    Login
                </button>
            </form>
        </>
    );
}

export default Login;
