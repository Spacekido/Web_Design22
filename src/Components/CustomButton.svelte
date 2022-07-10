<script lang="ts">
  import Button, { Label } from "@smui/button";

  export var label,
    href = "",
    direction;
</script>

{#if href !== ""}
  <Button class={direction} variant="raised" {href}>
    <Label class="mdc-typography--button bold">{label}</Label>
  </Button>
{:else}
  <Button class={direction} variant="raised">
    <Label class="mdc-typography--button bold">{label}</Label>
  </Button>
{/if}

<style>
  :global(.left-button) {
    border-top-left-radius: 30px;
    border-bottom-right-radius: 30px;
    height: 3vw;
  }
  :global(.right-button) {
    border-top-right-radius: 30px;
    border-bottom-left-radius: 30px;
    height: 3vw;
  }
  @media screen and (max-width: 600px) {
    :global(.left-button) {
      height: 10vw;
    }
    :global(.right-button) {
      height: 10vw;
    }
  }
</style>
