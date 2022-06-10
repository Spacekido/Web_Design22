<script>
  import TopAppBar from "@smui/top-app-bar";
  import Button, { Label } from "@smui/button";
  import IconButton from "@smui/icon-button";
  var counter = 0;

  import Card, { Content } from "@smui/card";
</script>

<main>
  <TopAppBar />
  <div class="mdc-typography--headline4 uppercase">Template web design 2022</div>

  <IconButton class="material-icons" on:click={() => counter++}>add</IconButton>
  <IconButton class="material-icons" on:click={() => counter--}>remove</IconButton>

  <div class="mdc-typography--body1">Clicked: {counter}</div>

  <Button color="primary"><Label>Colore Primario</Label></Button>
  <Button color="secondary"><Label>Colore Secondario</Label></Button>
</main>

<style>
  main {
    padding: 1em;
    text-align: center;
    max-width: 240px;
    margin: 0 auto;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
