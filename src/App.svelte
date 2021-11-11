<script>
    import { Router, Link, Route } from 'svelte-routing'
    import Home from './pages/Home.svelte'
    import Header from './components/Header.svelte'
    export const url = '';
</script>


<Router url={url}>
        <Header />

        <main>
            <Route path="/"><Home /></Route>
        </main>
</Router>

<style>

</style>