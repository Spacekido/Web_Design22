<script>
  import Card, { Content, Actions } from "@smui/card";
  import Button, { Label } from "@smui/button";
</script>

<div class="card-container">
  <Card style="background-color: white;">
    <Content class="mdc-typography--body2">A card with action buttons.</Content>
    <Actions>
      <Button color="secondary" on:click={() => alert("1")}>
        <Label>Action 1</Label>
      </Button>
      <Button color="secondary" on:click={() => alert("2")}>
        <Label>Action 2</Label>
      </Button>
    </Actions>
  </Card>
</div>
