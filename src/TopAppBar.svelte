<script>
  import TopAppBar, { Row, Section, Title } from "@smui/top-app-bar";
  import IconButton from "@smui/icon-button";
  import { Image } from "@smui/image-list";
  import Link from "svelte-link";
</script>

<TopAppBar variant="static" class="transparent">
  <Row>
    <!-- <Row class="mdc-elevation--z4"> -->
    <Section>
      <Link href="http://www.unige.it">
        <Image src="img/unige-logo.svg" alt="Logo di UniGe" width="24" height="24" />
      </Link>
    </Section>
    <Section>
      <!-- <IconButton class="material-icons">menu</IconButton> -->
      <!-- <Title>Gruppo 10 - Website Template</Title> -->
    </Section>
    <!-- <Section align="end" toolbar>
      <IconButton class="material-icons" aria-label="Options">settings</IconButton>
    </Section> -->
  </Row>
</TopAppBar>
