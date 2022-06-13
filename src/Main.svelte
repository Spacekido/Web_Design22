<script>
  import TopAppBar from "./TopAppBar.svelte";
  import Card from "./Card.svelte";
  // import Button, { Label } from "@smui/button";
  import IconButton from "@smui/icon-button";
  import LayoutGrid, { Cell } from "@smui/layout-grid";
  var counter = 0;
</script>

<TopAppBar />
<main>
  <div class="mdc-typography--headline2 uppercase">Introduzione all'amianto</div>

  <IconButton class="material-icons" on:click={() => counter++}>add</IconButton>
  <IconButton class="material-icons" on:click={() => counter--}>remove</IconButton>

  <div class="mdc-typography--body1">Clicked: {counter}</div>

  <LayoutGrid>
    <Cell>
      <Card />
    </Cell>
    <Cell>
      <Card />
    </Cell>
  </LayoutGrid>
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
