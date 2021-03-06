var _lang = {
        zh: {
            title: "找兔子",
            help_txt: "兔子们已经藏好了，快来找出<span style='font-size:240%'>兔</span>子们吧",
            score: "过关：",
            btn_pause: "暂停",
            btn_start: "开始游@戏",
            btn_reTry: "再来一次",
            btn_more_game: "更多游@戏",
            game_pause: "游@戏暂停",
            btn_resume: "继续游@戏",
            loading: "加载中...",
            lv_txt: ["色郎", "色狼", "色鬼", "色魔", "超级色魔", "变态色魔", "孤独求色", ],
            share_txt1: "【找兔子】我在",
            share_txt2: "只袜子中找到",
            share_txt3: "个兔子，我是【",
            share_txt4: "】，不服来战！",
            desc: "找出所有'袜'字中的'兔'字。让好友们来测试，找到身边的色魔"
        }
    },
    _config = {
        lang: "zh",
        color: {
            allTime: 60,
            addTime: 0,
            lvMap: [2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 7]
        },
        pic: {
            isOpen: !1,
            allTime: 5,
            addTime: 0,
            lvMap: [2, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8]
        }
    },
    shareData1 = {}; !
    function() {
        var a = _lang[_config.lang],
            b = $("#tpl").html(),
            c = _.template(b, a);
        $("#container").html(c)
    } (),
    function() {
        var a = $("#box"),
            b = {
                lv: $("#room .lv em"),
                time: $("#room .time"),
                start: $("#dialog .btn-restart"),
                back: $("#dialog .btn-back"),
                share: $("#dialog .btn-share"),
                pause: $("#room .btn-pause"),
                resume: $("#dialog .btn-resume"),
                dialog: $("#dialog"),
                d_content: $("#dialog .content"),
                d_pause: $("#dialog .pause"),
                d_gameover: $("#dialog .gameover")
            },
            c = {
                init: function(a, b, c) {
                    this.type = a,
                        this.api = API[a],
                        this.config = _config[a],
                        this.reset(),
                        this.parent = c,
                        this.el = b,
                        this.renderUI(),
                        this.inited || this.initEvent(),
                        this.inited = !0,
                        this.start()
                },
                renderUI: function() {
                    var b = 90 == window.orientation || -90 == window.orientation,
                        c = b ? window.innerHeight: window.innerWidth;
                    c -= 20,
                        c = Math.min(c, 500),
                        a.width(c).height(c),
                        this.el.show()
                },
                initEvent: function() {
                    var d = "ontouchstart" in document.documentElement ? "touchend": "click",
                        e = this;
                    $(window).resize(function() {
                        c.renderUI()
                    }),
                        a.on(d, "span",
                            function() {
                                var a = $(this).data("type");
                                "a" == a && e.nextLv.call(e)
                            }),
                        b.pause.on(d, _.bind(this.pause, this)),
                        b.resume.on(d, _.bind(this.resume, this)),
                        b.start.on(d, _.bind(this.start, this)),
                        b.back.on(d, _.bind(this.back, this)),
                        b.share.on(d, _.bind(this.share, this))
                },
                start: function() {
                    this.time > 5 && b.time.removeClass("danger"),
                        b.dialog.hide(),
                        this._pause = !1,
                        this.lv = "undefined" != typeof this.lv ? this.lv + 1 : 0,
                        this.lvMap = this.config.lvMap[this.lv] || _.last(this.config.lvMap),
                        this.renderMap(),
                        this.renderInfo(),
                        this.timer || (this.timer = setInterval(_.bind(this.tick, this), 1000))
                },
                share: function() {},
                resume: function() {
                    b.dialog.hide(),
                        this._pause = !1
                },
                pause: function() {
                    this._pause = !0,
                        b.d_content.hide(),
                        b.d_pause.show(),
                        b.dialog.show()
                },
                tick: function() {
                    return this._pause ? void 0 : (this.time -= 0.7, this.time < 6 && b.time.addClass("danger"), this.time < 0 ? void this.gameOver() : void b.time.text(parseInt(this.time)))
                },
                renderMap: function() {
                    if (!this._pause) {
                        var b = this.lvMap * this.lvMap,
                            c = "",
                            d = "lv" + this.lvMap;
                        _(b).times(function() {
                            c += "<span></span>"
                        }),
                            a.attr("class", d).html(c),
                            this.api.render(this.lvMap, this.lv)
                    }
                },
                renderInfo: function() {
                    b.lv.text(this.lv + 1)
                },
                gameOver: function() {
                    var Rankstr = "";
                    var d = this.api.getGameOverText(this.lv);
                    dp_submitScore(this.lv, d.lv);
                    this.lastLv = this.lv,
                        this.lastGameTxt = d.txt,
                        this.lastGamePercent = d.percent,
                        b.d_content.hide(),
                        b.d_gameover.show().find("h3").text(this.lastGameTxt),
                        a.find("span").fadeOut(1500,
                            function() {
                                b.dialog.show()
                            }),
                        this._pause = !0,
                        this.reset()
                },
                reset: function() {
                    this.time = this.config.allTime,
                        this.lv = -1
                },
                nextLv: function() {
                    this.time += this.config.addTime,
                        b.time.text(parseInt(this.time)),
                        this._pause || this.start()
                },
                back: function() {
                    this._pause = !0,
                        this.el.hide(),
                        b.dialog.hide(),
                        this.parent.render()
                }
            };
        window.Game = c
    } (),
    function(a) {
        var b = {
                index: $("#index"),
                room: $("#room"),
                loading: $("#loading"),
                dialog: $("#dialog"),
                play: $(".play-btn"),
                btn_boyaa: $(".btn-boyaa"),
                banner: $(".banner"),
                boyaa_logo: $(".boyaa-logo")
            },
            c = window.navigator.userAgent.toLowerCase(),
            d = /android/i.test(c),
            e = /iphone|ipad|ipod/i.test(c),
            f = {
                init: function() {
                    this.initEvent(),
                        this.loading(),
                        /android/i.test(c) ? (b.banner.attr("href", "").data("type", "android").find("img").attr("src", "assets/img/banner.android.jpg"), b.banner.show()) : /iphone|ipad|ipod/i.test(c) && (b.banner.attr("href", "http://www.xzydmy.com/").data("type", "ios").find("img").attr("src", "assets/img/banner.ios.jpg"), b.banner.show())
                },
                loading: function() {
                    function a() {
                        d++,
                            d == c && f.render()
                    }
                    if (_config.pic.isOpen) {
                        for (var b = ["assets/img/1.png", "assets/img/2.png", "assets/img/3.png", "assets/img/4.png", "assets/img/5.png", "assets/img/6.png", "assets/img/7.png", "assets/img/8.png", "assets/img/9.png", "assets/img/10.png", "assets/img/11.png", "assets/img/12.png", "assets/img/13.png", "assets/img/14.png", "assets/img/15.png", "assets/img/16.png", "assets/img/17.png", "assets/img/18.png"], c = b.length, d = 0, e = 0; c > e; e++) {
                            var g = new Image;
                            g.onload = a,
                                g.src = b[e]
                        }
                    } else {
                        f.render()
                    }
                    var h = _lang[_config.lang]
                },
                render: function() {
                    setTimeout(function() {
                            b.loading.hide(),
                                b.index.show()
                        },
                        1000)
                },
                initEvent: function() {
                    var a = "ontouchstart" in document.documentElement ? "touchstart": "click",
                        c = this;
                    b.play.on(a,
                        function() {
                            var a = $(this).data("type") || "color";
                            b.index.hide(),
                                Game.init(a, b.room, c)
                        }),
                        b.btn_boyaa.on(a,
                            function() {
                                _hmt.push(["_trackEvent", "button", "more_game"])
                            }),
                        b.boyaa_logo.on(a,
                            function() {
                                _hmt.push(["_trackEvent", "button", "boyaa_logo"])
                            }),
                        b.banner.on(a,
                            function() {
                                var a = $(this).data("t") || "",
                                    b = d ? "android": e ? "ios": "other_os";
                                _hmt.push(["_trackEvent", "banner", b + "_" + a])
                            })
                }
            };
        f.init(),
            a.API = {}
    } (window),
    function() {
        var a = $("#box"),
            b = "span",
            c = $("#help p"),
            d = $("#help_color"),
            e = {
                lvT: _lang[_config.lang].lv_txt,
                render: function(e, f) {
                    this.lv = f,
                        c.hide(),
                        d.show();
                    var g = _config.color.lvMap[f] || _.last(_config.color.lvMap);
                    this.d = 15 * Math.max(9 - g, 1),
                        this.d = f > 20 ? 10 : this.d,
                        this.d = f > 40 ? 8 : this.d,
                        this.d = f > 50 ? 5 : this.d;
                    var h = Math.floor(Math.random() * e * e) * 2,
                        i = this.getColor(255 - this.d),
                        j = this.getLvColor(i[0]);
                    var size = a.find(b).height() * 0.96;
                    a.find(b).css("background-color", i[1]).data("type", "b").html('<span style="padding:0px;border:0;font-size:' + size + "px;line-height:" + size + 'px;width:100%;height:100%" >免</span>'),
                        a.find(b).eq(h).css("background-color", i[1]).data("type", "a").html('<span style="padding:0px;border:0;font-size:' + size + "px;line-height:" + size + 'px;width:100%;height:100%" >兔</span>')
                },
                getColor: function(a) {
                    var b = [Math.round(Math.random() * a), Math.round(Math.random() * a), Math.round(Math.random() * a)],
                        c = "rgb(" + b.join(",") + ")";
                    return [b, c]
                },
                getLvColor: function(a) {
                    var b = this.d,
                        c = _.map(a,
                            function(a) {
                                return a + b + 10
                            }),
                        d = "rgb(" + c.join(",") + ")";
                    return [c, d]
                },
                getGameOverText: function(a) {
                    var b = 20 > a ? 0 : Math.ceil((a - 20) / 10),
                        c = this.lvT[b] || _.last(this.lvT),
                        d = "找到" + (a + 1) + "个兔字",
                        e = a;
                    return e = 20 > e ? 2 * a: 30 > a ? 3 * (a - 20) + 40 : 40 > a ? 1.5 * (a - 30) + 70 : 50 > a ? 1.35 * (a - 40) + 85 : 60 > a ? 0.05 * (a - 50) + 98.5 : 70 > a ? 0.02 * (a - 60) + 99 : 80 > a ? 0.02 * (a - 70) + 99.2 : 90 > a ? 0.02 * (a - 80) + 99.4 : 100 > a ? 0.02 * (a - 90) + 99.6 : 110 > a ? 0.02 * (a - 100) + 99.8 : 100,
                        e = ("" + e).length > 5 ? e.toFixed(2) : e,
                    {
                        txt: d,
                        percent: e,
                        lv: c
                    }
                }
            };
        API.color = e
    } ();