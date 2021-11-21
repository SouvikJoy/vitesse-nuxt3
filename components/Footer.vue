<template>
  <section class="w3l-footer py-4">
    <div class="container">
      <div class="footer-content">
        <div class="row">
          <div class="col-lg-8 footer-left">
            <p class="m-0">
              {{ data.main.shortname }} © Copyright 2021. Developed by <a href="https://souvik.debugger.tech/" target="_blank">Souvik</a>
            </p>
          </div>
          <div class="col-lg-4 footer-right text-lg-right text-center mt-lg-0 mt-3">
            <ul class="social m-0 p-0">
              <li v-for="(socaildata, index) in data.main.social" :key="index">
                <a :href="socaildata.url"><span :class="socaildata.className" /></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <button id="movetop" onclick="topFunction()" title="Go to top">
      <span class="fa fa-angle-up" />
    </button>
  </section>
</template>
<script setup lang="ts">
const { data } = await useFetch('/api/data', { pick: ['main'] })
</script>
