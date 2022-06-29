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

<!-- TODO correggere i link in modo che si arrivi sul testo -->
<TopAppBar />
<main>
  <div id="section0">
    <img id="background0" src="img/background-full-0.png" alt="" />
    <div id="content0">
      <IntroTitle />
      <FABExtended target={"section1"} label={"Comincia il viaggio"} />
    </div>
  </div>

  <div id="section1">
    <img id="background1" src="img/background-full-1.png" alt="" />
    <div id="content1">
      <IntroAmianto />
      <FAB target={"section2"} />
    </div>
  </div>

  <div id="section2">
    <img id="background2" src="img/background-full-2.png" alt="" />
    <div id="content2">
      <IntroCards />
      <FABExtended target={"content3"} label={"Entra nella miniera"} />
    </div>
  </div>

  <div id="section3">
    <img id="background3" src="img/background-full-3.png" alt="" />
    <div id="content3">
      <BalangeroIntro />
      <BalangeroCards />
      <BalangeroStats />
    </div>
  </div>

  <div id="section4">
    <img id="background4" src="img/background-full-3.png" alt="" />
    <div id="content4">
      <LibbyIntro />
      <LibbyCards />
      <LibbyStats />
    </div>
  </div>

  <div id="section5">
    <img id="background5" src="img/background-full-3.png" alt="" />
    <div id="content5">
      <MinacuIntro />
      <MinacuCards />
      <MinacuStats />
    </div>
  </div>

  <div id="section6">
    <img id="background6" src="img/background-full-3.png" alt="" />
    <div id="content6">
      <AsbestIntro />
      <AsbestCards />
      <AsbestStats />
    </div>
  </div>
</main>

<style>
  main {
    padding: 0;
    margin: 0;
    text-align: center;
  }
  [id^="section"] {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  [id^="background"] {
    z-index: 1;
    min-height: 100%;
    max-width: 100%;
  }
  [id^="content"] {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-width: fit-content;
    padding-inline: 10%;
    position: absolute;
    z-index: 2;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  #content0,
  #content1,
  #content2 {
    gap: 24px;
  }
  #content2 {
    padding: 0;
  }
  #content3,
  #content4,
  #content5,
  #content6 {
    gap: 64px;
  }
  /* TODO aggiungere altri media breakpoint */
  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
