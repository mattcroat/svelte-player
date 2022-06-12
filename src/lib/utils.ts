import type { Track } from './playlist'

export function formatTime(timeSeconds: number) {
  const minutes = Math.floor(timeSeconds / 60)
  const seconds = Math.floor(timeSeconds % 60)
  const padSeconds =
    seconds < 10
      ? seconds.toString().padStart(2, '0')
      : seconds

  return `${minutes}:${padSeconds}`
}

export function getTotalPlaytime(tracks: Track[]) {
  return tracks.reduce((totalPlaytime, track) => {
    return totalPlaytime + track.duration
  }, 0)
}
