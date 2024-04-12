<script>
  import { fridgeMessages } from "../../stores/fridgeMessageStores.js";
  import Child from "../Child/Child.svelte";
  export let parentName;
  export let myChildren;
  let myTreasures = ["🎁", "🚗", "🎎", "💰"];
  

  function handleShowLove(childName) {
    console.log("handleShowLove()");

    console.log("Parent name: " + parentName);
    console.log("Child name: " + childName);
  }

  function handlePickTreasure() {
    console.log("handlePickTreasure()");
    myTreasures.pop();
    myTreasures = myTreasures;
  }

  function wipeFridgeMessages(){
    console.log("wipeFridgeMessages()");
    fridgeMessages.set([]);
  }

  // assignment: Create a treasure chest full of items(emojies)
  // Each parent has a treasure chest and the children can take one item at a time
  // Remember to follow the conventions of handle and on
  // Display treasures on parents

// Assignment: Give parents the power to wipe the fridge

</script>

<h1>{parentName}</h1>

<h3>My treasures</h3>

<p>
  {#each myTreasures as treasure}
    {treasure}
  {/each}
</p>

{#each myChildren as child}
  <button on:click={wipeFridgeMessages}>Wipe Fridge Messages</button>
  <Child {child} onShowLove={handleShowLove} onPickTreasure={handlePickTreasure} />

{/each}

<!-- assignment pass each set of children to each parent -->
