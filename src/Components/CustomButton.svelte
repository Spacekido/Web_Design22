<script lang="ts">
  import Button, { Label } from "@smui/button";

  export var label,
    href = "",
    direction;
</script>

{#if href !== ""}
  <Button class={direction} variant="raised" {href} style="height: 10vw;">
    <Label class="mdc-typography--button bold">{label}</Label>
  </Button>
{:else}
  <Button class={direction} variant="raised" style="height: 10vw;">
    <Label class="mdc-typography--button bold">{label}</Label>
  </Button>
{/if}

<style>
  :global(.left-button) {
    border-top-left-radius: 30px;
    border-bottom-right-radius: 30px;
  }
  :global(.right-button) {
    border-top-right-radius: 30px;
    border-bottom-left-radius: 30px;
  }
</style>
