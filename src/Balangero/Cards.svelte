<script lang="ts">
  import Card, { Content } from "@smui/card";
</script>

<!-- TODO aggiungere immagini e testo dei posti giusti -->
<!-- TODO aggiungere icona che suggerisce di leggere di piú nel body affianco -->
<div class="mdc-typography--headline4 uppercase">TESTIMONIANZE DELLE PERSONE / CONSEGUENZE sull'ambiente</div>
<div class="list-of-cards">
  <div class="card-and-body">
    <Card style="width:240px; cursor: pointer;" onClick="document.getElementById('body1').classList.toggle('hidden');">
      <img src="img/franco-berrino.jpg" alt="Dottor Franco Berrino" />
      <Content>
        <div class="mdc-typography--subtitle1 uppercase">Dott. Franco Berrino</div>
        <div class="mdc-typography--subtitle2">dottore</div>
      </Content>
    </Card>

    <div class="mdc-typography--body1 hidden right" id="body1">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
      into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
      passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </div>
  </div>

  <div class="card-and-body">
    <div class="mdc-typography--body1 hidden left" id="body2">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
      into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
      passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </div>
    <Card style="width:240px; cursor: pointer;" onClick="document.getElementById('body2').classList.toggle('hidden');">
      <img src="img/placeholder.png" alt="Dottor Franco Berrino" />
      <Content>
        <div class="mdc-typography--subtitle1 uppercase">Altra persona</div>
        <div class="mdc-typography--subtitle2">Professione</div>
      </Content>
    </Card>
  </div>
</div>

<style>
  .card-and-body {
    display: flex;
    flex-direction: row;
  }
  [id^="body"] {
    display: flex;
    align-items: center;
    transition: all 0.5s;
  }
  .left {
    text-align: left;
    margin-right: 50px;
  }
  .right {
    text-align: right;
    margin-left: 50px;
  }
  .list-of-cards {
    display: flex;
    flex-direction: column;
    gap: 50px;
  }
</style>
