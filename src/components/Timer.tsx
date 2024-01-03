import React, { useState, useEffect } from 'react';

const Timer:React.FC = () => {
    const [countdown, setCountdown] = useState<number>(300);

    useEffect(() => {
        const interval = setInterval(() => {
            setCountdown((prevCountdown) => {
                if (prevCountdown === 0) {
                    clearInterval(interval);
                }
                return prevCountdown - 1;
            });
        }, 1000);

        return () => clearInterval(interval);

    }, []);

    const formatTime = (seconds:number) => {
        const hours:number = Math.floor(seconds/3600)
        const minutes:number = Math.floor((seconds % 3600) / 60);
        const remainingSeconds:number = seconds % 60;
        return `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };

    return (
        <div>
            <h2>Countdown Timer</h2>
            <p>Time remaining: {formatTime(countdown)}</p>
            <hr />
        </div>
    );
};

export default Timer;
