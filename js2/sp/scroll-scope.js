/*! scroll-scope.js 0.1.0, MIT
 https://github.com/Eiskis/scroll-scope
 */
jQuery && !function (e) {
  "use strict";
  var t = function (t) {
    var n = this;
    n.mainContainer = null, n.selector = null, n.settings = e.extend({
      elements: "[data-scroll-scope]",
      forcedElements: '[data-scroll-scope="force"]',
      events: "DOMMouseScroll mousewheel scroll touchstart touchmove"
    }, t && (t.elements || t.forcedElements || t.events) ? t : {}), n.getTargetedElements = function () {
      return n.mainContainer.find(n.selector)
    }, n.getSelector = function (e) {
      for (var t = [], n = 0; n < e.length; n++)e[n] && e[n].length && t.push(e[n]);
      return t.length ? t.join(", ") : null
    }, n.normalizeJqueryObject = function (t) {
      return t ? t instanceof jQuery ? t : e(t) : null
    }, n.killScrolling = function (e, t) {
      return t || "touchmove" !== e.type && "touchstart" !== e.type ? (e.preventDefault(), e.stopPropagation(), e.returnValue = !1, !1) : void 0
    }, n.onScroll = function (t) {
      if (t.isLegitScroll)return !0;
      var o = e(this), l = n.settings.forcedElements && o.is(n.settings.forcedElements), r = this.scrollHeight, i = o.outerHeight(), s = r - i - this.scrollTop;
      if (i >= r)return l && "touchstart" !== t.type ? n.killScrolling(t, l) : !0;
      var c = t.originalEvent.wheelDelta;
      l && "undefined" == typeof c && "touchstart" === t.type && (this.scrollTop <= 0 ? o.scrollTop(1) : 0 >= s && o.scrollTop(r - i - 1));
      var u = c > 0;
      return !u && -c > s ? (o.scrollTop(this.scrollHeight), n.killScrolling(t, l)) : u && c > this.scrollTop ? (o.scrollTop(0), n.killScrolling(t, l)) : (t.isLegitScroll = !0, !0)
    }, n.unbind = function () {
      return n.mainContainer && n.mainContainer.off(n.settings.events, n.selector, n.onScroll), n
    }, n.bind = function (e) {
      return e = n.normalizeJqueryObject(e), e && n.unbind(), n.mainContainer = e, n.mainContainer.on(n.settings.events, n.selector, n.onScroll), n
    }, n.settings.elements = n.getSelector([n.settings.elements]), n.settings.forcedElements = n.getSelector([n.settings.forcedElements]), n.selector = n.getSelector([n.settings.elements, n.settings.forcedElements])
  };
  "function" == typeof define && "object" == typeof define.amd && define.amd ? define(function () {
      return t
    }) : "undefined" != typeof module && module.exports ? module.exports = t : (window.ScrollScope = t, function (e) {
        e.fn.scrollScope = function (e) {
          var n = new t(e);
          return n.bind(this), n.mainContainer
        }
      }(e))
}(jQuery);

/*!
 * imagesLoaded PACKAGED v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

!function(e,t){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",t):"object"==typeof module&&module.exports?module.exports=t():e.EvEmitter=t()}("undefined"!=typeof window?window:this,function(){function e(){}var t=e.prototype;return t.on=function(e,t){if(e&&t){var i=this._events=this._events||{},n=i[e]=i[e]||[];return n.indexOf(t)==-1&&n.push(t),this}},t.once=function(e,t){if(e&&t){this.on(e,t);var i=this._onceEvents=this._onceEvents||{},n=i[e]=i[e]||{};return n[t]=!0,this}},t.off=function(e,t){var i=this._events&&this._events[e];if(i&&i.length){var n=i.indexOf(t);return n!=-1&&i.splice(n,1),this}},t.emitEvent=function(e,t){var i=this._events&&this._events[e];if(i&&i.length){i=i.slice(0),t=t||[];for(var n=this._onceEvents&&this._onceEvents[e],o=0;o<i.length;o++){var r=i[o],s=n&&n[r];s&&(this.off(e,r),delete n[r]),r.apply(this,t)}return this}},t.allOff=function(){delete this._events,delete this._onceEvents},e}),function(e,t){"use strict";"function"==typeof define&&define.amd?define(["ev-emitter/ev-emitter"],function(i){return t(e,i)}):"object"==typeof module&&module.exports?module.exports=t(e,require("ev-emitter")):e.imagesLoaded=t(e,e.EvEmitter)}("undefined"!=typeof window?window:this,function(e,t){function i(e,t){for(var i in t)e[i]=t[i];return e}function n(e){if(Array.isArray(e))return e;var t="object"==typeof e&&"number"==typeof e.length;return t?d.call(e):[e]}function o(e,t,r){if(!(this instanceof o))return new o(e,t,r);var s=e;return"string"==typeof e&&(s=document.querySelectorAll(e)),s?(this.elements=n(s),this.options=i({},this.options),"function"==typeof t?r=t:i(this.options,t),r&&this.on("always",r),this.getImages(),h&&(this.jqDeferred=new h.Deferred),void setTimeout(this.check.bind(this))):void a.error("Bad element for imagesLoaded "+(s||e))}function r(e){this.img=e}function s(e,t){this.url=e,this.element=t,this.img=new Image}var h=e.jQuery,a=e.console,d=Array.prototype.slice;o.prototype=Object.create(t.prototype),o.prototype.options={},o.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},o.prototype.addElementImages=function(e){"IMG"==e.nodeName&&this.addImage(e),this.options.background===!0&&this.addElementBackgroundImages(e);var t=e.nodeType;if(t&&u[t]){for(var i=e.querySelectorAll("img"),n=0;n<i.length;n++){var o=i[n];this.addImage(o)}if("string"==typeof this.options.background){var r=e.querySelectorAll(this.options.background);for(n=0;n<r.length;n++){var s=r[n];this.addElementBackgroundImages(s)}}}};var u={1:!0,9:!0,11:!0};return o.prototype.addElementBackgroundImages=function(e){var t=getComputedStyle(e);if(t)for(var i=/url\((['"])?(.*?)\1\)/gi,n=i.exec(t.backgroundImage);null!==n;){var o=n&&n[2];o&&this.addBackground(o,e),n=i.exec(t.backgroundImage)}},o.prototype.addImage=function(e){var t=new r(e);this.images.push(t)},o.prototype.addBackground=function(e,t){var i=new s(e,t);this.images.push(i)},o.prototype.check=function(){function e(e,i,n){setTimeout(function(){t.progress(e,i,n)})}var t=this;return this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?void this.images.forEach(function(t){t.once("progress",e),t.check()}):void this.complete()},o.prototype.progress=function(e,t,i){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded,this.emitEvent("progress",[this,e,t]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,e),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&a&&a.log("progress: "+i,e,t)},o.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(e,[this]),this.emitEvent("always",[this]),this.jqDeferred){var t=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[t](this)}},r.prototype=Object.create(t.prototype),r.prototype.check=function(){var e=this.getIsImageComplete();return e?void this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),void(this.proxyImage.src=this.img.src))},r.prototype.getIsImageComplete=function(){return this.img.complete&&this.img.naturalWidth},r.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.img,t])},r.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},r.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},r.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},r.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype=Object.create(r.prototype),s.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url;var e=this.getIsImageComplete();e&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},s.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.element,t])},o.makeJQueryPlugin=function(t){t=t||e.jQuery,t&&(h=t,h.fn.imagesLoaded=function(e,t){var i=new o(this,e,t);return i.jqDeferred.promise(h(this))})},o.makeJQueryPlugin(),o});

(function () {
  "use strict";

  var COMMON, AT_MAIN, DRAWERMENU, DROP, GMAP, TAB, common, obj_common, obj_menu, obj_drop, obj_map, obj_tab, getWindouSize, resizeCommon, scrollEvt, scroll_y, start_scroll_y, settingPC, settingSP, trace;
  var $document = $(document);
  var $window = $(window);

  /* __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };
   */
  function makeObject(o) {
    var f = makeObject.f, i, len, n, prop;
    f.prototype = o;
    n = new f;

    for (i = 1, len = arguments.length; i < len; ++i)
      for (prop in arguments[i])
        n[prop] = arguments[i][prop];
    return n;
  }

  makeObject.f = function () {
  };

  COMMON = {
    debug: {
      DUBUG_MODE: false,
      trace: function () {
        var e, i, len, str, _i;
        if (!this.DUBUG_MODE) {
          return;
        }
        try {
          if (arguments.length > 1) {
            str = '';
            len = arguments.length;
            for (i = _i = 0; 0 <= len ? _i <= len : _i >= len; i = 0 <= len ? ++_i : --_i) {
              if (i > 0) {
                str += ',';
                str += arguments[i];
              }
            }
            if (console) {
              console.log(str);
              return this;
            }
          } else {
            if (console) {
              console.log(arguments[0]);
              return this;
            }
          }
        } catch (_error) {
          e = _error;
          if (console) {
            return console.log("Can't Output Console Log.");
          }
        }
      }
    },
    ua: {
      isBrowser: {
        IE: function () {
          return navigator.userAgent.match(/msie (\d+(\.\d+)?)/i);
        },
        IE11: function () {
          return navigator.userAgent.match(/Trident.+rv\:(\d+(\.\d+)?)/i);
        },
        Edge: function () {
          return navigator.userAgent.match(/edge\/(\d+(\.\d+)?)/i);
        },
        chrome: function () {
          return navigator.userAgent.match(/chrome\/(\d+(\.\d+)?)/i);
        },
        firefox: function () {
          return navigator.userAgent.match(/firefox\/(\d+(\.\d+)?)/i);
        },
        safari: function () {
          return navigator.userAgent.match(/safari\/(\d+(\.\d+)?)/i);
        },
        opera: function () {
          return navigator.userAgent.match(/opera\/(\d+(\.\d+)?)/i);
        },
        get: function () {
          var that, version;
          that = this;
          if (version = this.IE()) {
            return that.add('ie', version[1]);
          }
          if (version = this.IE11()) {
            return that.add('ie', version[1]);
          }
          if (version = this.Edge()) {
            return that.add('edge', version[1]);
          }
          if (version = this.chrome()) {
            return that.add('chrome', version[1]);
          }
          if (version = this.firefox()) {
            return that.add('firefox', version[1]);
          }
          if (version = this.safari()) {
            return that.add('safari', version[1]);
          }
          if (version = this.opera()) {
            return that.add('opera', version[1]);
          }
        },
        add: function (name, ver) {
          return name + (ver != '' ? ' ' + name + (ver * 1).toString().replace('.', '_') : '');
        }
      },
      isMobile: {
        iOS: function () {
          return navigator.userAgent.match(/iPhone OS (\d+(\.\d+)?)/i);
        },
        iPhone: function () {
          return navigator.userAgent.match(/iPhone;/i);
        },
        iPad: function () {
          return navigator.userAgent.match(/iPad;/i);
        },
        iPod: function () {
          return navigator.userAgent.match(/iPod;/i);
        },
        Android: function () {
          return navigator.userAgent.match(/Android/i);
        },
        Windows: function () {
          return navigator.userAgent.match(/IEMobile/i);
        },
        any: function () {
          var that;
          that = this;
          return that.iOS() || that.iPhone() || that.iPad() || that.iPod() || that.Android() || that.Windows();
        },
        get: function () {
          var that, version;
          that = this;
          if (version = this.iOS()) {
            return that.add('ios', version[1]);
          }
          if (version = this.iPhone()) {
            return that.add('iphone', version[1]);
          }
          if (version = this.iPad()) {
            return that.add('ipad', version[1]);
          }
          if (version = this.iPod()) {
            return that.add('ipod', version[1]);
          }
          if (version = this.Android()) {
            return that.add('android', version[1]);
          }
          if (version = this.Windows()) {
            return that.add('windows', version[1]);
          }
        },
        add: function (name, ver) {
          return name + (ver != '' ? ' ' + name + (ver * 1).toString().replace('.', '_') : '');
        }
      }
    },
    support: {
      getFirstEvent: function (eventName) {
        if (eventName === 'touchstart') {
          return {
            move: 'touchmove',
            end: 'touchend'
          };
        }
        if (eventName === 'mousedown') {
          return {
            move: 'mousemove',
            end: 'mouseup'
          };
        }
        if (eventName === 'MSPointerDown') {
          return {
            move: 'MSPointerMove',
            end: 'MSPointerUp'
          };
        }
        if (eventName === 'pointerdown') {
          return {
            move: 'pointermove',
            end: 'pointerup'
          };
        }
        return false;
      }
    }
  };

  AT_MAIN = {
    _windowW: 0,
    _windowH: 0,
    _hash: {},
    _header: {},
    _footer: {},
    _BREAKE_PT_PC: 1260,
    _BREAKE_PT_TAB: 900,
    _slider: {},
    _loaded: {},
    _animation: {},
    init: function () {
      var that, $root;
      that = this;
      that._windowW = parseInt($window.width());
      that._windowH = parseInt($window.height());
      that._hash = window.location.hash;
      that._header = $('.js-header');
      $document.on('click', 'a', function (event) {
        var location, href, url, anchor;
        location = window.location.href.split("#")[0];
        href = $(event.currentTarget).attr('href');
        if (href) {
          url = href.split("#")[0];
          if (url && location != url) return true;
          anchor = href.match(/#(.*)+/g)[0];
          if (!anchor) return true;
          event.preventDefault();
          that.scroll($(anchor));
        }
      });
      that.changeViewPort();

      $root = $(document.documentElement);
      $root.attr('data-browser', common.ua.isBrowser.get());
      if (common.ua.isMobile.any()) {
        $root.attr('data-mobile', common.ua.isMobile.get());
      }
      return this;
    },
    scroll: function ($el) {
      var that, elementTop, headerHeight, headerFixed;
      that = this;
      elementTop = 0;
      if ($el.length > 0) {
        elementTop = $el.offset().top;
      }
      headerHeight = that._header.height();
      headerFixed = that._header.css('position');

      if (headerFixed == 'fixed') {
        elementTop = elementTop - headerHeight;
      }
      $('html,body').stop(true, false).animate({
        scrollTop: elementTop
      }, 800, 'swing');
      return this;
    },
    changeViewPort: function () {
      var that, windowW, viewportContent;
      that = this;
      windowW = that._windowW;
      if (common.ua.isMobile.any()) {
        windowW = screen.width;

      }
      if (windowW > 600 && windowW <= 1200) {
        viewportContent = "width=1200,user-scalable=no,shrink-to-fit=yes";

      } else if(windowW < 376) {
        viewportContent = "width=375,user-scalable=no,shrink-to-fit=yes";
      }else{
        viewportContent = "width=device-width,user-scalable=no,shrink-to-fit=yes";
      }
      document.querySelector("meta[name='viewport']").setAttribute("content", viewportContent);
    },
    handle: function (event, el, handleAddAction) {
      var currentEventNameSet, handleStartEnd, handleMove;
      currentEventNameSet = null;
      handleMove = function (event) {
        event.preventDefault();
        handleAddAction(event);
      };
      handleStartEnd = function (event) {
        handleMove(event);
        if (currentEventNameSet) {
          $document.off(currentEventNameSet.end, el, handleStartEnd);
          currentEventNameSet = null;
        }
      }
      event.preventDefault();
      event.stopPropagation();
      currentEventNameSet = common.support.getFirstEvent(event.type);
      $document.on(currentEventNameSet.end, el, handleStartEnd);
    },
    mainSlider: function () {
      var that;
      that = this;
    },
    animation: function () {
      var that;
      that = this;

    }
  };


  DRAWERMENU = {
    init: function (el) {
      var that, eventHandler;
      that = this;
      that.$el = $(el);
      that.si = new ScrollScope();
      that.si.bind(document);
      eventHandler = (function (that) {
        return function (event) {
          that.get(event);
          that.do();
        };
      })(this);
      that.$el.each(that.set).on({
        /*'touchstart mousedown': function (event) {
          obj_common.handle(event, el, eventHandler);
        },*/
        'click': function (event) {
          eventHandler(event);
        }
      });

      $document.on('click', '.js-menu-body[aria-hidden="false"] a', function (event) {
        var target_url, hash,current_url;
        target_url = $(this).attr('href');
        hash = target_url.match(/#(.*)+/g)[0];
        current_url = $(this)[0].pathname;

        if (hash && current_url == location.pathname) {
          $('.js-menu-trigger[aria-expanded="true"]').trigger('click');
          obj_common.scroll($(hash));
        }

      });
      return this;
    },
    set: function (i, el) {
      var $el, $control;
      $el = $(this);
      $control = $('#' + $el.attr('aria-controls'));
      $el.attr('aria-expanded', false);
      $control.attr('aria-hidden', true);
    },
    do: function () {
      var that, $body, justHide;
      that = this;
      justHide = (that.$el.attr('aria-expanded') == 'true');
      if (that.$el.attr('data-menu-trigger') == 'open') {
        justHide = false;
      } else if (that.$el.attr('data-menu-trigger') == 'close') {
        justHide = true;
      }
      if (!justHide) {
        that.show();
      } else {
        that.hide();
      }
      that.si.getTargetedElements().scrollTop(0);
    },
    get: function (event) {
      var that;
      that = this;
      that.$el = $(event.currentTarget);
      that.controlID = that.$el.attr('aria-controls');
      that.$control = $('#' + that.controlID);
    },
    show: function () {
      var that;
      that = this;
      $('[aria-controls="' + that.controlID + '"]').attr('aria-expanded', true);
      that.$control.attr('aria-hidden', false);
      $('body').attr('data-menu-open', true);
    },
    hide: function () {
      var that;
      that = this;
      $('[aria-controls="' + that.controlID + '"]').attr('aria-expanded', false);
      that.$control.attr('aria-hidden', true);
      $('body').attr('data-menu-open', false);
    }
  }

  DROP = {
    init: function (el, parent) {
      var that, eventHandler;
      that = this;
      that.$el = $(el);
      that.parent = parent;
      eventHandler = (function (that) {
        return function (event) {
          that.get(event);
          that.do(event);
        };
      })(this);
      that.$el.each(that.set).on({
        /*'touchstart mousedown': function (event) {
         obj_common.handle(event, el, eventHandler)
         },*/
        'mouseenter click': eventHandler
      });
      $document.on({
        "mouseleave": (function (that) {
          return function (event) {
            that.outside(event);
          };
        })(this)
      }, that.parent + '[data-drop-hover="true"]');
      $document.on({
        "click": (function (that) {
          return function (event) {
            that.$parent = $(event.currentTarget).parents(that.parent);
            that.hide(event);
          };
        })(this)
      }, el + '-close');
      return this;
    },
    set: function (i, el) {
      var $el, $control;
      $el = $(this);
      //$control = $('#' + $el.attr('aria-controls'));
      $el.attr('aria-expanded', false);
      //$control.attr('aria-hidden', true);
    },
    do: function (event) {
      event.preventDefault();
      var that, hover, justHide;
      that = this;
      hover = (that.$parent.attr('data-drop-hover') == "true");
      justHide = (that.$el.attr('aria-expanded') == 'false');
      /*if(that.$el.attr('data-drop-trigger') == 'open'){
       justHide = false;
       }else if(that.$el.attr('data-drop-trigger') == 'close'){
       justHide = true;
       }*/

      if (event.type == 'mouseenter' && !hover) {
        return true;
      }
      if (event.type == 'mouseup' && !hover) {
        that.$el.on('click', (function (that) {
          return function (event) {
            event.preventDefault();
            that.$control.off('click');
          }
        })(this));
      }
      if (justHide) {
        that.show();
        that.$control.on({
          'transitionend webkitTransitionEnd': (function (that) {
            return function (event) {
              var targetPosition = that.$el.offset().top;
              if (scroll_y + (obj_common._windowH - obj_common._windowH / 5) < targetPosition || scroll_y - targetPosition > -10) {
                obj_common.scroll(that.$el);
              }
              that.$control.off('transitionend webkitTransitionEnd');
            }
          })(this)
        });
      } else {
        if (event.type != 'mouseenter') {
          that.hide();
        }
      }
    },
    get: function (event) {
      var that;
      that = this;
      that.$el = $(event.currentTarget);
      that.controlID = that.$el.attr('aria-controls');
      that.$control = $('#' + that.controlID);
      that.$parent = that.$el.closest(that.parent);
      that.status = that.$parent.attr('data-drop-status');
    },
    show: function () {
      var that;
      that = this;
      if (that.status == 'end' || that.status === undefined) {
        that.$parent.attr('data-drop-status', 'start');
      } else {
        that.$parent.attr('data-drop-status', 'move');
        that.$parent.find('[aria-expanded="true"]').attr('aria-expanded', false);
      }
      that.$el.attr('aria-expanded', true);
      that.$control.attr('aria-expanded', true);
    },
    hide: function () {
      var that;
      that = this;
      that.$parent.attr('data-drop-status', 'end');
      that.$parent.find('[aria-expanded="true"]').attr('aria-expanded', false);
    },
    outside: function (event) {
      var that;
      that = this;
      that.$parent = $(event.currentTarget);
      that.hide();
    }
  }

  TAB = {
    init: function (el,panel,parent) {
      var that;
      that = this;
      that.el = el;
      that.panel = panel;
      that.parent = parent;
      that.$parent = $(parent);
      this.set();
      $document.on({"click": (function(that){
        return function(event) {
          that.get(event);
          that.do(event);
        };
      })(this)}, that.el);

      that.$parent.find(that.el).filter(':first-child').trigger('click');
      return this;
    },
    set: function () {
      this.$parent.find(this.el).attr({'aria-selected':false,'aria-expanded': false});
      this.$parent.find(this.panel).attr({'aria-hidden':true});
    },
    do: function (event) {
      event.preventDefault();
      var that;
      that = this;

      that.currentparent.find(this.el).attr({'aria-selected':false,'aria-expanded': false});
      that.currentparent.find(this.panel).attr({'aria-hidden':true});
      that.$opener.attr({'aria-selected':true,'aria-expanded': true});
      that.$control.attr({'aria-hidden':false});
    },
    get:function (event) {
      var that;
      that = this;
      that.$opener = $(event.currentTarget);
      that.controlID = that.$opener.attr('aria-controls');
      that.$control = $('#' + that.controlID);
      that.currentparent = that.$opener.parents(this.parent);

    }
  }

  common = makeObject(COMMON);

  /*
   @for debug
   */

  trace = function (log) {
    common.debug.DUBUG_MODE = true;
    common.debug.trace(log);
    return this;
  };

  getWindouSize = function () {
    obj_common._windowW = parseInt($window.width());
    obj_common._windowH = parseInt($window.height());
    return this;
  };

  resizeCommon = function () {

    obj_common.changeViewPort();

    return this;
  };

  scrollEvt = function () {
    var $root;
    $root = $(document.documentElement);
    if (scroll_y > start_scroll_y) {
      $root.attr('data-scrolled-direction', 'down');
    } else {
      $root.attr('data-scrolled-direction', 'up');
    }

    if (scroll_y > obj_common._windowH) {
      $root.attr('data-scrolled', true);
      $root.attr('data-scrolled-status', 'scroll');
    } else if(scroll_y > obj_common._windowH/2){
      $root.attr('data-scrolled', true);
      $root.attr('data-scrolled-status', 'move');
    } else {
      $root.attr('data-scrolled', false);
      $root.attr('data-scrolled-status', 'first');
    }

    start_scroll_y = scroll_y;
  };

  settingPC = function () {
    return this;
  };

  settingSP = function () {
    return this;
  };

  //console.log(common.ua.isBrowser.get());

  /*
   redyEVENT
   */
  $document.ready(function () {
    scroll_y = $(this).scrollTop();
    obj_common = makeObject(AT_MAIN).init();
    obj_menu = makeObject(DRAWERMENU.init('.js-menu-trigger'));
    obj_drop = makeObject(DROP).init('.js-drop-trigger', '.js-drop');
    obj_tab = makeObject(TAB).init('.js-tab-trigger','.js-tab-panel','.js-tab');

    var hash = window.location.hash;
    if(hash ||  hash.match(/d-/)) {
      hash = hash.replace('#d-','');
      $(".js-drop-trigger[aria-controls=" + hash + "]").trigger('click');
    }

    return this;
  });

  /*
   loadEVENT
   */
  $(function(){
    getWindouSize();
    resizeCommon();
    if (obj_common._hash) {
      obj_common.scroll($(obj_common._hash));
    }
    return this;
  });

  /*
   resizeEVENT & rotateEVENT
   */
  $window.resize(function () {
    var _h, _w;
    _w = parseInt($window.width());
    _h = parseInt($window.height());
    if (_w !== obj_common._windowW || _h !== obj_common._windowH) {
      getWindouSize();
      resizeCommon();
    }
    return this;
  });

  /*
   Scroll
   */
  $window.scroll(function () {
    scroll_y = $(this).scrollTop();
    scrollEvt();
    return this;
  });


}).call(this);