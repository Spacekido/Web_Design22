<script>
  import TopAppBar from "./Components/TopAppBar.svelte";
  import FAB from "./Components/CustomFAB.svelte";
  import Footer from "./Components/Footer.svelte";
  import IntroTitle from "./Amianto/Title.svelte";
  import IntroIntro from "./Amianto/Intro.svelte";
  import IntroCards from "./Amianto/Cards.svelte";
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
  import BeiguaIntro from "./Beigua/Intro.svelte";
  import BeiguaCards from "./Beigua/Cards.svelte";
</script>

<!-- TODO aggiungere immagine di sfondo con parte finale -->
<TopAppBar />
<main>
  <div id="section1-1">
    <img class="background-lg" src="img/background-1-1.png" alt="" />
    <img class="background-sm" src="img/background-1-1-sm.png" alt="" />
    <div id="content1-1">
      <IntroTitle />
      <FAB target={"section1-2"} label={"Comincia il viaggio"} />
    </div>
  </div>

  <div id="section1-2">
    <img class="background-lg" src="img/background-1-2.png" alt="" />
    <img class="background-sm" src="img/background-1-2-sm.png" alt="" />
    <div id="content1-2">
      <IntroIntro />
    </div>
  </div>

  <div id="section1-3">
    <img class="background-lg" src="img/background-1-3.png" alt="" />
    <img class="background-sm" src="img/background-1-3-sm.png" alt="" />
    <div id="content1-3">
      <IntroCards />
      <div style="margin-top: 2vw;">
        <FAB target={"content2-1"} label={"Entra nella miniera"} />
      </div>
    </div>
  </div>

  <div id="section2-1">
    <img class="background-lg" src="img/background-2-1.png" alt="" />
    <img class="background-sm" src="img/background-2-1-sm.png" alt="" />
    <div id="content2-1">
      <MinacuIntro />
    </div>
  </div>

  <div id="section2-2">
    <img class="background-lg" src="img/background-2-2.png" alt="" />
    <img class="background-sm" src="img/background-2-2-sm.png" alt="" />
    <div id="content2-2">
      <MinacuCards />
    </div>
  </div>

  <div id="section2-3">
    <img class="background-lg" src="img/background-2-3.png" alt="" />
    <img class="background-sm" src="img/background-2-3-sm.png" alt="" />
    <div id="content2-3">
      <MinacuStats />
    </div>
  </div>

  <div id="section3-1">
    <img class="background-lg" src="img/background-3-1.png" alt="" />
    <img class="background-sm" src="img/background-3-1-sm.png" alt="" />
    <div id="content3-1">
      <BalangeroIntro />
    </div>
  </div>

  <div id="section3-2">
    <img class="background-lg" src="img/background-3-2.png" alt="" />
    <img class="background-sm" src="img/background-3-2-sm.png" alt="" />
    <div id="content3-2">
      <BalangeroCards />
    </div>
  </div>

  <div id="section3-3">
    <img class="background-lg" src="img/background-3-3.png" alt="" />
    <img class="background-sm" src="img/background-3-3-sm.png" alt="" />
    <div id="content3-3">
      <BalangeroStats />
    </div>
  </div>

  <div id="section4-1">
    <img class="background-lg" src="img/background-4-1.png" alt="" />
    <img class="background-sm" src="img/background-4-1-sm.png" alt="" />
    <div id="content4-1">
      <LibbyIntro />
    </div>
  </div>

  <div id="section4-2">
    <img class="background-lg" src="img/background-4-2.png" alt="" />
    <img class="background-sm" src="img/background-4-2-sm.png" alt="" />
    <div id="content4-2">
      <LibbyCards />
    </div>
  </div>

  <div id="section4-3">
    <img class="background-lg" src="img/background-4-3.png" alt="" />
    <img class="background-sm" src="img/background-4-3-sm.png" alt="" />
    <div id="content4-3">
      <LibbyStats />
    </div>
  </div>

  <div id="section5-1">
    <img class="background-lg" src="img/background-5-1.png" alt="" />
    <img class="background-sm" src="img/background-5-1-sm.png" alt="" />
    <div id="content5-1">
      <AsbestIntro />
    </div>
  </div>

  <div id="section5-2">
    <img class="background-lg" src="img/background-5-2.png" alt="" />
    <img class="background-sm" src="img/background-5-2-sm.png" alt="" />
    <div id="content5-2">
      <AsbestCards />
    </div>
  </div>

  <div id="section5-3">
    <img class="background-lg" src="img/background-5-3.png" alt="" />
    <img class="background-sm" src="img/background-5-3-sm.png" alt="" />
    <div id="content5-3">
      <AsbestStats />
    </div>
  </div>

  <div id="section6-1">
    <img class="background-lg" src="img/background-6-1.png" alt="" />
    <img class="background-sm" src="img/background-6-1-sm.png" alt="" />
    <div id="content6-1">
      <BeiguaIntro />
    </div>
  </div>

  <div id="section6-2">
    <img class="background-lg" src="img/background-6-2.png" alt="" />
    <img class="background-sm" src="img/background-6-2-sm.png" alt="" />
    <div id="content6-2">
      <BeiguaCards />
    </div>
  </div>

  <Footer />
</main>

<style>
  main {
    padding-top: 3.5vw;
    margin: 0;
    text-align: center;
  }
  [id^="section"] {
    position: relative;
    display: flex;
    justify-content: center;
  }

  .background-lg {
    z-index: 1;
    width: 100%;
    display: block;
  }
  .background-sm {
    z-index: 1;
    width: 100%;
    display: none;
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
    top: 16vw;
    gap: 0.8vw;
  }
  #content1-2 {
    padding-top: 8vw;
    gap: 8vw;
  }
  #content1-3 {
    padding-top: 6vw;
  }
  #content2-1 {
    margin-top: 13vw;
    padding-top: 15vw;
    padding-bottom: 10vw;
  }
  #content3-1 {
    margin-top: 15vw;
    padding-top: 15vw;
  }
  #content4-1 {
    margin-top: 18vw;
    padding-top: 15vw;
  }
  #content5-1 {
    margin-top: 16vw;
    padding-top: 15vw;
  }
  #content6-1 {
    margin-top: 30vw;
    padding-top: 15vw;
  }
  @media screen and (max-width: 600px) {
    .background-lg {
      z-index: 1;
      width: 100%;
      display: none;
    }
    .background-sm {
      z-index: 1;
      width: 100%;
      display: block;
    }

    [id^="content"] {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      min-width: fit-content;
      padding-inline: 4vw;
      position: absolute;
      z-index: 2;
    }
    #section2-2,
    #section3-2,
    #section4-2,
    #section5-2 {
      z-index: 3; /*per fare in modo che il dialog rimanga sopra le stats*/
    }
    #content1-1 {
      top: 56vw;
      gap: 4vw;
    }
    #content1-2 {
      padding-top: 15vw;
      gap: 8vw;
    }
    #content1-3 {
      padding-top: 6vw;
    }
    #content2-1 {
      margin-top: 40vw;
      padding-top: 25vw;
      padding-bottom: 10vw;
    }
    #content3-1 {
      margin-top: 210vw;
      padding-top: 25vw;
    }
    #content3-3 {
      margin-top: 10vw;
    }
    #content4-1 {
      margin-top: 20vw;
      padding-top: 25vw;
    }
    #content5-1 {
      margin-top: 60vw;
      padding-top: 25vw;
    }
    #content6-1 {
      margin-top: 40vw;
      padding-top: 25vw;
    }
  }
</style>
