import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import InfoIcon from '../InfoIcon';
import { selectUser } from '../Slice/UserSlice';
import { fetchLogsForCurrentUser, selectSingleLog } from '../Slice/LogsSlice';
import { formMessages, setFailMessage, setSuccessMessage } from '../../Utils/Message';
import { patch } from '../../Utils/Request';
import { validateLogInput } from '../../Validators/LogInputValidator'
import '../_styles/Form.css';
import './_styles/Logs.css';

const UpdateLog = () => {
    const [ message, setMessage ] = useState({});
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user } = useSelector(selectUser);
    const singleLog = useSelector(selectSingleLog);
    const { _id, subject, details,
        ratedUnderstanding } = singleLog;
    const [ formData, setFormData ] = useState({
        subject:            subject,
        details:            details,
        ratedUnderstanding: ratedUnderstanding.replace(/ of 10/, ''),
    });

    const handleChange = ({ target }) => {
        setFormData(values => ({...values, [target.name]: target.value}));
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (validateLogInput(formData)) {
            try {
                const response = await patch(`/log/${_id}`, {
                    logId:                  _id,
                    userId:                 user.id,
                    subject:                formData.subject,
                    details:                formData.details,
                    ratedUnderstanding:     `${formData.ratedUnderstanding} of 10`
                });

                response.status === 202
                    ? setMessage(setSuccessMessage('That log has been carried up(-to-date)!'))
                    : new Error();
                dispatch(fetchLogsForCurrentUser(user));
                setTimeout(() => navigate('/logs'), 3000);
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
            <button className='button'>
                <Link to='../home' className='noStyle accessibleLink'>
                    Home
                </Link>
            </button>
            {message && 
                <div data-test='message' className={message.class}>
                    {message.text}
                </div>
            }
            <form id='updateLogForm' data-testid='form' onSubmit={handleSubmit}>
                <input
                    data-test='subject-input'
                    type='text'
                    name='subject'
                    placeholder='Subject Name'
                    value={formData.subject}
                    onChange={handleChange}
                />
                <InfoIcon
                    infoBubbleText={formMessages.SUBJECT_FORMAT}
                />
                <textarea
                    data-test='details-input'
                    required
                    rows='10'
                    cols='120'
                    form='newLogForm'                 
                    name='details'
                    placeholder='Put details about your study session here!'
                    value={formData.details}
                    onChange={handleChange}
                />
                <InfoIcon
                    infoBubbleText={formMessages.DETAILS_FORMAT}
                />
                <p className='ratingBox'>
                    Rated Understanding: 
                    <input
                        data-test='rated-understanding-input'                 
                        type='text'
                        name='ratedUnderstanding' 
                        placeholder='5'
                        value={formData.ratedUnderstanding}
                        onChange={handleChange}
                    /> of 10
                </p>
                <InfoIcon
                    infoBubbleText={formMessages.RATED_UNDERSTANDING_FORMAT}
                />
                <button className='button' name='new-log-button' value='submit'>
                    Update Log
                </button>
            </form>
        </>
    );
}

export default UpdateLog;
