<script>
  import io from "socket.io-client";

  const socket = io("localhost:8080");
  
  let color;

  socket.on("server-sends-color", (data) => {
    console.log("Server sends data: " + data.data);
    document.body.style.backgroundColor = data.data;
  });

  function submitColor(){
    console.log("submitColor()");

    socket.emit("client-sends-color", {data: color});

  }

</script>

<h1>Colors</h1>

<input bind:value={color} type="color">
<button on:click={submitColor}>Submit Color</button>