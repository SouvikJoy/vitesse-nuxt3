<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg stroke">
      <nuxt-link to="/" class="navbar-brand">
        <div class="logo-wrapper">
          <svg
            width="52"
            height="36"
            viewBox="0 0 124 124"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M55.7498 27.1551C52.5277 21.615 44.4723 21.6149 41.2502 27.1551L6.13404 87.5346C2.91191 93.0748 6.93956 100 13.3838 100H40.7975C38.0438 97.5934 37.0241 93.4303 39.1079 89.8584L65.7033 44.2694L55.7498 27.1551Z"
              fill="#80EEC0"
            />
            <path d="M78.0002 40.3997C80.6668 35.8668 87.3332 35.8668 89.9998 40.3997L119.061 89.801C121.728 94.3339 118.395 100 113.062 100H54.9383C49.6052 100 46.2719 94.3339 48.9385 89.801L78.0002 40.3997Z" fill="#00DC82" />
          </svg>
          <p class="logo-text">
            Portfolio
          </p>
        </div>
      </nuxt-link>

      <button
        class="navbar-toggler  collapsed bg-gradient"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon fa icon-expand fa-bars" />
        <span class="navbar-toggler-icon fa icon-close fa-times" />
      </button>

      <div id="navbarTogglerDemo02" class="collapse navbar-collapse">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <nuxt-link to="/" class="nav-link">
              Home <span class="sr-only">(current)</span>
            </nuxt-link>
          </li>
          <li class="nav-item @@about__active">
            <nuxt-link to="/about" class="nav-link">
              About
            </nuxt-link>
          </li>
          <li class="nav-item @@projects__active">
            <nuxt-link to="/projects" class="nav-link">
              Project
            </nuxt-link>
          </li>
          <li class="nav-item @@contact__active">
            <nuxt-link to="/contact" class="nav-link">
              Contact
            </nuxt-link>
          </li>
        </ul>
      </div>

      <div class="mobile-position">
        <nav class="navigation">
          <DarkToggle />
        </nav>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">

</script>

<style scoped>

</style>
