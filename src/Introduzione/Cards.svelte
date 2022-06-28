<script lang="ts">
  import LinkCard from "../Components/LinkCard.svelte";
</script>

<div>
  <div class="mdc-typography--headline3 uppercase primary">Quali luoghi ti attendono nell'Inferno dell'Amianto?</div>
  <div class="mdc-typography--body1" style="padding-top: 2%;">
    Lasciati guidare nel viaggio attraverso i quattro <span class="highlight">gironi</span> infernali.
    <br />Le <span class="highlight">cittá</span> che incontrerai ti mostreranno quanta influenza abbia avuto l'amianto in tutto il mondo.
    <br />Ad accompagnarti troverai gli <span class="highlight">uomini</span> che di piú hanno sofferto, e potrai ascoltare le loro storie.
  </div>
</div>
<div class="container">
  <!-- TODO aggiungere immagini e testo dei posti giusti -->
  <!-- TODO fix dimensioni delle card cambiano con la lunghezza del testo, devono essere fisse tutte uguali -->
  <LinkCard
    href="#section3"
    src="img/balangero.svg"
    title="Balangero, Italia"
    subtitle="La miniera di amianto piú grande d'Europa. Rimasta attiva nella provincia di Torino fino al 1990."
  />

  <LinkCard
    href="#section4"
    src="img/libby.jpg"
    title="Libby, Montana"
    subtitle="Cittá statunitense che ha sofferto la contaminazione d'amianto causata dall'estrazione di vermiculite."
  />

  <LinkCard
    href="#section5"
    src="img/placeholder.png"
    title="Minaçu, Brasile"
    subtitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the."
  />

  <LinkCard
    href="#section6"
    src="img/placeholder.png"
    title="Asbest, Russia"
    subtitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the."
  />
</div>

<style>
  .container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 4%;
  }
</style>
