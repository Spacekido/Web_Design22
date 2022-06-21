<script>
  import TopAppBar from "./TopAppBar.svelte";
  import Card from "./Card.svelte";
  // import LayoutGrid, { Cell } from "@smui/layout-grid";
  import FAB from "./FAB.svelte";
  // import ImageButton from "./ImageButton.svelte";
  import ImageCard from "./ImageCard.svelte";
  import CardBalangero from "./CardBalangero.svelte";
</script>

<TopAppBar />
<main>
  <div class="section0">
    <div class="mdc-typography--headline2 uppercase">Sai davvero cos'é l'amianto?</div>
    <div class="mdc-typography--headline4">
      Sai come ha rovinato le vite di innumerevoli persone?
      <br />Sai quanti innocenti sono morti inutilmente?
    </div>
    <FAB />
  </div>

  <!-- TODO decide il testo finale a cui applicare la classe bold -->
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

    <!-- TODO possibile usare anche imagebutton rotondi, problema con robina verde sotto 
      <div class="subsection2-1">
      <ImageButton /> -->

    <div class="subsection2-1">
      <ImageCard />
    </div>
  </div>

  <div class="section3">
    <div class="mdc-typography--headline2 uppercase">Balangero, Italia</div>

    <div class="subsection3-1">
      <div class="mdc-typography--headline4 uppercase">Storia del passato</div>
      <div class="mdc-typography--body1">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
        into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
        passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </div>
    </div>

    <div class="subsection3-2">
      <div class="mdc-typography--headline4 uppercase primary">Conseguenze sul presente</div>
      <div class="mdc-typography--body1">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
        into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
        passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </div>
    </div>

    <div class="subsection3-3">
      <div class="mdc-typography--headline4 uppercase">TESTIMONIANZE DELLE PERSONE</div>
      <CardBalangero />
    </div>
  </div>
</main>

<style>
  main {
    padding: 0;
    text-align: center;
    max-width: 240px;
    margin: 100px 0;
  }
  .section0 {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 200px;
  }
  .section1,
  .section3 {
    margin: 300px 200px 100px;
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
  .subsection1-1,
  .subsection3-1 {
    text-align: left;
    margin-right: 500px;
  }
  .subsection1-2,
  .subsection3-2 {
    padding-top: 50px;
    text-align: right;
    margin-left: 500px;
  }
  .subsection2-1 {
    margin: 60px 60px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 60px;
  }
  .subsection3-3 {
    display: flex;
    flex-direction: column;
    gap: 50px;
  }
  /* TODO aggiungere altri media breakpoint */
  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
