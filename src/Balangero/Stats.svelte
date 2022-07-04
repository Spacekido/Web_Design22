<script lang="ts">
  import StatsCard from "../Components/StatsCard.svelte";
  import FAB from "../Components/CustomFAB.svelte";
</script>

<!-- TODO cambiare il titolo della sezione -->
<div class="mdc-typography--headline3 uppercase" style="margin-top: 8vw;">La miniera in numeri</div>
<div class="flex-row-2" style="margin-top: 2vw;">
  <StatsCard value="1918-1990" caption="Periodo di attivitá" />
  <StatsCard value="35-40.000 Ton" caption="Estrazioni annue" />
  <StatsCard value="214" caption="Vittime accertate" />
</div>
<div style="margin-top: 3.5vw;">
  <FAB target={"content4-1"} label={"Continua il viaggio"} />
</div>
