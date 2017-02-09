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

let app = Vue.extend(App);

// 创建路由实例
// link的选中状态的class，一个默认的值,设置为想要的名字，可以改变选中后的样式
let router = new VueRouter({
  linkActiveClass: 'active'
});
// 路由具体配置
router.map({
  '/': {
    component: goods
  },
  '/goods': {
    component: goods
  },
  '/ratings': {
    component: ratings
  },
  '/seller': {
    component: seller
  }
});
// 路由的挂载
router.start(app, '#app');
// 路由初始界面
// router.go('/goods');

