<script lang="ts">
  import Card, { Content, PrimaryAction } from "@smui/card";
  import Button, { Label } from "@smui/button";
  import Dialog, { Title, Actions } from "@smui/dialog";
  import CustomButton from "../Components/CustomButton.svelte";
  export var src,
    title,
    subtitle,
    buttonLabel,
    direction = "";

  var open = false;
</script>

<Card class="dialog-card {direction}">
  <PrimaryAction on:click={() => (open = true)}>
    <img {src} alt={title} />
    <Content style="padding: 1vw;">
      <div class="mdc-typography--body2 highlight">{title}</div>
      <div class="mdc-typography--body2">{subtitle}</div>
    </Content>
    <Actions fullBleed style="min-height: 0;">
      <Button class="dialog-card-button">
        <!-- /* TODO cambiare icona per card mobile al posto della freccia */ -->
        {#if direction === "left-card"}
          <Label class="mdc-typography--body2 bold">{buttonLabel}</Label>
          <i class="material-icons" aria-hidden="true">arrow_forward</i>
        {:else if direction === "right-card"}
          <i class="material-icons" aria-hidden="true">arrow_back</i>
          <Label class="mdc-typography--body2 bold">{buttonLabel}</Label>
        {/if}
      </Button>
    </Actions>
  </PrimaryAction>
</Card>

<Dialog bind:open aria-labelledby="large-scroll-title" aria-describedby="large-scroll-content" class="dialog" surface$style="width: 85vw; height: 180vw">
  <Title class="mdc-typography--headline3">{title}</Title>
  <Content class="mdc-typography--body1 flex-column-2">
    <div>
      Quando l'industria dell'amianto era forte a Minaçu, SAMA ha finanziato eventi culturali, religiosi e sportivi, ed è stato un importante donatore politico,
      scegliendo sindaci, consiglieri e sacerdoti schierati a <span class="highlight">difesa dell'amianto</span>. Denigrare pubblicamente SAMA può essere
      considerato tabù da alcuni residenti, infatti, in migliaia hanno tranquillamente firmato
      <span class="highlight">accordi</span>
      con la compagnia per ottenere un risarcimento sui danni sanitari.
      <br /><br />
      La causa in corso è portata avanti dalla <span class="highlight">ABREA</span>, associazione brasiliana a difesa delle vittime di amianto, fondata da
      Fernanda Giannasi nel 1995. L'ultima sentenza del tribunale, nel Novembre del 2021, ha ordinato alla compagnia di pagare le
      <span class="highlight">spese mediche</span> per i prossimi 30 anni a tutti i lavoratori che abbiano manifestato problemi di salute "associabili all'amianto".
    </div>
    <Actions class="flex-row-2">
      <CustomButton direction={"right-button"} label={"Chiudi"} />
      <CustomButton
        direction={"right-button"}
        label={"Approfondisci l'inchiesta"}
        href={"https://www.reuters.com/article/brazil-mining-environment-asbestos-idINL8N2T241L"}
      />
    </Actions>
  </Content>
</Dialog>

<!-- TODO sistemare dimensioni statiche nel dialog -->
<style>
  img {
    max-height: 14vw;
  }
  i {
    font-size: 1.5vw;
  }
  :global(.dialog-card) {
    max-width: 25vw;
    height: 100%;
  }
  :global(.left-card) {
    border-top-left-radius: 30px;
    border-bottom-right-radius: 30px;
  }
  :global(.right-card) {
    border-top-right-radius: 30px;
    border-bottom-left-radius: 30px;
  }
  :global(.dialog-card-button) {
    padding: 0 1.6vw 0.8vw 1.6vw;
  }

  @media screen and (max-width: 450px) {
    img {
      max-height: 70vw;
    }
    i {
      font-size: 8vw;
    }
    :global(.dialog-card) {
      max-width: 85vw;
      height: 100%;
    }
    :global(.dialog-card-button) {
      padding: 0 4vw 3vw 4vw;
    }
    :global(.dialog) {
      text-align: start;
    }
  }
</style>
