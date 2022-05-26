<script>
  import TopAppBar, { Row, Section, Title } from "@smui/top-app-bar";
  import IconButton from "@smui/icon-button";
</script>

<!-- Material Icons -->
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />

<TopAppBar variant="static">
  <Row>
    <Section>
      <IconButton class="material-icons">menu</IconButton>
      <Title>Flex Static</Title>
    </Section>
    <Section align="end" toolbar>
      <IconButton class="material-icons" aria-label="Download">file_download</IconButton>
      <IconButton class="material-icons" aria-label="Print this page">print</IconButton>
      <IconButton class="material-icons" aria-label="Bookmark this page">bookmark</IconButton>
    </Section>
  </Row>
</TopAppBar>

<style>
  :global(body) {
    margin: 0;
    padding: 0;
  }
</style>
