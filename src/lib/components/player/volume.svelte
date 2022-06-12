<script lang="ts">
  export let volume: number
</script>

<input
  bind:value={volume}
  on:input
  id="volume"
  name="volume"
  type="range"
  min="0"
  max="100"
  step="1"
/>
