! function(t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
}(function(t) {
    "use strict";

    function e(e) {
        var o = e.attr("data-target");
        o || (o = e.attr("href"), o = o && /#[A-Za-z]/.test(o) && o.replace(/.*(?=#[^\s]*$)/, ""));
        var n = o && t(o);
        return n && n.length ? n : e.parent()
    }

    function o(o) {
        o && 3 === o.which || (t(r).remove(), t(a).each(function() {
            var n = t(this),
                r = e(n),
                a = {
                    relatedTarget: this
                };
            r.hasClass("open") && (o && "click" == o.type && /input|textarea/i.test(o.target.tagName) && t.contains(r[0], o.target) || (r.trigger(o = t.Event("hide.bs.dropdown", a)), o.isDefaultPrevented() || (n.attr("aria-expanded", "false"), r.removeClass("open").trigger(t.Event("hidden.bs.dropdown", a)))))
        }))
    }

    function n(e) {
        return this.each(function() {
            var o = t(this),
                n = o.data("bs.dropdown");
            n || o.data("bs.dropdown", n = new i(this)), "string" == typeof e && n[e].call(o)
        })
    }
    var r = ".dropdown-backdrop",
        a = '[data-toggle="dropdown"]',
        d = ".drawer-nav",
        i = function(e) {
            t(e).on("click.bs.dropdown", this.toggle)
        };
    i.VERSION = "3.3.5", i.prototype.toggle = function(n) {
        var r = t(this);
        if (!r.is(".disabled, :disabled")) {
            var a = e(r),
                i = a.hasClass("open");
            if (o(), !i) {
                "ontouchstart" in document.documentElement && !a.closest(d).length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", o);
                var s = {
                    relatedTarget: this
                };
                if (a.trigger(n = t.Event("show.bs.dropdown", s)), n.isDefaultPrevented()) return;
                r.trigger("focus").attr("aria-expanded", "true"), a.toggleClass("open").trigger(t.Event("shown.bs.dropdown", s))
            }
            return !1
        }
    }, i.prototype.keydown = function(o) {
        if (/(38|40|27|32)/.test(o.which) && !/input|textarea/i.test(o.target.tagName)) {
            var n = t(this);
            if (o.preventDefault(), o.stopPropagation(), !n.is(".disabled, :disabled")) {
                var r = e(n),
                    d = r.hasClass("open");
                if (!d && 27 != o.which || d && 27 == o.which) return 27 == o.which && r.find(a).trigger("focus"), n.trigger("click");
                var i = " li:not(.disabled):visible a",
                    s = r.find(".dropdown-menu" + i);
                if (s.length) {
                    var p = s.index(o.target);
                    38 == o.which && p > 0 && p--, 40 == o.which && p < s.length - 1 && p++, ~p || (p = 0), s.eq(p).trigger("focus")
                }
            }
        }
    };
    var s = t.fn.dropdown;
    t.fn.dropdown = n, t.fn.dropdown.Constructor = i, t.fn.dropdown.noConflict = function() {
        return t.fn.dropdown = s, this
    }, t(document).on("click.bs.dropdown.data-api", o).on("click.bs.dropdown.data-api", ".dropdown form", function(t) {
        t.stopPropagation()
    }).on("click.bs.dropdown.data-api", a, i.prototype.toggle).on("keydown.bs.dropdown.data-api", a, i.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", i.prototype.keydown)
});