<script lang="ts">
  import StatsCard from "../Components/StatsCard.svelte";
  import FAB from "../Components/CustomFAB.svelte";
</script>

<!-- TODO cambiare il titolo della sezione -->
<div class="mdc-typography--headline4 uppercase" style="margin-top: 8vw;">Percentuali di vittime e inquinamento</div>
<div class="flex-row-2" style="margin-top: 6vw">
  <StatsCard value="1967 - oggi" caption="Periodo di attivitá" />
  <StatsCard value="13%" caption="Produzione globale" />
</div>
<div style="margin-top: 5vw;">
  <FAB target={"content3-1"} label={"Continua il viaggio"} />
</div>
