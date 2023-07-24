import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import InfoIcon from '../InfoIcon';
import { selectUser } from '../Slice/UserSlice';
import { fetchLogsForCurrentUser } from '../Slice/LogsSlice';
import { selectTime } from '../Slice/TimeSlice';
import { formMessages, setFailMessage, setSuccessMessage } from '../../Utils/Message';
import { post } from '../../Utils/Request';
import { validateLogInput } from '../../Validators/LogInputValidator'
import '../_styles/Form.css';
import './_styles/Logs.css';

const NewLog = () => {
    const [ message, setMessage ] = useState({});
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user } = useSelector(selectUser);
    const { time } = useSelector(selectTime);
    const { date, duration, startTime, endTime } = time; 
    const [ formData, setFormData ] = useState({
        date:       `${date}`,
        duration:   duration,
        startTime: startTime,
        endTime:    endTime
    });

    const handleChange = ({ target }) => {
        setFormData(values => ({...values, [target.name]: target.value}));
    }
    
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (validateLogInput(formData)) {
            try {
                const response = await post('/log', {
                    userId:                 user.id,
                    subject:                formData.subject,
                    details:                formData.details,
                    ratedUnderstanding:     `${formData.ratedUnderstanding} of 10`,
                    duration:               formData.duration,
                    date:                   formData.date,
                    startTime:              formData.startTime,
                    endTime:                formData.endTime,
                });

                response.status === 201
                    ? setMessage(setSuccessMessage('Another log\'s been added to the pile!'))
                    : new Error();
                dispatch(fetchLogsForCurrentUser(user));
                setTimeout(() => navigate('/home'), 3000);
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
            <form id='newLogForm' data-testid='form' onSubmit={handleSubmit}>
                    <input
                        data-test='subject-input'
                        type='subject'
                        name='subject'
                        placeholder='Subject Name'
                        value={formData.subject || ''}
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
                        vaule={formData.details || ''}
                        onChange={handleChange}
                    />
                     <InfoIcon
                        infoBubbleText={formMessages.DETAILS_FORMAT}
                    />
                    <p className='ratingBox'>
                        Rated Understanding: 
                        <input
                            data-test='rated-understanding-input'                 
                            type='ratedUnderstanding'
                            name='ratedUnderstanding' 
                            placeholder='5'
                            vaule={formData.ratedUnderstanding || ''}
                            onChange={handleChange}
                        /> of 10
                    </p>
                    <InfoIcon
                        infoBubbleText={formMessages.RATED_UNDERSTANDING_FORMAT}
                    />
                    <input
                        data-test='duration-input'                 
                        type='text'
                        data-testid='duration' 
                        name='duration' 
                        vaule={formData.duration}
                        placeholder={formData.duration}
                        disabled
                    />
                    <InfoIcon
                        infoBubbleText={formMessages.DURATION_NOTICE}
                    />
                    <input
                        data-test='start-time-input'                 
                        type='startTime'
                        data-testid='startTime' 
                        name='startTime' 
                        vaule={formData.startTime}
                        placeholder={formData.startTime}
                        disabled
                    />
                    <InfoIcon
                        infoBubbleText={formMessages.START_TIME_NOTICE}
                    />
                    <input
                        data-test='end-time-input'                 
                        type='endTime'
                        data-testid='endTime' 
                        name='endTime' 
                        vaule={formData.endTime}
                        placeholder={formData.endTime}
                        disabled
                    />
                    <InfoIcon
                        infoBubbleText={formMessages.END_TIME_NOTICE}
                    />
                    <button className='button' name='new-log-button' value='submit'>
                        Create New Log
                    </button>
                </form>
            </>
    );
}

export default NewLog;
