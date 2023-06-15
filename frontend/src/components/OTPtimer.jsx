import React, {useState, useRef, useEffect} from 'react'



const formatTime = (time) => {
    let minutes = Math.floor(time / 60)
    let seconds = Math.floor(time - minutes * 60)

    if (seconds <= 9) seconds = '0' + seconds;
     return minutes + ':' + seconds;
}


const OTPtimer = ({seconds}) => {

    const [countdown, setCountdown] = useState(seconds)
    const timerId = useRef();

    useEffect(()=>{
        timerId.current = setInterval(()=>{
            setCountdown(prev => prev - 1)
        },1000)

        return () => clearInterval(timerId.current)
    }, [])

  return (
    <>
    {countdown > 0 ? (
        <h2 className='fs-5 py-3'>{formatTime(countdown)}</h2>
      ) : (
        <h2 className='fs-5 py-3'>0:00</h2>
      )}
    
    </>
  )
}

export default OTPtimer