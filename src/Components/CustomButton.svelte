<script lang="ts">
  import Button, { Label } from "@smui/button";

  export var label, href, direction;
</script>

<Button class={direction} variant="raised" {href} style="height: 2.5vw;">
  <Label class="mdc-typography--body2 bold">{label}</Label>
</Button>

<style>
  :global(.left-button) {
    border-top-left-radius: 1.5vw;
    border-bottom-right-radius: 1.5vw;
  }
  :global(.right-button) {
    border-top-right-radius: 1.5vw;
    border-bottom-left-radius: 1.5vw;
  }
</style>
