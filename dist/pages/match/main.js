require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([3],{

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(24);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_f1ff9b84_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(27);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(25)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-f1ff9b84"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_f1ff9b84_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/match/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f1ff9b84", Component.options)
  } else {
    hotAPI.reload("data-v-f1ff9b84", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 25:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_card__ = __webpack_require__(2);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      motto: 'Hello World',
      userInfo: {},

      list: {
        fruit: [{
          id: 1,
          name: '香蕉'
        }, {
          id: 2,
          name: '苹果'
        }, {
          id: 3,
          name: '西瓜'
        }, {
          id: 4,
          name: '葡萄'
        }],
        animal: [{
          id: 1,
          name: '小猫'
        }, {
          id: 2,
          name: '小狗'
        }, {
          id: 3,
          name: '不喜欢'
        }],
        car: [{
          id: 1,
          name: '没车'
        }, {
          id: 2,
          name: '丰田-本田-大众'
        }, {
          id: 3,
          name: '奔驰-宝马-奥迪'
        }]
      },
      current: {
        fruit: '苹果',
        animal: '小狗',
        car: '没车'
      },

      checked: false,
      disabled: false
    };
  },


  components: {
    card: __WEBPACK_IMPORTED_MODULE_0__components_card__["a" /* default */]
  },

  methods: {
    bindViewTap: function bindViewTap() {
      var url = '../logs/main';
      wx.navigateTo({ url: url });
    },
    handleFruitChange: function handleFruitChange(e) {
      this.current.fruit = e.target.value;
    },
    handleAnimalChange: function handleAnimalChange(e) {
      this.current.animal = e.target.value;
    },
    handleCarChange: function handleCarChange(e) {
      this.current.car = e.target.value;
    },
    getUserInfo: function getUserInfo() {
      var _this = this;

      // 调用登录接口
      wx.login({
        success: function success() {
          wx.getUserInfo({
            success: function success(res) {
              _this.userInfo = res.userInfo;
            }
          });
        }
      });
    },
    clickHandle: function clickHandle(msg, ev) {
      console.log('clickHandle:', msg, ev);
    },
    submit: function submit() {
      wx.showToast({
        title: '成功',
        icon: 'success',
        duration: 2000
      });
    }
  },

  created: function created() {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo();
  }
});

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container",
    attrs: {
      "eventid": '4'
    },
    on: {
      "click": function($event) {
        _vm.clickHandle('test click', $event)
      }
    }
  }, [_c('i-panel', {
    attrs: {
      "title": "你喜欢吃什么水果？",
      "mpcomid": '2'
    }
  }, [_c('i-radio-group', {
    attrs: {
      "current": _vm.current.fruit,
      "eventid": '0',
      "mpcomid": '1'
    },
    on: {
      "change": _vm.handleFruitChange
    }
  }, _vm._l((_vm.list.fruit), function(item, index) {
    return _c('i-radio', {
      key: item.id,
      attrs: {
        "position": _vm.position,
        "value": item.name,
        "mpcomid": '0-' + index
      }
    })
  }))], 1), _vm._v(" "), _c('i-panel', {
    attrs: {
      "title": "你喜欢什么动物？",
      "mpcomid": '5'
    }
  }, [_c('i-radio-group', {
    attrs: {
      "current": _vm.current.animal,
      "eventid": '1',
      "mpcomid": '4'
    },
    on: {
      "change": _vm.handleAnimalChange
    }
  }, _vm._l((_vm.list.animal), function(item, index) {
    return _c('i-radio', {
      key: item.id,
      attrs: {
        "position": _vm.position,
        "value": item.name,
        "mpcomid": '3-' + index
      }
    })
  }))], 1), _vm._v(" "), _c('i-panel', {
    attrs: {
      "title": "你车是什么样的？",
      "mpcomid": '8'
    }
  }, [_c('i-radio-group', {
    attrs: {
      "current": _vm.current.car,
      "eventid": '2',
      "mpcomid": '7'
    },
    on: {
      "change": _vm.handleCarChange
    }
  }, _vm._l((_vm.list.car), function(item, index) {
    return _c('i-radio', {
      key: item.id,
      attrs: {
        "position": _vm.position,
        "value": item.name,
        "mpcomid": '6-' + index
      }
    })
  }))], 1), _vm._v(" "), _c('i-button', {
    attrs: {
      "type": "primary",
      "eventid": '3',
      "mpcomid": '9'
    },
    on: {
      "click": _vm.submit
    }
  }, [_vm._v("开始匹配")])], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-f1ff9b84", esExports)
  }
}

/***/ })

},[23]);
//# sourceMappingURL=main.js.map