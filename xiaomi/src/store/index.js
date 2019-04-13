import Vue from "vue"
import Vuex from "vuex"
import home from "./modules/home"
import category from "./modules/category"
import cart from "./modules/cart"
import mine from "./modules/mine"

Vue.use(Vuex)

const store = new Vuex.Store({
    //配置仓库
    modules: {
        home,
        category,
        cart,
        mine
    }
});

export default store;
