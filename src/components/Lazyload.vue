<template>
  <div class="img-list">
    <ul id="container">
      <li v-for="img in list">
        <img v-lazy="img">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [
        'http://hilongjw.github.io/vue-lazyload/dist/test1.jpg',
        'http://hilongjw.github.io/vue-lazyload/dist/test2.jpg',
        'http://hilongjw.github.io/vue-lazyload/dist/test3.jpg',
        'http://hilongjw.github.io/vue-lazyload/dist/test4.jpg',
        'http://hilongjw.github.io/vue-lazyload/dist/test5.jpg',
        'http://hilongjw.github.io/vue-lazyload/dist/test6.jpg',
        'http://hilongjw.github.io/vue-lazyload/dist/test7.jpg',
        // you can customer any image's placeholder while loading or load failed
        {
          src: 'http://hilongjw.github.io/vue-lazyload/dist/test7.jpg',
          error: 'another-error.png',
          loading: 'http://hilongjw.github.io/vue-lazyload/dist/loading-spin.svg'
        }
      ]
    }
  }
}
</script>