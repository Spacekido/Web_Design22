<script lang="ts">
  import Card, { Content, PrimaryAction } from "@smui/card";
  import Button, { Label } from "@smui/button";
  import Dialog, { Title, Actions } from "@smui/dialog";
  import CustomButton from "../Components/CustomButton.svelte";
  export var src,
    title,
    subtitle,
    buttonLabel,
    direction,
    dialogLabel = "",
    href = "";

  var open = false;
</script>

<Card class="dialog-card {direction}">
  <PrimaryAction on:click={() => (open = true)}>
    <img {src} alt={title} />
    <Content style="padding: 1vw;">
      <div class="mdc-typography--body2 highlight">{title}</div>
      <div class="mdc-typography--body2">{subtitle}</div>
    </Content>
    <Actions fullBleed style="min-height: 0; padding: 0;">
      <Button class="dialog-card-button">
        <Label class="mdc-typography--body2 bold">{buttonLabel}</Label>
        <i class="material-icons" aria-hidden="true">open_in_new</i>
      </Button>
    </Actions>
  </PrimaryAction>
</Card>

<!-- TODO il dialog si apre con focus sulla fine, magari metterlo all'inizio -->
<Dialog
  bind:open
  aria-labelledby="large-scroll-title"
  aria-describedby="large-scroll-content"
  class="dialog"
  surface$style="max-height: 100%;
  min-height: 100%; max-width:85vw; min-width:85vw; padding: 4vw;"
>
  <div class="mdc-typography--headline3">{title}</div>
  <Content class="mdc-typography--body1 flex-column-2" style="padding: 4vw 0 0 0;">
    <!-- contiene l'elemento di testo passato dal padre -->
    <slot />
    <Actions class="dialog-actions">
      <CustomButton direction={"right-button"} label={"Chiudi"} />
      {#if dialogLabel !== ""}
        <CustomButton direction={"right-button"} label={dialogLabel} {href} />
      {/if}
    </Actions>
  </Content>
</Dialog>

<style>
  img {
    max-height: 14vw;
  }
  i {
    font-size: 1.5vw;
  }
  :global(.dialog-card) {
    display: none;
  }
  :global(.dialog) {
    display: none;
  }
  :global(.dialog-card-button) {
    padding: 0 1.6vw 0.8vw 1.6vw;
  }

  @media screen and (max-width: 600px) {
    img {
      max-height: 70vw;
    }
    i {
      font-size: 8vw;
    }
    :global(.dialog-card) {
      max-width: 85vw;
      height: 100%;
      display: flex;
    }
    :global(.dialog-card-button) {
      padding: 0 4vw 3vw 4vw;
    }
    :global(.dialog) {
      text-align: start;
      padding: 14vw 4vw 4vw 4vw;
    }
    :global(.mdc-dialog--open) {
      display: flex;
    }
    :global(.dialog-actions) {
      padding: 0;
    }
  }
</style>
