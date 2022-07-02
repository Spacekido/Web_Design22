<script lang="ts">
  import CustomButton from "../Components/CustomButton.svelte";
  import ContentCard from "../Components/ContentCard.svelte";
</script>

<!-- TODO aggiungere immagini e testo dei posti giusti -->
<div class="mdc-typography--headline4 uppercase">Perché preoccuparsi così tanto dell'amianto?</div>
<div class="flex-row-4">
  <ContentCard
    contentId={"content-asbest1"}
    src={"img/asbest-trump.jpeg"}
    title={"Donald Trump"}
    subtitle={"Come il 45° presidente degli Stati Uniti viene usato nella propaganda a favore dell'amianto"}
    buttonLabel={"Approfondisci la storia"}
    direction={"left-card"}
  />
  <div class="mdc-typography--body1 hidden right-align flex-column-2" id="content-asbest1">
    <div>
      Attaccato per decenni dai difensori della salute, l'ostinatamente provocatorio produttore russo di amianto pensa di aver forse finalmente trovato la
      figura perfetta per una campagna per riabilitare l'immagine profondamente macchiata del prodotto: Presidente Trump.
      <br /><br />
      Nel 2018 la socieà Russa ha messo in circolazione pallet del proprio prodotto adornati con un sigillo raffiguarnte la faccia di Trump e recitante la seguente
      frase <span class="italic">"Approvato da Donald Trump, 45° presidente degli Stati Uniti"</span>
    </div>
    <CustomButton
      direction={"right-button"}
      label={"Leggi l'articolo"}
      href={"https://www.washingtonpost.com/news/business/wp/2018/07/11/approved-by-donald-trump-asbestos-sold-by-russian-company-is-branded-with-the-presidents-face/"}
    />
  </div>
</div>

<!-- TODO si potrebbe togliere questa card o trovare fonte migliore -->
<div class="flex-row-4">
  <div class="mdc-typography--body1 hidden left-align flex-column-2" id="content-asbest2">
    <div>
      Ha liquidato come "non corrispondente alla realtà" uno studio scientifico del 2016 che mostrava tassi elevati di cancro ai polmoni lì.
      <br /><br />
      Lo studio, una revisione comparativa dei tassi di mortalità ad Asbest e nella regione circostante di Sverdlovsk, ha rilevato che "i tassi di mortalità per
      tumori del polmone, dello stomaco e del colon erano statisticamente significativamente più alti nella città di Asbest". L'incidenza del mesotelioma, una malattia
      polmonare ampiamente attribuita all'amianto in Occidente, non è stata studiata perché la Russia non registra questa malattia separatamente.
    </div>
  </div>
  <ContentCard
    contentId={"content-asbest2"}
    src={"img/asbest-city.jpg"}
    title={"Igor Bragin"}
    subtitle={"Medico capo del complesso ospedaliero Asbest City Hospital"}
    buttonLabel={"Scopri la sua opinione"}
    direction={"right-card"}
  />
</div>

<div class="flex-row-4">
  <ContentCard
    contentId={"content-asbest3"}
    src={"img/asbest-stepanov.jpg"}
    title={"Viktor Stepanov"}
    subtitle={"Ex lavoratore della fabbrica di amianto"}
    buttonLabel={"Leggi le sua parole"}
    direction={"left-card"}
  />
  <div class="mdc-typography--body1 hidden right-align flex-column-2 italic" id="content-asbest3">
    <div>
      "Sono un pensionato di 88 che ha trascorso decenni a lavorare nella fabbrica di amianto, la mia stessa età avanzata e il mantenimento di una buona salute
      sono la prova che tutta l'"isteria" sull'amianto non poteva essere vera.<br />
      Mentre lavoravo bevevo una bottiglia di latte al giorno, l'azienda le forniva gratuitamente per aiutare i lavoratori a difendersi dalle malattie."
      <br /><br />
      "Tutto è pericoloso in una certa misura. Il cento per cento garantisce che qualcosa non è dannoso non esiste."
    </div>
    <CustomButton direction={"right-button"} label={"Leggi l'articolo"} href={"https://www.nytimes.com/2019/04/07/world/europe/asbestos-russia-mine.html"} />
  </div>
</div>

<style>
</style>
