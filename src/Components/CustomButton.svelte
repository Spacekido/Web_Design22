<script lang="ts">
  import Button, { Label } from "@smui/button";

  export var label, href, align;
</script>

<Button class={align} variant="raised" {href}>
  <Label class="mdc-typography--subtitle1 bold">{label}</Label>
</Button>
