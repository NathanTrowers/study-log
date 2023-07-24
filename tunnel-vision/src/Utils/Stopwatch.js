import { addZero, formatMillisecondsReverse } from './DataFormatter';

export const countTime = time => {
    let [hours, minutes, seconds, milliseconds] = parseTime(time);

    if (milliseconds !== 99) {
        milliseconds++;
    }

    if (milliseconds === 99 && seconds === 59) {
        milliseconds = formatMillisecondsReverse(0);
    }

    if (milliseconds === 99 && seconds !== 59) {
        seconds++;
        milliseconds = formatMillisecondsReverse(0);
    }

    if (seconds !== 59) {
        seconds = addZero(seconds);
    }

    if (seconds === 59 && minutes === 59) {
        seconds = addZero(0);
    }

    if (seconds === 59 && minutes !== 59) {
        minutes++;
        seconds = addZero(0);
    }

    if (minutes !== 59) {
        minutes = addZero(minutes);
    }

    if (minutes === 59) {
        hours++;
        minutes = addZero(0);
    }

    hours = addZero(hours);
    milliseconds = formatMillisecondsReverse(milliseconds);

    return `${hours}:${minutes}:${seconds}:${milliseconds}`;
}

const parseTime = (time = '') => {
    const hours = Number(time.slice(0,2));
    const minutes = Number(time.slice(3,5));
    const seconds = Number(time.slice(6,8));
    const milliseconds = Number(time.slice(9));

    return [hours, minutes, seconds, milliseconds];
}
