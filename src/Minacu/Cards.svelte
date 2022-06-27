<script lang="ts">
  import CustomButton from "../Components/CustomButton.svelte";
  import CustomCard from "../Components/CustomCard.svelte";
</script>

<!-- TODO aggiungere immagini e testo dei posti giusti -->
<div class="mdc-typography--headline4 uppercase">TESTIMONIANZE DELLE PERSONE / CONSEGUENZE sull'ambiente</div>
<div class="flex-column" style="gap: 50px">
  <div class="flex-row">
    <CustomCard contentId={"body-minacu1"} src={"img/placeholder.png"} title={"Le infinite battaglie legali"} subtitle={""} buttonLabel={"Scopri di piú"} />

    <div class="mdc-typography--body1 hidden right flex-column" id="body-minacu1">
      <CustomButton align={"right"} label={"Guarda l'intervista"} href={"https://youtu.be/ILklSy6QLbI"} />
    </div>
  </div>

  <div class="flex-row">
    <div class="mdc-typography--body1 hidden left flex-column" id="body-minacu2">
      <CustomButton align={"right"} label={"Leggi lo studio"} href={"https://www.nature.com/articles/jes201618"} />
    </div>
    <CustomCard
      contentId={"body-minacu2"}
      src={"img/placeholder.png"}
      title={"La situazione a Libby oggi"}
      subtitle={"Come le attivitá di sanificazione hanno provato a rimediare al disastro causato dalla miniera."}
      buttonLabel={"Esplora"}
    />
  </div>
</div>

<style>
  [id^="body-"] {
    align-items: center;
    justify-content: center;
    gap: 5vh;
    transition: all 0.5s;
  }
  .left {
    text-align: left;
    align-items: start;
    margin-right: 50px;
  }
  .right {
    text-align: right;
    align-items: end;
    margin-left: 50px;
  }
</style>
