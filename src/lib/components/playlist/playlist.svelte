<script lang="ts">
  import { getTotalPlaytime } from '$lib/utils'
  import type { Playlist } from '$lib/playlist'

  export let playlist: Playlist
</script>

<div class="details">
  <img
    class="cover"
    src={playlist.cover}
    alt="{playlist.title} playlist"
  />

  <div class="content">
    <h1 class="title">{playlist.title}</h1>
    <p class="description">{playlist.description}</p>
    <p>
      {playlist.tracks.length} songs · {getTotalPlaytime(
        playlist.tracks
      )} min
    </p>
  </div>
</div>

<slot />

<style>
  .details {
    display: flex;
    background: linear-gradient(
      hsl(220 20% 14%),
      hsl(220 20% 20%)
    );
    padding: 2rem;
  }

  .details .cover {
    width: 220px;
    height: 200px;
    object-fit: cover;
  }

  .details .content {
    display: grid;
    align-items: end;
    padding: 0 2rem;
  }

  .details .content .title {
    font-size: 6rem;
    font-weight: 900;
    letter-spacing: -2px;
    margin: 0;
  }

  .details .content .description {
    color: gray;
    margin: 0;
  }
</style>
