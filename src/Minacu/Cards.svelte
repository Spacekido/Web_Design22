<script lang="ts">
  import CustomButton from "../Components/CustomButton.svelte";
  import ContentCard from "../Components/ContentCard.svelte";
</script>

<!-- TODO aggiungere immagini e testo dei posti giusti -->
<div class="mdc-typography--headline4 uppercase">TESTIMONIANZE DELLE PERSONE / CONSEGUENZE sull'ambiente</div>
<div class="flex-row-8">
  <ContentCard contentId={"content-minacu1"} src={"img/placeholder.png"} title={"Le infinite battaglie legali"} subtitle={""} buttonLabel={"Scopri di piú"} />

  <div class="mdc-typography--body1 hidden right flex-column-4" id="content-minacu1">
    <CustomButton align={"right"} label={"Guarda l'intervista"} href={"https://youtu.be/ILklSy6QLbI"} />
  </div>
</div>

<div class="flex-row-8">
  <div class="mdc-typography--body1 hidden left flex-column-4" id="content-minacu2">
    <CustomButton align={"right"} label={"Leggi lo studio"} href={"https://www.nature.com/articles/jes201618"} />
  </div>
  <ContentCard
    contentId={"content-minacu2"}
    src={"img/placeholder.png"}
    title={"La situazione a Libby oggi"}
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
