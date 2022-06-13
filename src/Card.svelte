<script>
  import Card, { Content, Actions } from "@smui/card";
  import Button, { Label } from "@smui/button";
</script>

<Card class="mdc-elevation--z1">
  <Content class="mdc-typography--body2">Card di esempio</Content>
  <Actions>
    <Button class="mdc-elevation--z2" color="secondary" on:click={() => alert("1")}>
      <Label>Action 1</Label>
    </Button>
    <Button class="mdc-elevation--z2" color="secondary" on:click={() => alert("2")}>
      <Label>Action 2</Label>
    </Button>
  </Actions>
</Card>
