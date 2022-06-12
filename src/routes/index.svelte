<script lang="ts">
  import { browser } from '$app/env'
  import { playlist } from '$lib/playlist'
  import type { Playing } from '$lib/types'

  import Playlist from '$lib/components/playlist/playlist.svelte'
  import Tracks from '$lib/components/playlist/tracks.svelte'
  import Controls from '$lib/components/player/controls.svelte'
  import Progress from '$lib/components/player/progress.svelte'
  import Volume from '$lib/components/player/volume.svelte'

  let track: HTMLAudioElement
  let trackIndex = 0
  let playingState: Playing = 'paused'
  let duration = 0
  let elapsed = 0
  let volume = 50

  if (browser) {
    loadTrack()
  }

  function loadTrack() {
    track = new Audio(playlist.tracks[trackIndex].url)
    track.onloadedmetadata = updateDuration
    track.ontimeupdate = updateElapsed
    track.onended = playNextTrack
  }

  function togglePlaying() {
    playingState === 'paused' ? playTrack() : pauseTrack()
  }

  function playTrack() {
    playingState = 'playing'
    track.play()
  }

  function pauseTrack() {
    playingState = 'paused'
    track.pause()
  }

  function playPreviousTrack() {
    if (elapsed > 0) {
      track.currentTime = 0
    }

    if (elapsed === 0) {
      if (trackIndex > 0) {
        trackIndex -= 1
        loadTrack()
      }
    }
  }

  function playNextTrack() {
    if (trackIndex < playlist.tracks.length - 1) {
      trackIndex += 1
      loadTrack()
    }
  }

  function updateDuration() {
    duration = track.duration
  }

  function updateElapsed() {
    elapsed = track.currentTime
  }

  function updateVolume() {
    track.volume = volume / 100 // 50 / 100 = 0.5
  }
</script>

<svelte:head>
  <title>Fire</title>
</svelte:head>

<Playlist {playlist}>
  <Tracks tracks={playlist.tracks} />
  <Controls
    {playingState}
    on:playPrevious={playPreviousTrack}
    on:play={togglePlaying}
    on:playNext={playNextTrack}
  />
  <Progress bind:elapsed {duration} />
  <Volume bind:volume on:input={updateVolume} />
</Playlist>

<style>
  :global(body) {
    font-family: 'Inter', sans-serif;
    color: white;
    background-color: hsl(220 20% 14%);
    margin: 0;
  }

  :global(img) {
    border-radius: 8px;
  }
</style>
