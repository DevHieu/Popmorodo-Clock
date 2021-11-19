import {useState, useEffect} from 'react'
import style from './pomodoro.module.css'

function Pomodoro() {
    const [minutes, setMinutes] = useState(25)
    const [seconds, setSeconds] = useState(0)
    const [sendEffect, setSendEffect] = useState(false)
    const [displayBreak, setDisplayBreak] = useState(false)

    const timerMinutes = minutes < 10 ?  `0${minutes}` : minutes
    const timerSeconds = seconds < 10 ?  `0${seconds}` : seconds

    useEffect (() => {
        const interval = setInterval(() => {          
            if(sendEffect) {
                if(seconds === 0) {
                    if (minutes !== 0) {
                        setSeconds(59)
                        setMinutes(minutes - 1)
                    }else {
                        let breakMinute = displayBreak ? 25: 5
                        let breakSeconds = 0
                        
                        setDisplayBreak(!displayBreak)
                        setMinutes(breakMinute)
                        setSeconds(breakSeconds)
                    }
                }else {
                    setSeconds(seconds-1)
                }
            }
        }, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [sendEffect, seconds,displayBreak,minutes])

    //  Nút Stop
    const handleStop = () => {
        setSendEffect(false)
    }
    // nút reset
    const handleReset = () => {
        setSendEffect(false)
        setDisplayBreak(false)
        setMinutes(25)
        setSeconds(0)
    }


    // return html
    return (
        <div className={style.allPomodoro}>
            {sendEffect === false && <h1 className="h1">you have 25 minutes for session and 5 minutes for break<br />Are you ready?</h1>}
            {displayBreak === false && sendEffect && <h1>Session Time! you have {timerMinutes}:{timerSeconds} for session</h1>}
            {displayBreak && <h1>Break Time! you have {timerMinutes}:{timerSeconds} for break</h1>}
            <div className={style.all}>
                <div className={style.countdown}>
                    {timerMinutes}:{timerSeconds}
                </div>
                <div className={style.button}>
                    <button className={style.start} onClick={() => setSendEffect(true)}>START</button>
                    <button className={style.stop} onClick={handleStop}>STOP</button>
                    <button className={style.reset} onClick={handleReset}>RESET</button>
                </div>
            </div>
        </div>
    );
}

export default Pomodoro