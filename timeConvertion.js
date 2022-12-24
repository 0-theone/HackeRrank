//Given a time in -hour AM/PM format, convert it to military (24-hour) time.

function timeConversion(s) {
    let [hours, minutes, seconds] = s.split(':').map((number, index) => index === 0 ? parseInt(number) : number);
    hours.includes('PM') ? hours != 12 ? hours + 12 : hours :hours == 12 ? '00' : hours.toString().padStart(2, '0');
    seconds.replace(/\D/g,'');
    return `${hours}:${minutes}:${seconds}`
}

function main() {
    console.log(timeConversion( "12:05:05PM"))
    console.log(timeConversion( "12:45:05AM"))
    console.log(timeConversion( "07:45:05PM"))
    console.log(timeConversion( "07:45:05AM"))
}

main();