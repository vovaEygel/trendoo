(function(e) {
    function t(t) {
        for (var r, i, o = t[0], c = t[1], l = t[2], f = 0, p = []; f < o.length; f++) i = o[f], Object.prototype.hasOwnProperty.call(s, i) && s[i] && p.push(s[i][0]), s[i] = 0;
        for (r in c) Object.prototype.hasOwnProperty.call(c, r) && (e[r] = c[r]);
        u && u(t);
        while (p.length) p.shift()();
        return a.push.apply(a, l || []), n()
    }

    function n() {
        for (var e, t = 0; t < a.length; t++) {
            for (var n = a[t], r = !0, o = 1; o < n.length; o++) {
                var c = n[o];
                0 !== s[c] && (r = !1)
            }
            r && (a.splice(t--, 1), e = i(i.s = n[0]))
        }
        return e
    }
    var r = {},
        s = { app: 0 },
        a = [];

    function i(t) { if (r[t]) return r[t].exports; var n = r[t] = { i: t, l: !1, exports: {} }; return e[t].call(n.exports, n, n.exports, i), n.l = !0, n.exports }
    i.m = e, i.c = r, i.d = function(e, t, n) { i.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n }) }, i.r = function(e) { "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, i.t = function(e, t) {
        if (1 & t && (e = i(e)), 8 & t) return e;
        if (4 & t && "object" === typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (i.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e)
            for (var r in e) i.d(n, r, function(t) { return e[t] }.bind(null, r));
        return n
    }, i.n = function(e) { var t = e && e.__esModule ? function() { return e["default"] } : function() { return e }; return i.d(t, "a", t), t }, i.o = function(e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, i.p = "/";
    var o = window["webpackJsonp"] = window["webpackJsonp"] || [],
        c = o.push.bind(o);
    o.push = t, o = o.slice();
    for (var l = 0; l < o.length; l++) t(o[l]);
    var u = c;
    a.push([0, "chunk-vendors"]), n()
})({
    0: function(e, t, n) { e.exports = n("56d7") },
    "0536": function(e, t, n) { e.exports = n.p + "img/chef influencer.eeb90b4c.jpg" },
    1: function(e, t) {},
    "2eda": function(e, t, n) { e.exports = n.p + "img/price.ce9aa870.svg" },
    4640: function(e, t, n) { e.exports = n.p + "img/man_sprite.7cbfda10.jpg" },
    4678: function(e, t, n) {
        var r = { "./af": "2bfb", "./af.js": "2bfb", "./ar": "8e73", "./ar-dz": "a356", "./ar-dz.js": "a356", "./ar-kw": "423e", "./ar-kw.js": "423e", "./ar-ly": "1cfd", "./ar-ly.js": "1cfd", "./ar-ma": "0a84", "./ar-ma.js": "0a84", "./ar-sa": "8230", "./ar-sa.js": "8230", "./ar-tn": "6d83", "./ar-tn.js": "6d83", "./ar.js": "8e73", "./az": "485c", "./az.js": "485c", "./be": "1fc1", "./be.js": "1fc1", "./bg": "84aa", "./bg.js": "84aa", "./bm": "a7fa", "./bm.js": "a7fa", "./bn": "9043", "./bn.js": "9043", "./bo": "d26a", "./bo.js": "d26a", "./br": "6887", "./br.js": "6887", "./bs": "2554", "./bs.js": "2554", "./ca": "d716", "./ca.js": "d716", "./cs": "3c0d", "./cs.js": "3c0d", "./cv": "03ec", "./cv.js": "03ec", "./cy": "9797", "./cy.js": "9797", "./da": "0f14", "./da.js": "0f14", "./de": "b469", "./de-at": "b3eb", "./de-at.js": "b3eb", "./de-ch": "bb71", "./de-ch.js": "bb71", "./de.js": "b469", "./dv": "598a", "./dv.js": "598a", "./el": "8d47", "./el.js": "8d47", "./en-SG": "cdab", "./en-SG.js": "cdab", "./en-au": "0e6b", "./en-au.js": "0e6b", "./en-ca": "3886", "./en-ca.js": "3886", "./en-gb": "39a6", "./en-gb.js": "39a6", "./en-ie": "e1d3", "./en-ie.js": "e1d3", "./en-il": "7333", "./en-il.js": "7333", "./en-nz": "6f50", "./en-nz.js": "6f50", "./eo": "65db", "./eo.js": "65db", "./es": "898b", "./es-do": "0a3c", "./es-do.js": "0a3c", "./es-us": "55c9", "./es-us.js": "55c9", "./es.js": "898b", "./et": "ec18", "./et.js": "ec18", "./eu": "0ff2", "./eu.js": "0ff2", "./fa": "8df4", "./fa.js": "8df4", "./fi": "81e9", "./fi.js": "81e9", "./fo": "0721", "./fo.js": "0721", "./fr": "9f26", "./fr-ca": "d9f8", "./fr-ca.js": "d9f8", "./fr-ch": "0e49", "./fr-ch.js": "0e49", "./fr.js": "9f26", "./fy": "7118", "./fy.js": "7118", "./ga": "5120", "./ga.js": "5120", "./gd": "f6b4", "./gd.js": "f6b4", "./gl": "8840", "./gl.js": "8840", "./gom-latn": "0caa", "./gom-latn.js": "0caa", "./gu": "e0c5", "./gu.js": "e0c5", "./he": "c7aa", "./he.js": "c7aa", "./hi": "dc4d", "./hi.js": "dc4d", "./hr": "4ba9", "./hr.js": "4ba9", "./hu": "5b14", "./hu.js": "5b14", "./hy-am": "d6b6", "./hy-am.js": "d6b6", "./id": "5038", "./id.js": "5038", "./is": "0558", "./is.js": "0558", "./it": "6e98", "./it-ch": "6f12", "./it-ch.js": "6f12", "./it.js": "6e98", "./ja": "079e", "./ja.js": "079e", "./jv": "b540", "./jv.js": "b540", "./ka": "201b", "./ka.js": "201b", "./kk": "6d79", "./kk.js": "6d79", "./km": "e81d", "./km.js": "e81d", "./kn": "3e92", "./kn.js": "3e92", "./ko": "22f8", "./ko.js": "22f8", "./ku": "2421", "./ku.js": "2421", "./ky": "9609", "./ky.js": "9609", "./lb": "440c", "./lb.js": "440c", "./lo": "b29d", "./lo.js": "b29d", "./lt": "26f9", "./lt.js": "26f9", "./lv": "b97c", "./lv.js": "b97c", "./me": "293c", "./me.js": "293c", "./mi": "688b", "./mi.js": "688b", "./mk": "6909", "./mk.js": "6909", "./ml": "02fb", "./ml.js": "02fb", "./mn": "958b", "./mn.js": "958b", "./mr": "39bd", "./mr.js": "39bd", "./ms": "ebe4", "./ms-my": "6403", "./ms-my.js": "6403", "./ms.js": "ebe4", "./mt": "1b45", "./mt.js": "1b45", "./my": "8689", "./my.js": "8689", "./nb": "6ce3", "./nb.js": "6ce3", "./ne": "3a39", "./ne.js": "3a39", "./nl": "facd", "./nl-be": "db29", "./nl-be.js": "db29", "./nl.js": "facd", "./nn": "b84c", "./nn.js": "b84c", "./pa-in": "f3ff", "./pa-in.js": "f3ff", "./pl": "8d57", "./pl.js": "8d57", "./pt": "f260", "./pt-br": "d2d4", "./pt-br.js": "d2d4", "./pt.js": "f260", "./ro": "972c", "./ro.js": "972c", "./ru": "957c", "./ru.js": "957c", "./sd": "6784", "./sd.js": "6784", "./se": "ffff", "./se.js": "ffff", "./si": "eda5", "./si.js": "eda5", "./sk": "7be6", "./sk.js": "7be6", "./sl": "8155", "./sl.js": "8155", "./sq": "c8f3", "./sq.js": "c8f3", "./sr": "cf1e", "./sr-cyrl": "13e9", "./sr-cyrl.js": "13e9", "./sr.js": "cf1e", "./ss": "52bd", "./ss.js": "52bd", "./sv": "5fbd", "./sv.js": "5fbd", "./sw": "74dc", "./sw.js": "74dc", "./ta": "3de5", "./ta.js": "3de5", "./te": "5cbb", "./te.js": "5cbb", "./tet": "576c", "./tet.js": "576c", "./tg": "3b1b", "./tg.js": "3b1b", "./th": "10e8", "./th.js": "10e8", "./tl-ph": "0f38", "./tl-ph.js": "0f38", "./tlh": "cf75", "./tlh.js": "cf75", "./tr": "0e81", "./tr.js": "0e81", "./tzl": "cf51", "./tzl.js": "cf51", "./tzm": "c109", "./tzm-latn": "b53d", "./tzm-latn.js": "b53d", "./tzm.js": "c109", "./ug-cn": "6117", "./ug-cn.js": "6117", "./uk": "ada2", "./uk.js": "ada2", "./ur": "5294", "./ur.js": "5294", "./uz": "2e8c", "./uz-latn": "010e", "./uz-latn.js": "010e", "./uz.js": "2e8c", "./vi": "2921", "./vi.js": "2921", "./x-pseudo": "fd7e", "./x-pseudo.js": "fd7e", "./yo": "7f33", "./yo.js": "7f33", "./zh-cn": "5c3a", "./zh-cn.js": "5c3a", "./zh-hk": "49ab", "./zh-hk.js": "49ab", "./zh-tw": "90ea", "./zh-tw.js": "90ea" };

        function s(e) { var t = a(e); return n(t) }

        function a(e) { if (!n.o(r, e)) { var t = new Error("Cannot find module '" + e + "'"); throw t.code = "MODULE_NOT_FOUND", t } return r[e] }
        s.keys = function() { return Object.keys(r) }, s.resolve = a, e.exports = s, s.id = "4678"
    },
    "51b9": function(e, t, n) {
        "use strict";
        var r = n("708d"),
            s = n.n(r);
        s.a
    },
    5657: function(e, t, n) { e.exports = n.p + "img/woman_bag.0fed704e.jpg" },
    "56d7": function(e, t, n) {
        "use strict";
        n.r(t);
        n("e260"), n("e6cf"), n("cca6"), n("a79d");
        var r = n("2b0e"),
            s = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", { staticClass: "main-layout", attrs: { id: "app" } }, [n("app-header"), n("user-msg"), n("router-view", { staticClass: "main-app" })], 1)
            },
            a = [],
            i = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("section", { staticClass: "header" }, [n("nav", { staticClass: "navbar flex space-between" }, [n("div", [n("label", { on: { click: function(t) { return e.$router.push("/") } } }, [e._v("Trendzly")]), n("router-link", { staticClass: "home-page-btn nav-btn", attrs: { to: "/" } }, [e._v("Home")]), n("router-link", { staticClass: "nav-btn", attrs: { to: "/login" } }, [e._v("Login")]), n("router-link", { staticClass: "nav-btn", attrs: { to: "/signup" } }, [e._v("Signup")])], 1), n("div", { staticClass: "demo-login-btn" }, [n("router-link", { attrs: { to: "" }, nativeOn: { click: function(t) { return e.login(t) } } }, [e._v("influencer login")])], 1)])])
            },
            o = [],
            c = { name: "app-header", data: function() { return { loggedInUser: null, demoUser: { credentials: { username: "vsmorthiti", password: "KOMFvSj0iwWq" } } } }, methods: { login: function() { this.demoUser = this.$store.getters.demoInfluencer, this.loggedInUser = this.$store.dispatch({ type: "login", credentials: this.demoUser }), this.$router.push("/backoffice") } } },
            l = c,
            u = n("2877"),
            f = Object(u["a"])(l, i, o, !1, null, null, null),
            p = f.exports,
            d = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("transition", { attrs: { name: "fade" } }, [e.isShown ? n("section", { staticClass: "msg-container" }, [n("h1", [e._v(e._s(e.msg.txt))])]) : e._e()])
            },
            m = [],
            g = new r["default"],
            h = {
                data: function() { return { isShown: !1, msg: {} } },
                created: function() {
                    var e = this;
                    g.$on("showMsg", (function(t) { console.log(t), e.msg = t, e.isShown = !0, setTimeout((function() { e.isShown = !1 }), 1e3) }))
                }
            },
            v = h,
            b = Object(u["a"])(v, d, m, !1, null, null, null),
            w = b.exports,
            y = { name: "App", components: { appHeader: p, userMsg: w } },
            x = y,
            _ = Object(u["a"])(x, s, a, !1, null, null, null),
            j = _.exports,
            k = n("9483");
        Object(k["a"])("".concat("/", "service-worker.js"), { ready: function() { console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB") }, registered: function() { console.log("Service worker has been registered.") }, cached: function() { console.log("Content has been cached for offline use.") }, updatefound: function() { console.log("New content is downloading.") }, updated: function() { console.log("New content is available; please refresh.") }, offline: function() { console.log("No internet connection found. App is running in offline mode.") }, error: function(e) { console.error("Error during service worker registration:", e) } });
        var C = n("8c4f"),
            I = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("section", { staticClass: "home-page-container flex column" }, [n("section", { staticClass: "home-page-hero flex align-center space-between" }, [n("div", { staticClass: "home-page-content flex column justify-end" }, [n("h1", [e._v("Get Influenced")]), n("div", { staticClass: "sub-content flex column " }, [n("p", [e._v("Find the right influencer to promote your Brand")]), n("button", { staticClass: "go-btn btn", on: { click: function(t) { return e.redirect("brand") } } }, [e._v("Lets Go")])])]), e._m(0)]), n("section", { staticClass: "top-rated-list" }, [n("h1", [e._v("Our Most Popular Influencers")]), e.topRatedList ? n("div", { staticClass: "influencers-list" }, e._l(e.topRatedList, (function(e) { return n("influencer-preview", { key: e._id, attrs: { influencer: e } }) })), 1) : e._e()])])
            },
            P = [function() {
                var e = this,
                    t = e.$createElement,
                    r = e._self._c || t;
                return r("div", { staticClass: "home-page-imgs-container" }, [r("div", { staticClass: "imgs-container ratio-post" }, [r("img", { staticClass: "carousel-img home-pic-1", attrs: { src: n("4640"), alt: "" } }), r("img", { staticClass: "carousel-img home-pic-2", attrs: { src: n("5657"), alt: "" } }), r("img", { staticClass: "carousel-img home-pic-3", attrs: { src: n("0536"), alt: "" } }), r("img", { staticClass: "carousel-img home-pic-4", attrs: { src: n("fbf4"), alt: "" } })])])
            }],
            O = (n("96cf"), n("1da1")),
            $ = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return e.influencer ? n("section", { staticClass: "influencer-preview", on: { click: e.demoInfluencer } }, [n("router-link", { attrs: { to: "/influencer/" + e.influencer._id } }, [n("influencer-poster", { attrs: { influencer: e.influencer } })], 1)], 1) : e._e()
            },
            U = [],
            R = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("section", { staticClass: "influencer-poster-container ratio-poster" }, [n("img", { staticClass: "poster-photo", attrs: { src: e.photo } }), n("section", [n("influencer-poster-data", { staticClass: "influencer-poster-data", attrs: { influencer: e.influencer } })], 1)])
            },
            A = [],
            F = (n("c96a"), function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("section", { staticClass: "influencer-poster-data-container flex column align-center space-between" }, [n("div", { staticClass: "influencer-fullname" }, [e._v(e._s(e.fullname))]), n("influencer-socials-list", { staticClass: "influencers-socials-list", attrs: { socials: e.influencer.socials } })], 1)
            }),
            S = [],
            N = (n("99af"), function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("section", { staticClass: "influencer-socials-list-container flex align-center" }, e._l(e.socials.slice(0, 2), (function(e, t) { return n("influencer-social-preview", { key: t, attrs: { social: e } }) })), 1)
            }),
            E = [],
            T = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("section", { staticClass: "social-network-info-container flex column" }, [n("i", { class: [e.socialIconLogo, e.socialIcon] }), n("span", { staticClass: "social-network-followers-count" }, [e._v(e._s(e.followersCount))])])
            },
            B = [],
            L = { name: "influencer-social-preview", props: { social: Object }, data: function() { return { socialIconLogo: "", socialIcon: "social-icon" } }, created: function() { this.socialIconLogo = "fa fa-".concat(this.social.type.toLowerCase()) }, computed: { followersCount: function() { return "".concat(Math.floor((this.social.menFollowers + this.social.womenFollowers) / 1e3), "K") } } },
            M = L,
            D = Object(u["a"])(M, T, B, !1, null, null, null),
            z = D.exports,
            G = { name: "influencer-socials-list", props: { socials: Array }, components: { influencerSocialPreview: z } },
            q = G,
            J = Object(u["a"])(q, N, E, !1, null, null, null),
            H = J.exports,
            K = { name: "influencer-poster-data", props: { influencer: Object }, computed: { fullname: function() { return "".concat(this.influencer.firstName, " ").concat(this.influencer.lastName) } }, components: { influencerSocialsList: H } },
            Q = K,
            W = Object(u["a"])(Q, F, S, !1, null, null, null),
            V = W.exports,
            Y = {
                name: "influencer-poster",
                props: { influencer: Object },
                data: function() { return { imageUrl: null, highQualityImage: null } },
                created: function() { this.loadImages() },
                computed: { photo: function() { return this.imageUrl } },
                methods: {
                    loadImages: function() {
                        var e = this;
                        this.imageUrl = this.influencer.profilePhoto.thumb, this.highQualityImage = new Image, this.highQualityImage.onload = function() { e.imageUrl = e.highQualityImage.src }, this.highQualityImage.src = this.influencer.profilePhoto.small
                    }
                },
                components: { influencerPosterData: V }
            },
            X = Y,
            Z = Object(u["a"])(X, R, A, !1, null, null, null),
            ee = Z.exports,
            te = {
                props: { influencer: Object },
                components: { influencerPoster: ee },
                methods: {
                    demoInfluencer: function() {
                        var e = this;
                        return Object(O["a"])(regeneratorRuntime.mark((function t() {
                            var n;
                            return regeneratorRuntime.wrap((function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return n = e.influencer.credentials, t.prev = 1, t.next = 4, e.$store.dispatch({ type: "demoLogin", credentials: n });
                                    case 4:
                                        t.next = 8;
                                        break;
                                    case 6:
                                        t.prev = 6, t.t0 = t["catch"](1);
                                    case 8:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, null, [
                                [1, 6]
                            ])
                        })))()
                    }
                }
            },
            ne = te,
            re = Object(u["a"])(ne, $, U, !1, null, null, null),
            se = re.exports,
            ae = {
                created: function() { this.$store.dispatch({ type: "setUserType", userType: null }), this.loadInfluencers() },
                data: function() { return { demoUser: { credentials: { username: "c", password: "d" } }, topRatedList: [] } },
                methods: {
                    redirect: function(e) { "brand" === e ? (this.$store.dispatch({ type: "login", credentials: this.demoUser.credentials }), this.$router.push("/app")) : "influencer" === e && (this.$store.dispatch({ type: "setUserType", userType: e }), this.$router.push("/backOffice")) },
                    loadInfluencers: function() {
                        var e = this;
                        return Object(O["a"])(regeneratorRuntime.mark((function t() {
                            return regeneratorRuntime.wrap((function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, e.$store.dispatch({ type: "loadInfluencers", filterBy: { topRated: 5 } });
                                    case 2:
                                        e.topRatedList = e.$store.getters.influencers;
                                    case 3:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    }
                },
                components: { influencerPreview: se }
            },
            ie = ae,
            oe = Object(u["a"])(ie, I, P, !1, null, null, null),
            ce = oe.exports,
            le = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("section", { staticClass: "main-app" }, [e.influencerList ? n("influencer-list", { attrs: { influencers: e.influencerList }, on: { setFilterBy: e.loadInfluencers } }) : e._e()], 1)
            },
            ue = [],
            fe = (n("4160"), n("d3b7"), n("3ca3"), n("159b"), n("ddb0"), n("2b3d"), n("bc3a")),
            pe = n.n(fe),
            de = "/api/",
            me = pe.a.create({ withCredentials: !0 }),
            ge = { get: function(e, t) { return he(e, "GET", t) }, post: function(e, t) { return he(e, "POST", t) }, put: function(e, t) { return he(e, "PUT", t) }, delete: function(e, t) { return he(e, "DELETE", t) } };

        function he(e) { return ve.apply(this, arguments) }

        function ve() {
            return ve = Object(O["a"])(regeneratorRuntime.mark((function e(t) {
                var n, r, s, a = arguments;
                return regeneratorRuntime.wrap((function(e) {
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            return n = a.length > 1 && void 0 !== a[1] ? a[1] : "get", r = a.length > 2 && void 0 !== a[2] ? a[2] : null, e.prev = 2, e.next = 5, me({ url: "".concat(de).concat(t), method: n, data: r });
                        case 5:
                            return s = e.sent, e.abrupt("return", s.data);
                        case 9:
                            e.prev = 9, e.t0 = e["catch"](2), 401 === e.t0.response.status && ta.push("/");
                        case 12:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [2, 9]
                ])
            }))), ve.apply(this, arguments)
        }
        var be = { query: we, getById: xe, remove: je, add: Ce, update: Pe };

        function we(e) { return ye.apply(this, arguments) }

        function ye() {
            return ye = Object(O["a"])(regeneratorRuntime.mark((function e(t) {
                var n, r, s;
                return regeneratorRuntime.wrap((function(e) {
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            if (n = new URLSearchParams, t)
                                for (s in r = function(e) { Array.isArray(t[e]) && t[e].forEach((function(t) { n.append(e, t) })), n.append(e, t[e]) }, t) r(s);
                            return e.next = 4, ge.get("influencer?".concat(n));
                        case 4:
                            return e.abrupt("return", e.sent);
                        case 5:
                        case "end":
                            return e.stop()
                    }
                }), e)
            }))), ye.apply(this, arguments)
        }

        function xe(e) { return _e.apply(this, arguments) }

        function _e() {
            return _e = Object(O["a"])(regeneratorRuntime.mark((function e(t) {
                return regeneratorRuntime.wrap((function(e) {
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, ge.get("influencer/".concat(t));
                        case 2:
                            return e.abrupt("return", e.sent);
                        case 3:
                        case "end":
                            return e.stop()
                    }
                }), e)
            }))), _e.apply(this, arguments)
        }

        function je(e) { return ke.apply(this, arguments) }

        function ke() {
            return ke = Object(O["a"])(regeneratorRuntime.mark((function e(t) {
                return regeneratorRuntime.wrap((function(e) {
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, ge.delete("influencer/".concat(t), t);
                        case 2:
                            return e.abrupt("return", e.sent);
                        case 3:
                        case "end":
                            return e.stop()
                    }
                }), e)
            }))), ke.apply(this, arguments)
        }

        function Ce(e) { return Ie.apply(this, arguments) }

        function Ie() {
            return Ie = Object(O["a"])(regeneratorRuntime.mark((function e(t) {
                return regeneratorRuntime.wrap((function(e) {
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, ge.post("influencer", t);
                        case 2:
                            return e.abrupt("return", e.sent);
                        case 3:
                        case "end":
                            return e.stop()
                    }
                }), e)
            }))), Ie.apply(this, arguments)
        }

        function Pe(e) { return Oe.apply(this, arguments) }

        function Oe() {
            return Oe = Object(O["a"])(regeneratorRuntime.mark((function e(t) {
                return regeneratorRuntime.wrap((function(e) {
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, ge.put("influencer/".concat(t._id), t);
                        case 2:
                            return e.abrupt("return", e.sent);
                        case 3:
                        case "end":
                            return e.stop()
                    }
                }), e)
            }))), Oe.apply(this, arguments)
        }
        var $e, Ue = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("section", { staticClass: "list" }, [n("influencer-filter", { on: { setFilterBy: e.setFilterBy } }), e.influencers ? n("div", { staticClass: "influencers-list" }, e._l(e.influencers, (function(e) { return n("influencer-preview", { key: e._id, attrs: { influencer: e } }) })), 1) : e._e()], 1)
            },
            Re = [],
            Ae = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("section", { staticClass: "main-filter-container" }, [n("div", { staticClass: "filter-container" }, [n("simple-filter", { on: { setSimpleFilter: e.setSimpleFilter } }, [n("button", { staticClass: "filter-btn btn", on: { click: e.setFilterBy } }, [e._v("Filter")])])], 1), n("div", { staticClass: "advance-filter-tabs flex space-between" }, [n("div", [n("label", { staticClass: "filter-tab-btn nav-btn", on: { click: function(t) { return t.stopPropagation(), e.onToggle("age") } } }, [e._v("Age")]), n("transition", { attrs: { name: "fade" } }, [e._v(" --\x3e "), n("keep-alive", [n("filter-age", { staticClass: "filter-modal", class: { active: "age" === e.activeFilter }, on: { setAge: e.setAge } })], 1)], 1)], 1), n("div", [n("label", { staticClass: "filter-tab-btn nav-btn", on: { click: function(t) { return t.stopPropagation(), e.onToggle("media") } } }, [e._v("Media Activity")]), n("transition", { attrs: { name: "fade" } }, [n("keep-alive", [n("filter-media-activity", { staticClass: "filter-modal", class: { active: "media" === e.activeFilter }, on: { setMediaActivity: e.setMediaActivity } })], 1)], 1)], 1), n("div", [n("label", { staticClass: "filter-tab-btn nav-btn", on: { click: function(t) { return t.stopPropagation(), e.onToggle("price") } } }, [e._v("Price")]), n("transition", { attrs: { name: "fade" } }, [n("keep-alive", [n("filter-price", { staticClass: "filter-modal", class: { active: "price" === e.activeFilter }, on: { setPrice: e.setPrice } })], 1)], 1)], 1), n("div", [n("label", { staticClass: "filter-tab-btn nav-btn", on: { click: function(t) { return t.stopPropagation(), e.onToggle("tags") } } }, [e._v("Tags")]), n("transition", { attrs: { name: "fade" } }, [n("keep-alive", [n("filter-tags", { staticClass: "filter-modal", class: { active: "tags" === e.activeFilter }, on: { setTags: e.setTags } })], 1)], 1)], 1), n("div", [n("label", { staticClass: "filter-tab-btn nav-btn", on: { click: function(t) { return t.stopPropagation(), e.onToggle("followers") } } }, [e._v("Followers")]), n("transition", { attrs: { name: "fade" } }, [n("keep-alive", [n("filter-followers", { staticClass: "filter-modal", class: { active: "followers" === e.activeFilter }, on: { setFollowers: e.setFollowers } })], 1)], 1)], 1)])])
            },
            Fe = [],
            Se = (n("b0c0"), function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", { staticClass: "filter-container-simple flex space-between" }, [n("filter-name", { staticClass: "filter-name", on: { setName: e.setName } }), n("div", { staticClass: "border-line" }), n("filter-gender", { on: { setGender: e.setGender } }), n("div", { staticClass: "border-line border-2" }), n("filter-socials", { on: { setTypes: e.setTypes } }), e._t("default")], 2)
            }),
            Ne = [],
            Ee = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", { staticClass: "filterBy-name flex align-center" }, [n("label", [e._v("Name")]), n("input", { directives: [{ name: "model", rawName: "v-model", value: e.name, expression: "name" }], staticClass: "filter-name-input", attrs: { type: "text", placeholder: "Who's Your Influencer?" }, domProps: { value: e.name }, on: { input: function(t) { t.target.composing || (e.name = t.target.value) } } })])
            },
            Te = [],
            Be = { name: "filter-gender", data: function() { return { name: null } }, watch: { name: function() { this.$emit("setName", this.name) } } },
            Le = Be,
            Me = Object(u["a"])(Le, Ee, Te, !1, null, null, null),
            De = Me.exports,
            ze = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", { staticClass: "select-btns gender-radio-btn flex align-center" }, [n("label", { staticClass: "radio-container radio-all" }, [n("input", { directives: [{ name: "model", rawName: "v-model", value: e.gender, expression: "gender" }], attrs: { type: "radio", value: "All" }, domProps: { checked: e._q(e.gender, "All") }, on: { change: function(t) { e.gender = "All" } } }), n("span", { staticClass: "checkmark" }, [e._v("All")])]), n("label", { staticClass: "radio-container radio-male" }, [n("input", { directives: [{ name: "model", rawName: "v-model", value: e.gender, expression: "gender" }], attrs: { type: "radio", value: "Male" }, domProps: { checked: e._q(e.gender, "Male") }, on: { change: function(t) { e.gender = "Male" } } }), n("span", { staticClass: "checkmark fa fa-mars" })]), n("label", { staticClass: "radio-container radio-female" }, [n("input", { directives: [{ name: "model", rawName: "v-model", value: e.gender, expression: "gender" }], attrs: { type: "radio", value: "Female" }, domProps: { checked: e._q(e.gender, "Female") }, on: { change: function(t) { e.gender = "Female" } } }), n("span", { staticClass: "checkmark fa fa-venus" })])])
            },
            Ge = [],
            qe = { name: "filter-gender", data: function() { return { gender: "All" } }, watch: { gender: function() { this.$emit("setGender", this.gender) } } },
            Je = qe,
            He = Object(u["a"])(Je, ze, Ge, !1, null, null, null),
            Ke = He.exports,
            Qe = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", { staticClass: "select-btns social-checkbox-btn flex align-center" }, [n("label", { staticClass: "checkbox-container checkbox-facebook" }, [n("input", {
                    directives: [{ name: "model", rawName: "v-model", value: e.types, expression: "types" }],
                    attrs: { type: "checkbox", value: "facebook" },
                    domProps: { checked: Array.isArray(e.types) ? e._i(e.types, "facebook") > -1 : e.types },
                    on: {
                        change: function(t) {
                            var n = e.types,
                                r = t.target,
                                s = !!r.checked;
                            if (Array.isArray(n)) {
                                var a = "facebook",
                                    i = e._i(n, a);
                                r.checked ? i < 0 && (e.types = n.concat([a])) : i > -1 && (e.types = n.slice(0, i).concat(n.slice(i + 1)))
                            } else e.types = s
                        }
                    }
                }), n("span", { staticClass: "checkmark fa fa-facebook" })]), n("label", { staticClass: "checkbox-container checkbox-instagram" }, [n("input", {
                    directives: [{ name: "model", rawName: "v-model", value: e.types, expression: "types" }],
                    attrs: { type: "checkbox", value: "instagram" },
                    domProps: { checked: Array.isArray(e.types) ? e._i(e.types, "instagram") > -1 : e.types },
                    on: {
                        change: function(t) {
                            var n = e.types,
                                r = t.target,
                                s = !!r.checked;
                            if (Array.isArray(n)) {
                                var a = "instagram",
                                    i = e._i(n, a);
                                r.checked ? i < 0 && (e.types = n.concat([a])) : i > -1 && (e.types = n.slice(0, i).concat(n.slice(i + 1)))
                            } else e.types = s
                        }
                    }
                }), n("span", { staticClass: "checkmark fa fa-instagram" })]), n("label", { staticClass: "checkbox-container checkbox-snapchat" }, [n("input", {
                    directives: [{ name: "model", rawName: "v-model", value: e.types, expression: "types" }],
                    attrs: { type: "checkbox", value: "snapchat" },
                    domProps: { checked: Array.isArray(e.types) ? e._i(e.types, "snapchat") > -1 : e.types },
                    on: {
                        change: function(t) {
                            var n = e.types,
                                r = t.target,
                                s = !!r.checked;
                            if (Array.isArray(n)) {
                                var a = "snapchat",
                                    i = e._i(n, a);
                                r.checked ? i < 0 && (e.types = n.concat([a])) : i > -1 && (e.types = n.slice(0, i).concat(n.slice(i + 1)))
                            } else e.types = s
                        }
                    }
                }), n("span", { staticClass: "checkmark fa fa-snapchat" })]), n("label", { staticClass: "checkbox-container checkbox-tiktok" }, [n("input", {
                    directives: [{ name: "model", rawName: "v-model", value: e.types, expression: "types " }],
                    attrs: { type: "checkbox", value: "tiktok" },
                    domProps: { checked: Array.isArray(e.types) ? e._i(e.types, "tiktok") > -1 : e.types },
                    on: {
                        change: function(t) {
                            var n = e.types,
                                r = t.target,
                                s = !!r.checked;
                            if (Array.isArray(n)) {
                                var a = "tiktok",
                                    i = e._i(n, a);
                                r.checked ? i < 0 && (e.types = n.concat([a])) : i > -1 && (e.types = n.slice(0, i).concat(n.slice(i + 1)))
                            } else e.types = s
                        }
                    }
                }), e._m(0)])])
            },
            We = [function() {
                var e = this,
                    t = e.$createElement,
                    r = e._self._c || t;
                return r("span", { staticClass: "checkmark" }, [r("img", { staticClass: "tiktok-icon", attrs: { src: n("aa0c") } })])
            }],
            Ve = { name: "filter-socials", data: function() { return { types: [] } }, watch: { types: { deep: !0, handler: function() { console.log("!!!"), this.$emit("setTypes", this.types) } } } },
            Ye = Ve,
            Xe = Object(u["a"])(Ye, Qe, We, !1, null, null, null),
            Ze = Xe.exports,
            et = { data: function() { return { simpleFilter: { name: "", gender: "All", types: [] } } }, methods: { setName: function(e) { this.simpleFilter.name = e }, setGender: function(e) { this.simpleFilter.gender = e }, setTypes: function(e) { this.simpleFilter.types = e } }, watch: { simpleFilter: { deep: !0, handler: function() { this.$emit("setSimpleFilter", this.simpleFilter) } } }, components: { filterName: De, filterGender: Ke, filterSocials: Ze } },
            tt = et,
            nt = Object(u["a"])(tt, Se, Ne, !1, null, null, null),
            rt = nt.exports,
            st = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("section", { staticClass: "filter-influencer-age" }, [n("label", [e._v("Influencer's Age Range")]), n("div", { staticClass: "followers-silder filter-by-age" }, [n("el-slider", { attrs: { range: "", "show-stops": "", marks: e.marks, step: 5, min: 15, max: 50 }, model: { value: e.age, callback: function(t) { e.age = t }, expression: "age" } })], 1)])
            },
            at = [],
            it = { name: "filter-age", data: function() { return { age: [15, 50], marks: { 15: "15", 20: "20", 25: "25", 30: "30", 35: "35", 40: "40", 45: "45", 50: "50" } } }, watch: { age: { deep: !0, handler: function() { this.$emit("setAge", this.age) } } }, created: function() { this.$emit("closeAllOthers") } },
            ot = it,
            ct = Object(u["a"])(ot, st, at, !1, null, null, null),
            lt = ct.exports,
            ut = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", { staticClass: " filter-tags-container tags-choises select-btns" }, e._l(e.tagsByName, (function(t, r) {
                    return n("label", { key: r, staticClass: "checkbox-container" }, [n("input", {
                        directives: [{ name: "model", rawName: "v-model", value: e.selectedTags, expression: "selectedTags" }],
                        attrs: { type: "checkbox" },
                        domProps: { value: t, checked: Array.isArray(e.selectedTags) ? e._i(e.selectedTags, t) > -1 : e.selectedTags },
                        on: {
                            change: function(n) {
                                var r = e.selectedTags,
                                    s = n.target,
                                    a = !!s.checked;
                                if (Array.isArray(r)) {
                                    var i = t,
                                        o = e._i(r, i);
                                    s.checked ? o < 0 && (e.selectedTags = r.concat([i])) : o > -1 && (e.selectedTags = r.slice(0, o).concat(r.slice(o + 1)))
                                } else e.selectedTags = a
                            }
                        }
                    }), n("span", { staticClass: "checkmark" }, [e._v(e._s(t))])])
                })), 0)
            },
            ft = [],
            pt = { data: function() { return { selectedTags: [], tags: ["Books", "Garden", "Sports", "Industrial", "Health", "Music", "Movies", "Automotive", "Computers", "Electronics", "Grocery", "Kids", "Jewelery", "Baby", "Clothing", "Beauty", "Shoes", "Tools", "Home", "Animals", "Games", "Toys", "Outdoors", "Traveling", "Cooking"] } }, computed: { tagsByName: function() { return JSON.parse(JSON.stringify(this.tags)).sort() } }, watch: { selectedTags: function() { this.$emit("setTags", this.selectedTags) } } },
            dt = pt,
            mt = Object(u["a"])(dt, ut, ft, !1, null, null, null),
            gt = mt.exports,
            ht = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", { staticClass: "filter-followers-container" }, [n("filter-followers-count", { on: { setFollowersCount: e.setFollowersCount } }), n("filter-followers-percentage", { on: { setFollowersPercentage: e.setFollowersPercentage } }), n("filter-followers-age", { on: { setFollowersAge: e.setFollowersAge } })], 1)
            },
            vt = [],
            bt = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", { staticClass: "followers-count-conatiner" }, [n("label", [e._v("Amount")]), n("div", { staticClass: "followers-count flex space-between align-center" }, [n("label", [e._v("50K")]), n("div", { staticClass: "followers-count-slider" }, [n("el-slider", { attrs: { "format-tooltip": e.localeString, range: "", label: "Followers", steps: 100, min: 5e4, max: 5e5 }, model: { value: e.followersCount, callback: function(t) { e.followersCount = t }, expression: "followersCount" } })], 1), n("label", [e._v("500K")])])])
            },
            wt = [],
            yt = { name: "filter-followers-count", data: function() { return { followersCount: null } }, methods: { localeString: function(e) { if (e) return e.toLocaleString("en-US") } }, watch: { followersCount: { deep: !0, handler: function() { this.$emit("setFollowersCount", this.followersCount) } } } },
            xt = yt,
            _t = Object(u["a"])(xt, bt, wt, !1, null, null, null),
            jt = _t.exports,
            kt = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("section", { staticClass: "men-followers-percentage-container" }, [n("label", [e._v("Followers Gender")]), n("div", { staticClass: "men-followers-percentage flex space-between align-center" }, [n("label", { staticClass: "fa fa-mars" }), n("div", { staticClass: "men-followers-percentage-silder" }, [n("el-slider", { attrs: { "format-tooltip": e.showMenPercentage }, model: { value: e.menFollowersPercentage, callback: function(t) { e.menFollowersPercentage = t }, expression: "menFollowersPercentage" } })], 1), n("label", { staticClass: "fa fa-venus" })])])
            },
            Ct = [],
            It = { name: "filter-followers-percentage", data: function() { return { menFollowersPercentage: 0 } }, methods: { showMenPercentage: function(e) { return e + "%   " } }, watch: { menFollowersPercentage: function() { this.$emit("setFollowersPercentage", this.menFollowersPercentage) } } },
            Pt = It,
            Ot = Object(u["a"])(Pt, kt, Ct, !1, null, null, null),
            $t = Ot.exports,
            Ut = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", { staticClass: "filter-followers-age-container followers-silder select-age-range" }, [n("label", [e._v("Average Age")]), n("div", { staticClass: "followers-age-slider" }, [n("el-slider", { attrs: { range: "", "show-stops": "", marks: e.marks, step: 5, min: 15, max: 50 }, model: { value: e.followersAvgAge, callback: function(t) { e.followersAvgAge = t }, expression: "followersAvgAge" } })], 1)])
            },
            Rt = [],
            At = { name: "filter-followers-age", data: function() { return { followersAvgAge: null, age: [15, 50], marks: { 15: "15", 20: "20", 25: "25", 30: "30", 35: "35", 40: "40", 45: "45", 50: "50" } } }, watch: { followersAvgAge: function() { this.$emit("setFollowersAge", this.followersAvgAge) } } },
            Ft = At,
            St = Object(u["a"])(Ft, Ut, Rt, !1, null, null, null),
            Nt = St.exports,
            Et = { data: function() { return { socials: { followersCount: [], menFollowersPercentage: null, followersAvgAge: [] } } }, methods: { setFollowersCount: function(e) { this.socials.followersCount = e }, setFollowersPercentage: function(e) { this.socials.menFollowersPercentage = e }, setFollowersAge: function(e) { this.socials.followersAvgAge = e } }, watch: { socials: { deep: !0, handler: function() { this.$emit("setFollowers", this.socials) } } }, components: { filterFollowersCount: jt, filterFollowersPercentage: $t, filterFollowersAge: Nt } },
            Tt = Et,
            Bt = Object(u["a"])(Tt, ht, vt, !1, null, null, null),
            Lt = Bt.exports,
            Mt = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", { staticClass: "filter-price-container flex space-around align-center" }, [n("div", { staticClass: "min-price flex column" }, [n("label", [e._v("Min.")]), n("input", { directives: [{ name: "model", rawName: "v-model", value: e.price.min, expression: "price.min" }], staticClass: "filter-price", attrs: { type: "number", placeholder: "$" }, domProps: { value: e.price.min }, on: { input: function(t) { t.target.composing || e.$set(e.price, "min", t.target.value) } } })]), n("div", { staticClass: "max-price flex column align-start" }, [n("label", [e._v("Max.")]), n("input", { directives: [{ name: "model", rawName: "v-model", value: e.price.max, expression: "price.max" }], staticClass: "filter-price", attrs: { type: "number", placeholder: "$" }, domProps: { value: e.price.max }, on: { input: function(t) { t.target.composing || e.$set(e.price, "max", t.target.value) } } })])])
            },
            Dt = [],
            zt = { name: "filter-price", data: function() { return { price: { min: null, max: null } } }, watch: { price: { deep: !0, handler: function() { this.$emit("setPrice", this.price) } } } },
            Gt = zt,
            qt = Object(u["a"])(Gt, Mt, Dt, !1, null, null, null),
            Jt = qt.exports,
            Ht = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", { staticClass: "filter-media-activity flex space-around" }, [n("div", { staticClass: "filter-posts flex column align-start" }, [n("label", [e._v("Posts")]), n("input", { directives: [{ name: "model", rawName: "v-model", value: e.mediaActivity.posts, expression: "mediaActivity.posts" }], staticClass: "media-activity", attrs: { type: "number", placeholder: "Minimum Number of Posts" }, domProps: { value: e.mediaActivity.posts }, on: { input: function(t) { t.target.composing || e.$set(e.mediaActivity, "posts", t.target.value) } } })]), n("div", { staticClass: "filter-stories flex column align-start" }, [n("label", [e._v("Stories")]), n("input", { directives: [{ name: "model", rawName: "v-model", value: e.mediaActivity.stories, expression: "mediaActivity.stories" }], staticClass: "media-activity", attrs: { type: "number", placeholder: "Minimum Number of Stories" }, domProps: { value: e.mediaActivity.stories }, on: { input: function(t) { t.target.composing || e.$set(e.mediaActivity, "stories", t.target.value) } } })])])
            },
            Kt = [],
            Qt = { data: function() { return { mediaActivity: {} } }, watch: { mediaActivity: { deep: !0, handler: function() { this.$emit("setMediaActivity", this.mediaActivity) } } } },
            Wt = Qt,
            Vt = Object(u["a"])(Wt, Ht, Kt, !1, null, null, null),
            Yt = Vt.exports,
            Xt = {
                data: function() { return { activeFilter: null, filterBy: { age: [], socials: { posts: null, stories: null, types: [] } } } },
                methods: {
                    setSimpleFilter: function(e) {
                        var t = e.name,
                            n = e.gender,
                            r = e.types;
                        this.filterBy.name = t, this.filterBy.gender = n, this.filterBy.socials.types = r
                    },
                    setFollowers: function(e) {
                        var t = e.followersCount,
                            n = e.menFollowersPercentage,
                            r = e.followersAvgAge;
                        this.filterBy.socials.followersCount = t, this.filterBy.socials.menFollowersPercentage = n, this.filterBy.socials.sociafollowersAvgAgels = r
                    },
                    setAge: function(e) { this.filterBy.age = e },
                    setTags: function(e) { this.filterBy.tags = e },
                    setPrice: function(e) { this.filterBy.price = e },
                    setMediaActivity: function(e) {
                        var t = e.posts,
                            n = e.stories;
                        this.filterBy.socials.posts = t, this.filterBy.socials.stories = n
                    },
                    setFilterBy: function(e) { this.$emit("setFilterBy", this.filterBy), this.activeFilter = null },
                    onToggle: function(e) { this.activeFilter === e ? this.activeFilter = null : this.activeFilter = e }
                },
                components: { simpleFilter: rt, filterAge: lt, filterTags: gt, filterFollowers: Lt, filterPrice: Jt, filterMediaActivity: Yt }
            },
            Zt = Xt,
            en = Object(u["a"])(Zt, Ae, Fe, !1, null, null, null),
            tn = en.exports,
            nn = { name: "influencer-list", props: { influencers: Array }, methods: { setFilterBy: function(e) { this.$emit("setFilterBy", e) } }, components: { influencerPreview: se, influencerFilter: tn } },
            rn = nn,
            sn = Object(u["a"])(rn, Ue, Re, !1, null, null, null),
            an = sn.exports,
            on = {
                name: "main-app",
                data: function() { return { loggedInUser: null, influencerList: null } },
                created: function() {
                    var e = this;
                    return Object(O["a"])(regeneratorRuntime.mark((function t() {
                        return regeneratorRuntime.wrap((function(t) {
                            while (1) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, e.getLoggetInUser();
                                case 2:
                                    return t.next = 4, e.loadInfluencers();
                                case 4:
                                    return t.next = 6, e.loadBrands();
                                case 6:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })))()
                },
                methods: {
                    loadBrands: function() {
                        var e = this;
                        return Object(O["a"])(regeneratorRuntime.mark((function t() {
                            return regeneratorRuntime.wrap((function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, e.$store.dispatch({ type: "loadBrands" });
                                    case 2:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    },
                    loadInfluencers: function(e) {
                        var t = this;
                        return Object(O["a"])(regeneratorRuntime.mark((function n() {
                            return regeneratorRuntime.wrap((function(n) {
                                while (1) switch (n.prev = n.next) {
                                    case 0:
                                        return n.next = 2, t.$store.dispatch({ type: "loadInfluencers", filterBy: e });
                                    case 2:
                                        t.influencerList = t.$store.getters.influencers;
                                    case 3:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })))()
                    },
                    getLoggetInUser: function() {
                        var e = this;
                        return Object(O["a"])(regeneratorRuntime.mark((function t() {
                            return regeneratorRuntime.wrap((function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        if (e.loggedInUser = e.$store.getters.loggedInUser, e.loggedInUser) { t.next = 5; break }
                                        return t.next = 4, e.$store.dispatch("getLoggedInUser");
                                    case 4:
                                        e.loggedInUser = t.sent;
                                    case 5:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    }
                },
                components: { influencerList: an }
            },
            cn = on,
            ln = Object(u["a"])(cn, le, ue, !1, null, null, null),
            un = ln.exports,
            fn = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("section", [e.credentials.userType ? n("span", [e._v("Login as " + e._s(e.credentials.userType))]) : e._e(), e.credentials.userType ? n("form", { staticClass: "login-page-form flex column", on: { submit: function(t) { return t.preventDefault(), e.login(t) } } }, [n("label", [e._v(" username: "), n("input", { directives: [{ name: "model", rawName: "v-model", value: e.credentials.username, expression: "credentials.username" }], attrs: { type: "text", placeholder: "username" }, domProps: { value: e.credentials.username }, on: { input: function(t) { t.target.composing || e.$set(e.credentials, "username", t.target.value) } } })]), n("label", [e._v(" password: "), n("input", { directives: [{ name: "model", rawName: "v-model", value: e.credentials.password, expression: "credentials.password" }], attrs: { type: "password", placeholder: "password" }, domProps: { value: e.credentials.password }, on: { input: function(t) { t.target.composing || e.$set(e.credentials, "password", t.target.value) } } })]), n("button", { staticClass: "btn", attrs: { type: "submit" } }, [e._v("Sign In")])]) : e._e()])
            },
            pn = [],
            dn = n("f6ed"),
            mn = n.n(dn),
            gn = "loggedInUser";

        function hn(e) { return vn.apply(this, arguments) }

        function vn() {
            return vn = Object(O["a"])(regeneratorRuntime.mark((function e(t) {
                return regeneratorRuntime.wrap((function(e) {
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, ge.post("auth/signup", t.credentials);
                        case 2:
                            return t = e.sent, $e = t, mn.a.store(gn, $e), e.abrupt("return", $e);
                        case 6:
                        case "end":
                            return e.stop()
                    }
                }), e)
            }))), vn.apply(this, arguments)
        }

        function bn(e) { return wn.apply(this, arguments) }

        function wn() {
            return wn = Object(O["a"])(regeneratorRuntime.mark((function e(t) {
                var n;
                return regeneratorRuntime.wrap((function(e) {
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            return e.prev = 0, e.next = 3, ge.post("auth/login", t);
                        case 3:
                            return n = e.sent, $e = n, e.abrupt("return", $e);
                        case 8:
                            if (e.prev = 8, e.t0 = e["catch"](0), user) { e.next = 14; break }
                            throw new Error("wrong login details");
                        case 14:
                            if (user.credentials.password === password) { e.next = 16; break }
                            throw new Error("wrong login pasword details");
                        case 16:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [0, 8]
                ])
            }))), wn.apply(this, arguments)
        }

        function yn() { return xn.apply(this, arguments) }

        function xn() {
            return xn = Object(O["a"])(regeneratorRuntime.mark((function e() {
                return regeneratorRuntime.wrap((function(e) {
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, ge.post("auth/logout");
                        case 2:
                            $e = null, mn.a.clear();
                        case 4:
                        case "end":
                            return e.stop()
                    }
                }), e)
            }))), xn.apply(this, arguments)
        }

        function _n(e) { return jn.apply(this, arguments) }

        function jn() {
            return jn = Object(O["a"])(regeneratorRuntime.mark((function e(t) {
                return regeneratorRuntime.wrap((function(e) {
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            return e.abrupt("return", ge.put("user/".concat(t._id), t));
                        case 1:
                        case "end":
                            return e.stop()
                    }
                }), e)
            }))), jn.apply(this, arguments)
        }

        function kn(e) { return Cn.apply(this, arguments) }

        function Cn() {
            return Cn = Object(O["a"])(regeneratorRuntime.mark((function e(t) {
                return regeneratorRuntime.wrap((function(e) {
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            return e.abrupt("return", ge.delete("user/".concat(userId)));
                        case 1:
                        case "end":
                            return e.stop()
                    }
                }), e)
            }))), Cn.apply(this, arguments)
        }

        function In() { return Pn.apply(this, arguments) }

        function Pn() {
            return Pn = Object(O["a"])(regeneratorRuntime.mark((function e() {
                return regeneratorRuntime.wrap((function(e) {
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            return $e || ($e = mn.a.load(gn)), e.abrupt("return", $e);
                        case 2:
                        case "end":
                            return e.stop()
                    }
                }), e)
            }))), Pn.apply(this, arguments)
        }
        var On = { signUp: hn, login: bn, logout: yn, getLoggedInUser: In, update: _n, remove: kn },
            $n = {
                name: "login-page",
                data: function() { return { credentials: { userType: "brand", username: null, password: null } } },
                methods: {
                    login: function() {
                        var e = this;
                        return Object(O["a"])(regeneratorRuntime.mark((function t() {
                            return regeneratorRuntime.wrap((function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return t.prev = 0, t.next = 3, e.$store.dispatch({ type: "login", credentials: e.credentials });
                                    case 3:
                                        t.sent, e.$router.push("/app"), t.next = 11;
                                        break;
                                    case 7:
                                        t.prev = 7, t.t0 = t["catch"](0), console.log("wrong login detials"), console.log("ERROR = ", t.t0);
                                    case 11:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, null, [
                                [0, 7]
                            ])
                        })))()
                    }
                }
            },
            Un = $n,
            Rn = Object(u["a"])(Un, fn, pn, !1, null, null, null),
            An = Rn.exports,
            Fn = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("section", { staticClass: "backoffice-page-container" }, [n("dash-board", { attrs: { user: e.loggedInUser } }), n("div", { staticClass: "backoffice-navbar" }, [n("button", { staticClass: "btn", on: { click: function(t) { return e.toggle("offer") } } }, [e._v("offers")]), n("button", { staticClass: "btn", on: { click: function(t) { return e.toggle("message") } } }, [e._v("messeges")]), e.offerShow ? n("offer-list", { attrs: { user: this.loggedInUser } }) : e._e(), e.messageShow ? n("message-list", { attrs: { user: e.loggedInUser } }) : e._e()], 1), n("router-view")], 1)
            },
            Sn = [],
            Nn = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return e.loggedInUser ? n("section", { staticClass: "dashboard" }, [this.loggedInUser ? n("div", { staticClass: "dashboard-image-container" }, [n("img", { staticClass: "dash-avatar", attrs: { src: this.loggedInUser.profilePhoto.regular, alt: "dash-avatar" } })]) : e._e(), e.loggedInUser ? n("div", { staticClass: "dashboard-socials-info" }, [n("h1", [e._v(e._s(this.fullName))]), e._l(e.loggedInUser.socials, (function(t, r) { return n("ul", { key: r, staticClass: "clean-list" }, [n("li", [n("span", [e._v(e._s(t.type) + " followers:")]), e._v(" " + e._s(t.menFollowers + t.womenFollowers) + " ")])]) })), n("div", { staticClass: "dash-stats" }, [n("ul", { staticClass: "clean-list tags" }, e._l(e.loggedInUser.tags, (function(t, r) { return n("li", { key: r, staticClass: "influencer-tag" }, [e._v(e._s(t))]) })), 0)])], 2) : e._e()]) : e._e()
            },
            En = [],
            Tn = {
                name: "dash-board",
                data: function() { return { loggedInUser: null } },
                created: function() { this.getLoggetInUser() },
                computed: { fullName: function() { return this.loggedInUser.firstName + " " + this.loggedInUser.lastName }, dateOfBirth: function() { return this.loggedInUser.dateOfBirth }, socials: function() { return this.loggedInUser.socials }, email: function() { return this.loggedInUser.email }, gender: function() { return this.loggedInUser.gender } },
                methods: {
                    getLoggetInUser: function() {
                        var e = this;
                        return Object(O["a"])(regeneratorRuntime.mark((function t() {
                            return regeneratorRuntime.wrap((function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        if (e.loggedInUser = e.$store.getters.loggedInUser, e.loggedInUser) { t.next = 5; break }
                                        return t.next = 4, e.$store.dispatch("getLoggedInUser");
                                    case 4:
                                        e.loggedInUser = t.sent;
                                    case 5:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    }
                },
                components: {}
            },
            Bn = Tn,
            Ln = Object(u["a"])(Bn, Nn, En, !1, null, null, null),
            Mn = Ln.exports,
            Dn = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return e.offers ? n("section", { staticClass: "offer-list-container" }, [e.offers ? e._e() : n("h2", [e._v("No offers so far")]), e._m(0), e._l(e.offers, (function(e) { return n("offer-preview", { key: e._id, attrs: { offer: e } }) }))], 2) : e._e()
            },
            zn = [function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", { staticClass: "offers-topbar" }, [n("span", { staticClass: "offer-list-title" }, [e._v("Product")]), n("span", { staticClass: "offer-list-title" }, [e._v("Dates")]), n("span", { staticClass: "offer-list-title" }, [e._v("Status")])])
            }],
            Gn = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("section", { staticClass: "offer-preview-container" }, [n("div", { staticClass: "offers-preview" }, [n("div", { staticClass: "offer-status-container" }, [n("label", { staticClass: "offer-status", class: { selected: e.pending } }, [e._v(" Pending "), n("input", { attrs: { name: "state", type: "radio", value: "pending" } })]), n("label", { staticClass: "offer-status", class: { selected: e.inProgress } }, [e._v(" In progress "), n("input", { attrs: { name: "state", type: "radio", value: "In progress" } })]), n("label", { staticClass: "offer-status", class: { selected: e.completed } }, [e._v(" Completed "), n("input", { attrs: { name: "state", type: "radio", value: "completed" } })])])])])
            },
            qn = [],
            Jn = { props: ["offer"], data: function() { return { inProgress: !1, pending: !1, completed: !1 } }, created: function() { this.setStatus(this.offer.status) }, methods: { setStatus: function(e) { "in progress" === e ? (this.inProgress = !this.inProgress, this.pending = !1, this.completed = !1) : "pending" == e ? (this.pending = !this.pending, this.completed = !1, this.inProgress = !1) : "completed" === e && (this.completed = !this.completed, this.pending = !1, this.inProgress = !1) } } },
            Hn = Jn,
            Kn = Object(u["a"])(Hn, Gn, qn, !1, null, null, null),
            Qn = Kn.exports;
        n("3e8f");

        function Wn() { return Vn.apply(this, arguments) }

        function Vn() {
            return Vn = Object(O["a"])(regeneratorRuntime.mark((function e() {
                var t, n, r = arguments;
                return regeneratorRuntime.wrap((function(e) {
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            return t = r.length > 0 && void 0 !== r[0] ? r[0] : {}, n = new URLSearchParams, n.append(t._id), e.next = 5, ge.get("offer?".concat(n));
                        case 5:
                            return e.abrupt("return", e.sent);
                        case 6:
                        case "end":
                            return e.stop()
                    }
                }), e)
            }))), Vn.apply(this, arguments)
        }

        function Yn(e) { return Xn.apply(this, arguments) }

        function Xn() {
            return Xn = Object(O["a"])(regeneratorRuntime.mark((function e(t) {
                return regeneratorRuntime.wrap((function(e) {
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, ge.get("offer/".concat(t));
                        case 2:
                            return e.abrupt("return", e.sent);
                        case 3:
                        case "end":
                            return e.stop()
                    }
                }), e)
            }))), Xn.apply(this, arguments)
        }

        function Zn(e) { return er.apply(this, arguments) }

        function er() {
            return er = Object(O["a"])(regeneratorRuntime.mark((function e(t) {
                return regeneratorRuntime.wrap((function(e) {
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, ge.delete("offer/".concat(t), t);
                        case 2:
                            return e.abrupt("return", e.sent);
                        case 3:
                        case "end":
                            return e.stop()
                    }
                }), e)
            }))), er.apply(this, arguments)
        }

        function tr(e) { return nr.apply(this, arguments) }

        function nr() {
            return nr = Object(O["a"])(regeneratorRuntime.mark((function e(t) {
                var n;
                return regeneratorRuntime.wrap((function(e) {
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, ar(t);
                        case 2:
                            return n = e.sent, e.next = 5, ge.post("offer", n);
                        case 5:
                            return e.abrupt("return", n);
                        case 6:
                        case "end":
                            return e.stop()
                    }
                }), e)
            }))), nr.apply(this, arguments)
        }

        function rr(e) { return sr.apply(this, arguments) }

        function sr() {
            return sr = Object(O["a"])(regeneratorRuntime.mark((function e(t) {
                var n;
                return regeneratorRuntime.wrap((function(e) {
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            return n = t.offerData, e.next = 3, ge.put("offer/".concat(offer._id), n);
                        case 3:
                            return e.abrupt("return", e.sent);
                        case 4:
                        case "end":
                            return e.stop()
                    }
                }), e)
            }))), sr.apply(this, arguments)
        }

        function ar(e) {
            var t = e.influencer,
                n = e.brand,
                r = { status: "pending", miniInfluencer: { id: t._id, firstName: t.firstName, lastName: t.lastName }, miniBrand: { id: n._id, name: n.name }, createdAt: Date.now() };
            return r
        }
        var ir, or = { query: Wn, getById: Yn, remove: Zn, add: tr, update: rr },
            cr = {
                name: "offer-list",
                props: { user: Object },
                data: function() { return { loggedInUser: null, offers: null } },
                created: function() {
                    var e = this;
                    return Object(O["a"])(regeneratorRuntime.mark((function t() {
                        return regeneratorRuntime.wrap((function(t) {
                            while (1) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, e.getLoggetInUser();
                                case 2:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })))()
                },
                methods: {
                    loadOffers: function(e) {
                        var t = this;
                        return Object(O["a"])(regeneratorRuntime.mark((function n() {
                            var r;
                            return regeneratorRuntime.wrap((function(n) {
                                while (1) switch (n.prev = n.next) {
                                    case 0:
                                        return n.next = 2, t.$store.dispatch("loadOffers", { influencerId: e });
                                    case 2:
                                        r = n.sent, t.offers = r;
                                    case 4:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })))()
                    },
                    getLoggetInUser: function() {
                        var e = this;
                        return Object(O["a"])(regeneratorRuntime.mark((function t() {
                            return regeneratorRuntime.wrap((function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        if (e.loggedInUser = e.$store.getters.loggedInUser, e.loggedInUser) { t.next = 5; break }
                                        return t.next = 4, e.$store.dispatch("getLoggedInUser");
                                    case 4:
                                        e.loggedInUser = t.sent;
                                    case 5:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    }
                },
                components: { offerPreview: Qn }
            },
            lr = cr,
            ur = (n("59fd"), Object(u["a"])(lr, Dn, zn, !1, null, null, null)),
            fr = ur.exports,
            pr = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("section", { staticClass: "message-container" }, [n("ul", { staticClass: "message-list clean-list" }, e._l(e.messages, (function(e, t) { return n("li", { key: t, staticClass: "message-preview-container" }, [n("message-preview", { attrs: { message: e } })], 1) })), 0)])
            },
            dr = [],
            mr = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("section", { staticClass: "message-preview" }, [n("pre", [e._v(e._s(e.message))])])
            },
            gr = [],
            hr = { props: ["message"], data: function() { return { elPreview: null } }, created: function() {} },
            vr = hr,
            br = Object(u["a"])(vr, mr, gr, !1, null, null, null),
            wr = br.exports,
            yr = n("8055"),
            xr = n.n(yr),
            _r = "/",
            jr = { setup: kr, terminate: Cr, on: Ir, off: Pr, emit: Or };

        function kr() { ir = xr()(_r) }

        function Cr() { ir = null }

        function Ir(e, t) { ir.on(e, t) }

        function Pr(e, t) { ir.off(e, t) }

        function Or(e, t) { ir.emit(e, t) }
        var $r = {
                props: ["user"],
                components: { messagePreview: wr },
                data: function() { return { messagesForDisplay: [], clickedMessage: null, loggedInUser: null } },
                created: function() {
                    var e = this;
                    jr.setup(), jr.emit("GET_USER_MESSAGES", this.user._id), jr.on("USER_MESSAGES", (function(t) { e.messagesForDisplay = JSON.parse(JSON.stringify(t)) }))
                },
                computed: { messages: function() { return this.messagesForDisplay } },
                methods: {
                    getInfluencerById: function() {
                        var e = this;
                        return Object(O["a"])(regeneratorRuntime.mark((function t() {
                            var n;
                            return regeneratorRuntime.wrap((function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, e.$store.dispatch({ type: "getInfluencerById", influencerId: e.influencerId });
                                    case 2:
                                        n = t.sent, e.currInfluencer = n;
                                    case 4:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    }
                }
            },
            Ur = $r,
            Rr = Object(u["a"])(Ur, pr, dr, !1, null, null, null),
            Ar = Rr.exports,
            Fr = {
                name: "backoffice-page",
                data: function() { return { loggedInUser: null, offerShow: !1, messageShow: !1 } },
                created: function() {
                    var e = this;
                    return Object(O["a"])(regeneratorRuntime.mark((function t() {
                        return regeneratorRuntime.wrap((function(t) {
                            while (1) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, e.getLoggetInUser();
                                case 2:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })))()
                },
                methods: {
                    getLoggetInUser: function() {
                        var e = this;
                        return Object(O["a"])(regeneratorRuntime.mark((function t() {
                            return regeneratorRuntime.wrap((function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        if (e.loggedInUser = e.$store.getters.loggedInUser, e.loggedInUser) { t.next = 5; break }
                                        return t.next = 4, e.$store.dispatch("getLoggedInUser");
                                    case 4:
                                        e.loggedInUser = t.sent;
                                    case 5:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    },
                    toggle: function(e) { "offer" === e && (this.offerShow = !this.offerShow, this.messageShow = !1), "message" === e && (this.offerShow = !1, this.messageShow = !this.messageShow) }
                },
                computed: { userId: function() { return this.loggedInUser ? this.loggedInUser._id : " " } },
                components: { dashBoard: Mn, offerList: fr, messageList: Ar }
            },
            Sr = Fr,
            Nr = Object(u["a"])(Sr, Fn, Sn, !1, null, null, null),
            Er = Nr.exports,
            Tr = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return e.currInfluencer ? n("section", { staticClass: "influencer-details-container" }, [n("influencer-details-header", { staticClass: "influencer-header", attrs: { fullName: e.fullName, age: e.age } }), n("influencer-photos-carousel", { staticClass: "influencer-photos-carousel", attrs: { photosUrls: e.getInfluencerPhotosUrls() } }), n("influencer-details-socials", { staticClass: "influencer-details-socials", attrs: { socials: e.currInfluencer.socials } }), n("section", { staticClass: "influencer-details-right-side-bar" }, [n("influencer-details-footer", { staticClass: "influencer-details-footer", attrs: { followersInterests: e.currInfluencer.tags, pricePerPost: e.currInfluencer.pricePerPost } }), n("section", { staticClass: "send-offer-container flex justify-center" }, [n("button", { staticClass: "send-offer-btn", on: { click: e.onMakeOffer } }, [e._v("make an offer")])])], 1)], 1) : e._e()
            },
            Br = [],
            Lr = (n("d81d"), n("c1df")),
            Mr = n.n(Lr),
            Dr = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("header", { staticClass: "influencer-details-header-container flex space-between" }, [n("div", { staticClass: "influencer-name" }, [e._v(e._s(e.fullName))]), n("div", { staticClass: "influencer-age", attrs: { title: "Age" } }, [e._v(e._s(e.age))])])
            },
            zr = [],
            Gr = (n("a9e3"), { name: "influencer-details-header", props: { fullName: String, age: Number } }),
            qr = Gr,
            Jr = Object(u["a"])(qr, Dr, zr, !1, null, null, null),
            Hr = Jr.exports,
            Kr = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("section", { staticClass: "ratio-square" }, [e.loadedPhotos.length > 1 ? n("img", { ref: "prev-photo", staticClass: "photo prev-photo", attrs: { src: e.loadedPhotos[this.prevPhotoIndex].src } }) : e._e(), e.loadedPhotos.length > 0 ? n("img", { ref: "curr-photo", staticClass: "photo curr-photo", attrs: { src: e.loadedPhotos[this.currPhotoIndex].src } }) : e._e(), e.loadedPhotos.length > 1 ? n("img", { ref: "next-photo", staticClass: "photo next-photo", attrs: { src: e.loadedPhotos[this.nextPhotoIndex].src } }) : e._e()])
            },
            Qr = [],
            Wr = {
                name: "influencer-photos-carousel",
                props: { photosUrls: Array },
                data: function() { return { loadedPhotos: [], prevPhotoIndex: 0, currPhotoIndex: 0, nextPhotoIndex: 0, playInterval: null, photosDisplayTime: 6e3 } },
                created: function() { this.loadPhotos(), this.playPhotos() },
                methods: {
                    loadPhotos: function() {
                        var e = this;
                        this.photosUrls.map((function(t) { var n = new Image; return n.onload = function() { e.loadedPhotos.push(n) }, n.src = t, n }))
                    },
                    playPhotos: function() {
                        var e = this;
                        this.playInterval = setInterval((function() { e.next() }), this.photosDisplayTime)
                    },
                    next: function() {
                        var e = this;
                        this.$refs["curr-photo"].classList.add("slide-out-left"), this.nextPhotoIndex = this.getUpdateIndex(this.nextPhotoIndex, 1), this.$refs["next-photo"].classList.add("slide-in"), setTimeout((function() { e.prevPhotoIndex = e.currPhotoIndex, e.currPhotoIndex = e.getUpdateIndex(e.currPhotoIndex, 1), e.$refs["curr-photo"].classList.remove("slide-out-left"), e.$refs["next-photo"].classList.remove("slide-in") }), this.photosDisplayTime / 2)
                    },
                    prev: function() {
                        var e = this;
                        this.$refs["curr-photo"].classList.add("slide-out-right"), this.prevPhotoIndex = this.getUpdateIndex(this.prevPhotoIndex, -1), this.$refs["prev-photo"].classList.add("slide-in"), setTimeout((function() { e.nextPhotoIndex = e.currPhotoIndex, e.currPhotoIndex = e.getUpdateIndex(e.currPhotoIndex, -1), e.$refs["curr-photo"].classList.remove("slide-out-right"), e.$refs["prev-photo"].classList.remove("slide-in") }), this.photosDisplayTime / 2)
                    },
                    getUpdateIndex: function(e, t) { return e += t, e >= this.loadedPhotos.length ? e = 0 : e < 0 && (e = this.loadedPhotos.length - 1), e }
                },
                beforeDestroy: function() { clearInterval(this.playInterval) }
            },
            Vr = Wr,
            Yr = Object(u["a"])(Vr, Kr, Qr, !1, null, null, null),
            Xr = Yr.exports,
            Zr = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("section", { staticClass: "influencer-details-footer-container" }, [n("section", { staticClass: "followers-interests-container flex column" }, [e._m(0), n("div", { staticClass: "followers-interests" }, [e._v(e._s(e.interests))])]), n("section", { staticClass: "price-per-post-container flex column align-center space-between" }, [e._m(1), n("div", { staticClass: "price" }, [e._v(e._s(e.price))])])])
            },
            es = [function() {
                var e = this,
                    t = e.$createElement,
                    r = e._self._c || t;
                return r("div", { staticClass: "followers-interests-title-container flex align-center justify-center" }, [r("img", { staticClass: "followers-interests-icon", attrs: { src: n("cfab"), alt: "Followers interests", title: "Followers interests" } }), r("div", { staticClass: "followers-interests-title" }, [e._v("Followers interests")])])
            }, function() {
                var e = this,
                    t = e.$createElement,
                    r = e._self._c || t;
                return r("div", { staticClass: "price-per-post-title-container flex align-center justify-center" }, [r("img", { staticClass: "price-icon", attrs: { src: n("2eda"), alt: "Price per post", title: "Price per post" } }), r("div", { staticClass: "price-per-post-title" }, [e._v("Price per post")])])
            }],
            ts = (n("a15b"), n("fb6a"), { name: "influencer-details-footer", props: { followersInterests: Array, pricePerPost: Number }, computed: { interests: function() { return this.followersInterests.slice(0, 4).sort().join(", ") }, price: function() { return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(this.pricePerPost) } } }),
            ns = ts,
            rs = Object(u["a"])(ns, Zr, es, !1, null, null, null),
            ss = rs.exports,
            as = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("section", { staticClass: "influencer-details-socials-container" }, [n("influencer-details-socials-hero", { staticClass: "influencer-details-socials-hero", attrs: { socials: e.sortedSocials } }), n("influencerDetailsSocialsExpanded", { staticClass: "influencer-details-socials-expanded flex", attrs: { socials: e.sortedSocials } })], 1)
            },
            is = [],
            os = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("section", { staticClass: "influencer-details-socials-hero-container flex column align-center" }, [n("div", { staticClass: "active-socials-names-text" }, [n("span", [e._v("Active in")]), n("span", { staticClass: "social-names" }, [e._v(e._s(e.activeSocialsNames))]), n("span", [e._v("and more")])]), n("div", { staticClass: "active-socials-count-text" }, [n("span", [e._v("With more than")]), n("span", { staticClass: "socials-count" }, [e._v(e._s(e.activeSocialsCount))])])])
            },
            cs = [],
            ls = {
                name: "influencer-details-socials-header",
                props: { socials: Array },
                computed: {
                    activeSocialsNames: function() {
                        var e = this.socials.slice(0, 2).map((function(e) { return e.type.charAt(0).toUpperCase() + e.type.slice(1) })),
                            t = e.join(", ");
                        return " ".concat(t, " ")
                    },
                    activeSocialsCount: function() { var e = this.socials[0].menFollowers + this.socials[0].womenFollowers; return " ".concat(Math.floor(e / 1e3), "k followers") }
                }
            },
            us = ls,
            fs = Object(u["a"])(us, os, cs, !1, null, null, null),
            ps = fs.exports,
            ds = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return e.socials ? n("section", { staticClass: "influencer-details-socials-expanded-container" }, e._l(e.socials, (function(e, t) { return n("social-details", { key: t, staticClass: "social-details", attrs: { social: e } }) })), 1) : e._e()
            },
            ms = [],
            gs = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return e.social ? n("section", { staticClass: "social-details-container" }, [n("section", { staticClass: "social-details-header flex space-between align-center" }, [n("div", { staticClass: "social-name" }, [e._v(e._s(e.social.type))]), e.isClassIcon ? n("div", { class: [e.socialIcon, e.iconClass] }) : e._e(), e.isImgIcon ? n("img", { staticClass: "social-icon-img", attrs: { src: e.iconImgSrc } }) : e._e()]), n("section", { staticClass: "social-details-body" }, [n("section", { staticClass: "followers-info-container" }, [n("div", { staticClass: "followers-title" }, [e._v("Followers")]), n("div", { staticClass: "followers-age-container flex space-between" }, [n("div", { staticClass: "followers-age-title" }, [e._v("Average age")]), n("span", { staticClass: "followers-age" }, [e._v(e._s(e.social.followersAvgAge))])]), n("section", { staticClass: "followers-gender-container" }, [n("section", { staticClass: "followers-gender-count men-followers flex space-between" }, [n("div", { staticClass: "gender-title" }, [e._v("Men")]), n("div", { staticClass: "gender-followers" }, [e._v(e._s(e._f("followersCount")(e.social.menFollowers)))])]), n("section", { staticClass: "followers-gender-count women-followers flex space-between" }, [n("div", { staticClass: "gender-title" }, [e._v("Women")]), n("div", { staticClass: "gender-followers" }, [e._v(e._s(e._f("followersCount")(e.social.womenFollowers)))])])])]), n("section", { staticClass: "social-activity-container" }, [n("div", { staticClass: "social-activity-title" }, [e._v("Social activity")]), n("label", { staticClass: "flex space-between" }, [e._v(" Posts "), n("div", { staticClass: "posts-count" }, [e._v(e._s(e._f("number")(e.social.posts)))])]), n("label", { staticClass: "flex space-between" }, [e._v(" Stories "), n("div", { staticClass: "posts-count" }, [e._v(e._s(e._f("number")(e.social.stories)))])])])])]) : e._e()
            },
            hs = [],
            vs = { props: { social: Object }, data: function() { return { socialIcon: "social-icon", isClassIcon: !1, iconClass: null, isImgIcon: !1, iconImgSrc: null } }, created: function() { this.setIconType() }, methods: { setIconType: function() { "instagram" === this.social.type || "snapchat" === this.social.type || "facebook" === this.social.type ? (this.isClassIcon = !0, this.iconClass = "fa fa-".concat(this.social.type)) : "tiktok" === this.social.type && (this.iconImgSrc = n("68b6"), this.isImgIcon = !0) } } },
            bs = vs,
            ws = Object(u["a"])(bs, gs, hs, !1, null, null, null),
            ys = ws.exports,
            xs = { props: { socials: Array }, components: { socialDetails: ys } },
            _s = xs,
            js = Object(u["a"])(_s, ds, ms, !1, null, null, null),
            ks = js.exports,
            Cs = {
                name: "influencer-details-socials",
                props: { socials: Array },
                components: { influencerDetailsSocialsHero: ps, influencerDetailsSocialsExpanded: ks },
                computed: { sortedSocials: function() { var e = this.socials.slice(0, this.socials.length); return e.sort(this.sortDesByFollowersCount), e } },
                methods: {
                    sortDesByFollowersCount: function(e, t) {
                        var n = e.menFollowers + e.womenFollowers,
                            r = t.menFollowers + t.womenFollowers;
                        return r - n
                    }
                }
            },
            Is = Cs,
            Ps = Object(u["a"])(Is, as, is, !1, null, null, null),
            Os = Ps.exports,
            $s = {
                name: "influencer-details",
                data: function() { return { influencerId: null, currInfluencer: null, loggedInUser: null } },
                created: function() { this.influencerId = this.$route.params.id, this.loggedInUser = this.$store.getters.loggedInUser, this.getInfluencerById(), jr.setup() },
                computed: { fullName: function() { return "".concat(this.currInfluencer.firstName, " ").concat(this.currInfluencer.lastName) }, age: function() { return Mr()().diff(new Date(1e3 * +this.currInfluencer.dateOfBirth), "years", !1) } },
                methods: {
                    getInfluencerPhotosUrls: function() { return this.currInfluencer.photos.map((function(e) { return e.regular })) },
                    onMakeOffer: function() {
                        if (g.$emit("showMsg", { txt: "Offer has been sent to ".concat(this.currInfluencer.firstName, " ").concat(this.currInfluencer.lastName) }), this.loggedInUser) {
                            var e = { from: this.loggedInUser._id, to: this.currInfluencer._id, timeSent: Date.now(), type: "offer", subject: "offer from " + this.loggedInUser.name, content: "".concat(this.loggedInUser.name, " wants to promote their campaign with you. \n          watch their full details and contact the sender to make it happen.\n          ") };
                            jr.emit("PRIVATE_MESSAGE", e)
                        }
                    },
                    getInfluencerById: function() {
                        var e = this;
                        return Object(O["a"])(regeneratorRuntime.mark((function t() {
                            var n;
                            return regeneratorRuntime.wrap((function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, e.$store.dispatch({ type: "getInfluencerById", influencerId: e.influencerId });
                                    case 2:
                                        n = t.sent, e.currInfluencer = n;
                                    case 4:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    }
                },
                components: { influencerDetailsHeader: Hr, influencerPhotosCarousel: Xr, influencerDetailsFooter: ss, influencerDetailsSocials: Os }
            },
            Us = $s,
            Rs = Object(u["a"])(Us, Tr, Br, !1, null, null, null),
            As = Rs.exports,
            Fs = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("section", { staticClass: "signup-container" }, [e._v(" signup as " + e._s(e.userType) + " "), e.userType ? n(e.userType + "Create", { tag: "component", staticClass: "user-signup" }) : e._e()], 1)
            },
            Ss = [],
            Ns = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("section", { staticClass: "influencer-create-container flex column" }, [n("h1", [e._v("Signup as an Influencer")]), n("div", { staticClass: "text-info" }, [n("label", [e._v("Username:")]), n("input", { directives: [{ name: "model", rawName: "v-model", value: e.user.credentials.username, expression: "user.credentials.username" }], attrs: { type: "text" }, domProps: { value: e.user.credentials.username }, on: { input: function(t) { t.target.composing || e.$set(e.user.credentials, "username", t.target.value) } } })]), n("div", { staticClass: "text-info" }, [n("label", [e._v("password")]), n("input", { directives: [{ name: "model", rawName: "v-model", value: e.user.credentials.password, expression: "user.credentials.password" }], attrs: { type: "password" }, domProps: { value: e.user.credentials.password }, on: { input: function(t) { t.target.composing || e.$set(e.user.credentials, "password", t.target.value) } } })]), n("div", { staticClass: "text-info" }, [n("label", [e._v("First Name:")]), n("input", { directives: [{ name: "model", rawName: "v-model", value: e.user.firstName, expression: "user.firstName" }], attrs: { type: "text" }, domProps: { value: e.user.firstName }, on: { input: function(t) { t.target.composing || e.$set(e.user, "firstName", t.target.value) } } })]), n("div", { staticClass: "text-info" }, [n("label", [e._v("Last Name:")]), n("input", { directives: [{ name: "model", rawName: "v-model", value: e.user.lastName, expression: "user.lastName" }], attrs: { type: "text" }, domProps: { value: e.user.lastName }, on: { input: function(t) { t.target.composing || e.$set(e.user, "lastName", t.target.value) } } })]), n("div", { staticClass: "text-info" }, [n("label", [e._v("Email")]), n("input", { directives: [{ name: "model", rawName: "v-model", value: e.user.email, expression: "user.email" }], attrs: { type: "email" }, domProps: { value: e.user.email }, on: { input: function(t) { t.target.composing || e.$set(e.user, "email", t.target.value) } } })]), n("div", { staticClass: "text-info upload-photo" }, [n("label", [e._v("Profile Picture")]), n("input", { staticClass: "input-file", attrs: { type: "file" }, on: { change: function(t) { return e.uploadImg(t) } } })]), n("div", { staticClass: "gender-select-container flex" }, [n("label", [e._v("I am a")]), n("div", { staticClass: "gender-select" }, [n("input", { directives: [{ name: "model", rawName: "v-model", value: e.user.gender, expression: "user.gender" }], attrs: { type: "radio", value: "man" }, domProps: { checked: e._q(e.user.gender, "man") }, on: { change: function(t) { return e.$set(e.user, "gender", "man") } } }), n("label", [e._v("Man")]), n("input", { directives: [{ name: "model", rawName: "v-model", value: e.user.gender, expression: "user.gender" }], attrs: { type: "radio", value: "woman" }, domProps: { checked: e._q(e.user.gender, "woman") }, on: { change: function(t) { return e.$set(e.user, "gender", "woman") } } }), n("label", [e._v("Woman")])])]), n("div", { staticClass: "socials-select-container flex align-center" }, [n("label", [e._v("Social Networks")]), n("div", { staticClass: "socials-select" }, [n("input", {
                    directives: [{ name: "model", rawName: "v-model", value: e.user.socials, expression: "user.socials" }],
                    attrs: { type: "checkbox", value: "instagram" },
                    domProps: { checked: Array.isArray(e.user.socials) ? e._i(e.user.socials, "instagram") > -1 : e.user.socials },
                    on: {
                        change: function(t) {
                            var n = e.user.socials,
                                r = t.target,
                                s = !!r.checked;
                            if (Array.isArray(n)) {
                                var a = "instagram",
                                    i = e._i(n, a);
                                r.checked ? i < 0 && e.$set(e.user, "socials", n.concat([a])) : i > -1 && e.$set(e.user, "socials", n.slice(0, i).concat(n.slice(i + 1)))
                            } else e.$set(e.user, "socials", s)
                        }
                    }
                }), n("label", { staticClass: "fa fa-instagram fa-2x" }), n("input", {
                    directives: [{ name: "model", rawName: "v-model", value: e.user.socials, expression: "user.socials" }],
                    attrs: { type: "checkbox", value: "snapchat" },
                    domProps: { checked: Array.isArray(e.user.socials) ? e._i(e.user.socials, "snapchat") > -1 : e.user.socials },
                    on: {
                        change: function(t) {
                            var n = e.user.socials,
                                r = t.target,
                                s = !!r.checked;
                            if (Array.isArray(n)) {
                                var a = "snapchat",
                                    i = e._i(n, a);
                                r.checked ? i < 0 && e.$set(e.user, "socials", n.concat([a])) : i > -1 && e.$set(e.user, "socials", n.slice(0, i).concat(n.slice(i + 1)))
                            } else e.$set(e.user, "socials", s)
                        }
                    }
                }), n("label", { staticClass: "fa fa-snapchat fa-2x" }), n("input", {
                    directives: [{ name: "model", rawName: "v-model", value: e.user.socials, expression: "user.socials" }],
                    attrs: { type: "checkbox", value: "tiktok" },
                    domProps: { checked: Array.isArray(e.user.socials) ? e._i(e.user.socials, "tiktok") > -1 : e.user.socials },
                    on: {
                        change: function(t) {
                            var n = e.user.socials,
                                r = t.target,
                                s = !!r.checked;
                            if (Array.isArray(n)) {
                                var a = "tiktok",
                                    i = e._i(n, a);
                                r.checked ? i < 0 && e.$set(e.user, "socials", n.concat([a])) : i > -1 && e.$set(e.user, "socials", n.slice(0, i).concat(n.slice(i + 1)))
                            } else e.$set(e.user, "socials", s)
                        }
                    }
                }), n("label", [e._v("Tiktok")])])]), n("label", [e._v("Tags")]), n("div", { staticClass: "text-info" }, [n("label", [e._v("Price per post")]), n("input", { directives: [{ name: "model", rawName: "v-model", value: e.user.pricePerPost, expression: "user.pricePerPost" }], attrs: { type: "number" }, domProps: { value: e.user.pricePerPost }, on: { input: function(t) { t.target.composing || e.$set(e.user, "pricePerPost", t.target.value) } } })]), n("button", { staticClass: "btn", on: { click: function(t) { return e.saveUser() } } }, [e._v("Save")]), n("button", { staticClass: "btn", on: { click: function(t) { return e.saveUser("demo") } } }, [e._v("Demo sign up")])])
            },
            Es = [],
            Ts = { uploadImg: Bs };

        function Bs(e) {
            var t = "dxeozvmsw",
                n = "https://api.cloudinary.com/v1_1/".concat(t, "/image/upload"),
                r = new FormData;
            return r.append("file", e.target.files[0]), r.append("upload_preset", "pe44z5fy"), fetch(n, { method: "POST", body: r }).then((function(e) { return e.json() })).then((function(e) { return console.log(e), e })).catch((function(e) { return console.error(error) }))
        }
        var Ls = {
                name: "influencer-create",
                data: function() { return { user: { credentials: { userType: "influencer" }, socials: [] } } },
                methods: {
                    saveUser: function() {
                        var e = this,
                            t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                        return Object(O["a"])(regeneratorRuntime.mark((function n() {
                            var r;
                            return regeneratorRuntime.wrap((function(n) {
                                while (1) switch (n.prev = n.next) {
                                    case 0:
                                        return "demo" === t && (e.user.credentials.username = "demo", e.user.credentials.password = "demo", e.user.firstName = "demo", e.user.lastName = "demo", e.user.imgUrl = "http://dummyimage.com/250x250.jpg/cc0000/ffffff", e.user.socials.push("instagram")), n.next = 3, e.$store.dispatch({ type: "addInfluencer", influencer: e.user });
                                    case 3:
                                        r = n.sent, console.log("Saved!", r), e.$router.push("/app");
                                    case 6:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })))()
                    },
                    uploadImg: function(e) {
                        var t = this;
                        return Object(O["a"])(regeneratorRuntime.mark((function n() {
                            var r, s;
                            return regeneratorRuntime.wrap((function(n) {
                                while (1) switch (n.prev = n.next) {
                                    case 0:
                                        return n.next = 2, Ts.uploadImg(e);
                                    case 2:
                                        r = n.sent, s = r.url, t.user.imgUrl = s;
                                    case 5:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })))()
                    }
                }
            },
            Ms = Ls,
            Ds = (n("a905"), Object(u["a"])(Ms, Ns, Es, !1, null, "2593c34e", null)),
            zs = Ds.exports,
            Gs = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("section", { staticClass: "brand-create-container flex column" }, [n("h1", [e._v("signup as a Brand")]), n("div", { staticClass: "text-info" }, [n("label", [e._v("Username: ")]), n("input", { directives: [{ name: "model", rawName: "v-model", value: e.user.credentials.username, expression: "user.credentials.username" }], attrs: { type: "text" }, domProps: { value: e.user.credentials.username }, on: { input: function(t) { t.target.composing || e.$set(e.user.credentials, "username", t.target.value) } } })]), n("div", { staticClass: "text-info" }, [n("label", [e._v("password ")]), n("input", { directives: [{ name: "model", rawName: "v-model", value: e.user.credentials.password, expression: "user.credentials.password" }], attrs: { type: "password" }, domProps: { value: e.user.credentials.password }, on: { input: function(t) { t.target.composing || e.$set(e.user.credentials, "password", t.target.value) } } })]), n("div", { staticClass: "text-info" }, [n("label", [e._v("Name: ")]), n("input", { directives: [{ name: "model", rawName: "v-model", value: e.user.lastName, expression: "user.lastName" }], attrs: { type: "text" }, domProps: { value: e.user.lastName }, on: { input: function(t) { t.target.composing || e.$set(e.user, "lastName", t.target.value) } } })]), n("div", { staticClass: "text-info" }, [n("label", [e._v("Email ")]), n("input", { directives: [{ name: "model", rawName: "v-model", value: e.user.email, expression: "user.email" }], attrs: { type: "email" }, domProps: { value: e.user.email }, on: { input: function(t) { t.target.composing || e.$set(e.user, "email", t.target.value) } } })]), n("div", { staticClass: "text-info upload-photo" }, [n("label", [e._v("Upload Photo ")]), n("input", { staticClass: "input-file", attrs: { type: "file" }, on: { change: function(t) { return e.uploadImg(t) } } })]), n("label", [e._v("Subjects")]), n("button", { staticClass: "btn", on: { click: e.saveUser } }, [e._v("Save")])])
            },
            qs = [],
            Js = {
                name: "brand-create",
                data: function() { return { user: { credentials: { userType: "brand" } } } },
                methods: {
                    saveUser: function() {
                        var e = this;
                        return Object(O["a"])(regeneratorRuntime.mark((function t() {
                            var n;
                            return regeneratorRuntime.wrap((function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, e.$store.dispatch({ type: "addBrand", brand: e.user });
                                    case 2:
                                        n = t.sent, console.log("Saved!", n), e.$router.push("/app");
                                    case 5:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    },
                    uploadImg: function(e) {
                        var t = this;
                        return Object(O["a"])(regeneratorRuntime.mark((function n() {
                            var r, s;
                            return regeneratorRuntime.wrap((function(n) {
                                while (1) switch (n.prev = n.next) {
                                    case 0:
                                        return n.next = 2, Ts.uploadImg(e);
                                    case 2:
                                        r = n.sent, s = r.url, t.user.imgUrl = s;
                                    case 5:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })))()
                    }
                }
            },
            Hs = Js,
            Ks = (n("51b9"), Object(u["a"])(Hs, Gs, qs, !1, null, null, null)),
            Qs = Ks.exports,
            Ws = { name: "signup-page", data: function() { return { userType: "brand" } }, methods: { setUsesrType: function(e) { this.userType = e } }, components: { influencerCreate: zs, brandCreate: Qs } },
            Vs = Ws,
            Ys = Object(u["a"])(Vs, Fs, Ss, !1, null, null, null),
            Xs = Ys.exports;
        r["default"].use(C["a"]);
        var Zs = [{ path: "/", name: "home-page", component: ce }, { path: "/app", name: "main-app", component: un }, { path: "/login", name: "login-page", component: An }, { path: "/signup", name: "signup-page", component: Xs }, { path: "/influencer/:id", name: "influencer-details", component: As }, { path: "/backoffice/", name: "backoffice-page", component: Er, children: [{ path: "/offer/:id?", name: "offer-list", component: fr }, { path: "/message/:id?", name: "message-list", component: Ar }] }, { path: "/filter", name: "influencer-filter", component: tn }],
            ea = new C["a"]({ mode: "history", base: "/", routes: Zs }),
            ta = ea,
            na = n("2f62"),
            ra = {
                state: { loggedInUser: null, demoInfluencer: null, userMessages: [], demoBrand: null, influencerList: null },
                getters: { loggedInUser: function(e) { return e.loggedInUser }, demoInfluencer: function(e) { return e.demoInfluencer } },
                mutations: { setLoggedInUser: function(e, t) { e.loggedInUser = t.loggedInUser }, setUserType: function(e, t) { e.userType = t.userType }, setUserItems: function(e, t) { e.influencerList = t.influencerList }, demoLogin: function(e, t) { e.demoInfluencer = t.credentials }, setUserMessages: function(e, t) { e.userMessages = t.messageList } },
                actions: {
                    setUserType: function(e, t) {
                        return Object(O["a"])(regeneratorRuntime.mark((function n() {
                            return regeneratorRuntime.wrap((function(n) {
                                while (1) switch (n.prev = n.next) {
                                    case 0:
                                        return n.next = 2, e.commit(t);
                                    case 2:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })))()
                    },
                    login: function(e, t) {
                        return Object(O["a"])(regeneratorRuntime.mark((function n() {
                            var r, s;
                            return regeneratorRuntime.wrap((function(n) {
                                while (1) switch (n.prev = n.next) {
                                    case 0:
                                        return r = t.credentials, n.next = 3, On.login(r);
                                    case 3:
                                        return s = n.sent, e.commit({ type: "setLoggedInUser", loggedInUser: s }), n.abrupt("return", s);
                                    case 6:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })))()
                    },
                    demoLogin: function(e, t) {
                        return Object(O["a"])(regeneratorRuntime.mark((function n() {
                            var r;
                            return regeneratorRuntime.wrap((function(n) {
                                while (1) switch (n.prev = n.next) {
                                    case 0:
                                        r = t.credentials, e.commit({ type: "demoLogin", credentials: r });
                                    case 2:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })))()
                    },
                    logout: function(e) {
                        return Object(O["a"])(regeneratorRuntime.mark((function t() {
                            return regeneratorRuntime.wrap((function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, On.logout();
                                    case 2:
                                        return e.commit({ type: "setLoggedInUser", loggedInUser: null }), t.abrupt("return");
                                    case 4:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    },
                    signup: function(e, t) {
                        return Object(O["a"])(regeneratorRuntime.mark((function n() {
                            var r;
                            return regeneratorRuntime.wrap((function(n) {
                                while (1) switch (n.prev = n.next) {
                                    case 0:
                                        return console.log(t), n.next = 3, On.signUp();
                                    case 3:
                                        return r = n.sent, e.commit({ type: "setLoggedInUser", loggedInUser: r }), n.abrupt("return", r);
                                    case 6:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })))()
                    },
                    getLoggedInUser: function(e) {
                        return Object(O["a"])(regeneratorRuntime.mark((function t() {
                            var n;
                            return regeneratorRuntime.wrap((function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        if (e.state.loggedInUser) { t.next = 5; break }
                                        return t.next = 3, On.getLoggedInUser();
                                    case 3:
                                        n = t.sent, e.state.loggedInUser = n;
                                    case 5:
                                        return t.abrupt("return", e.state.loggedInUser);
                                    case 6:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    }
                }
            },
            sa = {
                state: { offers: null },
                getters: { offer: function(e) { return e.offers } },
                mutations: {
                    setOffers: function(e, t) {
                        var n = t.offers;
                        e.offers = n
                    },
                    updateOffer: function(e, t) { t.offerStatus }
                },
                actions: {
                    updateOffer: function(e, t) {
                        return Object(O["a"])(regeneratorRuntime.mark((function e() {
                            return regeneratorRuntime.wrap((function(e) {
                                while (1) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, or.update(t);
                                    case 2:
                                        return e.abrupt("return", e.sent);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))()
                    },
                    sendOffer: function(e, t) {
                        return Object(O["a"])(regeneratorRuntime.mark((function e() {
                            return regeneratorRuntime.wrap((function(e) {
                                while (1) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, or.add(t);
                                    case 2:
                                        return e.abrupt("return", e.sent);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))()
                    },
                    loadOffers: function(e, t) {
                        var n = t.influencerId;
                        return Object(O["a"])(regeneratorRuntime.mark((function t() {
                            var r;
                            return regeneratorRuntime.wrap((function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, or.query({ influencerId: n });
                                    case 2:
                                        return r = t.sent, e.commit({ type: "setOffers", offers: r }), t.abrupt("return", r);
                                    case 5:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    }
                }
            };

        function aa() { return ia.apply(this, arguments) }

        function ia() {
            return ia = Object(O["a"])(regeneratorRuntime.mark((function e() {
                return regeneratorRuntime.wrap((function(e) {
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, ge.get("brand");
                        case 2:
                            return e.abrupt("return", e.sent);
                        case 3:
                        case "end":
                            return e.stop()
                    }
                }), e)
            }))), ia.apply(this, arguments)
        }

        function oa(e) { return ca.apply(this, arguments) }

        function ca() {
            return ca = Object(O["a"])(regeneratorRuntime.mark((function e(t) {
                return regeneratorRuntime.wrap((function(e) {
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, ge.get("brand/".concat(t));
                        case 2:
                            return e.abrupt("return", e.sent);
                        case 3:
                        case "end":
                            return e.stop()
                    }
                }), e)
            }))), ca.apply(this, arguments)
        }

        function la(e) { return ua.apply(this, arguments) }

        function ua() {
            return ua = Object(O["a"])(regeneratorRuntime.mark((function e(t) {
                return regeneratorRuntime.wrap((function(e) {
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, ge.delete("brand/".concat(t), t);
                        case 2:
                            return e.abrupt("return", e.sent);
                        case 3:
                        case "end":
                            return e.stop()
                    }
                }), e)
            }))), ua.apply(this, arguments)
        }

        function fa(e) { return pa.apply(this, arguments) }

        function pa() {
            return pa = Object(O["a"])(regeneratorRuntime.mark((function e(t) {
                return regeneratorRuntime.wrap((function(e) {
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            return t.createdAt = Date.now(), t = ha(t), e.next = 4, ge.post("brand", t);
                        case 4:
                            return e.abrupt("return", e.sent);
                        case 5:
                        case "end":
                            return e.stop()
                    }
                }), e)
            }))), pa.apply(this, arguments)
        }

        function da(e) { return ma.apply(this, arguments) }

        function ma() {
            return ma = Object(O["a"])(regeneratorRuntime.mark((function e(t) {
                return regeneratorRuntime.wrap((function(e) {
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            return t.updatedAt = Date.now(), e.next = 3, ge.put("brand/".concat(t._id), t);
                        case 3:
                            return e.abrupt("return", e.sent);
                        case 4:
                        case "end":
                            return e.stop()
                    }
                }), e)
            }))), ma.apply(this, arguments)
        }
        var ga = { query: aa, getById: oa, remove: la, add: fa, update: da };

        function ha(e) { return e.customerCount = va(1e6, 1e9), e.marketValue = va(1e6, 1e10), e }

        function va(e, t) { return Math.floor(Math.random() * (t - e + 1) + e) }
        var ba = {
                state: { brands: [] },
                mutations: {
                    setBrands: function(e, t) {
                        var n = t.brands;
                        e.brands = n
                    }
                },
                getters: { brands: function(e) { return e.brands } },
                actions: {
                    loadBrands: function(e) {
                        return Object(O["a"])(regeneratorRuntime.mark((function t() {
                            var n;
                            return regeneratorRuntime.wrap((function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, ga.query();
                                    case 2:
                                        n = t.sent, e.commit({ type: "setBrands", brands: n });
                                    case 4:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    },
                    addBrand: function(e, t) {
                        var n = t.brand;
                        return Object(O["a"])(regeneratorRuntime.mark((function t() {
                            var r;
                            return regeneratorRuntime.wrap((function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, ga.add(n);
                                    case 2:
                                        return r = t.sent, e.dispatch({ type: "signup", user: r }), console.log("brand has been saved!", r), t.abrupt("return", r);
                                    case 6:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    },
                    getEmptybrand: function() { return ga.getEmptybrand() },
                    getbrandById: function(e, t) { var n = t.brandId; return ga.getById(n) }
                },
                modules: {}
            },
            wa = {
                state: { influencers: [] },
                mutations: {
                    setInfluencers: function(e, t) {
                        var n = t.influencers;
                        e.influencers = n
                    }
                },
                getters: { influencers: function(e) { return e.influencers } },
                actions: {
                    loadInfluencers: function(e, t) {
                        var n = t.filterBy;
                        return Object(O["a"])(regeneratorRuntime.mark((function t() {
                            var r;
                            return regeneratorRuntime.wrap((function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, be.query(n);
                                    case 2:
                                        r = t.sent, e.commit({ type: "setInfluencers", influencers: r });
                                    case 4:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    },
                    getEmptyInfluencer: function() { return be.getEmptyInfluencer() },
                    getInfluencerById: function(e, t) {
                        var n = t.influencerId;
                        return Object(O["a"])(regeneratorRuntime.mark((function e() {
                            return regeneratorRuntime.wrap((function(e) {
                                while (1) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, be.getById(n);
                                    case 2:
                                        return e.abrupt("return", e.sent);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))()
                    },
                    addInfluencer: function(e, t) {
                        var n = t.influencer;
                        return Object(O["a"])(regeneratorRuntime.mark((function t() {
                            var r;
                            return regeneratorRuntime.wrap((function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, be.add(n);
                                    case 2:
                                        return r = t.sent, e.dispatch({ type: "signup", user: r }), t.abrupt("return", r);
                                    case 5:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    }
                },
                modules: {}
            };
        r["default"].use(na["a"]);
        var ya = new na["a"].Store({ modules: { userStore: ra, offerStore: sa, brandStore: ba, influencerStore: wa } });
        n("4de4"), n("c35a"), n("b680");
        r["default"].filter("date", (function(e) {
            var t = new Date(1e3 * e),
                n = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                r = t.getFullYear(),
                s = n[t.getMonth()],
                a = t.getDate(),
                i = s + " " + a + " " + r;
            return i
        })), r["default"].filter("currency", (function(e) { return e.toLocaleString("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 0, maximumFractionDigits: 0 }) })), r["default"].filter("followersCount", (function(e) { var t = Math.floor(e / 1e3); return t < 1e3 ? "".concat(t, "k") : (t /= 1e3, t = t > 1 ? Number.parseFloat(t).toFixed(1) : Math.floor(t), "".concat(t, "m")) })), r["default"].filter("number", (function(e) { return new Intl.NumberFormat("en-IN").format(e) }));
        var xa = n("5c96"),
            _a = n.n(xa);
        n("0fae"), n("b7e3");
        r["default"].use(_a.a), r["default"].config.productionTip = !1, new r["default"]({ router: ta, store: ya, render: function(e) { return e(j) } }).$mount("#app")
    },
    "59fd": function(e, t, n) {
        "use strict";
        var r = n("7236"),
            s = n.n(r);
        s.a
    },
    "68b6": function(e, t, n) { e.exports = n.p + "img/tiktok.2380a8ce.svg" },
    "708d": function(e, t, n) {},
    7236: function(e, t, n) {},
    a624: function(e, t, n) {},
    a905: function(e, t, n) {
        "use strict";
        var r = n("a624"),
            s = n.n(r);
        s.a
    },
    aa0c: function(e, t, n) { e.exports = n.p + "img/tik-tok.4359f68f.svg" },
    b7e3: function(e, t, n) {},
    cfab: function(e, t, n) { e.exports = n.p + "img/interests.bce71ebc.svg" },
    f6ed: function(e, t) {
        function n(e, t) { sessionStorage[e] = JSON.stringify(t) }

        function r(e) { var t = sessionStorage[e] || "null"; return JSON.parse(t) }

        function s(e) { sessionStorage.removeItem(e) }
        e.exports = { store: n, load: r, clear: s }
    },
    fbf4: function(e, t, n) { e.exports = n.p + "img/woman lipstick.47353fdf.jpg" }
});
//# sourceMappingURL=app.e13d7782.js.map