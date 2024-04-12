<script>
  import Home from "./components/Home/Home.svelte";
  import Parent from "./components/Parent/Parent.svelte";

  const parents = ["Niels", "Ulla"];
  const children = [
    { name: "Niels Jr.", familiySheep: "black-sheep" },
    { name: "Oscar", familiySheep: "grey-sheep" },
    { name: "Methea", isGirl: true },
  ];
</script>

<!-- <Home /> -->
<Home>
  <Parent parentName={parents[0]} myChildren={children}/>
  <Parent parentName={parents[1]} myChildren={children}/>

</Home>
