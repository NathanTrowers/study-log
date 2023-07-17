'use strict';

import { validationErrorCodes } from '../Constants/FieldErrorCodeConstants.js';
import operationOutcome from '../Constants/OperationOutcomeConstants.js';
import { saveNewLog } from '../DatabaseConnector/MongoConnect.js';

const validateLogInput = async ({ userId, subject, details,
    ratedUnderstanding, duration, date, 
    startTime, endTime }) => {

    const userIdFormat = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
    const subjectFormat = /^[0-9A-Za-z'\-\. #]{2,}$/;
    const detailsFormat = /^[0-9A-Za-z'"\-\. <>\\\!\/\?@\#&\$(\)\=\+;:%\* ][^{}\^`]{2,}$/gm;
    const ratedUnderstandingFormat = /^([0-9]|10) of 10$/;
    const durationFormat = /^([01][0-9]|2[0-4]):[0-5][0-9]:[0-5][0-9]:[0-9]{3}$/;
    const dateFormat = /^2[0-9]{3}-(0[1-9]|1[012])-([012][1-9]|3[01]) ([01][0-9]|2[0-4]):[0-5][0-9]:[0-5][0-9]:[0-9]{3}$/;
    const startTimeFormat = /^([01][0-9]|2[0-4]):[0-5][0-9]:[0-5][0-9]:[0-9]{3}$/;
    const endTimeFormat = /^([01][0-9]|2[0-4]):[0-5][0-9]:[0-5][0-9]:[0-9]{3}$/;
    let validationErrors = [];

    if (!userIdFormat.test(userId)) {
        validationErrors.push(validationErrorCodes.ERROR_USER_ID_FORMAT);
    }

    if(!subjectFormat.test(subject)) {
        validationErrors.push(validationErrorCodes.ERROR_SUBJECT_FORMAT);
    }
    if(!detailsFormat.test(details)) {
        validationErrors.push(validationErrorCodes.ERROR_DETAILS_FORMAT);
    }
    if(!ratedUnderstandingFormat.test(ratedUnderstanding)) {
        validationErrors.push(validationErrorCodes.ERROR_RATED_UNDERSTANDING_FORMAT);
    }
    if(!durationFormat.test(duration)) {
        validationErrors.push(validationErrorCodes.ERROR_DURATION_FORMAT);
    }
    if(!dateFormat.test(date) || date > Date.now()) {
        validationErrors.push(validationErrorCodes.ERROR_DATE_FORMAT);
    }
    if(!startTimeFormat.test(startTime)) {
        validationErrors.push(validationErrorCodes.ERROR_START_TIME_FORMAT);
    }
    if(!endTimeFormat.test(endTime)) {
        validationErrors.push(validationErrorCodes.ERROR_END_TIME_FORMAT);
    }

    let status;
    !validationErrors.length > 0
        ? status = await saveNewLog(
                userId, subject, details,
                ratedUnderstanding, duration, date, 
                startTime, endTime 
            )
        : status = operationOutcome.VALIDATION_FAILURE;
        
    return {
        status,
        validationErrors
    }
}

export default validateLogInput;
