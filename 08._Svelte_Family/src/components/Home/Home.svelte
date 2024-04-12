<script>
  import Fridge from "../Fridge/Fridge.svelte";
</script>

<Fridge fridgeHeight={100}/>

<slot></slot>

<p>________________________</p>
<p>| Home Sweet Home |</p>
<p>________________________</p>

<h1>Basement</h1>
<Fridge fridgeHeight={40}/>

