<script>
  import TopAppBar from "./TopAppBar.svelte";
  import Card from "./Card.svelte";
  import LayoutGrid, { Cell } from "@smui/layout-grid";
  import FAB from "./FAB.svelte";
</script>

<TopAppBar />
<main>
  <div class="section0">
    <div class="mdc-typography--headline2 uppercase" style="margin-bottom: 30px;">Sai davvero cos'é l'amianto?</div>
    <div class="mdc-typography--headline4">Sai come ha rovinato le vite di innumerevoli persone?</div>
    <div class="mdc-typography--headline4">Sai quanti innocenti sono morti inutilmente?</div>
    <FAB />
  </div>

  <!-- decide il testo finale a cui applicare la classe bold -->
  <div class="section1">
    <div class="subsection1-1">
      <div class="mdc-typography--headline4 uppercase">COS'É L'AMIANTO E PERCHÉ VIENE SCAVATO?</div>
      <div class="mdc-typography--body1">
        Con il termine <span class="bold">AMIANTO</span> (o asbesto) viene identificato un minerale naturale a struttura fibrosa, conosciuto sin dall'antichitá
        per le sue ottime proprietá termoisolanti e fonoassorbenti. Nel XX secolo, grazie alla sua economicitá di PRODUZIONE, é stato largamente adottato
        dall'industria di tutto il mondo in innumerevoli applicazioni industriali ed edilizie. Con il tempo però tale materiale si è rivelato
        <span class="bold">NOCIVO</span> per la salute dell'uomo, a causa del rilascio di fibre che, se inalate, possono provocare patologie gravi ed irreversibili
        all'apparato respiratorio (asbestosi, carcinoma polmonare e mesoteliomi).
      </div>
    </div>

    <div class="subsection1-2">
      <div class="mdc-typography--headline4 uppercase primary">PERCHÉ É ANCORA IN USO SEBBENE SIA LETALE?</div>
      <div class="mdc-typography--body1">
        Negli anni '70 é stato raggiunto il <span class="bold">PICCO</span> di produzione di amianto, coinvolgendo 85 paesi diversi nella sua estrazione e
        lavorazione. In Italia, dal 1992 ad oggi, sono entrate in vigore numerose leggi che <span class="bold">VIETANO</span> estrazione, commercializzazione e
        produzione di amianto. Ma non tutte le nazioni hanno bandito questo materiale; Russia, Cina, Brasile e Canada sono gli attuali maggiori
        <span class="bold">PRODUTTORI</span> di amianto.
      </div>
    </div>
  </div>

  <div class="section2">
    <div class="mdc-typography--headline4 uppercase primary">
      DOVE L'AMIANTO HA AVUTO LE PEGGIORI CONSEGUENZE?
      <!-- DOVE L'AMIANTO HA AVUTO LE <span class="primary"></span>PEGGIORI CONSEGUENZE?</span> -->
    </div>
  </div>

  <!-- <LayoutGrid>
    <Cell>
      <Card />
    </Cell>
    <Cell>
      <Card />
    </Cell>
  </LayoutGrid> -->
</main>

<style>
  main {
    padding: 0;
    text-align: center;
    max-width: 240px;
    margin: 100px 0;
  }
  .section0 {
    margin-top: 200px;
  }
  .section1 {
    margin: 300px 200px 100px;
    display: flex;
    flex-direction: column;
  }
  .subsection1-1 {
    text-align: left;
    margin-right: 500px;
  }
  .subsection1-2 {
    padding-top: 50px;
    text-align: right;
    margin-left: 500px;
  }
  /* TODO aggiungere altri media breakpoint */
  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
