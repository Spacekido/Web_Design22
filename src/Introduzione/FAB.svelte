<script lang="ts">
  import Fab, { Icon } from "@smui/fab";

  export var target,
    icon = "arrow_downward";
</script>

<div class="margins">
  <Fab color="primary" href="#{target}">
    <Icon class="material-icons">{icon}</Icon>
  </Fab>
</div>

<style>
</style>
