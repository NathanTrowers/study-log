export const validateLogInput = ({ subject, details, ratedUnderstanding }) => {
    const subjectFormat = /^[0-9A-Za-z'\-. #]{2,}$/;
    const detailsFormat = /^[0-9A-Za-z'"\-.<>\\!/?@#&$()=+;:%* ][^{}^`]{2,}$/gm;
    const ratedUnderstandingFormat = /^([0-9]|10) of 10$/;
    
    if (
        !(subjectFormat.test(subject) &&
        detailsFormat.test(details) &&
        ratedUnderstandingFormat.test(`${ratedUnderstanding} of 10`))
    ) {
        return false;
    }

    return true;
}
