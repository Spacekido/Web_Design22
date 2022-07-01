<script lang="ts">
  import Card, { Content, PrimaryAction } from "@smui/card";

  export var href, src, title, subtitle;
</script>

<a {href}>
  <Card>
    <PrimaryAction>
      <img {src} alt={title} />
      <Content>
        <div class="mdc-typography--body1 highlight">{title}</div>
        <div class="mdc-typography--subtitle1">{subtitle}</div>
      </Content>
    </PrimaryAction>
  </Card>
</a>

<style>
  a {
    width: 16vw;
  }
</style>
