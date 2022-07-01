<script lang="ts">
  import Button, { Label } from "@smui/button";

  export var label, href, direction;
</script>

<Button class={direction} variant="raised" {href}>
  <Label class="mdc-typography--subtitle1 bold">{label}</Label>
</Button>

<style>
  :global(.left-button) {
    border-top-left-radius: 1.5em;
    border-bottom-right-radius: 1.5em;
  }
  :global(.right-button) {
    border-top-right-radius: 1.5em;
    border-bottom-left-radius: 1.5em;
  }
</style>
