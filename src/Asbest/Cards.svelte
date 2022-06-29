<script lang="ts">
  import CustomButton from "../Components/CustomButton.svelte";
  import ContentCard from "../Components/ContentCard.svelte";
</script>

<!-- TODO aggiungere immagini e testo dei posti giusti -->
<div class="mdc-typography--headline4 uppercase">Perché preoccuparsi così tanto dell'amianto?</div>
<div class="flex-row-8">
  <ContentCard
    contentId={"content-asbest1"}
    src={"img/asbest-russia.jpg"}
    title={"Igor Bragin"}
    subtitle={"Medico capo del complesso ospedaliero Asbest City Hospital"}
    buttonLabel={"Scopri la sua opinione"}
  />

  <div class="mdc-typography--body1 hidden right flex-column-4" id="content-asbest1">
    Ha liquidato come "non corrispondente alla realtà" uno studio scientifico del 2016 che mostrava tassi elevati di cancro ai polmoni lì.
    <br /><br />
    Lo studio, una revisione comparativa dei tassi di mortalità ad Asbest e nella regione circostante di Sverdlovsk, ha rilevato che "i tassi di mortalità per tumori
    del polmone, dello stomaco e del colon erano statisticamente significativamente più alti nella città di Asbest". L'incidenza del mesotelioma, una malattia polmonare
    ampiamente attribuita all'amianto in Occidente, non è stata studiata perché la Russia non registra questa malattia separatamente.
  </div>
</div>

<div class="flex-row-8">
  <div class="mdc-typography--body1 hidden left flex-column-4 italic" id="content-asbest2">
    "Sono un pensionato di 88 che ha trascorso decenni a lavorare nella fabbrica di amianto, la mia stessa età avanzata e il mantenimento di una buona salute
    sono la prova che tutta l'"isteria" sull'amianto non poteva essere vera.<br />
    Mentre lavoravo bevevo una bottiglia di latte al giorno, l'azienda le forniva gratuitamente per aiutare i lavoratori a difendersi dalle malattie."
    <br /><br />
    "Tutto è pericoloso in una certa misura. Il cento per cento garantisce che qualcosa non è dannoso non esiste."
  </div>
  <ContentCard
    contentId={"content-asbest2"}
    src={"img/viktor-stepanov.jpg"}
    title={"Viktor Stepanov"}
    subtitle={"Ex lavoratore della fabbrica di amianto"}
    buttonLabel={"Leggi le sua parole"}
    direction={"mirrored"}
  />
</div>

<style>
  .left {
    text-align: left;
    align-items: start;
  }
  .right {
    text-align: right;
    align-items: end;
  }
</style>
