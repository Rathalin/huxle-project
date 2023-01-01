import { useStopwatch } from 'vue-timer-hook'

const stopwatch = useStopwatch()

export function getTime() {
  return stopwatch.minutes.value + ':' + stopwatch.seconds.value
}

export function stopTimer() {
  stopwatch.pause()
}

export function startTimer() {
  stopwatch.start()
}

export function resetTimer() {
  stopwatch.reset()
}
