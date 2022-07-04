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

<!-- TODO mettere dimensioni dinamiche vw su componenti della card (actions, button...) -->
<Card class="custom-card {direction}">
  <PrimaryAction on:click={() => document.getElementById(contentId).classList.toggle("hidden")}>
    <img {src} alt={title} />
    <Content style="padding: 1vw;">
      <div class="mdc-typography--body2 highlight">{title}</div>
      <div class="mdc-typography--body2">{subtitle}</div>
    </Content>
    <Actions fullBleed style="min-height: 0;">
      <Button style="padding: 0 1.6vw 0.8vw 1.6vw;">
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

<style>
  img {
    max-height: 14vw;
  }
  i {
    font-size: 1.5vw;
  }
  :global(.custom-card) {
    max-width: 25vw;
    /* max-height: 30vw; */
    height: 100%;
  }
  :global(.left-card) {
    border-top-left-radius: 2vw;
    border-bottom-right-radius: 2vw;
  }
  :global(.right-card) {
    border-top-right-radius: 2vw;
    border-bottom-left-radius: 2vw;
  }
</style>
