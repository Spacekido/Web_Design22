<script lang="ts">
  import Card, { Content } from "@smui/card";
  // import Fab from "@smui/fab";
</script>

<div class="container">
  <!-- TODO aggiungere immagini e testo dei posti giusti -->
  <!-- TODO aggiungere link a sezioni della pagine piú in basso -->
  <!-- TODO fix dimensioni delle card cambiano con la lunghezza del testo, devono essere fisse tutte uguali -->
  <a class="link-to-section" href="#section3">
    <Card>
      <img src="img/balangero.svg" alt="Miniera di Balangero" />
      <Content>
        <div class="mdc-typography--subtitle1 uppercase bold">Balangero, Italia</div>
        <div class="mdc-typography--subtitle2">La miniera di amianto piú grande d'Europa. Rimasta attiva nella provincia di Torino fino al 1990.</div>
      </Content>
    </Card>
  </a>

  <a class="link-to-section" href="#section4">
    <Card>
      <img src="img/placeholder.png" alt="Miniera di Balangero" />
      <Content>
        <div class="mdc-typography--subtitle1 uppercase bold">Altro posto</div>
        <div class="mdc-typography--subtitle2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</div>
      </Content>
    </Card>
  </a>

  <a class="link-to-section" href="#section5">
    <Card>
      <img src="img/placeholder.png" alt="Miniera di Balangero" />
      <Content>
        <div class="mdc-typography--subtitle1 uppercase bold">Altro posto</div>
        <div class="mdc-typography--subtitle2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</div>
      </Content>
    </Card>
  </a>

  <a class="link-to-section" href="#section6">
    <Card>
      <img src="img/placeholder.png" alt="Miniera di Balangero" />
      <Content>
        <div class="mdc-typography--subtitle1 uppercase bold">Altro posto</div>
        <div class="mdc-typography--subtitle2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</div>
      </Content>
    </Card>
  </a>
</div>

<style>
  .container {
    margin: 60px 200px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 60px;
  }
</style>
