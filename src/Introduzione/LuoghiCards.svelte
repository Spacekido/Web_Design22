<script lang="ts">
  import Card, { Content, PrimaryAction } from "@smui/card";
</script>

<div class="mdc-typography--headline4 uppercase primary">
  DOVE L'AMIANTO HA AVUTO LE PEGGIORI CONSEGUENZE?
  <!-- DOVE L'AMIANTO HA AVUTO LE <span class="primary"></span>PEGGIORI CONSEGUENZE?</span> -->
</div>
<div class="container">
  <!-- TODO aggiungere immagini e testo dei posti giusti -->
  <!-- TODO aggiungere link a sezioni della pagine piú in basso -->
  <!-- TODO fix dimensioni delle card cambiano con la lunghezza del testo, devono essere fisse tutte uguali -->
  <a class="link-to-section" href="#section3">
    <Card>
      <PrimaryAction>
        <img src="img/balangero.svg" alt="Miniera di Balangero" />
        <Content>
          <div class="mdc-typography--subtitle1 uppercase bold">Balangero, Italia</div>
          <div class="mdc-typography--subtitle2">La miniera di amianto piú grande d'Europa. Rimasta attiva nella provincia di Torino fino al 1990.</div>
        </Content>
      </PrimaryAction>
    </Card>
  </a>

  <a class="link-to-section" href="#section4">
    <Card>
      <PrimaryAction>
        <img src="img/placeholder.png" alt="Miniera di Balangero" />
        <Content>
          <div class="mdc-typography--subtitle1 uppercase bold">Altro posto</div>
          <div class="mdc-typography--subtitle2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</div>
        </Content>
      </PrimaryAction>
    </Card>
  </a>

  <a class="link-to-section" href="#section5">
    <Card>
      <PrimaryAction>
        <img src="img/placeholder.png" alt="Miniera di Balangero" />
        <Content>
          <div class="mdc-typography--subtitle1 uppercase bold">Altro posto</div>
          <div class="mdc-typography--subtitle2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</div>
        </Content>
      </PrimaryAction>
    </Card>
  </a>

  <a class="link-to-section" href="#section6">
    <Card>
      <PrimaryAction>
        <img src="img/placeholder.png" alt="Miniera di Balangero" />
        <Content>
          <div class="mdc-typography--subtitle1 uppercase bold">Altro posto</div>
          <div class="mdc-typography--subtitle2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</div>
        </Content>
      </PrimaryAction>
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
