<script lang="ts">
  import Card, { Content, Actions, PrimaryAction } from "@smui/card";
  import Button, { Label } from "@smui/button";
</script>

<!-- TODO aggiungere immagini e testo dei posti giusti -->
<!-- TODO aggiungere icona che suggerisce di leggere di piú nel body affianco -->
<div class="mdc-typography--headline4 uppercase">TESTIMONIANZE DELLE PERSONE / CONSEGUENZE sull'ambiente</div>
<div class="list-of-cards">
  <div class="card-and-body">
    <Card class="card-person">
      <PrimaryAction on:click={() => document.getElementById("body-balangero1").classList.toggle("hidden")}>
        <img src="img/franco-berrino.jpg" alt="Dottor Franco Berrino" />
        <Content>
          <div class="mdc-typography--body1 uppercase">Dott. Franco Berrino</div>
          <div class="mdc-typography--subtitle1">
            Laureatosi in medicina all'Università di Torino nel 1969 e specializzatosi in anatomia patologica, si è poi dedicato all'epidemiologia dei tumori.
          </div>
        </Content>
        <Actions fullBleed>
          <Button>
            <Label class="mdc-typography--subtitle1 bold">Approfondisci</Label>
            <i class="material-icons" aria-hidden="true">arrow_forward</i>
          </Button>
        </Actions>
      </PrimaryAction>
    </Card>
    <div class="mdc-typography--body1 hidden right" id="body-balangero1">
      Testimonianza diretta ci arriva dal medico epidemiologo ed esperto di tumori Franco Berrino, cresciuto proprio a Balangero dove il padre lavorava nella
      miniera di amianto.
      <div class="italic">
        "Non c’era alcuna prevenzione: mio padre fu invitato a dimettersi perché ai padroni non piacevano i suoi investimenti per mettere i filtri, delle
        maniche di cotone. Alla fine è morto di amianto: tumore al polmone a 72 anni senza mai aver fumato una sigaretta. Stesso destino per mio fratello:
        mesotelioma, a 67 anni."
      </div>
      <Button
        class="right"
        variant="raised"
        href="https://www.corriere.it/cook/news/21_maggio_10/franco-berrino-vivo-solitudine-la-morte-mia-moglie-jo-b48c0c7c-a78d-11eb-b37e-07dee681b819.shtml"
      >
        <Label class="mdc-typography--subtitle1 bold">Leggi l'intervista</Label>
      </Button>
    </div>
  </div>

  <div class="card-and-body">
    <div class="mdc-typography--body1 hidden left" id="body-balangero2">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
      into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
      passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </div>
    <!-- TODO non si riesce a cambiare le dimensioni della card a destra in quanto il body prende tutto lo spazio -->
    <Card class="card-place">
      <PrimaryAction on:click={() => document.getElementById("body-balangero2").classList.toggle("hidden")}>
        <img src="img/placeholder.png" alt="Dottor Franco Berrino" />
        <Content>
          <div class="mdc-typography--subtitle1 uppercase">Altra persona</div>
          <div class="mdc-typography--subtitle2">Professione</div>
        </Content>
        <Actions fullBleed>
          <Button>
            <i class="material-icons mirrored" aria-hidden="true">arrow_forward</i>
            <Label class="mdc-typography--subtitle1 bold">Approfondisci</Label>
          </Button>
        </Actions>
      </PrimaryAction>
    </Card>
  </div>
</div>

<style>
  .card-and-body {
    display: flex;
    flex-direction: row;
  }
  [id^="body-balangero"] {
    display: flex;
    align-items: center;
    transition: all 0.5s;
  }
  #body-balangero1 {
    display: flex;
    gap: 5vh;
    justify-content: center;
    align-items: end;
    flex-direction: column;
  }
  .left {
    text-align: left;
    margin-right: 50px;
  }
  .right {
    text-align: right;
    margin-left: 50px;
  }
  /* TODO classi diverse per card di dimensioni diverse */
  .list-of-cards :global(.card-person) {
    width: 400px;
  }
  .list-of-cards :global(.card-place) {
    width: 600px;
  }
  .list-of-cards {
    display: flex;
    flex-direction: column;
    gap: 50px;
  }
</style>
