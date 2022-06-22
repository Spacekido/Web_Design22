<script>
  import TopAppBar from "./TopAppBar.svelte";
  import IntroTitle from "./Introduzione/Title.svelte";
  import IntroFAB from "./Introduzione/IntroFAB.svelte";
  import ContinueFAB from "./Introduzione/ContinueFAB.svelte";
  import IntroAmianto from "./Introduzione/Amianto.svelte";
  import LuoghiButtons from "./Introduzione/LuoghiButtons.svelte";
  import LuoghiCards from "./Introduzione/LuoghiCards.svelte";
  import BalangeroIntro from "./Balangero/Intro.svelte";
  import BalangeroCards from "./Balangero/Cards.svelte";
  import BalangeroStats from "./Balangero/Stats.svelte";
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
    <ContinueFAB />
  </div>

  <div id="section2">
    <!-- TODO scegliere tra imagebutton rotondi e card quadrate -->
    <LuoghiCards />
    <!-- <LuoghiButtons /> -->
    <ContinueFAB target={"section2"} answer={42} />
  </div>

  <div id="section3">
    <BalangeroIntro />
    <BalangeroCards />
    <BalangeroStats />
  </div>
</main>

<style>
  main {
    padding: 0;
    text-align: center;
    max-width: 240px;
    margin: 100px 0;
  }
  #section0 {
    height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-top: 200px;
  }
  #section1,
  #section2,
  #section3 {
    height: 100vh;
    padding-block: 60px;
    margin-inline: 200px;
    display: flex;
    flex-direction: column;
    gap: 200px;
  }
  /* TODO aggiungere altri media breakpoint */
  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
