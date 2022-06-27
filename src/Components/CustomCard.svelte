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

<Card class="custom-card">
  <PrimaryAction on:click={() => document.getElementById(contentId).classList.toggle("hidden")}>
    <img {src} alt={title} />
    <Content>
      <div class="mdc-typography--body1 uppercase">{title}</div>
      <div class="mdc-typography--subtitle1">{subtitle}</div>
    </Content>
    <Actions fullBleed>
      <Button>
        <Label class="mdc-typography--subtitle1 bold">{buttonLabel}</Label>
        <i class="material-icons {direction}" aria-hidden="true">arrow_forward</i>
      </Button>
    </Actions>
  </PrimaryAction>
</Card>

<style>
  :global(.custom-card) {
    width: 400px;
  }
</style>
