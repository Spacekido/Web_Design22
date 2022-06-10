<script>
  import TopAppBar from "@smui/top-app-bar";
  import Button, { Label } from "@smui/button";
  var counter = 0;

  import Card, { Content } from "@smui/card";
</script>

<main>
  <TopAppBar />
  <h1>Template web design 2022</h1>
  <Button on:click={() => counter++}>
    <Label>+</Label>
  </Button>
  <Button on:click={() => counter--}>
    <Label>-</Label>
  </Button>

  <pre class="status">Clicked: {counter}</pre>

  <Button color="primary">Colore Primario</Button>
  <Button color="secondary">Colore Secondario</Button>

  <!-- <div class="card-display">
    <div class="card-container">
      <Card padded>A simple padded card.</Card>
    </div>

    <div class="card-container">
      <Card>
        <Content>You can also use <code>Content</code>.</Content>
      </Card>
    </div>

    <div class="card-container">
      <Card variant="outlined" padded>An outlined, padded card.</Card>
    </div>
  </div> -->
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
