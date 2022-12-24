//Given a time in -hour AM/PM format, convert it to military (24-hour) time.

function timeConversion(s) {
    const time = s.split(':').map((number, index) => index === 0 ? parseInt(number) : number);
    const hours = time[2].includes('PM') ? time[0] != 12 ? time[0] + 12 : time[0] : time[0] == 12 ? '00' : time[0].toString().padStart(2, '0');
    const minutes = time[1];   
    const seconds = time[2].replace(/\D/g,'');
    return `${hours}:${minutes}:${seconds}`
}

function timeConversion(s) {
    let [hour, minute, second] = s.split(":")
    if (second[2] === "P" && Number(hour) != 12) {
        hour = Number(hour) + 12
    } else if (second[2] === "A" && Number(hour) == 12) {
        hour = "00"
    }
    return `${hour}:${minute}:${second[0]}${second[1]}`

}

function main() {
    console.log(timeConversion( "12:05:05PM"))
    console.log(timeConversion( "12:45:05AM"))
    console.log(timeConversion( "07:45:05PM"))
    console.log(timeConversion( "07:45:05AM"))
}

main();