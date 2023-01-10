import { useStopwatch } from 'vue-timer-hook'

const stopwatch = useStopwatch()

function addLeadingZero(value: number) {
  return value < 10 ? `0${value}` : value
}

export function useTimer() {
  function getTime() {
    return `${addLeadingZero(stopwatch.minutes.value)}:${addLeadingZero(
      stopwatch.seconds.value
    )}`
  }

  function stopTimer() {
    stopwatch.pause()
  }

  function startTimer() {
    stopwatch.start()
  }

  function resetTimer() {
    stopwatch.reset()
  }

  return {
    getTime,
    stopTimer,
    startTimer,
    resetTimer,
  }
}
