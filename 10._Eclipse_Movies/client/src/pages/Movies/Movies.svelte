<script>
  import { onMount } from "svelte";
  import { BASE_URL } from "../../stores/generalStore";
  import { fetchGet } from "../../../util/api";

  let movies = [];

  onMount(async () => {
    movies = (await fetchGet($BASE_URL + "/api/movies")) ?? [];

    // The best:
    // const results = await fetchGet($BASE_URL + "/api/movies");
    // movies = results.data;

    // Method new:
    // movies = (await fetchGet($BASE_URL, + "api/movies")).data;

    // Method old:
    // const response = await fetch($BASE_URL + "/api/movies");
    // const result = await response.json();
    // movies = result.data;
  });
</script>

<h1>Movies</h1>

{#each movies as movie}
  <h2>{movie.title}</h2>
  <h3>{movie.director}</h3>
  <h3>{movie.year}</h3>
{/each}
