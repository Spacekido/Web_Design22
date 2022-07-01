<script lang="ts">
  import Fab, { Label, Icon } from "@smui/fab";

  export var target,
    icon = "arrow_downward",
    label = "";
</script>

<Fab color="primary" href="#{target}" extended>
  <Icon class="material-icons">{icon}</Icon>
  <Label class="mdc-typography--button bold">{label}</Label>
</Fab>

<style>
</style>
