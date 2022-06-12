<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  import type { Playing } from '$lib/types'

  export let playingState: Playing

  const dispatch = createEventDispatcher()
</script>

<button on:click={() => dispatch('playPrevious')}>
  Previous
</button>

<button on:click={() => dispatch('play')}>
  {playingState === 'paused' ? 'Play' : 'Pause'}
</button>

<button on:click={() => dispatch('playNext')}>Next</button>
