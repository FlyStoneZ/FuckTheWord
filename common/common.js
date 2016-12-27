/**
 * Created by huangchen on 2016/12/25.
 */
var common = {
    menu: {
        "首页": {
            icon: "home",
            class: "",
            link: "",
            sub: {}
        },
        "会员中心": {
            icon: "bookmark",
            class: "",
            link: "",
            sub: {
                "个人资料": {
                    icon: "",
                    class: "",
                    link: "../user/index.html",
                    sub: {}
                },
                "支付方式": {
                    icon: "",
                    class: "",
                    link: "../user/payment.html",
                    sub: {}
                },
                "密码修改": {
                    icon: "",
                    class: "",
                    link: "",
                    sub: {}
                },
                "密保修改": {
                    icon: "",
                    class: "",
                    link: "",
                    sub: {}
                },
            }
        },
        "市场管理": {
            icon: "list-alt",
            class: "",
            link: "",
            sub: {
                "开通会员": {
                    icon: "",
                    class: "",
                    link: "",
                    sub: {}
                },
                "推荐系谱": {
                    icon: "",
                    class: "",
                    link: "",
                    sub: {}
                },
                "注册会员": {
                    icon: "",
                    class: "",
                    link: "",
                    sub: {}
                },
            }
        },
        "财务管理": {
            icon: "list",
            class: "",
            link: "",
            sub: {
                "本息明细": {
                    icon: "",
                    class: "",
                    link: "",
                    sub: {}
                },
                "领导奖励明细": {
                    icon: "",
                    class: "",
                    link: "",
                    sub: {}
                },
                "激活／排单重转账": {
                    icon: "",
                    class: "",
                    link: "",
                    sub: {}
                },
            }
        },
        "联系我们": {
            icon: "mobile",
            class: "",
            link: "",
            sub: {}
        },
        "安全退出": {
            icon: "sign-out",
            class: "logout",
            link: "",
            sub: {}
        }
    },
    selfLink:"",
    showMenu: function () {
        //获取当前的link
        var pathname = window.location.pathname;
        console.log(pathname);
        var start = pathname.indexOf("FuckTheWorld/") + "FuckTheWorld/".length;
        common.selfLink = pathname.substr(start);
        console.log(common.selfLink);


        var menu = "";
        menu += '<div class="sideMenu">';
        menu += '<img class="logo" src="http://pinwheel-cn.com/public/home/images/sas-logo.png">';

        $.each(common.menu,function (key,data) {
            if (data.link == "")
                data.link = "javascript:void(0);";
            if (data.icon == "")
                data.icon = "arrow-right";
            var link = data.link;
            if(link.indexOf("../") == 0)
                link=link.substr(3);
            if(link == common.selfLink)
                data.icon += " on";
            data.icon += " "+data.class;
            console.log(link);
            menu+='<h3 class="am-icon-'+data.icon+'"><em></em> <a href="'+data.link+'">'+key+'</a></h3>';
            menu += ' <ul>';
            if (data.hasOwnProperty("sub") && !common.isEmptyObj(data.sub)) {
                menu += common.getSubMenu(data.sub);
            }
            menu += '</ul>';
        });
        menu += "</div>";

        console.log(menu);
        $(".admin-main").prepend(menu);
        common.menuJs();
    },
    getSubMenu: function (sub) {
        var menu = "";
        $.each(sub, function (key, data) {
            if (data.link == "")
                data.link = "javascript:void(0);";
            if (data.icon == "")
                data.icon = "arrow-right";

            var link = data.link;
            var active = data.class;
            if(link.indexOf("../") == 0)
                link=link.substr(3);
            if(link == common.selfLink)
                active = ' active';
            menu += '<li>';
            menu += '<a href="'+data.link+'" class="'+active+'"><span class="am-icon-'+data.icon+'"></span>'+key+'</a>';
            if (data.hasOwnProperty("sub") && !common.isEmptyObj(data.sub)) {
                menu += ' <ul>';
                menu += common.getSubMenu(data.sub);
                menu += '</ul>';
            }
            menu += '</li>';
        });
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
    menuJs:function () {
        $(".sideMenu").find("h3").removeClass("on");
        $(".sideMenu").find("a").each(function () {
           if($(this).hasClass("active")){
               $(this).parent().parent().prev().addClass("on");
           }
        });

        jQuery(".sideMenu").slide({
            titCell:"h3", //鼠标触发对象
            targetCell:"ul", //与titCell一一对应，第n个titCell控制第n个targetCell的显示隐藏
            effect:"slideDown", //targetCell下拉效果
            delayTime:300 , //效果时间
            triggerTime:150, //鼠标延迟触发时间（默认150）
            defaultPlay:true,//默认是否执行效果（默认true）
            returnDefault:false //鼠标从.sideMen移走后返回默认状态（默认false）
        });

        //安全退出
        $(".sideMenu").find("li.logout").click(function (e) {


            window.location.href="../index.html";
        });
    },
    showHeader:function(){

    },
    showFooter:function () {
        var footer = "<footer>";
        footer += '<div data-am-widget="gotop" class="am-gotop am-gotop-fixed" >'
            +'<a href="#top" title="回到顶部">'
            +'<span class="am-gotop-title">回到顶部</span>'
            +'<i class="am-icon-btn am-icon-chevron-up am-active"></i>'
            +'</a>'
            +'</div>';
        $(".admin-main").append(footer);
    },
    run: function () {
        this.showHeader();
        this.showMenu();
        this.showFooter();
    }
};
common.run();