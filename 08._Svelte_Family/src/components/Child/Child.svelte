<script>
  export let child;
  export let onShowLove;
  export let onPickTreasure;

  import { fridgeMessages } from "../../stores/fridgeMessageStores.js";

  let fridgeMessageInputValue = "";

  function submitFridgeMessage() {
    console.log("submitFridgeMessage()");

    const newFridgeMessage = {
      creator: child.name,
      message: fridgeMessageInputValue,
    };

    //fridgeMessages.set([...$fridgeMessages, newFridgeMessage]);
    
    fridgeMessages.update((fridgeMessageStore) => {
      fridgeMessageStore.push(newFridgeMessage);
      
      return fridgeMessageStore;
    });
    fridgeMessageInputValue = "";
  }
</script>

<div class:is-girl={child.isGirl} class:is-boy={!child.isGirl} class={child.familiySheep || "not-a-sheep"}>
  <h3>{child.name}</h3>
  <label for="fridgeMessage">Write a Fridge Message</label>
  <input type="text" name="fridgeMessage" placeholder="Fridge Message" bind:value={fridgeMessageInputValue} />
  <button on:click={submitFridgeMessage}>Write Fridge Message</button>

  <button on:click={() => onShowLove(child.name)}>Show Love ♥</button>
  <button on:click={() => onPickTreasure()}>Pick treasure</button>
</div>

<style>
  .is-boy {
    background-color: lightblue;
  }
  .is-girl {
    background-color: pink;
  }

  .not-a-sheep {
    border: 0.5em solid white;
  }
  .black-sheep {
    border: 0.5em solid black;
  }

  .grey-sheep {
    border: 0.5em solid grey;
  }
</style>
