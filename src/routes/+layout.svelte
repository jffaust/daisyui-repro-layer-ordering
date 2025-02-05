<script>
  import "../app.css";
</script>

<div class="app bg-base-100">
  <main>
    <slot></slot>
  </main>
</div>

<style>
  .app {
    display: flex;
    min-height: 100vh;
  }

  main {
    flex: 1;
    padding: 1rem;
    width: 100%;
    box-sizing: border-box;
  }
</style>
