<script>
    import {
        ThemeProvider as MUIThemeProvider,
        StyledEngineProvider,
        createTheme
    } from '@mui/material/styles'
    import { CssBaseline } from '@mui/material'
    import { Router, Link, Route } from 'svelte-routing'
    import Home from './pages/Home.svelte'

    export const url = '';

    const theme = createTheme({
        palette: {
            mode: 'dark'
        }
    })

</script>
<Router url={url}>
        <MUIThemeProvider theme={theme}>
        </MUIThemeProvider>
        <main>
            <Route path="/"><Home /></Route>
        </main>
</Router>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }
</style>
