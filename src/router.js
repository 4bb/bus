/**
 * Created by aresn on 16/8/22.
 */
const routers = {
    '/index': {
        component (resolve) {
            require(['./views/index.vue'], resolve);
        }
    },
    '/myindex': {
        component (resolve) {
            require(['./views/myindex.vue'], resolve);
        }
    },
    '/busupdownworksearch': {
        component (resolve) {
            require(['./views/busupdownworksearch.vue'], resolve);
        }
    },
    '/nosuitbus': {
        component (resolve) {
            require(['./views/nosuitbus.vue'], resolve);
        }
    },
    '/busupdownworkdetail': {
        component (resolve) {
            require(['./views/busupdownworkdetail.vue'], resolve);
        }
    },
    '/busorderdetail': {
        component (resolve) {
            require(['./views/busorderdetail.vue'], resolve);
        }
    },
    '/payforsuccess': {
        component (resolve) {
            require(['./views/payforsuccess.vue'], resolve);
        }
    },
    '/buslinepay': {
        component (resolve) {
            require(['./views/buslinepay.vue'], resolve);
        }
    },
    '/personcenterzhongc': {
        component (resolve) {
            require(['./views/personcenterzhongc.vue'], resolve);
        }
    },
    '/eticket': {
        component (resolve) {
            require(['./views/eticket.vue'], resolve);
        }
    },
    '/createbusline': {
        component (resolve) {
            require(['./views/createbusline.vue'], resolve);
        }
    }
    ,
    '/ecode': {
        component (resolve) {
            require(['./views/ecode.vue'], resolve);
        }
    }
    ,
    '/myorder': {
        component (resolve) {
            require(['./views/myorder.vue'], resolve);
        }
    }
    ,
    '/buessnessdetail': {
        component (resolve) {
            require(['./views/buessnessdetail.vue'], resolve);
        }
    }
    ,
    '/detailtotal': {
        component (resolve) {
            require(['./views/detailtotal.vue'], resolve);
        }
    }
    ,
    '/rechange': {
        component (resolve) {
            require(['./views/rechange.vue'], resolve);
        }
    }
};
export default routers;
