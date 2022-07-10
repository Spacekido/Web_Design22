<script lang="ts">
  import Card, { Content, PrimaryAction } from "@smui/card";

  export var href, src, title, subtitle;
</script>

<a {href} style="">
  <Card class="link-card" style="">
    <PrimaryAction>
      <img {src} alt={title} />
      <Content class="link-card-content" style="">
        <div class="mdc-typography--body2 highlight">{title}</div>
        <div class="mdc-typography--body2">{subtitle}</div>
      </Content>
    </PrimaryAction>
  </Card>
</a>

<style>
  img {
    max-height: 10vw;
  }
  a {
    width: 16vw;
  }
  :global(.link-card) {
    max-height: 20vw;
  }
  :global(.link-card-content) {
    padding: 1vw;
  }
  @media screen and (max-width: 600px) {
    img {
      max-height: 50vw;
    }
    a {
      width: 85vw;
    }
    :global(.link-card) {
      max-height: 100vw;
    }
    :global(.link-card-content) {
      padding: 4vw;
    }
  }
</style>
