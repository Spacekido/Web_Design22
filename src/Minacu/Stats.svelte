<script lang="ts">
  import StatsCard from "../Components/StatsCard.svelte";
  import FAB from "../Components/CustomFAB.svelte";
</script>

<div class="mdc-typography--headline3 uppercase" style="margin-top: 8vw;">La miniera in numeri</div>
<div class="stats-container">
  <StatsCard value="1967 - oggi" caption="Periodo di attivitá" />
  <StatsCard value="13%" caption="Produzione globale" />
</div>
<div style="margin-top: 3vw;">
  <FAB target={"content3-1"} label={"Continua il viaggio"} />
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
