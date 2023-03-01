<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">PouyaPage</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <form>
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/User" class="nav-link">User</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/Post" class="nav-link">Post</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/Task" class="nav-link">task</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/TaskExample" class="nav-link">TaskExample</router-link>
          </li>
        </ul>
      </form>
    </div>
  </nav>
</template>

<script>
export default {
  name: "headerPage",
};
</script>

<style>
.router-link-active{
  border-bottom: black 2px solid;
}
</style>
