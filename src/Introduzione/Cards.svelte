<script lang="ts">
  import LinkCard from "../Components/LinkCard.svelte";
</script>

<div>
  <div class="mdc-typography--headline4 uppercase primary">Quali luoghi ti attendono nell'Inferno dell'Amianto?</div>
  <div class="mdc-typography--body1" style="padding-top: 2%;">
    Lasciati guidare nel viaggio attraverso i quattro <span class="highlight">gironi</span> infernali.
    <br />Le <span class="highlight">cittá</span> che incontrerai ti mostreranno quanta influenza abbia avuto l'amianto in tutto il mondo.
    <br />Ad accompagnarti troverai gli <span class="highlight">uomini</span> che di piú hanno sofferto, e potrai ascoltare le loro storie.
  </div>
</div>
<div class="flex-row-2" style="justify-content: center; gap: 2vw">
  <LinkCard
    href="#section3"
    src="img/minacu-mine.png"
    title="Minaçu, Brasile"
    subtitle="L'ultima miniera di amianto del Brasile ancora attiva, nonstante il divieto legale imposto dallo stato."
  />

  <LinkCard
    href="#section4"
    src="img/balangero-mine.png"
    title="Balangero, Italia"
    subtitle="La miniera di amianto piú grande d'Europa. Rimasta attiva nella provincia di Torino fino al 1990."
  />

  <LinkCard
    href="#section5"
    src="img/libby-mine.png"
    title="Libby, Montana"
    subtitle="La cittá statunitense che ha sofferto la contaminazione d'amianto causata dall'estrazione di vermiculite."
  />

  <LinkCard
    href="#section6"
    src="img/asbest-mine.png"
    title="Asbest, Russia"
    subtitle="Al giorno d'oggi, la miniera con la maggiore produzione annuale di amianto di tutto il mondo."
  />
</div>
