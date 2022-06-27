<script lang="ts">
  import CustomButton from "../Components/CustomButton.svelte";
  import CustomCard from "../Components/CustomCard.svelte";
</script>

<!-- TODO aggiungere immagini e testo dei posti giusti -->
<div class="mdc-typography--headline4 uppercase">TESTIMONIANZE DELLE PERSONE / CONSEGUENZE sull'ambiente</div>
<div class="flex-column" style="gap: 50px">
  <div class="flex-row">
    <CustomCard
      contentId={"body-balangero1"}
      src={"img/franco-berrino.jpg"}
      title={"Dottor Franco Berrino"}
      subtitle={"Laureatosi in medicina all'Università di Torino nel 1969 e specializzatosi in anatomia patologica, si è poi dedicato all'epidemiologia dei tumori."}
      buttonLabel={"Approfondisci"}
    />

    <div class="mdc-typography--body1 hidden right flex-column" id="body-balangero1">
      Testimonianza diretta ci arriva dal medico epidemiologo ed esperto di tumori Franco Berrino, cresciuto proprio a Balangero dove il padre lavorava nella
      miniera di amianto.
      <div class="italic">
        "Non c’era alcuna prevenzione: mio padre fu invitato a dimettersi perché ai padroni non piacevano i suoi investimenti per mettere i filtri, delle
        maniche di cotone. Alla fine è morto di amianto: tumore al polmone a 72 anni senza mai aver fumato una sigaretta. Stesso destino per mio fratello:
        mesotelioma, a 67 anni."
      </div>
      <CustomButton
        align={"right"}
        label={"Leggi l'intervista"}
        href={"https://www.corriere.it/cook/news/21_maggio_10/franco-berrino-vivo-solitudine-la-morte-mia-moglie-jo-b48c0c7c-a78d-11eb-b37e-07dee681b819.shtml"}
      />
    </div>
  </div>

  <div class="flex-row">
    <div class="mdc-typography--body1 hidden left flex-column" id="body-balangero2">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
      into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
      passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </div>
    <CustomCard
      contentId={"body-balangero2"}
      src={"img/placeholder.png"}
      title={"Altro contenuto"}
      subtitle={"Sottotitolo"}
      buttonLabel={"Approfondisci"}
      direction={"mirrored"}
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
