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
      <PrimaryAction on:click={() => document.getElementById("body-libby1").classList.toggle("hidden")}>
        <img src="img/ralph-hutt.jpg" alt="Ralph Hutt" />
        <Content>
          <div class="mdc-typography--body1 uppercase">Ralph Hutt</div>
          <div class="mdc-typography--subtitle1">Ex-operaio presso l'azienda mineraria W.R. Grace & Company</div>
        </Content>
        <Actions fullBleed>
          <Button>
            <Label class="mdc-typography--subtitle1 bold">Approfondisci</Label>
            <i class="material-icons" aria-hidden="true">arrow_forward</i>
          </Button>
        </Actions>
      </PrimaryAction>
    </Card>
    <div class="mdc-typography--body1 hidden right" id="body-libby1">
      Il signor Ralph Hutt ha lavorato a contatto con l'amianto soltanto per 18 mesi e gli è stata diagnosticata l'asbestosi polmonare nel 2002. Ai tempi, le
      uniche precauzioni fornite ai lavoratori dall'azienda erano mascherine di carta. Quando ha chiesto al suo supervisore una maggiore protezione, gli fu
      detto di non preoccuparsi poiché ció che respiravano era solo polvere.
      <br /><br />
      Giá da allora le sue radiografie mostravano segni dei danni da amianto ai polmoni, tra cui la graduale perdita della capacità di respirare. I dirigenti dell'azienda
      erano al corrente della presenza di amianto nello stabilimento, ma decisero di tenere tutti i lavoratori, tra cui Ralph, all'oscuro.
      <div class="italic">
        "Questo non è il modo in cui me ne voglio andare," ha detto. "Lasciate che qualcuno mi spari. Non voglio essere schiacciato sott'acqua o strangolato. È
        così che ci si sente."
      </div>
      <Button class="right" variant="raised" href="https://youtu.be/ILklSy6QLbI">
        <Label>Guarda l'intervista</Label>
      </Button>
    </div>
  </div>

  <div class="card-and-body">
    <div class="mdc-typography--body1 hidden left" id="body-libby2">
      Secondo uno studio del 2017 pubblicato sul Journal of Exposure Science and Environmental Epidemiology, circa 694 residenti di Libby sono morti per
      malattie correlate all'amianto, e circa 1 su 10 abitanti é attualmente malato.
      <br /><br />
      Libby è ancora un sito contaminato. Da quando la pulizia è iniziata nel 2000, più di 2.600 luoghi contaminati come cantieri, cumuli di avanzi minerari e parchi
      pubblici sono stati sanificati, inserendo terreno pulito e portando via quello contaminato.
      <Button class="right" variant="raised" href="https://www.nature.com/articles/jes201618">
        <Label>Leggi lo studio</Label>
      </Button>
    </div>
    <!-- TODO non si riesce a cambiare le dimensioni della card a destra in quanto il body prende tutto lo spazio -->
    <Card class="card-place">
      <PrimaryAction on:click={() => document.getElementById("body-libby2").classList.toggle("hidden")}>
        <img src="img/libby2.jpg" alt="Zona contaminata vicino a Libby" />
        <Content>
          <div class="mdc-typography--body1 uppercase">La situazione a Libby oggi</div>
          <div class="mdc-typography--subtitle1">Come le attivitá di sanificazione hanno provato a rimediare ai danni sofferti</div>
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
  [id^="body-"] {
    display: flex;
    align-items: center;
    transition: all 0.5s;
  }
  #body-libby1 {
    display: flex;
    gap: 5vh;
    justify-content: center;
    align-items: end;
    flex-direction: column;
  }
  #body-libby2 {
    display: flex;
    gap: 5vh;
    justify-content: center;
    align-items: start;
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
