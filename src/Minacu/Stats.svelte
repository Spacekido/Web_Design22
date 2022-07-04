<script lang="ts">
  import StatsCard from "../Components/StatsCard.svelte";
  import FAB from "../Components/CustomFAB.svelte";
</script>

<!-- TODO cambiare il titolo della sezione -->
<div class="mdc-typography--headline3 uppercase" style="margin-top: 8vw;">La miniera in numeri</div>
<div class="flex-row-2" style="margin-top: 2vw">
  <StatsCard value="1967 - oggi" caption="Periodo di attivitá" />
  <StatsCard value="13%" caption="Produzione globale" />
</div>
<div style="margin-top: 3vw;">
  <FAB target={"content3-1"} label={"Continua il viaggio"} />
</div>
