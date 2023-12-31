import { useCallback, useRef, useState } from "react";

interface UseTimerPropsType {
    startTime: number;
    step: number;
    onEnd?: () => void;
}

interface UserTimerReturnType {
    time: number;
    startTimer: () => void;
    endTimer: () => void;
}

interface UseTimerType {
    (props: UseTimerPropsType): UserTimerReturnType;
}

export const useTimer: UseTimerType = ({startTime, step, onEnd}) => {
    const timerId = useRef<any>(null)
    const [time, setTime] = useState(startTime)

    const startTimer = useCallback(() => {
        timerId.current = setInterval(() => {
            setTime((prevTime) => {
                const nextTime = prevTime - step

                if (nextTime === 0) {
                    endTimer()
                    onEnd && onEnd()
                }
                return nextTime
            })
        }, step);
    }, [])

    const endTimer = useCallback(() => {
        clearInterval(timerId.current)
        setTime(startTime)
    }, [])

    return {
        time,
        startTimer,
        endTimer,
    }
}