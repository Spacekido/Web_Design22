<script lang="ts">
  import Fab, { Label, Icon } from "@smui/fab";

  // TODO far funzionare prop invocato dal chiamante
  export var target;
</script>

<div class="margins">
  <Fab color="primary" href="#{target}">
    <Icon class="material-icons">arrow_downward</Icon>
  </Fab>
</div>

<style>
</style>
