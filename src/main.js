import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App';
import goods from 'components/goods/goods';
import ratings from 'components/ratings/ratings';
import seller from 'components/seller/seller';

import 'common/stylus/index.styl';

Vue.use(VueRouter);
Vue.use(VueResource);

/* eslint-disable no-new */
let app = Vue.extend(App);
let router = new VueRouter({
  linkActiveClass: 'active' // 指定自己想要的active的class名称
});

router.map({
  '/goods': {
    component: goods
  },
  'ratings': {
    component: ratings
  },
  '/seller': {
    component: seller
  }
});

// 开启路由
router.start(app, '#app');
router.go('/goods');
