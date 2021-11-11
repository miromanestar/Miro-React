<script lang="ts">
  import TopAppBar, { Row, Section, Title } from "@smui/top-app-bar";
  import IconButton from '@smui/icon-button'
  import Button, { Label } from '@smui/button';

  import Drawer, {
    AppContent,
    Content,
    Header,
    Subtitle,
    Scrim,
  } from '@smui/drawer';
  import List, { Item, Text, Graphic, Separator, Subheader } from '@smui/list';
  import { H6 } from '@smui/common/elements';

  let prominent = false;
  let dense = false;
  let secondaryColor = false;
</script>

<main>
<TopAppBar
  variant="static"
  {prominent}
  {dense}
>
  <Row>
    <Section>
      <IconButton class="material-icons">menu</IconButton>
      <Title>Flex Static</Title>
    </Section>
    <Section align="end" toolbar>
      <IconButton class="material-icons" aria-label="Download"
        >file_download</IconButton
      >
      <IconButton class="material-icons" aria-label="Print this page"
        >print</IconButton
      >
      <IconButton class="material-icons" aria-label="Bookmark this page"
        >bookmark</IconButton
      >
    </Section>
  </Row>
</TopAppBar>
</main>

<style>

</style>
