/**
 * Created by huangchen on 2016/12/25.
 */
var common = {
    menu: {
        "首页": {
            icon: "home",
            link: "",
            sub: {}
        },
        "会员中心": {
            icon: "bookmark",
            link: "",
            sub: {
                "个人资料": {
                    icon: "",
                    link: "../user/index.html",
                    sub: {}
                },
                "支付方式": {
                    icon: "",
                    link: "../user/payment.html",
                    sub: {}
                },
                "密码修改": {
                    icon: "",
                    link: "",
                    sub: {}
                },
                "密保修改": {
                    icon: "",
                    link: "",
                    sub: {}
                },
            }
        },
        "市场管理": {
            icon: "list-alt",
            link: "",
            sub: {
                "开通会员": {
                    icon: "",
                    link: "",
                    sub: {}
                },
                "推荐系谱": {
                    icon: "",
                    link: "",
                    sub: {}
                },
                "注册会员": {
                    icon: "",
                    link: "",
                    sub: {}
                },
            }
        },
        "财务管理": {
            icon: "list",
            link: "",
            sub: {
                "本息明细": {
                    icon: "",
                    link: "",
                    sub: {}
                },
                "领导奖励明细": {
                    icon: "",
                    link: "",
                    sub: {}
                },
                "激活／排单重转账": {
                    icon: "",
                    link: "",
                    sub: {}
                },
            }
        },
        "联系我们": {
            icon: "mobile",
            link: "",
            sub: {}
        },
        "安全退出": {
            icon: "sign-out",
            link: "../index.html",
            sub: {}
        }
    },
    showMenu: function () {
        //获取当前的link
        var pathname = window.location.pathname;
        console.log(pathname);
        var start = pathname.indexOf("FuckTheWorld/") + "FuckTheWorld/".length;
        var selfLink = pathname.substr(start);
        console.log(selfLink);


        var menu = "";
        menu += '<ul class="am-menu-nav am-avg-sm-1">';
        $.each(common.menu, function (key, data) {
            menu += '<li class="">';
            menu += '<a href="';
            if (data.link == "")
                data.link = "javascript:void(0);";
            menu += data.link + '">';
            if (data.icon == "")
                data.icon = "arrow-right";
            menu += '<span class="am-icon-' + data.icon + '"></span>';
            menu += key + '</a>';
            if (data.hasOwnProperty("sub") && !common.isEmptyObj(data.sub)) {
                menu += common.getSubMenu(data.sub);
            }
            menu += '</li>';
        });
        menu += '</ul>';

        $("nav.header").append(menu);
        console.log(menu);
    },
    getSubMenu: function (sub) {
        var menu = "";
        menu += ' <ul class="am-menu-sub am-avg-sm-1 ">';
        $.each(sub, function (key, data) {
            menu += '<li class="">';
            menu += '<a href="';
            if (data.link == "")
                data.link = "javascript:void(0);";
            menu += data.link + '">';
            if (data.icon == "")
                data.icon = "arrow-right";
            menu += '<span class="am-icon-' + data.icon + '"></span>';
            menu += key + '</a>';
            if (data.hasOwnProperty("sub") && !common.isEmptyObj(data.sub)) {
                menu += common.getSubMenu(data.sub);
            }
            menu += '</li>';
        });
        menu += '</ul>';

        console.log(menu);

        return menu;
    },
    isEmptyObj:function (obj) {
        if(typeof (obj) != "object")
            return false;
        for (o in obj){
            return false;
        }
        return true;
    },
    showHeader:function(){

    },
    run: function () {
        this.showHeader();
        this.showMenu();
    }
};
common.run();