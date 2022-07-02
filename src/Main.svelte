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
<!-- TODO aggiungere immagine di sfondo definitiva -->
<TopAppBar />
<main>
  <div id="section1-1">
    <img class="background" src="img/background-1-1.png" alt="" />
    <div id="content1-1">
      <IntroTitle />
      <FABExtended target={"section1-2"} label={"Comincia il viaggio"} />
    </div>
  </div>

  <div id="section1-2">
    <img class="background" src="img/background-1-2.png" alt="" />
    <div id="content1-2">
      <IntroAmianto />
      <!-- <FAB target={"section2"} style="margin-top: 96px" /> -->
    </div>
  </div>

  <div id="section1-3">
    <img class="background" src="img/background-1-3.png" alt="" />
    <div id="content1-3">
      <IntroCards />
      <div style="margin-top: 4%;">
        <FABExtended target={"content2-1"} label={"Entra nella miniera"} />
      </div>
    </div>
  </div>

  <div id="section2-1">
    <img class="background" src="img/background-2-1.png" alt="" />
    <div id="content2-1">
      <MinacuIntro />
    </div>
  </div>

  <div id="section2-2">
    <img class="background" src="img/background-2-2.png" alt="" />
    <div id="content2-2">
      <MinacuCards />
    </div>
  </div>

  <div id="section2-3">
    <img class="background" src="img/background-2-3.png" alt="" />
    <div id="content2-3">
      <MinacuStats />
    </div>
  </div>
  TODO - RESTO DELLE IMMAGINI DELLO SFONDO ANCORA DA TAGLIARE

  <!-- <div id="section4">
    <img id="background4" src="img/background-full-3.png" alt="" />
    <div id="content4">
      <BalangeroIntro />
      <BalangeroCards />
      <BalangeroStats />
    </div>
  </div>

  <div id="section5">
    <img id="background5" src="img/background-full-3.png" alt="" />
    <div id="content5">
      <LibbyIntro />
      <LibbyCards />
      <LibbyStats />
    </div>
  </div>

  <div id="section6">
    <img id="background6" src="img/background-full-3.png" alt="" />
    <div id="content6">
      <AsbestIntro />
      <AsbestCards />
      <AsbestStats />
    </div>
  </div> -->
</main>

<style>
  main {
    padding-top: 64px;
    margin: 0;
    text-align: center;
  }
  [id^="section"] {
    position: relative;
    display: flex;
    justify-content: center;
  }
  .background {
    z-index: 1;
    width: 100%;
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
  }
  #content1-1 {
    gap: 24px;
    top: 30%;
  }
  #content1-2 {
    padding-top: 6%;
    gap: 24px;
    gap: 4em;
  }
  #content1-3 {
    padding-top: 8%;
  }
  #content2-1 {
    padding-block: 10vw;
    top: 15vw;
  }
  /* #content3,
  #content4,
  #content5,
  #content6 {
    gap: 64px;
  } */
  /* TODO aggiungere altri media breakpoint */
  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
