import { useStopwatch } from 'vue-timer-hook'

const stopwatch = useStopwatch()

export function useTimer() {
  function getTime() {
    return stopwatch.minutes.value + ':' + stopwatch.seconds.value
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
