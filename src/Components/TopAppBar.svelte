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
  <Row class="mdc-elevation--z4" style="background-color: white">
    <!-- <Section>
      <Link href="http://www.unige.it">
        <Image src="img/unige-logo.svg" alt="Logo di UniGe" width="24" height="24" />
      </Link>
    </Section> -->
    <!-- <Section> -->
    <!-- <IconButton class="material-icons">menu</IconButton> -->
    <!-- <Title>Gruppo 10 - Website Template</Title> -->
    <!-- </Section> -->
    <!-- <Section align="end" toolbar>
      <IconButton class="material-icons" aria-label="Options">settings</IconButton>
    </Section> -->
    <Section class="mdc-typography--headline6" style="justify-content: center;"><Link href="#section0">L'Amianto</Link></Section>
    <Section class="mdc-typography--headline6" style="justify-content: center;"><Link href="#content3">Minaçu, Brasile</Link></Section>
    <Section class="mdc-typography--headline6" style="justify-content: center;"><Link href="#content4">Balangero, Italia</Link></Section>
    <Section class="mdc-typography--headline6" style="justify-content: center;"><Link href="#content5">Libby, USA</Link></Section>
    <Section class="mdc-typography--headline6" style="justify-content: center;"><Link href="#content6">Asbest, Russia</Link></Section>
    <Section class="mdc-typography--headline6" style="justify-content: center;"><Link href="#">???</Link></Section>
  </Row>
  <LinearProgress {progress} />
</TopAppBar>

<style>
</style>
