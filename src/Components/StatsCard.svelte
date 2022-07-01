<script lang="ts">
  import Card, { Content } from "@smui/card";
  export var caption, value;
</script>

<Card class="stats-card" padded>
  <Content>
    <div class="mdc-typography--headline4 highlight">{value}</div>
    <div class="mdc-typography--body1 bold">{caption}</div>
  </Content>
</Card>

<style>
  :global(.stats-card) {
    border-radius: 2em !important;
  }
</style>
