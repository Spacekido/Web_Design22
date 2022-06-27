<script lang="ts">
  import Fab, { Label, Icon } from "@smui/fab";

  export var target,
    icon = "arrow_downward",
    label = "";
</script>

<div class="margins">
  <Fab color="primary" href="#{target}" extended>
    <Icon class="material-icons">{icon}</Icon>
    <Label>{label}</Label>
  </Fab>
</div>

<style>
</style>
