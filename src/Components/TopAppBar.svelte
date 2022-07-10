<script>
  import TopAppBar, { Row, Section, Title } from "@smui/top-app-bar";
  import { Image } from "@smui/image-list";
  import Link from "svelte-link";

  import { onMount } from "svelte";
  import LinearProgress from "@smui/linear-progress";
  let progress = 0;

  onMount(() => {
    progress = 0;
  });

  document.addEventListener("scroll", function () {
    progress =
      (document.body.scrollTop || document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
  });
</script>

<TopAppBar variant="fixed" class="transparent">
  <Row id="row" class="mdc-elevation--z4" style="background-color: white; ">
    <Section class="mdc-typography--headline6" style="justify-content: center;"><Link href="#section1-2">L'Amianto</Link></Section>
    <Section class="mdc-typography--headline6" style="justify-content: center;"><Link href="#content2-1">Minaçu</Link></Section>
    <Section class="mdc-typography--headline6" style="justify-content: center;"><Link href="#content3-1">Balangero</Link></Section>
    <Section class="mdc-typography--headline6" style="justify-content: center;"><Link href="#content4-1">Libby</Link></Section>
    <Section class="mdc-typography--headline6" style="justify-content: center;"><Link href="#content5-1">Asbest</Link></Section>
    <Section class="mdc-typography--headline6" style="justify-content: center;"><Link href="#content6-1">Il futuro</Link></Section>
  </Row>
  <LinearProgress {progress} />
</TopAppBar>

<style>
  :global(#row) {
    height: 3.5vw;
  }
  @media screen and (max-width: 600px) {
    :global(#row) {
      height: 10vw;
    }
  }
</style>
