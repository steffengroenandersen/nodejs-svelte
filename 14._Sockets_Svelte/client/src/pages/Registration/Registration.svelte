<script>
  import { nickname } from "../../stores/nicknameStore.js";

  let nicknameInput;

  async function submitNickname() {
    console.log("submitNickname()");
    // console.log(nicknameInput);

    await fetch("http://localhost:8080/api/nicknames", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nickname: nicknameInput }),
    });

    const response = await fetch("https://localhost:8080/api/nicknames");
    const result = await response.json();
    console.log(result);

    nickname.set(nicknameInput);
  }
</script>

<input bind:value={nicknameInput} type="text" placeholder="nickname" />
<button on:click={submitNickname}>Submit Nickname</button>
