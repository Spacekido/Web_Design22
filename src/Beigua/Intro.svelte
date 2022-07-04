<script>
  import CustomButton from "../Components/CustomButton.svelte";
</script>

<div class="mdc-typography--headline2 uppercase">Parco del Beigua, Liguria</div>

<div class="left">
  <div class="mdc-typography--headline4 uppercase">Potrebbe succedere anche a noi?</div>
  <div class="mdc-typography--body1">
    Con la legge 257/92 l’Italia ha messo <span class="highlight">al bando</span> l'amianto, ma non ha risolto i problemi legati alla
    presenza dell'<span class="highlight">amianto</span> in natura e/o all'utilizzo dei materiali a base di amianto già prodotti e/o messi
    in opera.
    <br/><br/>
    Ai sensi della L.R. 20/2006 Arpal provvede, su richiesta della Regione o degli Enti locali, ad
    effettuare le attività di <span class="highlight">controllo</span> e <span class="highlight">monitoraggio</span> sia di siti estrattivi sia di siti in condizioni naturali
    di affioramento interessati dalla presenza di <span class="italic">"Pietre verdi"</span> (rocce ofiolitiche) a potenziale rischio amianto.
    <br/><br/>
    Quindi se non facciamo attenzione a dove si vorrà intordurre un nuovo sito estrattivo, le polveri sottili che si potrebbero alzare a seguito degli scavi,
    potrebbero mescolarsi all'aria che respiramo e <span class="highlight italic">"contaminare"</span> l'intera Ligura e il basso Piemonte, rendendo così inabitabili
    questi <span class="highlight">scorci</span> così tanto a noi cari.
    <br/><br/>
    <CustomButton label="Amianto naturale" href="https://www.arpal.liguria.it/tematiche/suolo/amianto-naturale.html" direction="left-button" />
  </div>
</div>

<div class="right">
  <div class="mdc-typography--headline4 uppercase primary">Le pietre verdi</div>
  <div class="mdc-typography--body1">
    Le <span class="italic">"Pietre verdi"</span> rappresentano i frammenti di un antico fondale oceanico successivamente compresso ed emerso in seguito ad imponenti movimenti della crosta terreste.
    Tali rocce sono suscettibili di contenere <span class="highlight">minerali di amianto</span> e, pertanto, è importante conoscere dove si possono trovare,
    soprattutto in tema di gestione ed utilizzo delle terre e rocce da scavo.
    <br/><br/>
    La <span class="highlight">cartografia</span> tematica prodotta riporta gli areali in cui, in relazione alle rocce riconosciute in affioramento o subaffioramento,
    potrebbero rinvenirsi <span class="highlight">mineralizzazioni asbestiformi</span>, non indica se l'amianto sia presente o meno in una determinata area.
    <br/><br/>
    La mappatura riguarda in particolar modo il substrato roccioso, secondo gli standard metodologici di rappresentazione dei rilevamenti geologici classici (Carg e Cgr), ed è, pertanto, relativa alla
    presenza di <span class="highlight">amianto in condizioni di <span class="italic">"origine primaria"</span></span>, ovvero nel contesto geologico originario.
    Sono stati considerati solo gli accumuli presenti nelle cartografie di riferimento, contenuti all'interno delle litologie considerate potenzialmente asbestifere, 
    non è stata valutata l'eventuale presenza di amianto di <span class="italic">"natura secondaria"</span>, quale quella di possibile riscontro nei depositi fluviali, gravitativi, coperture detritiche ecc.
    <br/><br/>
    <CustomButton label="Lo studio completo" href="https://www.regione.liguria.it/homepage/ambiente/territorio/bonifiche-siti-contaminati/mappatura-amianto/amianto-naturale.html" direction="right-button" />
  </div>
</div>

<img src="img/beigua-mappa.png" alt="Mappa della presenza di Pietre Verdi in Liguria, con evidenza sul parco del Beigua" />
<div class="mdc-typography--body1">
  Mappa della presenza di Pietre Verdi in Liguria, con evidenza sul parco del Beigua
  <CustomButton label="Mappa interattiva" href="http://srvcarto.regione.liguria.it/geoviewer2/pages/apps/geoportale/index.html?id=1200" direction="right-button" />
</div>

<style>
  .left {
    text-align: left;
    margin: 8vw 25vw 0 0;
  }
  .right {
    text-align: right;
    margin: 23vw 0 0 26vw;
  }
  img {
    width: 60vw;
  }
</style>
