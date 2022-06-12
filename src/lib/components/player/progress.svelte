<script lang="ts">
  import { formatTime } from '$lib/utils'

  export let elapsed: number
  export let duration: number
</script>

<span>{formatTime(elapsed)}</span>
<input
  bind:value={elapsed}
  id="elapsed"
  name="elapsed"
  type="range"
  min="0"
  max={duration}
/>
<span>{formatTime(duration)}</span>
