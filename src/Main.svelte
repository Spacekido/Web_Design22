<script>
  import TopAppBar from "./TopAppBar.svelte";
  import IntroTitle from "./Introduzione/Title.svelte";
  import IntroFAB from "./Introduzione/IntroFAB.svelte";
  import ContinueFAB from "./Introduzione/ContinueFAB.svelte";
  import IntroAmianto from "./Introduzione/Amianto.svelte";
  // import LuoghiButtons from "./Introduzione/LuoghiButtons.svelte";
  import LuoghiCards from "./Introduzione/LuoghiCards.svelte";
  import BalangeroIntro from "./Balangero/Intro.svelte";
  import BalangeroCards from "./Balangero/Cards.svelte";
  import BalangeroStats from "./Balangero/Stats.svelte";
  import LibbyIntro from "./Libby/Intro.svelte";
  import LibbyCards from "./Libby/Cards.svelte";
  import LibbyStats from "./Libby/Stats.svelte";
</script>

<TopAppBar />
<main>
  <div id="section0">
    <!-- TODO il titolo deve occupare l'intera schermata di spazio -->
    <IntroTitle />
    <!-- TODO il FAB deve portare a sezioni graficamente complete, senza tagliare quelle sotto -->
    <IntroFAB />
  </div>

  <div id="section1">
    <IntroAmianto />
    <ContinueFAB target={"section2"} />
  </div>

  <div id="section2">
    <!-- TODO scegliere tra imagebutton rotondi e card quadrate -->
    <LuoghiCards />
    <!-- <LuoghiButtons /> -->
    <ContinueFAB target={"section3"} />
  </div>

  <div id="section3">
    <BalangeroIntro />
    <BalangeroCards />
    <BalangeroStats />
  </div>

  <div id="section4">
    <LibbyIntro />
    <LibbyCards />
    <LibbyStats />
  </div>
</main>

<style>
  main {
    padding: 0;
    text-align: center;
    max-width: 240px;
    margin: 0;
  }
  [id^="section"] {
    min-height: 80vh;
    display: flex;
    flex-direction: column;
  }
  #section0 {
    gap: 20px;
    padding-top: 200px;
  }
  #section1 {
    gap: 8vh;
    padding-block: 60px;
    margin-inline: 200px;
  }
  #section2 {
    padding-block: 60px;
    margin-inline: 200px;
    gap: 15vh;
  }
  #section3 {
    margin-top: 45vh;
    padding-top: 10vh;
    margin-inline: 200px;
    gap: 10vh;
  }
  #section4 {
    margin-top: 45vh;
    padding-top: 10vh;
    margin-inline: 200px;
    gap: 10vh;
  }
  /* TODO aggiungere altri media breakpoint */
  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
