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
      <PrimaryAction on:click={() => document.getElementById("body1").classList.toggle("hidden")}>
        <img src="img/franco-berrino.jpg" alt="Dottor Franco Berrino" />
        <Content>
          <div class="mdc-typography--subtitle1 uppercase">Dott. Franco Berrino</div>
          <div class="mdc-typography--subtitle2">dottore</div>
        </Content>
        <Actions fullBleed>
          <Button>
            <Label>Approfondisci</Label>
            <i class="material-icons" aria-hidden="true">arrow_forward</i>
          </Button>
        </Actions>
      </PrimaryAction>
    </Card>
    <div class="mdc-typography--body1 hidden right" id="body1">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
      into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
      passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </div>
  </div>

  <div class="card-and-body">
    <div class="mdc-typography--body1 hidden left" id="body2">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
      into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
      passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </div>
    <!-- TODO non si riesce a cambiare le dimensioni della card a destra in quanto il body prende tutto lo spazio -->
    <Card class="card-place">
      <PrimaryAction on:click={() => document.getElementById("body2").classList.toggle("hidden")}>
        <img src="img/placeholder.png" alt="Dottor Franco Berrino" />
        <Content>
          <div class="mdc-typography--subtitle1 uppercase">Altra persona</div>
          <div class="mdc-typography--subtitle2">Professione</div>
        </Content>
        <Actions fullBleed>
          <Button>
            <i class="material-icons mirrored" aria-hidden="true">arrow_forward</i>
            <Label>Approfondisci</Label>
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
  [id^="body"] {
    display: flex;
    align-items: center;
    transition: all 0.5s;
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
