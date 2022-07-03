<script lang="ts">
  import StatsCard from "../Components/StatsCard.svelte";
  import FAB from "../Components/CustomFAB.svelte";
</script>

<!-- TODO cambiare il titolo della sezione -->
<div class="mdc-typography--headline4 uppercase" style="margin-top: 6vw;">Percentuali di vittime e inquinamento</div>
<div class="flex-row-2" style="margin-top: 4vw;">
  <StatsCard value="1919-1990" caption="Periodo di attivitá" />
  <StatsCard value="2,400+" caption="Tumori diagnosticati" />
  <StatsCard value="694" caption="Vittime accertate" />
</div>
<div style="margin-top: 3vw;">
  <FAB target={"content5-1"} label={"Continua il viaggio"} />
</div>
