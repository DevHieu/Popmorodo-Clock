// if (sendEffect) {
    //         const countdownSeconds = seconds >0 && setInterval(() => setSeconds(seconds-1), 1000)

    //         if (seconds === 0) {
    //             if (minutes !== 0) {
    //                 const setTime = setTimeout(() => {
    //                     setSeconds(59)
    //                     setMinutes((minutes-1))
    //                 },1000)

    //                 return () => {
    //                     clearTimeout(setTime)
    //                 }
    //             }else {
    //                 // handleReset()
    //                 let breakMinute = displayBreak ? timerMinutes: breaks 
    //                 let breakSeconds = 0
                    
    //                 setMinutes(breakMinute)
    //                 setSeconds(breakSeconds)
    //                 setDisplayBreak(!displayBreak)
    //                 console.log(displayBreak)
    //             }

    //         }

    //         return () => {
    //             clearInterval(countdownSeconds)
    //         }
    //     }
    // }, [sendEffect,minutes, seconds,breaks,displayBreak, timerMinutes])