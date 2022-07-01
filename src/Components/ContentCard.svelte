<script lang="ts">
  import Card, { Content, Actions, PrimaryAction } from "@smui/card";
  import Button, { Label } from "@smui/button";

  export var contentId,
    src,
    title,
    subtitle,
    buttonLabel,
    direction = "";
</script>

<Card class="custom-card {direction}">
  <PrimaryAction on:click={() => document.getElementById(contentId).classList.toggle("hidden")}>
    <img {src} alt={title} />
    <Content>
      <div class="mdc-typography--body1 highlight">{title}</div>
      <div class="mdc-typography--subtitle1">{subtitle}</div>
    </Content>
    <Actions fullBleed>
      <Button>
        {#if direction === "left-card"}
          <Label class="mdc-typography--subtitle1 bold">{buttonLabel}</Label>
          <i class="material-icons" aria-hidden="true">arrow_forward</i>
        {:else if direction === "right-card"}
          <i class="material-icons" aria-hidden="true">arrow_back</i>
          <Label class="mdc-typography--subtitle1 bold">{buttonLabel}</Label>
        {/if}
      </Button>
    </Actions>
  </PrimaryAction>
</Card>

<style>
  :global(.custom-card) {
    min-width: 30vw;
    max-width: 30vw;
  }
  :global(.left-card) {
    border-top-left-radius: 2em;
    border-bottom-right-radius: 2em;
  }
  :global(.right-card) {
    border-top-right-radius: 2em;
    border-bottom-left-radius: 2em;
  }
</style>
