<script lang="ts">
  import StatsCard from "../Components/StatsCard.svelte";
  import FAB from "../Components/CustomFAB.svelte";
</script>

<div class="mdc-typography--headline3 uppercase" style="margin-top: 8vw;">La miniera in numeri</div>
<div class="stats-container">
  <StatsCard value="1922 - oggi" caption="Periodo di attivitá" />
  <StatsCard value="500.000 ton" caption="Estratte ogni anno" />
  <StatsCard value="68,893" caption="Cittadini a rischio" />
</div>
<div style="margin-top: 3vw;">
  <FAB target={"content6-1"} label={"Cosa ci attende nel futuro?"} />
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
