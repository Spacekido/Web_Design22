<script lang="ts">
  import Card, { Content } from "@smui/card";
  export var caption, value;
</script>

<!-- TODO mettere dimensioni dinamiche vw su componenti della card (content) -->
<Card class="stats-card" padded>
  <Content style="padding: 1vw;">
    <div class="mdc-typography--headline4 highlight">{value}</div>
    <div class="mdc-typography--body2 bold">{caption}</div>
  </Content>
</Card>

<style>
  :global(.stats-card) {
    width: 14vw;
    padding: 1vw;
    border-radius: 4vw !important;
  }
  @media screen and (max-width: 600px) {
    :global(.stats-card) {
      width: 60vw;
      padding: 6vw;
    }
  }
</style>
