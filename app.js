const hours = document.getElementById('hours')
const mintues = document.getElementById('minutes')
const seconds = document.getElementById('seconds')
const amPm = document.getElementById('ampm')

const updateClock = () => {
    let time = new Date()
    console.log(time)
    
    

    let h = time.getHours();
    let m = time.getMinutes()
    let s = time.getSeconds()
    console.log(h)

    if (h > 12){
        h -= 12;
        amPm.innerText = 'PM'
    }
    hours.innerText = h
    mintues.innerText = m
    seconds.innerText = s
}
setInterval(() => {

    updateClock()
}, 1000)
