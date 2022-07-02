<script lang="ts">
  import Card, { Content, PrimaryAction } from "@smui/card";

  export var href, src, title, subtitle;
</script>

<a {href} style="width: 16vw;">
  <Card style="max-height: 20vw;">
    <PrimaryAction>
      <img {src} alt={title} />
      <Content style="padding: 1vw;">
        <div class="mdc-typography--body1 highlight">{title}</div>
        <div class="mdc-typography--body1">{subtitle}</div>
      </Content>
    </PrimaryAction>
  </Card>
</a>
