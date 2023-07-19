export const formatDate = input => {
    const date = String(input);
    let result = date.replace(/T|Z/g, ' ');
    const formattedDate = result.trim();

    return formattedDate;
}

export const formatTime = date => {
    const hours = addZero(date.getHours());
    const minutes = addZero(date.getMinutes());
    const seconds = addZero(date.getSeconds());
    const milliseconds = formatMilliseconds(date.getMilliseconds());

    return `${hours}:${minutes}:${seconds}:${milliseconds}`;
}

export const calculateDuration = (startTime, endTime) => {
    return formatTime(new Date(endTime-startTime));
}

const addZero = unit => {
    if (unit < 10) {
       return `0${unit}`;
    }

    return unit;
}

const formatMilliseconds = input => {
    const milliseconds = String(input)
    const millisecondFormat = /^[0-9]{3}$/;
    const oneDigitFormat = /^[0-9]$/;
    const twoDigitFormat = /^[0-9]{2}$/;
    let newFomrat;

    switch(millisecondFormat.test(milliseconds)) {
        case oneDigitFormat.test(milliseconds):
            newFomrat = `${milliseconds}00`;
            break;
        case twoDigitFormat.test(milliseconds):
            newFomrat = `${milliseconds}0`;
            break;
        default:
            newFomrat = milliseconds;
    }

    return newFomrat;
}
