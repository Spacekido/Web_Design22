<script lang="ts">
  import StatsCard from "../Components/StatsCard.svelte";
  import FAB from "../Components/CustomFAB.svelte";
</script>

<div class="mdc-typography--headline3 uppercase" style="margin-top: 6vw;">La miniera in numeri</div>
<div class="stats-container">
  <StatsCard value="1919-1990" caption="Periodo di attivitá" />
  <StatsCard value="2,400+" caption="Tumori diagnosticati" />
  <StatsCard value="694" caption="Vittime accertate" />
</div>
<div style="margin-top: 3vw;">
  <FAB target={"content5-1"} label={"Continua il viaggio"} />
</div>

<style>
  .stats-container {
    gap: 4vw;
    display: flex;
    flex-direction: row;
  }

  @media screen and (max-width: 600px) {
    .stats-container {
      flex-direction: column;
    }
  }
</style>
