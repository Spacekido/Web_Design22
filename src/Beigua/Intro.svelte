<script>
  import CustomButton from "../Components/CustomButton.svelte";
</script>

<div class="mdc-typography--headline1 uppercase">Parco del Beigua, Liguria</div>

<div class="left">
  <div class="mdc-typography--headline4 uppercase">Potrebbe succedere anche a noi?</div>
  <div class="mdc-typography--body1">
    Con la legge 257 del 1992 l’Italia ha messo <span class="highlight">al bando</span> l'amianto, ma non ha risolto i problemi legati alla sua presenza
    <span class="highlight">in natura</span> e all'utilizzo dei materiali a base di amianto già messi in opera.
    <br /><br />
    Ai sensi della L.R. 20/2006 Arpal provvede, su richiesta della Regione o degli Enti locali, ad effettuare le attività di
    <span class="highlight">controllo</span> e <span class="highlight">monitoraggio</span> di siti estrattivi o di affioramenti naturali interessati dalla
    presenza di <span class="italic">"Pietre verdi"</span> (rocce ofiolitiche) a potenziale rischio amianto.
    <br /><br />
    Quindi se non facciamo attenzione a dove si vorrà introdurre un nuovo sito estrattivo, le polveri sottili che si potrebbero alzare a seguito degli scavi potrebbero
    mescolarsi all'aria che respiriamo e <span class="highlight">contaminare</span> l'intera Ligura e il basso Piemonte, rendendo così inabitabili questi
    <span class="highlight">territori</span> a noi tanto cari.
    <br /><br />
    <CustomButton label="Amianto naturale" href="https://www.arpal.liguria.it/tematiche/suolo/amianto-naturale.html" direction="left-button" />
  </div>
</div>

<div class="right">
  <div class="mdc-typography--headline4 uppercase primary">Cosa sono le pietre verdi?</div>
  <div class="mdc-typography--body1">
    Le <span class="italic">"Pietre verdi"</span> rappresentano i frammenti di un antico fondale oceanico successivamente compresso ed emerso in seguito ad
    imponenti movimenti della crosta terreste. Tali rocce spesso contengono <span class="highlight">fibre di amianto</span> e, pertanto, è importante conoscere
    dove possono essere trovate, soprattutto in tema di gestione ed utilizzo delle terre e rocce da scavo.
    <br /><br />
    La <span class="highlight">cartografia</span> sotto riportata raffigura i territori in cui, in relazione alle rocce riconosciute in affioramento o
    subaffioramento, potrebbero rinvenirsi concentrazioni di <span class="highlight">minerali asbestiformi</span> con alte probabilità.
    <br /><br />
    <CustomButton
      label="Lo studio completo"
      href="https://www.regione.liguria.it/homepage/ambiente/territorio/bonifiche-siti-contaminati/mappatura-amianto/amianto-naturale.html"
      direction="right-button"
    />
  </div>
</div>

<div class="center">
  <img src="img/beigua-mappa.png" alt="Mappa della presenza di Pietre Verdi in Liguria, con evidenza sul territorio protetto del parco del Beigua" />
  <div class="mdc-typography--body1" style="margin-block: 1vw;">
    Mappa della presenza di Pietre Verdi in Liguria, con evidenza sul territorio protetto del Parco del Beigua
  </div>
  <CustomButton
    label="Mappa interattiva"
    href="http://srvcarto.regione.liguria.it/geoviewer2/pages/apps/geoportale/index.html?id=1200"
    direction="right-button"
  />
</div>

<style>
  .left {
    text-align: left;
    margin: 2vw 15vw 0 0;
  }
  .right {
    text-align: right;
    margin: 8vw 0 0 16vw;
  }
  .center {
    margin: 8vw 8vw;
  }
  img {
    width: 100%;
  }
</style>
