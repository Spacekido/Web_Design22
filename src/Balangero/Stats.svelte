<script lang="ts">
  import Card, { Content } from "@smui/card";
</script>

<div class="mdc-typography--headline4 uppercase flex-row">Percentuali di vittime e inquinamento</div>
<div
  style="
justify-content: center;
align-items: center;"
  class="flex-row-4"
>
  <div class="mdc-typography--subtitle1 highlight" />

  <Card class="stats-card" padded>
    <Content>
      <div class="mdc-typography--headline4 highlight">1918-1990</div>
      <div class="mdc-typography--body1 bold">Periodo di attivitá</div>
    </Content>
  </Card>
  <Card class="stats-card" padded>
    <Content>
      <div class="mdc-typography--headline4 highlight">1918-1990</div>
      <div class="mdc-typography--body1 bold">Tonnellate estratte</div>
    </Content>
  </Card>
  <Card class="stats-card" padded>
    <Content>
      <div class="mdc-typography--headline4 highlight">214</div>
      <div class="mdc-typography--body1 bold">Vittime accertate</div>
    </Content>
  </Card>
  <!-- <div class="image-and-text">
    <figure>
      <img src="img/statistica.png" alt="" />
      <figcaption class="mdc-typography--subtitle1 highlight"></figcaption>
    </figure>
  </div>
  <div class="image-and-text">
    <figure>
      <img src="img/statistica.png" alt="" />
      <figcaption class="mdc-typography--subtitle1 highlight"></figcaption>
    </figure>
  </div> -->
</div>

<style>
  :global(.stats-card) {
    border-radius: 2em;
  }
</style>
