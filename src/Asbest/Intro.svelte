<script>
  import CustomButton from "../Components/CustomButton.svelte";
</script>

<div class="mdc-typography--headline1 uppercase">Asbest, Russia</div>
<div class="left">
  <div class="mdc-typography--headline4 uppercase">Storia del passato</div>
  <div class="mdc-typography--body1">
    Ci troviamo in Russia, più precisamente ad Asbest, una piccola città chiamata così proprio per la presenza del
    <span class="highlight">più grande</span> giacimento a cielo aperto di amianto <span class="highlight">nel mondo</span>: quasi mezzo milione di tonnellate
    di amianto vengono scavate ogni anno nella miniera dall'impresa <span class="highlight">Uralasbest</span>.
    <br /><br />
    Circa settantamila persone vivono ad Asbest, un tempo conosciuta come <span class="highlight">"la città che muore"</span> per i suoi altissimi tassi di
    cancro ai polmoni.
    <br /><br />
    Nonostante il <span class="highlight">divieto</span> di estrazione e distribuzione dell'amianto da parte degli altri paesi, l'azienda locale ha cercato di
    eliminare l'associazione popolare tra amianto e cancro ai polmoni e altre malattie, <span class="highlight">rinominando</span> il suo prodotto come
    <span class="highlight">"crisotilo"</span>, il nome blando e tecnico del tipo specifico del minerale estratto.
    <br /><br />
    <CustomButton label="L'azienda Uralasbest" href="https://www.uralasbest.ru/en/about-company" direction="left-button" />
  </div>
</div>

<div class="right">
  <div class="mdc-typography--headline4 uppercase primary">Conseguenze sul presente</div>
  <div class="mdc-typography--body1">
    Tutt'oggi i produttori russi operano noncuranti dei pericoli e <span class="highlight">sostenuti dal governo</span>, il quale fa leva sugli abitanti sapendo
    che la miniera è l’unica importante fonte economica della città.<br />
    Asbest, dopo un secolo di estrazione mineraria intensiva, ha ancora abbastanza amianto crisotilo sepolto nel terreno per mantenere Uralasbest in attività per
    almeno <span class="highlight">un altro secolo</span>.
    <br /><br />
    L'opinione di molti residenti di Asbest è che ci sono così tante <span class="highlight">altre questioni</span> di cui preoccuparsi nella loro regione
    fortemente industrializzata, inclusa una centrale nucleare a poche miglia di distanza e una centrale elettrica a carbone ancora più vicina, che l'amianto è
    probabilmente
    <span class="highlight">l'ultima delle loro preoccupazioni</span>.
    <br /><br />
    La vita dei cittadini è fortemente intrecciata con quella della miniera, tanto che la città possiede un <span class="highlight">inno municipale</span>
    chiamato
    <span class="italic">"Amianto, la mia città e il mio destino"</span>. Dal 2002 il Consiglio Comunale ha adottato perfino una nuova
    <span class="highlight">bandiera</span>: le linee bianche, che simboleggiano le fibre di amianto, passano attraverso un anello di fiamme. Un cartellone
    affisso da Uralasbest proclama
    <span class="italic">"L'amianto è il nostro futuro"</span>.
  </div>
</div>

<style>
  .left {
    text-align: left;
    margin: 2vw 24vw 0 4vw;
  }
  .right {
    text-align: right;
    margin: 10vw 0 0 20vw;
  }
</style>
