<script lang="ts">
  import Card, { Content, PrimaryAction } from "@smui/card";
</script>

<div class="mdc-typography--headline3 uppercase primary">Quali luoghi hanno subito le peggiori conseguenze?</div>
<div class="container">
  <!-- TODO aggiungere immagini e testo dei posti giusti -->
  <!-- TODO aggiungere link a sezioni della pagine piú in basso -->
  <!-- TODO fix dimensioni delle card cambiano con la lunghezza del testo, devono essere fisse tutte uguali -->
  <a class="link-to-section" href="#section3">
    <Card>
      <PrimaryAction>
        <img src="img/balangero.svg" alt="Miniera di Balangero, Italia" />
        <Content>
          <div class="mdc-typography--subtitle1 uppercase bold primary">Balangero, Italia</div>
          <div class="mdc-typography--subtitle2">La miniera di amianto piú grande d'Europa. Rimasta attiva nella provincia di Torino fino al 1990.</div>
        </Content>
      </PrimaryAction>
    </Card>
  </a>

  <a class="link-to-section" href="#section4">
    <Card>
      <PrimaryAction>
        <img src="img/libby.jpg" alt="Miniera di Libby, Montana" />
        <Content>
          <div class="mdc-typography--subtitle1 uppercase bold primary">Libby, Montana</div>
          <div class="mdc-typography--subtitle2">Cittá statunitense che ha sofferto la contaminazione d'amianto causata dall'estrazione di vermiculite.</div>
        </Content>
      </PrimaryAction>
    </Card>
  </a>

  <a class="link-to-section" href="#section5">
    <Card>
      <PrimaryAction>
        <img src="img/placeholder.png" alt="Miniera di Minaçu, Brasile" />
        <Content>
          <div class="mdc-typography--subtitle1 uppercase bold primary">Minaçu, Brasile</div>
          <div class="mdc-typography--subtitle2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</div>
        </Content>
      </PrimaryAction>
    </Card>
  </a>

  <a class="link-to-section" href="#section6">
    <Card>
      <PrimaryAction>
        <img src="img/placeholder.png" alt="Miniera di Asbest, Russia" />
        <Content>
          <div class="mdc-typography--subtitle1 uppercase bold primary">Asbest, Russia</div>
          <div class="mdc-typography--subtitle2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</div>
        </Content>
      </PrimaryAction>
    </Card>
  </a>
</div>

<style>
  .container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 60px;
  }
</style>
