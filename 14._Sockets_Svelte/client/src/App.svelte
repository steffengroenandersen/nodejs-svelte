<script>
  import { nickname } from "./stores/nicknameStore.js";

  import Colors from "./pages/Colors/Colors.svelte";
  import Registration from "./pages/Registration/Registration.svelte";
</script>

<!-- <Colors /> -->

{#if $nickname}
  <Colors />
{:else}
  <Registration />
{/if}
