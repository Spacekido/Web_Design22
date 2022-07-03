<script lang="ts">
  import StatsCard from "../Components/StatsCard.svelte";
  import FAB from "../Components/CustomFAB.svelte";
</script>

<!-- TODO cambiare il titolo della sezione -->
<div class="mdc-typography--headline4 uppercase" style="margin-top: 4vw;">Percentuali di vittime e inquinamento</div>
<div class="flex-row-2" style="margin-top: 8vw;">
  <StatsCard value="1922 - oggi" caption="Periodo di attivitá" />
  <StatsCard value="500.000 ton" caption="Estratte ogni anno" />
  <StatsCard value="68,893" caption="Cittadini a rischio" />
</div>
<div style="margin-top: 5.5vw;">
  <FAB target={"content6-1"} label={"Continua il viaggio"} />
</div>
