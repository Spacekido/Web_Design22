<script>
  import TopAppBar from "./TopAppBar.svelte";
  import IntroTitle from "./Introduzione/Title.svelte";
  import IntroFAB from "./Introduzione/FAB.svelte";
  import IntroAmianto from "./Introduzione/Amianto.svelte";
  import LuoghiButtons from "./Introduzione/LuoghiButtons.svelte";
  import LuoghiCards from "./Introduzione/LuoghiCards.svelte";
  import BalangeroIntro from "./Balangero/Intro.svelte";
  import BalangeroCards from "./Balangero/Cards.svelte";
  import BalangeroStats from "./Balangero/Stats.svelte";
</script>

<TopAppBar />
<main>
  <div class="section0">
    <IntroTitle />
    <IntroFAB />
  </div>

  <div class="section1" id="section1">
    <IntroAmianto />
  </div>

  <div class="section2">
    <!-- TODO scegliere tra imagebutton rotondi e card quadrate -->
    <LuoghiCards />
    <LuoghiButtons />
  </div>

  <div class="section3" id="section3">
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
  .section0 {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 200px;
  }
  .section1,
  .section3 {
    margin: 300px 200px 100px;
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
  /* TODO aggiungere altri media breakpoint */
  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
