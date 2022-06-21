<script lang="ts">
  import Card, { Content } from "@smui/card";
</script>

<!-- TODO aggiungere immagini e testo dei posti giusti -->
<!-- TODO aggiungere link a sezioni della pagine piú in basso -->
<div class="container">
  <Card style="width:240px; cursor: pointer;" onClick="document.getElementById('body1').classList.toggle('hidden');">
    <img src="img/franco-berrino.jpg" alt="Dottor Franco Berrino" />
    <Content>
      <div class="mdc-typography--subtitle1 uppercase">Dott. Franco Berrino</div>
      <div class="mdc-typography--subtitle2">dottore</div>
    </Content>
  </Card>

  <div class="mdc-typography--body1 hidden" id="body1">
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
    when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
    electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
    passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
  </div>
</div>

<style>
  .container {
    display: flex;
    flex-direction: row;
  }
  #body1 {
    text-align: right;
    margin-left: 50px;
    transition: all 0.5s;
  }
</style>
