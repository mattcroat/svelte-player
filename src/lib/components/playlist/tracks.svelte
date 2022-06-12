<script lang="ts">
  import type { Track } from '$lib/playlist'
  import { formatTime } from '$lib/utils'

  export let tracks: Track[]
</script>

<div class="playlist">
  <div class="track-header">
    <div>#</div>
    <div>Title</div>
    <div>Album</div>
    <div>Date added</div>
    <div class="duration">Duration</div>
  </div>

  <div class="tracks">
    {#each tracks as track, index}
      <div class="track">
        <div>{index + 1}</div>

        <div class="title">
          <img
            class="cover"
            src={track.cover}
            alt={track.title}
          />
          <div>
            <p class="song">{track.title}</p>
            <p class="artist">{track.artist}</p>
          </div>
        </div>

        <div>{track.album}</div>
        <div>{track.added}</div>
        <div class="duration">
          {formatTime(track.duration)}
        </div>
      </div>
    {/each}
  </div>
</div>

<style>
  .playlist {
    color: gray;
    padding: 1rem 2rem;
  }

  .track-header,
  .track {
    display: grid;
    grid-template-columns: 16px 6fr 4fr 3fr 1fr;
    grid-gap: 16px;
    padding: 1rem;
  }

  .track-header {
    position: sticky;
    top: 0;
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    background-color: hsl(220 20% 14%);
    border-bottom: 1px solid gray;
  }

  .track-header .duration {
    justify-self: end;
  }

  .track {
    align-items: center;
  }

  .track .title {
    display: flex;
    gap: 16px;
  }

  .track .title p {
    margin: 2px;
  }

  .track .title .cover {
    width: 48px;
    height: 48px;
  }

  .track .title .song {
    color: white;
  }

  .track .duration {
    justify-self: end;
  }
</style>
