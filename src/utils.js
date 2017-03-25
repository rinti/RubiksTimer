export default function formatSeconds(secs) {
  const minutes = Math.floor(secs / 60)
  const seconds = (secs - minutes * 60).toFixed(1)
  let ret = `${seconds}s`
  if (minutes) {
    ret = `${minutes}m ${seconds}s`
  }
  return ret
}

