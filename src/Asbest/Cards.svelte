<script lang="ts">
  import CustomButton from "../Components/CustomButton.svelte";
  import ContentCard from "../Components/ContentCard.svelte";
</script>

<!-- TODO aggiungere immagini e testo dei posti giusti -->
<div class="mdc-typography--headline4 uppercase">TESTIMONIANZE DELLE PERSONE / CONSEGUENZE sull'ambiente</div>
<div class="flex-row-8">
  <ContentCard
    contentId={"content-asbest1"}
    src={"img/placeholder.png"}
    title={"Fonte 1"}
    subtitle={"Ex-operaio presso l'azienda mineraria W.R. Grace & Company."}
    buttonLabel={"Scopri la sua storia"}
  />

  <div class="mdc-typography--body1 hidden right flex-column-8" id="content-asbest1">
    ...
    <CustomButton align={"right"} label={"Guarda l'intervista"} href={"https://youtu.be/ILklSy6QLbI"} />
  </div>
</div>

<div class="flex-row-8">
  <div class="mdc-typography--body1 hidden left flex-column-8" id="content-asbest2">
    ...
    <CustomButton align={"right"} label={"Leggi lo studio"} href={"https://www.nature.com/articles/jes201618"} />
  </div>
  <ContentCard
    contentId={"content-asbest2"}
    src={"img/placeholder.png"}
    title={"Fonte 2"}
    subtitle={"Come le attivitá di sanificazione hanno provato a rimediare al disastro causato dalla miniera."}
    buttonLabel={"Esplora"}
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
