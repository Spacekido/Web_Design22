<script lang="ts">
  import LinkCard from "../Components/LinkCard.svelte";
</script>

<div>
  <div class="mdc-typography--headline3 uppercase primary">Quali luoghi ti attendono nell'Inferno dell'Amianto?</div>
  <div class="mdc-typography--body1" style="padding-top: 1vw; padding-bottom: 1.8vw;">
    Lasciati guidare nel viaggio attraverso i quattro <span class="highlight">gironi</span> infernali.
    <br />Le <span class="highlight">città</span> che incontrerai ti mostreranno quanta influenza abbia avuto l'amianto in tutto il mondo.
    <br />Ad accompagnarti troverai le <span class="highlight">persone</span> che di più hanno sofferto, e potrai ascoltare le loro storie.
  </div>
</div>
<div id="link-cards" style="">
  <LinkCard
    href="#content2-1"
    src="img/minacu-mine.png"
    title="Minaçu, Brasile"
    subtitle="L'ultima miniera di amianto del Brasile ancora attiva, nonstante il divieto legale imposto dallo stato."
  />

  <LinkCard
    href="#content3-1"
    src="img/balangero-mine.png"
    title="Balangero, Italia"
    subtitle="La miniera di amianto più grande d'Europa. Rimasta attiva nella provincia di Torino fino al 1990."
  />

  <LinkCard
    href="#content4-1"
    src="img/libby-mine.png"
    title="Libby, Montana"
    subtitle="La città che ha sofferto la contaminazione d'amianto causata dall'estrazione di vermiculite."
  />

  <LinkCard
    href="#content5-1"
    src="img/asbest-mine.png"
    title="Asbest, Russia"
    subtitle="Al giorno d'oggi, la miniera con la maggiore produzione annuale di amianto di tutto il mondo."
  />
</div>

<style>
  #link-cards {
    display: flex;
    flex-direction: row;
    gap: 2vw;
  }
  @media screen and (max-width: 600px) {
    #link-cards {
      flex-direction: column;
      gap: 4vw;
    }
  }
</style>
