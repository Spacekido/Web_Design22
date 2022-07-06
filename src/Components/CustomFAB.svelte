<script lang="ts">
  import Fab, { Label, Icon } from "@smui/fab";

  export var target,
    label = "";
</script>

<Fab color="primary" href="#{target}" extended class="custom-FABExtended">
  <Icon class="custom-FAB-Icon">
    <img src="img/logo.png" alt="Logo" />
  </Icon>
  <Label class="mdc-typography--body2 bold" style="overflow: hidden;">{label}</Label>
</Fab>

<style>
  :global(.custom-FABExtended) {
    height: 2.6vw !important;
    padding-left: 1vw !important;
    padding-right: 1.2vw !important;
  }
  :global(.custom-FAB-Icon) {
    width: 1.4vw !important;
    height: 1.4vw !important;
    margin-left: 0 !important;
    margin-right: 0.6vw !important;
    font-size: 1.4vw !important;
  }
  img {
    width: 100%;
  }
</style>
