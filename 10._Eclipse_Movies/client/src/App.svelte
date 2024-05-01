<script>
  import { Router, Link, Route } from "svelte-navigator";
  import Movies from "./pages/Movies/Movies.svelte";
  import Home from "./pages/Home/Home.svelte";
  import SunglassesShop from "./pages/SunglassesShop.svelte/SunglassesShop.svelte";

  console.log(import.meta.env.VITE_BASE_URL);
</script>


<Router>
  <nav>
    <Link to="/">Home</Link>
    <Link to="/movies">Eclipse Movies</Link>
    <Link to="/shop">Sunglasses Shop</Link>
  </nav>

  <div>
    <Route path="/"><Home /></Route>
    
    <!-- <Route path="/movies"><Movies /></Route> -->
    <Route path="/movies" component={Movies}></Route>
    <Route path="/shop"><SunglassesShop /></Route>
  </div>
</Router>
