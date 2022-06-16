<script>
  import TopAppBar from "./TopAppBar.svelte";
  import Card from "./Card.svelte";
  import LayoutGrid, { Cell } from "@smui/layout-grid";
</script>

<TopAppBar />
<main>
  <div class="mdc-typography--headline2 uppercase">Introduzione all'amianto</div>
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
    margin-top: 130px;
  }

  /* TODO aggiungere altri media breakpoint */
  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
