export const formatDate = input => {
    const date = String(input);
    let result = date.replace(/T|Z/g, ' ');
    let result2 = result.replace(/\./, ':');
    const formattedDate = result2.trim();

    return formattedDate;
}

export const formatTime = date => {
    const hours = addZero(date.getHours());
    const minutes = addZero(date.getMinutes());
    const seconds = addZero(date.getSeconds());
    const milliseconds = formatMilliseconds(date.getMilliseconds());

    return `${hours}:${minutes}:${seconds}:${milliseconds}`;
}

export const addZero = unit => {
    if (unit < 10) {
       return `0${unit}`;
    }

    return unit;
}

export const formatMilliseconds = input => {
    const milliseconds = String(input)
    const millisecondFormat = /^[0-9]{3}$/;
    const oneDigitFormat = /^[0-9]$/;
    const twoDigitFormat = /^[0-9]{2}$/;
    let newFormat;
    
    if (oneDigitFormat.test(milliseconds)) {
        return newFormat = `${milliseconds}00`;
    }
    if (twoDigitFormat.test(milliseconds)) {
       return newFormat = `${milliseconds}0`;
    }

    newFormat = millisecondFormat.test(milliseconds)
        ? milliseconds
        : '000';

    return newFormat;
}

export const formatMillisecondsReverse = input => {
    const milliseconds = String(input)
    const oneDigitFormat = /^[0-9]$/;
    const twoDigitFormat = /^[0-9]{2}$/;
    let newFormat;
    
    if (oneDigitFormat.test(milliseconds)) {
        return newFormat = `0${milliseconds}`;
    }

    newFormat = twoDigitFormat.test(milliseconds)
        ? milliseconds
        : '00';

    return newFormat;
}
