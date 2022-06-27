<script>
  import TopAppBar from "./Components/TopAppBar.svelte";
  import IntroTitle from "./Introduzione/Title.svelte";
  import FAB from "./Introduzione/FAB.svelte";
  import FABExtended from "./Introduzione/FABExtended.svelte";
  import IntroAmianto from "./Introduzione/Amianto.svelte";
  import IntroCards from "./Introduzione/Cards.svelte";
  import BalangeroIntro from "./Balangero/Intro.svelte";
  import BalangeroCards from "./Balangero/Cards.svelte";
  import BalangeroStats from "./Balangero/Stats.svelte";
  import LibbyIntro from "./Libby/Intro.svelte";
  import LibbyCards from "./Libby/Cards.svelte";
  import LibbyStats from "./Libby/Stats.svelte";
  import MinacuIntro from "./Minacu/Intro.svelte";
  import MinacuCards from "./Minacu/Cards.svelte";
  import MinacuStats from "./Minacu/Stats.svelte";
  import AsbestIntro from "./Asbest/Intro.svelte";
  import AsbestCards from "./Asbest/Cards.svelte";
  import AsbestStats from "./Asbest/Stats.svelte";
</script>

<TopAppBar />
<main>
  <div id="section0">
    <IntroTitle />
    <FABExtended target={"section1"} label={"Comincia il viaggio"} />
  </div>

  <div id="section1">
    <IntroAmianto />
    <FAB target={"section2"} />
  </div>

  <div id="section2">
    <IntroCards />
    <FAB target={"section3"} />
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

  <div id="section5">
    <MinacuIntro />
    <MinacuCards />
    <MinacuStats />
  </div>

  <div id="section6">
    <AsbestIntro />
    <AsbestCards />
    <AsbestStats />
  </div>
</main>

<style>
  main {
    padding: 0;
    margin: 0;
    text-align: center;
    max-width: 240px;
  }
  [id^="section"] {
    height: auto;
    display: flex;
    flex-direction: column;
    margin-inline: 200px;
  }
  #section0 {
    gap: 2em;
    padding-block: 200px;
  }
  #section1 {
    gap: 8vh;
    padding-block: 60px;
  }
  #section2 {
    padding-block: 60px;
    gap: 15vh;
  }
  #section3 {
    margin-top: 45vh;
    padding-top: 10vh;
    gap: 10vh;
  }
  #section4 {
    margin-top: 45vh;
    padding-top: 10vh;
    gap: 10vh;
  }
  /* TODO aggiungere altri media breakpoint */
  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
