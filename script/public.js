// var USER = localStorage.getItem( 'USER' ) && JSON.parse( localStorage.getItem( 'USER' ) );
const log=(val)=>{
    console.log(JSON.stringify(val))
}
var APP = {
    // 服务器地址
    HOST: {
        // 开发环境
        // dev: 'http://www.wololo.co.uk/api/',
        //  dev:'https://wololo.co.uk/api/',
        dev:'http://192.168.225.69/api/',
        // dev: 'https://jf2.suuzi.cn/api/',域名  改为 http://www.wololo.co.uk/    发布一版  测试下?

        // 正式环境
        formal: 'http://192.168.225.69/api/'
        // formal: 'https://wololo.co.uk/api/'
    },

     // 分页相关
    PAGE: {
        // 每页条数
        LIMT: 20,

        // 跳过条数初始化值
        SKIP_TEMP: 0,

        // 跳过条数
        SKIP: 0,




        // 起始页初始化
        START_PAGE_TEMP: 1,

        // 起始页
        START_PAGE: 1,

        // 跳过条数
        SKIP_PAGE: 10,
    },

    // html 目录
    HTML_PATH: 'widget://html/',

    TRUE: true,

    FALSE: false,

    YES: 1,

    NO: 0,

    // 当前应用标识
    CURRENT_APP_ID: 'ygjfapp',

    PAGE_PATH: {
        // 页面相对 widget 地址

        // 登陆页路径
        SIGN_IN: 'sign/signIn_win.html',

        // 首页路径
        HOME: 'home/home_win.html',
    },

    EV_NAME: {
        // 这里配置项目中所有事件
        // 每一个 window 被打开时都会产生一个事件，事件名为 html 名称

        // config.xml content 配置的路径被开时事件名
        ROOT: 'root',

        // 打开一个可以选择起始时间和结束时间的选择器弹窗
        TIME_SELECTOR_START_END_POP: 'TIME_SELECTOR_START_END_POPTIME_SELECTOR_START_END_POP',

        // 打开一个大文本域输入窗口
        INPUT_TEXT: 'INPUT_TEXTINPUT_TEXTINPUT_TEXTINPUT_TEXT',

        // 弹窗事件
        ALERT_POP: 'ALERT_POPALERT_POPALERT_POPALERT_POPALERT_POP',

        // 打开一个输入文本框弹窗
        INPUT_ALERT_POP: 'INPUT_ALERT_POPINPUT_ALERT_POPINPUT_ALERT_POP',

        // 打开扫码
        OPEN_BAR_CODE: 'OPEN_BAR_CODEOPEN_BAR_CODEOPEN_BAR_CODE',

        // 时间选择器
        TIME_SELECTOR_POP: 'TIME_SELECTOR_POPTIME_SELECTOR_POPTIME_SELECTOR_POP',

        // 打开一个底部多级选择弹窗
        MULTISTAGE_SELECTOR: 'MULTISTAGE_SELECTORMULTISTAGE_SELECTOR',

        // 首页地步导航切换
        HOME_NAV_SWITCH: 'HOME_NAV_SWITCHHOME_NAV_SWITCH',


        // 首页显示到窗口事件
        HOME_VIEWAPPEAR: 'HOME_VIEWAPPEARHOME_VIEWAPPEARHOME_VIEWAPPEAR',

        // 获取页面参数事件
        GET_PAGE_PARAM: 'GET_PAGE_PARAMGET_PAGE_PARAMGET_PAGE_PARAM',

        // 图片裁剪事件
        IMAGE_CLIP: 'IMAGE_CLIPIMAGE_CLIPIMAGE_CLIPIMAGE_CLIP',

        // 登录成功、退出登录、用户信息被更新
        LOGIN_OR_LOGOUT_OR_USERUPDATED: 'LOGIN_OR_LOGOUT_OR_USERUPDATEDLOGIN_OR_LOGOUT_OR_USERUPDATED',

        // 地步单选弹窗
        ACTION_SHEET: 'ActionSheetActionSheetActionSheet',

        // 年龄选择器
        AGE_SELECT: 'AGE_SELECTAGE_SELECTAGE_SELECTAGE_SELECT',

        // 城市选择器
        CITY_SELECTOR: 'CITY_SELECTORCITY_SELECTORCITY_SELECTOR',

        //地图选点
        MAP_SELECTION: 'MAP_SELECTIONMAP_SELECTIONMAP_SELECTIONMAP_SELECTION',

        //登录失效
        TOKEN_INVALID: 'TOKEN_INVALIDTOKEN_INVALID',

        //退出登录事件
        LOGIN_OUT: 'LOGIN_OUTLOGIN_OUT'


    },

    LC_NAME: {
        // 本地缓存集合

        // 当前环境
        ENV: 'ENVENVENVENVENVENV',

        //是否免翻墙环境
        IS_VPN: 'IS_VPNIS_VPNIS_VPNIS_VPN',

        // 登录过的账户名
        LOGIN_USERNAME: 'LOGIN_USERNAMELOGIN_USERNAME',

        // 用户信息
        USER: 'USERUSERUSERUSERUSERUSERUSER',

        //定位信息
        LOCATION: 'LOCATIONLOCATIONLOCATIONLOCATION',

        // 当前环境语言
        LANGUAGE: 'LANGUAGELANGUAGELANGUAGELANGUAGE'
    },


    //接口返回状态
    HTTP_STATUS: {
        SUCCESS: 1,
        ERROR: 0
    },

    // 现在的时间
    NOW_TIME: new Date().getTime() / 1000,

    //错误码表
    ERROR_CODE: {
        TOKEN_INVALID: 10001,//登录失效
        UNBIND: 10002, //第三方账号未绑定
        account_blocked: 10005, //账户被冻结
        unverified: 10006, //账户未验证
    },

    // 第三方登录
    LOGIN_TYPE: {
        WEIXIN: 1, // 微信登录
        QQ: 2, // QQ登录
        WEIBO: 3, // 微博
    },

    // 第三方支付方式
    PAY_TYPE: {
        aliPay: 1, //支付宝支付
        wxPay: 2, //微信支付
    },

    //富文本相关
    RICH_TEXT: {
        about_us: {
            type: 1,
            text: '关于我们'
        },
        user_agreement: {
            type: 1,
            text: '用户协议'
        },
        match_agreement: {
            type: 3,
            text: '《用户匹配协议》'
        },
        group_agreement: {
            type: 4,
            text: '《用户发布组局协议》'
        }
    },

    // 语言列表
    LANGUAGE_LIST: [{
        id: 'en-us',
        value: 'English'
    }, {
        id: 'zh-cn',
        value: '中文'
    }],

    // 性别类型
    SEX_TYPE: {
        NOT_SET: 0,// 未设置
        MAN: 1,// 男
        WOMAN: 2,//女
    },
    havaPaid:false,
    dom: function(_selector, _string) {
        if( _string ){
            return _selector.querySelector(_string);
        }else{
            return document.querySelector(_selector);
        }
    },

    domAll: function(_selector, _string) {
        if( _string ){
            return _selector.querySelectorAll(_string);
        }else{
            return document.querySelectorAll(_selector);
        }
    },

    // 判断这个对象是否为 dom 元素
    hasDom: function(_obj){
        return typeof _obj === 'object' ? _obj instanceof HTMLElement : _obj && typeof _obj === 'object' && _obj.nodeType === 1 && typeof _obj.nodeName === 'string';
    },

    fixIos7Bar: function(el) {
        var strDM = api.systemType;
        if (strDM == 'ios') {
            var numSV = parseInt(api.systemVersion, 10);
            var fullScreen = api.fullScreen;
            var iOS7StatusBarAppearance = api.iOS7StatusBarAppearance;
            if (el && numSV >= 7 && !fullScreen && iOS7StatusBarAppearance) {
                el.style.paddingTop = api.safeArea.top + 'px';
            }
        }
    },

    fixStatusBar: function(_selector) {
        var sysType = api.systemType,
            el = typeof _selector === 'string' ? APP.dom(_selector) : _selector;
        if (sysType == 'ios') {
            this.fixIos7Bar(el);
        } else if (sysType == 'android') {
            var ver = api.systemVersion;
            ver = parseFloat(ver);
            if (el && ver >= 4.4) {
                el.style.paddingTop = api.safeArea.top + 'px';
                // el.style.paddingTop = '25px';
            }
        }
    },


    fixTabBar: function(_selector) {
        var sysType = api.systemType,
            el = typeof _selector === 'string' ? APP.dom(_selector) : _selector;
            // el.style.paddingBottom = '50px';

        if (el && sysType == 'ios') {
            el.style.paddingBottom = api.safeArea.bottom + 'px';
        }
    },

    hasIos: function() {
        return api.systemType == 'ios';
    },

    // 获取应用版本
    appVersion: function() {
        return api.appVersion;
    },

    // 获取系统版本
    systemVersion: function() {
        return api.systemVersion;
    },

    // 是否开启了debug模式
    hasDebug: function() {
        return api.debug;
    },


    // 获取当前环境接口地址
    getHost: function(){
        var _env = fnCookie(APP.LC_NAME.ENV);
        if( _env == APP.YES ){
            return APP.HOST.formal;
        }else if( _env == APP.NO ){
            return APP.HOST.dev;
        }else{
            return APP.HOST.formal;
        }
    },


    // 移除启动页
    removeLaunchView: function() {
        var _param = {
            animation: {
                type: 'fade',
                duration: 300
            }
        };
        debugAlert('移除启动页', _param);
        api.removeLaunchView(_param);
    },

    // 重启APP
    rebootApp: function() {
        var _self = this;
        debugAlert('重启 APP');
        if( _self.hasIos() ){
            _start();
        }else{
            // android 下立马重启会有关闭APP的情况
            setTimeout(function(){
                _start();
            }, 300)
        }

        function _start(){
            api.rebootApp();
        }
    },

    // 关闭 APP
    closeWidget: function(){
        api.closeWidget({
            silent: true
        });
    },


    // 获取某个页面 APP 下所有参数
    /*
    APP.getPageParam({
        name: 'storeDetailsHeight_frm',                 //必填 |    ''      |     String        |  某个页面的名称
        key: '_frameAttr'                               //必填 |    ''      |     String        |  需要获取这个页面的字段名称
    }, function(ret){
            //ret |             |  Any     |  key 字段所对应的值
    })
    */
    getPageParam: function(_obj, _cb) {
        if (fnHasEmpty_public(_obj)) {
            _obj = {};
        } else if (typeof _obj === 'function') {
            _cb = _obj;
            _obj = {};
        }
        var _self = this;
        _obj.name = _obj.name || 'root';
        var _param = {
            name: [_self.EV_NAME.GET_PAGE_PARAM, _obj.name].join(''),
            extra: _obj
        }

        debugAlert('获取其他页面参数开始', _param)
        api.sendEvent(_param);

        var _sendName = [_self.EV_NAME.GET_PAGE_PARAM, _obj.name, 'send'].join('');
        api.addEventListener({
            name: _sendName
        }, function(ret, err) {
            debugAlert('获取其他页面参数结束', arguments)

            api.removeEventListener({
                name: _sendName
            });
            _cb && _cb(ret.value);
        });
    },

    // 初始化需要加载的函数
    initFn: function() {
        if (!fnHasEmpty_public(window['api'])) {
            // setTimeout(function() {
                api.parseTapmode();
                fnInputLimitInit_public();
                fnCacheImgs();
                fnCountDownInit_public();
            // }, 300);
        }
    },

    init: function(_cb,noback) {
        apiready = function() {
            APP._appVersion = APP.appVersion();
            APP._systemVersion = APP.systemVersion();

            var _param = (api.pageParam||{}).param || {};
            if( typeof _param == 'string' ){
                APP._param = _param = fnCloneObject_public(JSON.parse(_param));
            }else{
                APP._param = _param = fnCloneObject_public(_param);
            }

            if( api.frameName ){

            }else{
                // 每次启动应用时删除弹窗缓存
                if( api.winName == 'root' ){
                    fnRmCookie('POP');
                }
                var _param = {
                    name: api.winName,
                    extra: {}
                };
                debugAlert('被打开时发送一个事件', _param);
                api.sendEvent(_param);
            }

            var _paramEvName = [APP.EV_NAME.GET_PAGE_PARAM, api.frameName||api.winName].join('');
            api.addEventListener({
                name: _paramEvName,
            }, function(ret, err){
                debugAlert('当前页面被其他页面获取参数', arguments)
                api.sendEvent({
                    name: [_paramEvName, 'send'].join(''),
                    extra: APP[ret.value.key]
                })
            });
            if(noback){
                fnCookie('noback','1');
            }else{
                fnCookie('noback','2');
            }

            api.addEventListener({
                name: 'keyback'
            }, function(ret, err) {
                if(fnCookie('noback')=="1"){
                    api.execScript({
                        frameName: 'mergePay_frm',
                        script: 'goBack()'
                    });
                }else{
                    fnClose();
                }
            });

            APP.initFn();
            _cb();
            getPaid();
        }
    },

    exitApp: function() {
        api.setWinAttr({
            slidBackEnabled: false
        });
        api.addEventListener({
            name:'viewappear'
        },function(ret,err){
            api.addEventListener({
                name: 'keyback'
            }, function(ret, err) {
                fnClose(function() {
                    if (APP._keybackStatus) {
                        api.closeWidget({
                            silent: true
                        });
                    } else {
                        api.toast({
                            //msg: fnLanguage_public('再按一次退出') + api.appName
                            msg: fnLanguage_public("再按一次退出") + api.appName
                        });
                        APP._keybackStatus = true;
                    }
                    setTimeout(function() {
                        APP._keybackStatus = false;
                    }, 2000);
                });
            });
        });

    }
};
function getPaid() {
    return;
    if(APP._param._path&&APP._param._path.indexOf('sign/')== -1&&APP._param._path.indexOf('pop/')){
        setInterval(()=>{
            let dt=new Date();
            if(dt.getMinutes()%3==0){
                fnAjax({
                    url: 'order/group/remindOrderPay',
                    hasProgress:{
                        status:0
                    }
                },function (ret) {
                    if(ret.data&&JSON.stringify(ret.data)!="[]"){
                        var order_id;
                        for(var v in ret.data){
                            order_id=ret.data[v].id
                        }
                        api.openFrame({
                            name: 'aPublicPtAlert_pop',
                            url: [APP.HTML_PATH, 'pop/aPublicPtAlert_pop.html'].join(''),
                            rect: {
                                x: 0,
                                y: 0,
                                w:'auto',
                                h:'auto'
                            },
                            pageParam:{
                                order_id
                            },
                            bounces: false,
                            bgColor: 'rgba(0,0,0,.3)',
                            vScrollBarEnabled: true,
                            hScrollBarEnabled: true,
                        });
                    }
                })
            }

        },60000)
    }


}

// new Date( _time ).Format('yyyy年MM月dd hh时mm分ss秒')
// new Date( _time ).getYear()
Date.prototype.Format = function(fmt) { //author: meizz
    var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
};



// 多语言切换方法
// _text：{day}领取后当日开始{day}天内有效{day}
// _obj.day     为文字内需要动态改变的变量
function fnLanguage_public(_text, _obj, _cb) {
    if (fnHasEmpty_public(_obj)) {
        _obj = {};
    } else if (typeof _obj === 'function') {
        _cb = _obj;
        _obj = {};
    }
    //
    // var _text = _obj.text;
    // if( typeof _obj == 'string' ){
    //     _text = _obj;
    // }

    if(typeof language_package != "undefined"){
        var _json = language_package,
            _languageName = fnGetLanguageName_public();

        // 当前语言环境是否为中文
        if( fnHasLanguageCN_public() ){
            return _callback(_text);
        }else{
            // 需要翻译的 _text 是否在语言包里
            if( _text in _json ){
                // 是否存在当前语言环境的翻译
                if(  _languageName in _json[_text]  ){
                    return _callback(_json[_text][_languageName]);
                }else{
                    return _callback(_text);
                }
            }else{
                return _callback(_text);
            }
        }
    }else{
        return _callback(_text);
    }

    function _callback(_text){
        var _keys = Object.keys(_obj);
        for( var x in _keys ){
            _text = _text.replace(new RegExp('{'+_keys[x]+'}', 'g'), _obj[_keys[x]]);
        }
        return _text;
    }
}

// 获取当前语言环境名称
function fnGetLanguageName_public(){
    //zh-cn 中文简体
    //zh-tw 中文繁体
    //en-us English
    //ja-jp 日本

    var _data = fnCookie(APP.LC_NAME.LANGUAGE);
    // var _languageName = (navigator.language || navigator.browserLanguage).toLowerCase();
    var _languageName = 'en-us';
    if (_data) {
        _languageName = _data.id;
    }

    // debugAlert('当前语言', _languageName);
    return _languageName;
}

// 当前是否为中文语言
function fnHasLanguageCN_public(){
    return fnGetLanguageName_public() == 'zh-cn';
}


// 秒转时分秒格式
function formatTime_public(seconds) {
    return [
        parseInt(seconds / 60 / 60),
        parseInt(seconds / 60 % 60),
        parseInt(seconds % 60)
    ].join(":").replace(/\b(\d)\b/g, "0$1");
}

// 打开一个window、frame或者pop窗口
/*
fnOpen('home/home_win.html', {
    param: {                                    //选填 |    {}      |     Object        |  传递到下一个页面的参数
        __isRukuPage: APP.YES                   //                                        已双下划线开头的变量(__)，在被打开之后所有的窗口都会有此参数
        …
    },
    delay: 300,                                 //选填 |    0       |     Number        |  窗口延迟多久之后被打开。单位毫秒
    repeat: APP.YES                             //选填 |    false   |     Boolean       |  窗口是否可以重复被打开
});
*/
function fnOpen(_path, _obj, _cb) {
    if (fnHasEmpty_public(_obj)) {
        _obj = {};
    } else if (typeof _obj === 'function') {
        _cb = _obj;
        _obj = {};
    }

    if (_obj.hasLogin) {
        fnHasLogin_public(function() {
            _fnOpen();
        });
    } else {
        _fnOpen();
    }

    function _fnOpen() {
        fnKeyboardBlur_public();
        event && event.stopPropagation();
        APP._param = APP._param || {};
        var _prevParam = fnCloneObject_public(APP._param);

        var _pageParam = _fnHas(_obj.param, {});
        _pageParam._path = _path;
        for( var x in _prevParam ){
            if( x.substr(0, 2) === '__' && ! (x in _pageParam) ){
                _pageParam[x] = _prevParam[x];
            }
        }

        var _param = {
            name: fnGetPathName_public(_path),
            url: fnVerify_public('Url').test(_path) ? _path : APP.HTML_PATH + _path,
            pageParam: {
                param: _pageParam
            },
            softInputBarEnabled: _fnHas(_obj.softInputBarEnabled, true),
            softInputMode: _fnHas(_obj.softInputBarEnabled, 'auto'),
            allowEdit: _fnHas(_obj.allowEdit, false),
            reload: _fnHas(_obj.allowEdit, false),
            delay: _fnHas(_obj.delay, 0),
            bgColor: _obj.bgColor,
            slidBackType: _fnHas(_obj.slidBackType, 'full'),
            slidBackEnabled: _fnHas(_obj.slidBackEnabled, true),
            animation: _obj.animation
        };
        if (_obj.repeat) {
            _param.name += fnDateNow_public();
        }

        if (_param.name.indexOf('_win') === -1) {
            if (_param.name.indexOf('pop') !== -1) {
                var _arrPop = fnCookie('POP') || [],
                    _isAdd = true;
                for( var i in _arrPop ){
                    if( _arrPop[i].winName == api.winName && _arrPop[i].frameName == _param.name){
                        _isAdd = false;
                    }
                }
                if( _isAdd ){
                    _arrPop.push({
                        isKeyback: _obj.isKeyback == 0 ? true : false,
                        frameName: _param.name,
                        winName: api.winName,
                        time: fnDateNow_public()
                    });
                    fnCookie('POP', _arrPop);
                }

                _param.frameName = _param.name;
            }

            _obj.rect = _obj.rect || {
                marginLeft: 0,    //相对父页面左外边距的距离，数字类型
                marginTop: 0,     //相对父页面上外边距的距离，数字类型
                marginBottom: 0,  //相对父页面下外边距的距离，数字类型
                marginRight: 0    //相对父页面右外边距的距离，数字类型
            };

            _param.rect = _obj.rect;
            _param.pageParam.param._rect = _obj.rect;

            for (var x in _prevParam) {
                if (!(x in _param.pageParam.param)) {
                    _param.pageParam.param[x] = _prevParam[x];
                }
            }
            _param.pageParam.param = JSON.stringify(_param.pageParam.param);
            debugAlert('打开一个 frame: ', _param);
            api.openFrame(_param);
            _cb&&_cb();
        } else {
            _param.bgColor = _fnHas(_obj.bgColor, 'rgba(255, 255, 255, 1)');
            _param.animation = _fnHas(_param.animation, {
                type: 'push',
                subType: 'from_right',
                duration: 300
            })
            _param.pageParam.param = JSON.stringify(_param.pageParam.param);
            debugAlert('打开一个window: ', _param);
            api.openWin(_param);
            _cb&&_cb();
        }
    }

    function _fnHas(_value, _default){
        return fnHasEmpty_public(_value) ? _default : _value;
    }
}



// 判断是否已经登录
function fnHasLogin_public(_obj, _cb) {
    if (fnHasEmpty_public(_obj)) {
        _obj = {};
    } else if (typeof _obj === 'function') {
        _cb = _obj;
        _obj = {};
    }
    fnCookie(APP.LC_NAME.USER, function(_user) {
        if (_user) {
            _cb && _cb();
        } else {
            // 返回登陆页
            fnBackLogin_public();
        }
    })
}


// 返回登陆页
function fnBackLogin_public(){
    fnRmCookie(APP.LC_NAME.USER);
    api.addEventListener({
        name:'viewdisappear'
    },function(){
        api.closeWin();
    });
    api.closeToWin({
        name:"signIn"
    });
    api.execScript({
        name: 'signIn_win',
        script: 'stopBack()'
    });
    fnOpen('sign/signIn_win.html')
}




// 获取一个路径中的名称
function fnGetPathName_public(_path) {
    if (_path) {
        _path = _path.split('/');
        var _name = _path[_path.length-1].split('.html')[0];
        if( _name ){
            return _name;
        }else{
            return 'window'+fnDateNow_public()
        }
    } else {
        return _path;
    }
}




// 判断一个变量是否设置过值
function fnHasEmpty_public(_var) {
    return typeof _var === 'undefined';
}


// 获取当前时间戳
function fnDateNow_public() {
    return Date.now();
}


// 打开一个大文本域输入窗口
/*
    fnInputText_public({
        title: '提示',                 //选填 |    ''        |  String    |  页面标题
        msg: '回显内容',                //选填 |    ''        |  String    |  默认输入的内容
        placeholder: '提示内容',        //选填 |    ''        |  String    |  提示文案
        maxlength: 100,                //选填 |              |  Number    |  最大输入长度（不设置就没有长度限制）
        submitText: '保存',             //选填 |    '保存'    |  Number    |  提交按钮的文案
        isForcedInput: true            //选填 | false        |  Boolean   |  是否强制输入
    }, function(ret){
        // ret.msg                     //必返 |              |  String    |  输入的内容
        alert(debugAlert(arguments))
    })
*/
function fnInputText_public(_obj, _cb) {
    if (fnHasEmpty_public(_obj)) {
        _obj = {};
    } else if (typeof _obj === 'function') {
        _cb = _obj;
        _obj = {};
    }

    if( _cb ){
        _obj.model = true;
    }

    _obj.time = fnDateNow_public();
    fnKeyboardBlur_public();
    fnOpen('public/aPublicInputText_win.html', {
        param: _obj
    });

    api.addEventListener({
        name: APP.EV_NAME.INPUT_TEXT
    }, function(ret, err) {
        debugAlert('fnInputText_public', arguments)
        if( ret.value.hasModel ){
            // 点击背景关闭的窗口

        }else {
            _cb && _cb(ret.value);
        }
        api.removeEventListener({
            name: APP.EV_NAME.INPUT_TEXT
        });
    });
}



// 确认弹窗
/*
    fnAlert_public({
        title: '提示',                 //可选 |    ''     | string     |  弹窗标题文案，不传则不显示弹窗顶部文案
        msg: '要打开哪个环境？',         //可选 |    ''     | string     |  弹窗内容 （可解析html格式内容），不传则不显示内容
        buttons: [{                   //必选 |    []      | Array     |  弹窗底部按钮，至少传入一个按钮（数组有多少就显示多少按钮）
            text: '测试环境',          //必选 |    ''      | string     |  按钮文案
            active: true,             //可选 |    false   | Boolean    |  是否高亮
            countDown: 10,    //选填     |      |     Number  |  是否有倒计时效果(大于0则会有倒计时的效果)
            callback: function() {    //必选 |            | Function   | 点击按钮时触发该回调函数
                alert('点击测试环境')
            }
        }, {
            text: '正式环境',
            callback: function() {
                alert('点击正式环境')
            }
        }]
    }, function(){                    //可选 |            | Function   | 如果设置回调函数，打开的弹窗则可以点击背景关闭，并触发该回调函数，否则点击背景不能关闭弹窗
        alert('点击了背景')
    });
*/
function fnAlert_public(_obj, _cb) {
    if (fnHasEmpty_public(_obj)) {
        _obj = {};
    } else if (typeof _obj === 'function') {
        _cb = _obj;
        _obj = {};
    }

    if( _cb ){
        _obj.model = true;
    }

    _obj.time = fnDateNow_public();
    fnKeyboardBlur_public();
    fnOpen('pop/aPublicAlert_pop.html', {
        param: _obj
    });

    api.addEventListener({
        name: APP.EV_NAME.ALERT_POP
    }, function(ret, err) {
        debugAlert('fnAlert_public回调', arguments)
        if( ret.value.hasModel ){
            // 点击背景关闭的窗口
            _cb && _cb();
        }else {
            _obj.buttons[ret.value.buttonIndex].callback();
        }
        api.removeEventListener({
            name: APP.EV_NAME.ALERT_POP
        });
    });
}





// 时间选择器
// fnTimeSelector_public({
//     date: fnValue($(_el).find('span')[0]),                      //可选     |   ''       | String/Date/时间戳 |  设置默认显示的时间（格式 'yyyy/MM/dd hh:mm:ss'显示年月日时分秒 |'yyyy/MM/dd hh'显示年月日时 | 'yyyy/MM/dd' 显示年月日| 'yyyy/MM' 显示年月| 'yyyy' 显示年| new Date()、1541224673842，如果参数不存在则显示当前时间
//     title: ['选择时间1', '选择时间2', '选择时间3'],                 //可选     | '时间选择'  | String/Array      |  选择器标题，如果是数组多个值，那么打开的选择器将根据标题的顺序进行多次选择
//     is_quarter: false,                                          //可选     | false      | Boolean           |  是否将以刻度的方式显示分
//     itemShowCount: 5,                                           //可选     |    5       | Number            |  显示的行数
//     itemHeight: 55,                                             //可选     |    55      | Number            |  行高度（单位px）
//     is_show_unit: true                                          //可选     | true       | Boolean           |  是否显示时间的单位
// }, function(ret){
//                                                                 //ret.date |             | String/Array      |  如果title为字符串或者数组长度为1，这里返回一个时间格式字符串，否则返回一个title长度一致的数组
//     debugAlert(arguments)
// })
function fnTimeSelector_public(_obj, _cb) {
    if (fnHasEmpty_public(_obj)) {
        _obj = {};
    } else if (typeof _obj === 'function') {
        _cb = _obj;
        _obj = {};
    }
    _obj.time = fnDateNow_public();
    fnKeyboardBlur_public();
    fnOpen('pop/aPublicTimeSelector_pop.html', {
        param: _obj
    });

    api.addEventListener({
        name: APP.EV_NAME.TIME_SELECTOR_POP
    }, function(ret, err) {
        // 从透明的地方关闭的窗口
        if( ret.value.hasModel ){
            if( ret.value.closeCallback ){
                _obj.closeCallback && _obj.closeCallback();
            }else{

            }
        }else {
            _cb && _cb(ret.value);
        }
        api.removeEventListener({
            name: APP.EV_NAME.TIME_SELECTOR_POP
        });
    });
}





// 打开扫码
function fnOpenBarCode_public(_obj, _cb){
    if (fnHasEmpty_public(_obj)) {
        _obj = {};
    } else if (typeof _obj === 'function') {
        _cb = _obj;
        _obj = {};
    }

    _obj.time = fnDateNow_public();
    fnKeyboardBlur_public();

    fnHasPermission_public({
        names: ['camera', 'photos', 'storage']        //必填 |      |   Array||String  |  需要判断哪些权限是否允许
    }, function(){
        _fnStart();
    })

    function _fnStart(){
        fnOpen('public/aPublicScan_win.html', {
            param: _obj,
            delay: 300,
            bgColor: 'rgba(0, 0, 0, 0)',
            animation: {
                type: 'movein',                //动画类型（详见动画类型常量）
                subType: 'from_bottom',       //动画子类型（详见动画子类型常量）
                duration:300                //动画过渡时间，默认300毫秒
            }
        });

        api.addEventListener({
            name: APP.EV_NAME.OPEN_BAR_CODE
        }, function(ret, err) {
            debugAlert('fnOpenBarCode_public', arguments)
            // 从透明的地方关闭的窗口
            if( ret.value.hasModel ){

            }else {
                _cb && _cb(ret.value);
            }

            api.removeEventListener({
                name: APP.EV_NAME.OPEN_BAR_CODE
            });
        });
    }
}





// 打开一个可以选择起始时间和结束时间的选择器弹窗
// fnTimeSelectorStartEnd_public({
//     date: [fnValue($(_el).find('span')[0]), fnValue($(_el).find('span')[0])],                      //可选     |   ''       | String/Date/时间戳 |  设置默认显示的时间（格式 'yyyy/MM/dd hh:mm:ss'显示年月日时分秒 |'yyyy/MM/dd hh'显示年月日时 | 'yyyy/MM/dd' 显示年月日| 'yyyy/MM' 显示年月| 'yyyy' 显示年| new Date()、1541224673842，如果参数不存在则显示当前时间
//     title: '请选择开始时间和结束时间',                                                                 //可选     | '时间选择'  | String/Array      |  选择器标题，如果是数组多个值，那么打开的选择器将根据标题的顺序进行多次选择
//     itemShowCount: 5,                                                                              //可选     |    5       | Number            |  显示的行数
//     itemHeight: 55,                                                                                //可选     |    55      | Number            |  行高度（单位px）
//     is_show_unit: false                                                                            //可选     | true       | Boolean           |  是否显示时间的单位
// }, function(ret){
//                                                                                                     //ret.date |             | Array      |  否则返回一个date长度一致的数组
//     alert(debugAlert(arguments))
//     fnValue($(_el).find('span')[0], new Date(ret.date[0]).Format('yyyy/MM/dd'));
// })
function fnTimeSelectorStartEnd_public(_obj, _cb) {
    if (fnHasEmpty_public(_obj)) {
        _obj = {};
    } else if (typeof _obj === 'function') {
        _cb = _obj;
        _obj = {};
    }
    _obj.time = fnDateNow_public();
    fnKeyboardBlur_public();
    fnOpen('pop/aPublicTimeStartEndSelector_pop.html', {
        param: _obj
    });

    api.addEventListener({
        name: APP.EV_NAME.TIME_SELECTOR_START_END_POP
    }, function(ret, err) {
        // 从透明的地方关闭的窗口
        if( ret.value.hasModel ){

        }else {
            _cb && _cb(ret.value);
        }
        api.removeEventListener({
            name: APP.EV_NAME.TIME_SELECTOR_START_END_POP
        });
    });
}



// 打开一个底部多级选择弹窗
// var _data = [],
//     _data2 = [];
// for (var i = 1; i < 30; i++) {
//     _data.push({
//         id: i,                            //必填 |           | Number/String |  选项 id
//         value: i+'月'                     //必填 |           | String        |  选项显示的值
//     });
// }
// for (var i = 1; i < 30; i++) {
//     _data2.push({
//         id: i,
//         value: i+'天'
//     });
// }
//
// fnMultistageSelector_public({
//     active: [4, 5],                      //必填 |               | Array |  默认被选中的值，对应 data 中的 id，数组长度与 data 长度一致
//     data: [_data, _data2],               //必填 |               | Array |  需要选择的数据源，数组中一组数据表示一组选项
//     title: '多级选择器'
// }, function(ret){
//     // ret                               // Array |  如果点击确定按钮该回调则会触发，并返回数组数据，数组索引与传入数据源 data 一一对应
//     alert(debugAlert(arguments))
// })
function fnMultistageSelector_public(_obj, _cb) {
    if (fnHasEmpty_public(_obj)) {
        _obj = {};
    } else if (typeof _obj === 'function') {
        _cb = _obj;
        _obj = {};
    }
    _obj.time = fnDateNow_public();
    fnKeyboardBlur_public();

    _obj.data[0].forEach((item)=>{
        item.value = fnLanguage_public(item.value)
       })
    fnOpen('pop/aPublicChoiceOfPlace_pop.html', {
        param: _obj
    });

    api.addEventListener({
        name: APP.EV_NAME.MULTISTAGE_SELECTOR
    }, function(ret, err) {
        // 从透明的地方关闭的窗口
        if( ret.value.hasModel ){

        }else {
            _cb && _cb(ret.value.data);
        }
        api.removeEventListener({
            name: APP.EV_NAME.MULTISTAGE_SELECTOR
        });
    });
}



// 打开一个输入弹窗
/*
fnOpenInputPop_public({
    title: '提示',                //选填 |           |  String    |  选项 id
    msg: '回显内容',               //必填 |           |  String    |  选项 id
    placeholder: '提示内容',
    isForcedInput: false,         //选填 | false     |  Boolean   |  是否强制输入
    maxlength: 10,                //选填 |            |  Number   |  最大输入长度（不设置就没有长度限制）
    buttons: [{                   //必选 |    []      | Array     |  弹窗底部按钮，至少传入一个按钮（数组有多少就显示多少按钮）
        text: '测试环境',          //必选 |    ''      | string     |  按钮文案
        active: true,             //可选 |    false   | Boolean    |  是否高亮
        callback: function(ret) {    //必选 |            | Function   | 点击按钮时触发该回调函数
            // ret.text             输入的内容
            debugAlert(arguments)
            alert('测试环境')
        }
    }, {
        text: '正式环境',
        callback: function(ret) {
            debugAlert(arguments)
            alert('正式环境')
        }
    }]
}, function(){                  //可选 |            | Function   | 如果设置回调函数，打开的弹窗则可以点击背景关闭，并触发该回调函数，否则点击背景不能关闭弹窗
    alert(1)
});
*/
function fnOpenInputPop_public(_obj, _cb){
    if (fnHasEmpty_public(_obj)) {
        _obj = {};
    } else if (typeof _obj === 'function') {
        _cb = _obj;
        _obj = {};
    }
    event && event.stopPropagation();

    if( _cb ){
        _obj.model = true;
    }


    _obj.time = fnDateNow_public();
    fnKeyboardBlur_public();
    fnOpen('pop/aPublicInput_pop.html', {
        // softInputMode: 'resize',
        param: _obj
    });

    api.addEventListener({
        name: APP.EV_NAME.INPUT_ALERT_POP
    }, function(ret, err) {
        // 从透明的地方关闭的窗口
        if( ret.value.hasModel ){
            _cb && _cb(ret);
            debugAlert("透明处关闭");
        }else {
            _obj.buttons[ret.value.buttonIndex].callback(ret.value);
        }
        api.removeEventListener({
            name: APP.EV_NAME.INPUT_ALERT_POP
        });
    });
}






// 打开富文本展示页面
function fnOpenRichText_public(_obj, _cb,type){
    if (fnHasEmpty_public(_obj)) {
        _obj = {};
    } else if (typeof _obj === 'function') {
        _cb = _obj;
        _obj = {};
    }
    fnOpen('public/aPublicRichText_win.html', {
        param: _obj
    });
}



// 将所有输入框加上输入验证
// 元素上只需要加上 data-limit-type 即可，属性值为 fnVerifyInput_public 配置过的校验值，如 Phone，验证国内11为手机号
// fnInputLimitInit_public()
function fnInputLimitInit_public(_obj, _cb){
    if (fnHasEmpty_public(_obj)) {
        _obj = {};
    } else if (typeof _obj === 'function') {
        _cb = _obj;
        _obj = {};
    }
    var _els = APP.domAll('input[data-limit-type],textarea[data-limit-type]');
    if( _els.length ){
        for( var i = 0; i < _els.length; i++ ){
            fnInputLimit_public({
                el: _els[i]
            })
        }
    }
}




// 限制输入框输入的参数
// fnInputLimit_public({
//     el: $('#money')[0],                     //可选 |           |    Element  |  需要限制的输入元素
//     limitType: 'Phone'                      //可选 |   ''      |    String   |  限制类型，如果该字段没有传入则使用 el 的 ‘data-limit-type’ 属性值（该值必须在 fnVerifyInput_public 函数配置过验证规则）
// })
function fnInputLimit_public(_obj, _cb){
    if (fnHasEmpty_public(_obj)) {
        _obj = {};
    } else if (typeof _obj === 'function') {
        _cb = _obj;
        _obj = {};
    }

    if( $(_obj.el).attr('data-limit-has') ){

    }else{
        _fn();
    }

    function _fn(){
        $(_obj.el).attr('data-limit-has', true);
        fnInputListener_public([_obj.el], function(){
            var _type = _obj.limitType || $(_obj.el).attr('data-limit-type') || '',
                _value = fnValue(_obj.el);
            if( _type ){
                _result = fnVerifyInput_public(_type).exec(_value);
                if( _result && _result.length ){
                    fnValue(_obj.el, _result[0]);
                }else{
                    fnValue(_obj.el, '');
                }
            }
        })
    }
}





// 连续验证，适用于输入时验证格式
// fnVerify_public( 'Phone' ).test( fnValue( '#username' )
function fnVerifyInput_public(type) {
    if (type === 'Phone') {                                     //手机号
        return /^1\d{0,10}/;
        // return /{6,16}/;
    } else if (type === 'Money') {                              //金额
        return /\d+\.?\d{0,2}/igm;
    } else if (type === 'CustomNumber') {                       //数字，可输入3位小数
        return /\d+\.?\d{0,3}/igm;
    } else if (type === 'Number') {                             //纯数字
        return /\d*/;
    } else if (type === 'Alphanumeric1') {                       //Alphanumeric 数字或者字母
        return /[0-9a-zA-Z]*/;
    } else if (type === 'Email') {                       //数字或者字母
        return /[0-9a-zA-Z|@|_|.]*/;
    } else if (type === 'ID' ) {                                //身份证验证
        return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
    }else{
        return /.*/;
    }
};


// 一次性验证，适用于提交时验证格式
// fnVerify_public( 'Phone' ).test( fnValue( '#username' )
function fnVerify_public(_type) {
    if (_type === 'Email') { //邮箱验证
        return /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
    } else if (_type === 'Phone') {  //手机号验证
        return /^1\d{10}$/;
    } else if (_type === 'Tel') {    //座机验证
        return /^0\d{2,3}-?\d{7,8}$/;
    } else if (_type === 'bankCard') { //银行卡验证
        return /^(\d{16}|\d{19})$/;
    } else if (_type === 'ID') { //身份证验证
        return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
    } else if (_type === 'Password') { //密码验证
        // return /^.{6,16}$/;     //6 到 16 位字符串
        return /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,18}$/;         //6 到 18 位数字加字母组合
        // return /^.{6,16}$/;
    } else if (_type === 'Money') { //金额验证
        return /\d+\.?\d{0,2}/igm;
    } else if (_type === 'Url') { //地址验证
        return /^http:|https:|widget:/;
    } else if (_type === 'MatchNumericLetters') {   //匹配字符串中数字或者字母
        return /[0-9a-z]*/;         //
    }else{
        return /.*/;
    }
};




// 监听键盘是否弹起
function fnKeyboardListener_public(_obj, _cb) {
    if (fnHasEmpty_public(_obj)) {
        _obj = {};
    } else if (typeof _obj === 'function') {
        _cb = _obj;
        _obj = {};
    }

    if (APP.hasIos()) {
        api.addEventListener({
            name: 'keyboardshow'
        }, function(ret) {
            debugAlert('键盘弹起', arguments)
            _cb && _cb(ret.h);
        });

        api.addEventListener({
            name: 'keyboardhide'
        }, function(ret) {
            debugAlert('键盘收起', arguments)
            _cb && _cb(false);
        });
    } else {
        var _frameHeight = $(window).height();
        window.addEventListener('resize', function() {
            if ($(window).height() >= _frameHeight) {
                _cb && _cb(0);
            } else {
                _cb && _cb(_frameHeight-$(window).height());
            }
        });
    }
}


// 监听输入事件
function fnInputListener_public(_array, _cb) {
    var _data = {};
    _array = typeof _array == 'string' ? [_array] : _array;
    for (var x in _array) {
        _data[_array[x]] = '';
        if( typeof _array[x] == 'string' ){
            var _el = APP.dom(_array[x]);
        }else{
            var _el = _array[x];
            _array[x] = fnDateNow_public();
        }
        _fn(_el, _array[x]);
    }
    // debugAlert(_array)
    function _fn(_el, _name) {
        if(!_el){
            return;
        }
        if (APP.hasIos()) {
            _el.addEventListener('compositionstart', function() {
                _data[_name] = fnValue(_el);
                _el.setAttribute('data-input', true);
                // debugAlert('输入开始', _txt)
            });
            _el.addEventListener('compositionend', function() {
                _data[_name] = fnValue(_el);
                // debugAlert('输入结束', _txt)
                _el.removeAttribute('data-input');
                _cb && _cb(_data);
            });
            _el.addEventListener('input', function() {
                _data[_name] = fnValue(_el);
                if (!_el.getAttribute('data-input')) {
                    // debugAlert('正在输入', _txt)
                    _cb && _cb(_data);
                }
            });
        } else {
            _el.addEventListener('input', function() {
                for (var x in _array) {
                    _data[_array[x]] = fnValue(_array[x]);
                    // var _el = APP.dom();
                }
                // _data[_name] = fnValue(_el);
                _cb && _cb(_data);
            });
        }
    }
}
//通过时间戳计算时间
function formatduring(mss){
    var days = parseInt(mss / (1000 * 60 * 60 * 24));
    var hours = parseInt((mss % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = parseInt((mss % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = (mss % (1000 * 60)) / 1000;
    if(days<=0&&hours<=0&&minutes<=0&&seconds<=0){
        return "00:00:00";
    }
    return (days*24||0)+hours + " : " + minutes + " : " +seconds;
}


// 组装一个 get 请求参数
function fnConvertParam_public(param, _symbol) {
    var _param = [],
        _symbol = fnHasEmpty_public(_symbol) ? '?' : _symbol;
    for (var key in param) {
        if (typeof param[key] == 'function') {
            continue;
        }
        if (param[key] instanceof Object) {
            _param.push(key + '=' + JSON.stringify(param[key]));
        } else {
            if( ! fnHasEmpty_public(param[key]) ){
                _param.push(key + '=' + param[key]);
            }
        }
    }
    return _symbol + _param.join('&');
};


// ajax 数据交互
/*
    fnAjax({
        url: 'users/register',
        data: {
            username: fnValue( '#username' )
        },
        cache: true     //是否需要缓存此接口，以备断网访问
    }, function(ret, err){
        if( ret ){

        }else{
            // 错误处理
            fnToast(err.body.error.message);
        }
    });
*/
function fnAjax(_obj, _cb) {
    if(fnHasEmpty_public(_obj.hasProgress)){
        // fnSysShowProgress_public(_obj.hasProgress);
        fnShowProgress_public();
    }else{
        if(_obj.hasProgress.status){
            // fnSysShowProgress_public(_obj.hasProgress);
            fnShowProgress_public();
        }
    }

    if(_obj.data&&_obj.data.he){
        fnCloseProgress_public()

    }

    if( fnHasEmpty_public(_obj.isBlur) || _obj.isBlur){
        fnKeyboardBlur_public();
    }

    _obj.data = _obj.data || {};
    var _headers = {
        // User_Agent: 'mecoxlance',
        // HTTP_USER_AGENT: 'mecoxlance'
        // 'User-Agent': 'mecoxlance'
    };
    // _obj.data.platform = api.systemType;
    if (_obj.model) {
        fnOpenModel();
    };
    var _timer = fnDateNow_public();
    var _data = {};

    fnCookie(APP.LC_NAME.USER, function(_user) {
        if (_user ) {
            if(_user.user){
                if(_user.user.parent_id){
                    _obj.data.user_enterprise_id = _user.user.parent_id;
                }else{
                    _obj.data.user_enterprise_id = _user.user.id;
                }
            }

            _headers['XX-Token'] = _user.token;
        }
        _headers['XX-Device-Type'] = 'mobile';
        _obj.data.user_type = 2;
        _obj.data.device_type = 'mobile';

        // 传入当前城市数据
        //var _city = fnCookie(APP.LC_NAME.CITY_INFO);
        var _city = fnCookie(APP.LC_NAME.CITY_INFO);
        if( _city && _city.city ){
            if( fnHasEmpty_public(_obj.data.address_id) ){
                _obj.data.address_id = _city.id;
                // _obj.data.address_id =8 || _city.id;
            }
            if( fnHasEmpty_public(_obj.data.address_city_name) ){
                _obj.data.address_city_name =  _city.city;
            }
        }

        // 传入设备当前经纬度数据
        var _latLon = fnCookie(APP.LC_NAME.LOCATION);
        if( _latLon ){
            if( _latLon.lat && fnHasEmpty_public(_obj.data.lat) ){
                _obj.data.lat = _latLon.lat;
            }

            if( _latLon.lon && fnHasEmpty_public(_obj.data.lon) ){
                _obj.data.lon = _latLon.lon;
            }
        }

        var _url = APP.getHost()+_obj.url;

        _obj.method = _obj.method ? _obj.method.toLowerCase() : 'post';
        if (_obj.files) {
            _data.files = _obj.files;
            _obj.dataType = 'json';
            // _headers['Content-Type'] = 'application/json;charset=UTF-8';
        } else {
            // application/json;charset=UTF-8
            _headers['Content-Type'] = 'application/json;charset=UTF-8';
            // _headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
            // if( ['delete', 'get'].indexOf(_obj.method) != -1){
            if( ['delete', 'get'].indexOf(_obj.method) != -1){
                _url += fnConvertParam_public(_obj.data);
            }else{
                // _data.values = JSON.stringify(_obj.data);
                // _data.data = JSON.parse(JSON.stringify(_obj.data));
                // for( var x in _obj.data ){
                //     if( _obj.data[x] instanceof Array ){
                //         _obj.data[x] = JSON.stringify(_obj.data[x]);
                //     }else{
                //         for( var j in _obj.data[x] ){
                //             if( _obj.data[x][j] instanceof Array ){
                //                 _obj.data[x][j] = JSON.stringify(_obj.data[x][j]);
                //             }else{
                //
                //             }
                //         }
                //     }
                // }
                _data.body = JSON.stringify(_obj.data);
            }
        }

        _obj.dataType = 'json';
        var _param = {
            url: _url,
            encode: true,
            // tag: _obj.url,
            method: _obj.method,
            cache: false,
            headers: _headers,
            // 苹果对json数据可能会乱序，所以将返回的数据全部原模原样返回
            dataType: _obj.dataType || 'text',
            timeout: _obj.timeout || 30,
            report: _obj.report || false,
            data: _data || {}
        };
        // if( _method != 'get' ){
        //     _param.method = _method;
        // }
        // alert(debugAlert(_param))
        // 判断是否发起 ajax 请求
        // if (!fnCookie('HAS_AJAX')) {
        //     debugAlert('Ajax: ' + _obj.url + '发起请求 >> ', ['否', '是'][+_obj.cache], _param, '请求参数', _obj.data);
        //     if (_obj.cache) {
        //         _fnCache();
        //     } else {
        //         _fnReq();
        //     }
        // }
        debugAlert('Ajax: ' + _obj.url + '发起请求 >> ', ['否', '是'][+_obj.cache], _param, '请求参数', _obj.data);
        if (_obj.cache) {
            _fnCache();
        } else {
            _fnReq();
        }

        function _fnCache() {
            api.require('signature').sha1({
                data: JSON.stringify(_param)
            }, function(ret, err) {
                if (ret.status) {
                    var _sign = 'cache://http' + ret.value + '.txt';
                    if (['unknown', 'none'].indexOf(api.connectionType) === -1) {
                        _fnReq(_sign);
                    } else {
                        _fnGetCache(_sign);
                    }
                } else {
                    fnToast('缓存失败');
                }
            });
        }
        function _fnReq(_sign) {
            api.ajax(_param, function(ret, err) {
                if (ret) {
                    if (!(ret instanceof Object)) {
                        try{
                            ret = JSON.parse(ret);
                        } catch(e) {
                            fnToast('Network error');
                        };
                    }
                }
                if (err) {
                    // if (err.statusCode) {
                    //     if (err.msg && !(err.msg instanceof Object)) {
                    //         err.msg = JSON.parse(err.msg);
                    //     }
                    //     if (err.body && !(err.body instanceof Object)) {
                    //         err.body = JSON.parse(err.body);
                    //     }
                    // }
                }
                _fnClose();
                fnCloseProgress_public();
                debugAlert('Ajax: 接收请求', ((fnDateNow_public()-_timer)/1000), '秒', _obj.url + ' >> ', ret, err)
                if (ret) {
                    if (_sign) {
                        var _data = {
                            ret: ret,
                            err: err
                        };
                        api.writeFile({
                            path: _sign,
                            data: JSON.stringify(_data)
                        }, function(ret, err) {
                            if (ret.status) {
                                //成功
                            } else {

                            }
                        });
                    }
                    if(ret.code == APP.ERROR_CODE.TOKEN_INVALID){
                        _loginOut('该用户已在其它设备登录');
                    }else if([APP.ERROR_CODE.account_blocked, APP.ERROR_CODE.unverified].indexOf(ret.code) != -1){
                        _loginOut(ret.msg);
                    }else{
                        // ret['_param']  = JSON.parse(_param.data.body);
                        _callback(ret, err);
                    }

                    function _loginOut(_msg){
                        fnRmCookie(APP.LC_NAME.USER);
                        fnAlert_public({
                            title: '提示', //可选 |    ''     | string     |  弹窗标题文案，不传则不显示弹窗顶部文案
                            msg: _msg, //可选 |    ''     | string     |  弹窗内容 （可解析html格式内容），不传则不显示内容
                            buttons: [{ //必选 |    []      | Array     |  弹窗底部按钮，至少传入一个按钮（数组有多少就显示多少按钮）
                                text: '知道了', //必选 |    ''      | string     |  按钮文案
                                active: true, //可选 |    false   | Boolean    |  是否高亮
                                callback: function() { //必选 |            | Function   | 点击按钮时触发该回调函数
                                    api.sendEvent({
                                        name: APP.EV_NAME.TOKEN_INVALID,
                                        extra: {}
                                    });
                                    api.sendEvent({
                                        name:'preventback'
                                    })
                                    // fnRmCookie('HAS_AJAX');
                                    fnRmCookie(APP.LC_NAME.USER, function(){
                                        fnRmCookie('POP');
                                        // 登录失效则跳转到登录页
                                        if( api.winName != 'signIn' ){
                                            fnOpen('sign/signIn_win.html')
                                        }
                                    });
                                }
                            }]
                        });
                    }
                } else {
                    // if (typeof err.body === 'string' || !err.body) {
                    fnToast(err.msg);
                    if(APP.hasDebug()){
                        setTimeout(function(){

                            api.prompt({
                                text: debugAlert(_obj.url+'->>'+err.msg),
                                buttons: ['确定', '取消']
                            }, function(ret, err) {
                                var index = ret.buttonIndex;
                                var text = ret.text;
                            });
                        }, 1000)
                    }
                    if( _sign ){
                        _fnGetCache(_sign);
                    }else{
                        _fnJumpConnection();
                    }
                }
            });
        }

        function _fnGetCache(_sign){
            api.readFile({
                path: _sign
            }, function(ret, err) {
                debugAlert('获取缓存', arguments);
                if (ret && ret.status) {
                    if (ret.data) {
                        ret.data = JSON.parse(ret.data);
                        _fnClose();
                        fnCloseProgress_public();
                        // debugAlert('Ajax: '+_obj.url+' >> ', JSON.parse(ret.data).ret, JSON.parse(ret.data).err)
                        _callback(ret.data.ret, ret.data.err);
                    } else {
                        _fnJumpConnection();
                    }
                } else {
                    _fnJumpConnection();
                }
            });
        }

        function _fnJumpConnection() {
            api.refreshHeaderLoadDone();
            fnCookie('CONNECTION_TYPE', function(_value) {
                // alert(debugAlert(arguments))
                if (!_value) {
                    fnCookie('CONNECTION_TYPE', true, function() {
                        _fnClose();

                        fnAlert_public({
                            title: 'Network error',                 //可选 |    ''     | string     |  弹窗标题文案，不传则不显示弹窗顶部文案
                            msg: 'Do you want to set up the network?',         //可选 |    ''     | string     |  弹窗内容 （可解析html格式内容），不传则不显示内容
                            buttons: [{
                                text: '取消',
                                callback: function() {
                                    fnRmCookie('CONNECTION_TYPE');
                                }
                            }, {
                                text: '确定',          //必选 |    ''      | string     |  按钮文案
                                active: true,             //可选 |    false   | Boolean    |  是否高亮
                                callback: function() {    //必选 |            | Function   | 点击按钮时触发该回调函数
                                    fnRmCookie('CONNECTION_TYPE');
                                    fnOpenSysSetting_public();
                                }
                            }]
                        });
                    });
                }
            });
        }


        function _fnClose() {
            if (_obj.model) {
                fnCloseModel();
            };
            if(fnHasEmpty_public(_obj.hasProgress)){
                fnSysCloseProress_public();
            }else{
                if(_obj.hasProgress.status){
                    fnSysCloseProress_public();
                }
            }

            if( window['vSetCustomRefreshHeaderInfoCallback'] ){
                window['vSetCustomRefreshHeaderInfoCallback'] = false;
                api.refreshHeaderLoadDone();
            }
            // window['vSetCustomRefreshHeaderInfo'] = undefined;
        }


        function _callback(ret, err) {
            _cb(ret, err);
            APP.initFn();
        }
    });
}


// 打开系统设置页面
function fnOpenSysSetting_public(_obj, _cb) {
    if( fnHasEmpty_public(_obj) ){
        _obj = {};
    }else if( typeof _obj === 'function' ){
        _cb = _obj;
        _obj = {};
    }

    if (APP.hasIos()) {
        var _param = {
            iosUrl: _obj.ios || 'app-settings:'
        }
        debugAlert('打开系统设置', _param)
        api.openApp(_param);
    } else {
        var _param = {
            androidPkg: _obj.android || 'android.settings.WIFI_SETTINGS'
        }
        debugAlert('打开系统设置', _param)
        api.openApp(_param);
    }
}


function fnShowProgress_public(_txt, _path) {
    // 页面在下拉得时候就不要加载弹窗
    if( ! window['vSetCustomRefreshHeaderInfoCallback'] ){
        var _param = {
            name: _txt || 'aPublicLoading_pop',
            url: [APP.HTML_PATH, _path || 'pop/aPublicLoading_pop.html'].join('')
        }
        debugAlert('打开加载进度条', _param);
        api.openFrame(_param);
    }
}

// 关闭加载窗口
function fnCloseProgress_public(_txt) {
    var _param = {
        name: _txt || 'aPublicLoading_pop',
    }
    debugAlert('关闭加载进度条', _param);
    api.closeFrame(_param);
}


function fnSysShowProgress_public(_obj){
    if( fnHasEmpty_public(_obj) ){
        _obj = {};
    }else if( typeof _obj === 'function' ){
        _cb = _obj;
        _obj = {};
    }
    api.showProgress({
        title: _obj.msg || '正在加载...',
        text: '请稍后...',
        modal: true
    });
}

function fnSysCloseProress_public(){
    api.hideProgress();
}




// 获取图片
/*
fnGetPicture_public({
    el: _el,                             //可选 |           | Element |  如果该元素有图片地址，弹出菜单会有一个查看大图的选项
    isClip: false,                       //可选 | false     | Boolean |  是否需要裁剪（如果max参数大于2，该字段无效）
    max: 8,                              //可选 | 1         | Number  |  选择照片时，可以最大选择几张图片
    compressQuality: 'medium',           //可选 | 'medium'  | String  |  图片压缩质量（high：超清、medium：高清、low：普通）
    isCameraOption: true,                //可选 | true      | Boolean |  是否需要拍照选项
    isAlbumOption: false,                //可选 | true      | Boolean |  是否需要选择图片选项
    isUploadServer: false,               //可选 | true      | Boolean |  是否需要使用服务器返回的图片地址数据，否则返回本地的图片地址信息
    finishText: '发送'                    //可选 | '确定'     | String  |  选择照片点击确定按钮的文字
}, function(ret) {
    alert(debugAlert(arguments))
    // ret.url                       //必返     |           |  String           |  网络图片地址或者本地图片地址
    // ret.filepath                  //非必返   |           |  String           |  网络图片名称（isUploadServer为false时该字段不返回）
})
*/
function fnGetPicture_public(_obj, _cb) {
    if( fnHasEmpty_public(_obj) ){
        _obj = {};
    }else if( typeof _obj === 'function' ){
        _cb = _obj;
        _obj = {};
    }
    fnKeyboardBlur_public();

    var _selectImgNum = 0;      // 选择了照片的数量

    fnHasPermission_public({
        names: ['camera', 'photos', 'storage']        //必填 |      |   Array||String  |  需要判断哪些权限是否允许
    }, function(){
        _fnStart();
    })


    function _fnStart(){
        var _param = {
            buttons: []
        };

        if( fnHasEmpty_public(_obj.isCameraOption) || _obj.isCameraOption ){
            _param.buttons.push({
                text: '拍照',
                callback: function() {
                    _fnType(1);
                }
            });
        }
        if( fnHasEmpty_public(_obj.isAlbumOption) || _obj.isAlbumOption ){
            _param.buttons.push({
                text: '图库',
                callback: function() {
                    _fnType(2);
                }
            });
        }

        if (_obj.el) {
            $(_obj.el).attr('data-img-refresh', true);
            _obj.img = $(_obj.el).attr('data-img-url');
            if ( _obj.img ) {
                _param.buttons.unshift({
                    text: '查看大图',
                    callback: function() {
                        _fnType(3);
                    }
                });
            }
        }
        if( _param.buttons.length ){
            if( _param.buttons.length <= 1 ){
                _param.buttons[0].callback();
            }else{
                fnActionSheet_public(_param, function(){
                    // 取消逻辑
                });
            }
        }else{

        }
    }

    function _fnType(_type) {
        if( _type == 1 ){
           _fnCamera();
        }else if( _type == 2 ){
          _fnChoicePicture();
        }else if( _type == 3 ){
            fnPhotoBrowser_public({
                pics: [_obj.img]
            });
        }
    }

    function _fnCamera(){
        var _FNPhotograph = api.require('FNPhotograph'),
            _param = {
                path: ['fs://FNPhotograph'].join(''),
                album: _obj.album || false,
                quality: _obj.quality || 'medium',
                qualityValue: _obj.qualityValue || 80,
                attachedWindow: true
            };
        debugAlert('开始拍照', _param);
        //  调用拍照
        _FNPhotograph.open(_param, function(ret){
            debugAlert('FNPhotograph.open回调', arguments)
            if( ret.eventType == 'takePhoto' ){
                _selectImgNum = 1;

                setTimeout(function(){
                    if( _obj.isClip ){
                        _fnImageClip(ret.imagePath);
                    }else{
                        _fnUpload(ret.imagePath);
                    }
                }, 300);
                _FNPhotograph.close();
            }
        });
    };

    function _fnChoicePicture() {
        var UIAlbumBrowser = api.require('UIAlbumBrowser'),
            _param = {
                max: fnHasEmpty_public(_obj.max) ? 1 : _obj.max,
                type: _obj.albumType || 'image',
                isOpenPreview: true,
                styles: {
                    bg: '#fff',
                    mark: {
                        icon: '',
                        position: 'bottom_left',
                        size: 20
                    },
                    nav: {
                        titleText:"Album",
                        bg: 'rgba(0,0,0,0.6)',
                        titleColor: '#fff',
                        titleSize: 18,
                        cancelColor: '#fff',
                        cancelSize: 16,
                        cancelText:"Cancel",
                        finishColor: '#7cf259',
                        finishSize: 16,
                        finishText: _obj.finishText || 'Done'
                    },
                    bottomTabBar: {          //（可选项）JSON对象；底部导航栏样式  **该项参数仅支持iOS**
                        bg: 'rgba(0,0,0,0.6)',  //（可选项）字符串类型；底部导航栏背景，支持 rgb，rgba，#；默认：'rgba(0,0,0,0.6)'
                        unPreviewTitleColor:'rgba(0,0,0,0.25)',//（可选项）字符串类型；打开页面还未选择图片或视频的预览的文字颜色，支持 rgb，rgba，#；默认：'rgba(0,0,0,0.25)'
                        previewTitleColor: '#7cf259',         //（可选项）字符串类型；选择图片或视频的预览的文字颜色，支持 rgb，rgba，#；默认：'#000000'
                        previewTitle:'Preview',                  //（可选项）字符串类型；选择图片或视频的预览的文字；默认：'预览'
                        previewTitleSize: 15,                 //（可选项）数字类型；标题文字大小，默认：15
                    },
                },

                rotation: false,
                alertBtnTitle:_obj.alertBtnTitle || 'confirm',
                alertTitle:'You can select only '+(fnHasEmpty_public(_obj.max) ? 1 : _obj.max)+' photo'
            };
        debugAlert('选择照片', _param);
        UIAlbumBrowser.open(_param, function(ret) {
            //   alert(debugAlert('选择照片结果', arguments));
            debugAlert('选择照片结果', arguments);
            if (ret.eventType === 'confirm') {
                _selectImgNum = ret.list.length;

                if( ret.list.length ){
                    if( APP.hasIos() ){
                        _fnTransPath(ret.list, 0);
                    }else{
                        _fnCount(ret.list, 0);
                    }
                }
            }
        });

        function _fnTransPath(_data, _num) {
            if (_num >= _data.length) {
                fnCloseProgress_public('TransPath');
                _fnCount(_data, 0);
            }else{
                fnShowProgress_public('TransPath');
                var _param = {
                    path: _data[_num].path,
                    quality: 'medium',
                    scale: 1
                };
                debugAlert('开始转换图片', _param)
                UIAlbumBrowser.transPath(_param, function(ret, err) {
                    _data[_num].path = ret.path;
                    debugAlert('转换图片结束', arguments)
                    _fnTransPath(_data, ++_num);
                });
            }
        }
    }

    function _fnCount(_data, _num) {
        if( _data.length <= 1 ){
            if( _obj.isClip ){
                _fnImageClip(_data[0].path);
            }else{
                _fnUpload(_data[0].path);
            }
        }else{
            _fnUpload(_data[_num].path, function() {
                if (_num < _data.length - 1) {
                    _fnCount(_data, ++_num);
                };
            });
        }
    }

    function _fnImageClip(_path) {
        fnImageClip_public({
            path: _path,                //必填 |  ''           | String  |  需要裁剪的图片地址（仅支持本地图片）
            appearance: 'rectangle'     //可选 | 'rectangle'   | String  |  裁剪框形状（circular：圆形，rectangle：正方形）
        }, function(ret){
            // ret.path                 //裁剪后的图片，如果取消裁剪该回调不会执行，所以不需要判断 path 是否存在
            _fnUpload(ret.path);
        })
    }


    function _fnUpload(_path, _callback) {
        fnGetImageAttr_public({
            path: _path
        }, function(ret){
            var _size = ret.size  / 1024 / 1024;
            if( _size < 0.8 ){
                _fn(_path);
            }else{
                var _quality = '0.4';
                if( _obj.compressQuality == 'high' ){
                    _quality = '0.8';
                }else if( _obj.compressQuality == 'low' ){
                    _quality = '0.1';
                }
                fnCompress_public({
                    path: _path,                     //必填 |   ''    | String  |  需要压缩的图片地址
                    quality: _quality,                  //必填 |   '1'   | String  |  压缩程度，取值范围：0-1
                }, function(ret){
                    debugAlert('压缩结果', ret)
                    _fn(ret.path);
                })
            }
        })

        function _fn(_path){
            if( fnHasEmpty_public(_obj.isUploadServer) || _obj.isUploadServer ){
                fnAjax({
                    url: 'user/upload/one',
                    files: {
                        file: _path
                    }
                }, function(ret, err) {
                    _callback && _callback();
                    if( ret.code == APP.HTTP_STATUS.SUCCESS ){
                        ret.data.selectImgNum = _selectImgNum;
                        _cb && _cb(ret.data);
                    }else{
                        fnToast(ret.msg);
                    }
                });
            }else{
                _callback && _callback();

                _cb && _cb({
                    url: _path,
                    selectImgNum: _selectImgNum
                });
            }
        }
    }
}


// 图片压缩
// fnCompress_public({
//     path: _path,                     //必填 |   ''    | String  |  需要压缩的图片地址
//     quality: '0.1',                  //必填 |   '1'   | String  |  压缩程度，取值范围：0-1
//     isPng: false,                    //必填 |   false | Boolean |  是否压缩为png格式，png格式相对jpg文件压缩程度更小（默认压缩为jpg格式）
// }, function(ret){
//     // ret.path                      //压缩后的地址字段
// })
function fnCompress_public(_obj, _cb) {
    if (fnHasEmpty_public(_obj)) {
        _obj = {};
    } else if (typeof _obj === 'function') {
        _cb = _obj;
        _obj = {};
    }
    var imageFilter = api.require('imageFilter'),
        _param = {
            img: _obj.path,
            quality: _obj.quality || '1',
            scale: _obj.quality || '1',
            save: {
                album: false,           //(可选项)布尔值，是否保存到系统相册，默认false
                imgPath:   api.cacheDir+'/share/',       //(可选项)保存的文件路径,字符串类型，无默认值,不传或传空则不保存，若路径不存在文件夹则创建此目录
                imgName:  fnDateNow_public()+'.'+( _obj.isPng ? 'png' : 'jpg' )
            }
        };


    debugAlert('开始压缩', _param);
    fnShowProgress_public('compress');
    imageFilter.compress(_param, function( ret, err ){
        fnCloseProgress_public('compress');
        debugAlert('压缩结果', arguments)
        if( ret.status ){
            ret.path = [_param.save.imgPath, _param.save.imgName].join('');
            _cb && _cb(ret);
        }
    });
}

// 获取图片属性
// fnGetImageAttr_public({
//     path: _path                      //必填 |   ''    | String  |  本地图片地址
// }, function(ret){
//
// })
function fnGetImageAttr_public(_obj, _cb) {
    if (fnHasEmpty_public(_obj)) {
        _obj = {};
    } else if (typeof _obj === 'function') {
        _cb = _obj;
        _obj = {};
    }

    var imageFilter = api.require('imageFilter'),
        _param = {
            path: _obj.path
        };
    debugAlert('获取图片属性', _param)
    imageFilter.getAttr(_param, function( ret, err ){
        debugAlert('获取图片属性结果', arguments)
        if( ret.status ){
            _cb && _cb(ret);
        }
    });
}


// 图片裁剪
// fnImageClip_public({
//     path: _path,                //必填 |  ''           | String  |  需要裁剪的图片地址（仅支持本地图片）
//     appearance: 'rectangle'     //可选 | 'rectangle'   | String  |  裁剪框形状（circular：圆形，rectangle：正方形）
// }, function(ret){
//     // ret.path                 //裁剪后的图片，如果取消裁剪该回调不会执行，所以不需要判断 path 是否存在
// })
function fnImageClip_public(_obj, _cb) {
    if (fnHasEmpty_public(_obj)) {
        _obj = {};
    } else if (typeof _obj === 'function') {
        _cb = _obj;
        _obj = {};
    }

    _obj.time = fnDateNow_public();
    fnKeyboardBlur_public();
    fnOpen('public/aPublicImageClip_win.html', {
        param: _obj
    });

    api.addEventListener({
        name: APP.EV_NAME.IMAGE_CLIP
    }, function(ret, err) {
        if( ! ret.value.hasModel ){
            _cb && _cb(ret.value);
        }
        api.removeEventListener({
            name: APP.EV_NAME.IMAGE_CLIP
        });
    });
}





// fnHasPermission_public({
//     names: ['camera', 'photos', 'storage']       //必填 |      |   Array||String  |  需要判断哪些权限是否允许
                                                    //     'camera',                 //相机
                                                    //     'contacts',                 //通讯录
                                                    //     'microphone',             //麦克风
                                                    //     'photos',                 //相册
                                                    //     'location',                 //定位
                                                    //     'locationAlways',        //后台定位，只支持iOS
                                                    //     'notification',            //通知，只支持iOS
                                                    //     'calendar',                //日历，只支持Android
                                                    //     'phone',                     //电话，只支持Android
                                                    //     'sensor',                 //传感器，只支持Android
                                                    //     'sms',                     //短信，只支持Android
                                                    //     'storage',                 //存储空间，读取相册，多媒体，本地存储相关，只支持Android
//     isTip: false                                //可选 | true   | Boolean  |  是否需要弹窗
// }, function(){
//                  该回调没有任何返回值，如果有权限就会执行该回调
// })
function fnHasPermission_public_222222222222(_obj, _cb) {
    if (fnHasEmpty_public(_obj)) {
        _obj = {};
    } else if (typeof _obj === 'function') {
        _cb = _obj;
        _obj = {};
    }
    if( typeof _obj.names == 'string' ){
        _obj.names = [_obj.names];
    }
    _fnHas();

    function _fnHas(_num){
        _num = _num || 0;
        var _param = {
            list: [_obj.names[_num]]
        },
        _result = api.hasPermission(_param);
        debugAlert('是否有权限请求', _param)
        debugAlert('是否有权限结果', _result)
        if( _result.length ){
            _result = _result[0];
            // debugAlert(1111, _result)
            if( _result.granted ){
                // 有权限
                _callback();
            }else {
                // 没有权限
                _fnRequest();
            }
        }else{
            // 参数传入错误，或者是不存在的权限
        }

        function _fnRequest(){
            var _info = {
                'camera': '相机',
                'contacts': '通讯录',
                'microphone': '麦克风',
                'photos': '相册',
                'location': '定位',
                'locationAlways': '后台定位',
                'notification': '通知',
                'calendar': '日历',   //只支持Android
                'phone': '电话',
                'sensor': '传感器',
                'sms': '短信',
                'storage': '本地存储'
            }
            if( _info[_obj.names[_num]] ){
                if( fnHasEmpty_public(_obj.isTip) || _obj.isTip ){
                    _alert(['没有000',  _info[_obj.names[_num]], '权限，是否前去开启？'].join(''));
                }else{
                    fnRequestPermission_public({
                        name: _obj.names[_num]
                    }, function(ret){
                        _callback();
                    })
                }
            }else{
                fnToast('未知权限请求');
            }

            function _alert(_msg){
                setTimeout(function(){
                    fnAlert_public({
                        title: '权限提示', //‘’ | 选填 |不传则不显示弹窗顶部文案
                        msg: _msg, //’’ | 选填 |不传则不显示内容
                        buttons: [{ //’’ | 至少传入一个按钮 |数组有多少就显示多少按钮
                            text: '取消', //’确认’ | 至少传入一个按钮 |按钮文案
                            callback: function() { //function | 必传 |点击按钮时触发该回调函数

                            }
                        },{     //’’ | 至少传入一个按钮 |数组有多少就显示多少按钮
                            text: '去设置', //’确认’ | 至少传入一个按钮 |按钮文案
                            active: true, //false | 选填 | 是否高亮
                            callback: function() { //function | 必传 |点击按钮时触发该回调函数
                                fnRequestPermission_public({
                                    name: _obj.names[_num]
                                }, function(ret){
                                    if( ret ){
                                        _callback();
                                    }
                                })
                            }
                        }]
                    });
                }, 100)
            }
        }

        function _callback(){
            if( _num < _obj.names.length-1 ){
                // 还有权限没有判断
                _fnHas(++_num);
            }else{
                // 所有权限都已经打开了
                _cb && _cb();
            }
        }
    }
}


function fnHasPermission_public(_obj, _cb) {
    if (fnHasEmpty_public(_obj)) {
        _obj = {};
    } else if (typeof _obj === 'function') {
        _cb = _obj;
        _obj = {};
    }
    if( typeof _obj.names == 'string' ){
        _obj.names = [_obj.names];
    }

    _fnHas();

    function _fnHas(){
        var _param = {
            list: _obj.names
        },
        _result = api.hasPermission(_param);
        debugAlert('权限检查结果', _result)
        var _requestParam = {
            list: []
        }
        var _iosUiAlert = null;
        for( var x in _result ){
            if( _result[x].granted ){

            }else{
                _requestParam.list.push(_result[x].name);

                if( APP.hasIos() && ! _iosUiAlert ){
                    if( !_result[x].undetermined ){
                        _iosUiAlert = _result[x];
                    }
                }
            }
        }

        if( _requestParam.list.length ){
            if( APP.hasIos() ){
                if( _iosUiAlert ){
                    var _info = {
                        'camera': '相机',
                        'contacts': '通讯录',
                        'microphone': '麦克风',
                        'photos': '相册',
                        'location': '定位',
                        'locationAlways': '后台定位',
                        'notification': '通知',
                        'calendar': '日历',   //只支持Android
                        'phone': '电话',
                        'sensor': '传感器',
                        'sms': '短信',
                        'storage': '本地存储'
                    }
                    _alert(['没有',  _info[_iosUiAlert.name], '权限，是否前去开启？'].join(''), _requestParam);
                }else{
                    _requestPermission(_requestParam);
                }
            }else{
                _requestPermission(_requestParam);
            }
        }else{
            _callback({
                status: true
            });
        }

        function _alert(_msg, _requestParam){
            setTimeout(function(){
                fnAlert_public({
                    title: '权限提示', //‘’ | 选填 |不传则不显示弹窗顶部文案
                    msg: _msg, //’’ | 选填 |不传则不显示内容
                    buttons: [{ //’’ | 至少传入一个按钮 |数组有多少就显示多少按钮
                        text: '取消', //’确认’ | 至少传入一个按钮 |按钮文案
                        callback: function() { //function | 必传 |点击按钮时触发该回调函数

                        }
                    },{     //’’ | 至少传入一个按钮 |数组有多少就显示多少按钮
                        text: '去设置', //’确认’ | 至少传入一个按钮 |按钮文案
                        active: true, //false | 选填 | 是否高亮
                        callback: function() { //function | 必传 |点击按钮时触发该回调函数
                            _requestPermission(_requestParam);
                        }
                    }]
                });
            }, 100)
        }

        function _requestPermission(_requestParam){
            debugAlert('请求权限开始', _requestParam)
            api.requestPermission(_requestParam, function(ret, err){
                // alert(1)
                debugAlert('请求权限结束', arguments)
                var _unPermissionList = [];
                if( ret.list && ret.list.length ){
                    for(var x in ret.list){
                        if( ret.list[x].granted ){

                        }else{
                            _unPermissionList.push(ret.list[x].name);
                        }
                    }
                }
                var _status = !_unPermissionList.length;

                _callback({
                    status: _status,
                    unPermissionList: _unPermissionList
                })
            });
        }

        function _callback(_data){
            debugAlert('授权结果', _data)
            if( _data.status ){
                _cb && _cb(_data)
            }
        }

        // _fnCount(0, _result);
        // debugAlert('请求权限开始', _param)
        // api.requestPermission(_param, function(ret, err){
        //     alert(1)
        //     debugAlert('请求权限结束', arguments)
        //     if( ret.list && ret.list.length ){
        //         for(var x in ret.list){
        //
        //         }
        //     }
        // });
    }

    function _fnCount(_num, _result){
        if( _num >= _result.length - 1 ){
            _cb && _cb(_result[_result.length-1]);
        }else{
            var _data = _result[_num];
            if( _data.granted ){
                _fnCount(++_num, _result);
            }else{
                var _param = {
                    list: [_data.name]
                }
                debugAlert('请求权限开始', _param)
                api.requestPermission(_param, function(ret, err){
                    debugAlert('请求权限结束', arguments)
                    var _data = ret.list[0];
                    if( _data.granted ){
                        _fnCount(++_num, _result);
                    }else{
                        _cb && _cb(_data);
                    }
                });
            }
        }
    }
}


// fnRequestPermission_public({
//     name: 'camera'          //必填 |  ''  | String  |  权限名称
//                             //     'camera',                 //相机
//                             //     'contacts',                 //通讯录
//                             //     'microphone',             //麦克风
//                             //     'photos',                 //相册
//                             //     'location',                 //定位
//                             //     'locationAlways',        //后台定位，只支持iOS
//                             //     'notification',            //通知，只支持iOS
//                             //     'calendar',                //日历，只支持Android
//                             //     'phone',                     //电话，只支持Android
//                             //     'sensor',                 //传感器，只支持Android
//                             //     'sms',                     //短信，只支持Android
//                             //     'storage',                 //存储空间，读取相册，多媒体，本地存储相关，只支持Android
// }, function(ret){
//                  该回调没有任何返回值，如果有权限就会执行该回调
// })
function fnRequestPermission_public(_obj, _cb) {
    if (fnHasEmpty_public(_obj)) {
        _obj = {};
    } else if (typeof _obj === 'function') {
        _cb = _obj;
        _obj = {};
    }
    var _info = {
        'camera': '相机',
        'contacts': '通讯录',
        'microphone': '麦克风',
        'photos': '相册',
        'location': '定位',
        'locationAlways': '后台定位',
        'notification': '通知',
        'calendar': '日历',   //只支持Android
        'phone': '电话',
        'sensor': '传感器',
        'sms': '短信',
        'storage': '存储空间，读取相册，多媒体，本地存储'
    }
    if( _info[_obj.name] ){
        _alert(['没有',  _info[_obj.name], '权限，是否前去开启？'].join(''));
    }else{
        fnToast('未知权限请求');
    }

    function _alert(_msg){
        _fnStart();
    }

    function _fnStart(){
        var _param = {
            list: [_obj.name],
            code: 1
        },
        _startTime = fnDateNow_public();

        debugAlert('权限请求', _param)
        api.requestPermission(_param, function(ret){
            var _time = fnDateNow_public() - _startTime;
            debugAlert('权限请求结果', arguments, _time)
            if( _time < 100 ){
                api.openApp({
                    iosUrl: 'app-settings:'
                });
                fnCloseWidget_public();
            }else{
                if( ret.list && ret.list.length ){
                    var _result = ret.list[0];
                    if( _result.granted ){
                        _cb && _cb(true);
                    }else{
                        _cb && _cb(false);
                    }
                }
            }
        });
    }
}



// 获取元素值
// fnValue( '#id .clas' )

// 设置元素值
// fnValue( '#id .clas', 'new Value')

// 获取参数时，如果元素包含 data-value-type 属性，获取值时根据 data-value-type 规则获取值
// data-value-type 规则为：
//                     data- 开头表示获取 data-* 的值，比如获取 div 背景图片便设置 data-value-type="data-img-url"
//                     input 表示获取表单类型的 value 值
//                     其他   表示获取元素是否包含某个 class，比如判断某个元素是否包含 active 类 data-value-type="active"
function fnValue(_selector, _value) {
    var _el = typeof _selector === 'string' ? APP.dom(_selector) : _selector;
    if (_el) {
        if (arguments.length === 2) {
            if (['input', 'textarea', 'select'].indexOf(_el.tagName.toLowerCase()) == -1) {
                if (_value != undefined) {
                    _el.innerHTML = _value;
                }
            } else {
                if (_value != undefined) {
                    _el.value = _value;
                }
            }
            APP.initFn();
        } else {
            var _type = $(_el).attr('data-value-type') || '';
            if( _type.indexOf('data-') == 0 ){
                // 值在 data- 属性中
                var _result = $(_el).attr(_type);
            }else if( _type.indexOf('input') == 0 ){
                // 值在 value 属性中
                var _result = _el.value;
            }else if( _type ){
                // 值在 class 属性中
                var _result = $(_el).hasClass(_type);
            }else{
                if (_el.value != undefined) {
                    var _result = _el.value;
                } else {
                    var _result = _el.innerHTML;
                }
            }
            return typeof _result === 'string' ? _result.replace(/(&nbsp;)+/gim, ' ').trim() : _result;
        }
    }
}





// 设置缓存字段
/*  获取缓存
    fnCookie( 'USER', function(_value){
        if( _value ){
            // success
        }else{
            // err
        }
    });
*/
/*  设置缓存
    fnCookie( 'USER', {name: 'pro'}, function(_value){
        if( _value ){
            // success
        }else{
            // err
        }
    });
*/
function fnCookie(_key, _value, cb) {
    // debugAlret(arguments, api.frameName, api.winName)
    if (typeof _value != 'undefined' && typeof _value != 'function') {
        debugAlert('设置缓存前', _key, JSON.stringify(_value))
        // localStorage.setItem(_key, JSON.stringify(_value));
        api.setPrefs({
            key: _key,
            value: JSON.stringify(_value)
        });

        setTimeout(function(){
            cb && cb(_value);
        }, 100)
        // debugAlert('设置缓存后', _key, localStorage.getItem(_key))
    } else {
        var _resultValue = api.getPrefs({
            sync: true,
            key: _key
        });
        debugAlert('获取缓存', _key, _resultValue)
        var _result = undefined;

        if ([null, 'remove'].indexOf(_resultValue) != -1) {
        // if ([null, 'remove'].indexOf(localStorage.getItem(_key)) != -1) {
        } else {
            // debugAlert(111111, _resultValue)
            if( _resultValue ){
                _result = JSON.parse(_resultValue);
            }
        }
        if (typeof _value === 'function') {
            _value && _value(_result);
        } else {
            cb && cb(_result);
        }
        return _result;
    }
}

function fnRmCookie(_key, cb) {
    // debugAlert('删除缓存前：', _key, localStorage.getItem( _key ))
    // localStorage.removeItem( _key );
    // localStorage.setItem(_key, 'remove');
    api.removePrefs({
        key: _key
    });
    // debugAlert('删除缓存后：', _key, localStorage.getItem( _key ));
    cb && cb(true);

    // APP.DB.selectSql({
    //     name: APP.dbName,
    //     sql: 'DROP TABLE '+_key
    // }, function(ret, err) {
    //     debugAlert('删除缓存', _key, arguments)
    //     if( ret.status ){
    //         cb && cb();
    //     }else{

    //     }
    // });
}



// 式某个元素获得焦点并弹起键盘
function fnFocus_public(_selector) {
    debugAlert('开始焦点，并弹起键盘', arguments)
    var _el = typeof _selector === 'string' ? APP.dom(_selector) : _selector;
    setTimeout(function(){
        try{
            _el.focus();
        }catch (e) {

        }
        (api.require('softInputMgr')||{toggleKeyboard(){}}).toggleKeyboard();
    }, 500);
}






// 将所有图片缓存
function fnCacheImgs(_selector) {
    var _els = $('[data-img-url]:not([data-img-cache])'),
        _elsRefresh = $('[data-img-url][data-img-cache][data-img-refresh]'),
        _elTemp = Array.prototype.slice.call(_els, 0);
    _elTemp = _elTemp.concat(Array.prototype.slice.call(_elsRefresh, 0));
    for (var i = 0; i < _elTemp.length; i++) {
        (function(_el) {
            var _url = $(_el).attr('data-img-url');
            var _type = $(_el).attr('data-img-type');
            if (_url) {
                // _url = [APP.getHost(), APP.FILE_FIX, _url].join('');
                // _url = [_url].join('');
                // var _index = _url.indexOf('!') == -1 ? 0 : _url.indexOf('!');
                // _url = _url.substring(_index, _url.length);
                // debugAlert('url', _url);
                // debugAlert('type', _type);
                _url = _url.split('!')[0];
                if( _type ){
                    if( _url.indexOf('wx.qlogo.cn') == -1 ){
                        // _url += _type;
                    }
                }else{
                    // _url += '!watermark';
                    // _url += '!thumbnail1080x1080';
                }
                // debugAlert('图片地址', _url);
                if ($(_el).attr('data-img-temp') != _url && isNaN(+_url) ) {
                    if (!$(_el).attr('data-img-loding')) {
                        $(_el).attr('data-img-loding', true);
                        if (fnHasRemote_public(_url)) {
                            fnImgCache({url: _url}, function(_file) {
                                _fn(_el, _file, _url)
                            });
                        } else {
                            _fn(_el, _url, _url)
                        };
                    }
                }
            }
        })(_elTemp[i]);
    }

    function _fn(_el, _file, _url) {
        $(_el).attr('data-img-cache', _file);
        $(_el).attr('data-img-temp', _url);
        $(_el).removeAttr('data-img-loding');
        fnGetImage(_selector);
    }
}



function fnGetImage(_selector, _cb) {
    var _elWrap = window.document,
        _imgSelector = 'data-img-cache';
    if (_selector) {
        _elWrap = document.querySelector(_selector);
    }

    var _time = null;
    _elWrap.addEventListener('scroll', function() {
        clearTimeout(_time);
        // _time = setTimeout(function(){
            _fnLoadImg();
            _cb && _cb();
        // }, 100);
    });
    _fnLoadImg();

    function _fnLoadImg() {
        var _cacheImgs = _elWrap.querySelectorAll('[' + _imgSelector + ']') || [];
        if ('getBoundingClientRect' in _elWrap) {
            var _elWrapH = _elWrap.getBoundingClientRect().height;
        } else {
            var _elWrapH = _elWrap.documentElement.clientHeight;
        }
        for (var i = 0; i < _cacheImgs.length; i++) {
            var _current = _cacheImgs[i].getBoundingClientRect();
            //   如果图片被卷去距离大于自己的高度，说明该图片还在需要控制的范围之内
            //   如果当前图片的距离头部的高度小与外层元素的高度说明在视窗之内
            if (_current.top > -_current.height && _current.top < _elWrapH) {
                if (_cacheImgs[i].tagName.toUpperCase() === 'IMG') {
                    _cacheImgs[i].src = _cacheImgs[i].getAttribute(_imgSelector);
                } else {
                    if (!_cacheImgs[i].style.backgroundImage || _cacheImgs[i].getAttribute('data-img-refresh') != null) {
                        _cacheImgs[i].style.backgroundImage = 'url(' + _cacheImgs[i].getAttribute(_imgSelector) + ')';
                    }
                }
            } else {
                if (_cacheImgs[i].tagName.toUpperCase() === 'IMG') {
                    // _cacheImgs[i].src = _cacheImgs[i].getAttribute(_imgSelector);
                } else {
                    _cacheImgs[i].style.backgroundImage = '';
                }
            }
        }
    }
}





//微信相关
var WX = {
    init: function() {
        return api.require('wxPlus');
    },
    installed: function(_cb) {
        WX.init().isInstalled(function(ret, err) {
            debugAlert('是否安装微信软件', arguments)
            if (ret.installed) {
                _cb && _cb(ret);
            } else {
                fnToast(fnLanguage_public('当前设备未安装微信客户端'));
            }
        });
    },
    // 微信登陆
    // WX.login(function(ret) {
    //     // {            返回的用户信息
    //     //     "openid": "om8wn5xQSGnUDnw9FW5-0s2CwfDA",
    //     //     "nickname": "Right",
    //     //     "sex": 1,
    //     //     "headimgurl": "http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLQTCZMy1NYlTIhFO7LxXC8McxqKxyQMnRJzeGQEicSDdn6RE5huPlRLYyzTlHCIpicqa8obILC8HFQ/132",
    //     //     "privilege": [],
    //     //     "unionid": "oPu6_5_D1xi8ZQtvu2iIJlR9IBh4",
    //     //     "status": true
    //     // }
    //     alert(debugAlert(111, arguments))
    // })
    login: function(_cb) {
        WX.installed(function() {
            fnShowProgress_public('WX');
            WX.init().auth({}, function(ret) {
                fnCloseProgress_public('WX');
                debugAlert("微信登录返回信息", arguments)
                if (ret.status) {
                    WX.getUserInfo(ret, function(ret) {
                        _cb && _cb(ret);
                    })
                } else {
                    fnToast("授权失败");
                }
            })
        })
    },
    getToken: function(_obj, _cb) {
        WX.init().getToken(_obj, function(ret) {
            debugAlert("微信获取token", ret);
            if (ret.status) {
                _cb && _cb(ret);
            } else {
                fnToast("获取用户信息失败")
            }
        })
    },
    getUserInfo: function(_obj, _cb) {
        fnShowProgress_public('WX');
        WX.getToken(_obj, function(ret) {
            WX.init().getUserInfo(ret, function(ret) {
                fnCloseProgress_public('WX');
                debugAlert("微信登录返回用户信息", ret);
                if (ret.status) {
                    _cb && _cb(ret);
                } else {
                    fnToast("获取用户信息失败")
                }
            })
        })
    },
    shareWebPage: function(_obj, _cb) {
        if (fnHasEmpty_public(_obj)) {
            _obj = {};
        } else if (typeof _obj === 'function') {
            _cb = _obj;
            _obj = {};
        }

        WX.installed(function() {
            var _param = {
                scene: _obj.scene || 'timeline',
                title: _obj.title || '分享标题',
                description: _obj.msg || '分享描述',
                thumb: _obj.thumb || 'widget://image/logo.png',
                contentUrl: _obj.contentUrl || 'https://www.apicloud.com/'
            }
            debugAlert('微信分享网页开始', _param)
            WX.init().shareWebpage(_param, function(ret, err) {
                debugAlert('微信分享网页结束', arguments)
                _cb && _cb(ret);
                // if (ret.status) {
                //     _cb && _cb();
                // } else {
                //     fnToast('分享失败');
                // }
            });
        })
    },
    shareImage: function(_obj, _cb) {
        if (fnHasEmpty_public(_obj)) {
            _obj = {};
        } else if (typeof _obj === 'function') {
            _cb = _obj;
            _obj = {};
        }

        WX.installed(function() {
            var _param = {
                scene: _obj.scene || 'timeline',
                thumb: _obj.thumb || 'widget://image/logo.png',
                contentUrl: _obj.contentUrl || 'widget://image/logo.png'
            }
            debugAlert('微信分享图片开始', _param)
            WX.init().shareImage(_param, function(ret, err) {
                debugAlert('微信分享图片结束', arguments)
                _cb && _cb(ret);
                // if (ret.status) {
                //     _cb && _cb();
                // } else {
                //     fnToast('分享失败');
                // }
            });
        })
    },
    shareProgram: function(_obj, _cb) {
        if (fnHasEmpty_public(_obj)) {
            _obj = {};
        } else if (typeof _obj === 'function') {
            _cb = _obj;
            _obj = {};
        }

        WX.installed(function() {
            var _param = {
                scene: _obj.scene || 'session',
                title: _obj.title || '',
                description: _obj.msg || '',
                thumb: _obj.thumb || 'widget://image/logo.png',
                webpageUrl: 'https://www.apicloud.com/',
                hdImageData: _obj.thumb || 'widget://image/logo.png',
                withShareTicket: false,
                // contentUrl: _obj.contentUrl || 'https://www.apicloud.com/'
                userName: 'gh_6b3de8003206',
                path: _obj.path || '',
                miniProgramType: APP.hasDebug() ? 'preview' : 'release'
            }
            debugAlert('分享小程序开始', _param)
            WX.init().shareProgram(_param, function(ret, err) {
                debugAlert('分享小程序结束', arguments)
                if (ret.status) {
                    _cb && _cb();
                } else {
                    // fnToast('分享失败');
                }
            });
        })
    }
}


//微信相关
var WX_PLUS = {
    init: function() {
        return api.require('wxPlus');
    },
    installed: function(_cb) {
        var _self = this;
        _self.init().isInstalled(function(ret, err) {
            debugAlert('是否安装微信软件', arguments)
            if (ret.installed) {
                _cb && _cb(ret);
            } else {
                fnToast(fnLanguage_public('当前设备未安装微信客户端'));
            }
        });
    },
    // 微信登陆
    // WX.login(function(ret) {
    //     // {            返回的用户信息
    //     //     "openid": "om8wn5xQSGnUDnw9FW5-0s2CwfDA",
    //     //     "nickname": "Right",
    //     //     "sex": 1,
    //     //     "headimgurl": "http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLQTCZMy1NYlTIhFO7LxXC8McxqKxyQMnRJzeGQEicSDdn6RE5huPlRLYyzTlHCIpicqa8obILC8HFQ/132",
    //     //     "privilege": [],
    //     //     "unionid": "oPu6_5_D1xi8ZQtvu2iIJlR9IBh4",
    //     //     "status": true
    //     // }
    //     alert(debugAlert(111, arguments))
    // })
    login: function(_cb) {
        var _self = this;
        _self.installed(function() {
            fnShowProgress_public('WX');
            debugAlert("微信登录-开始")
            _self.init().auth({}, function(ret) {
                fnCloseProgress_public('WX');
                debugAlert("微信登录返回信息", arguments)
                if (ret.status) {
                    _self.getUserInfo(ret, function(ret) {
                        _cb && _cb(ret);
                    })
                } else {
                    fnToast("授权失败");
                }
            })
        })
    },
    getToken: function(_obj, _cb) {
        var _self = this;
        _self.init().getToken(_obj, function(ret) {
            debugAlert("微信获取token", ret);
            if (ret.status) {
                _cb && _cb(ret);
            } else {
                fnToast("获取用户信息失败")
            }
        })
    },
    getUserInfo: function(_obj, _cb) {
        var _self = this;

        fnShowProgress_public('WX');
        _self.getToken(_obj, function(ret) {
            _self.init().getUserInfo(ret, function(ret) {
                fnCloseProgress_public('WX');
                debugAlert("微信登录返回用户信息", ret);
                if (ret.status) {
                    _cb && _cb(ret);
                } else {
                    fnToast("获取用户信息失败")
                }
            })
        })
    },
    shareWebPage: function(_obj, _cb) {
        if (fnHasEmpty_public(_obj)) {
            _obj = {};
        } else if (typeof _obj === 'function') {
            _cb = _obj;
            _obj = {};
        }
        var _self = this;

        _self.installed(function() {
            var _param = {
                scene: _obj.scene || 'timeline',
                title: _obj.title || '分享标题',
                description: _obj.msg || '分享描述',
                thumb: _obj.thumb || 'widget://image/logo.png',
                contentUrl: _obj.contentUrl || 'https://www.apicloud.com/'
            }
            debugAlert('微信分享网页开始', _param)
            _self.init().shareWebpage(_param, function(ret, err) {
                debugAlert('微信分享网页结束', arguments)
                _cb && _cb(ret);
                // if (ret.status) {
                //     _cb && _cb();
                // } else {
                //     fnToast('分享失败');
                // }
            });
        })
    },
    shareProgram: function(_obj, _cb) {
        if (fnHasEmpty_public(_obj)) {
            _obj = {};
        } else if (typeof _obj === 'function') {
            _cb = _obj;
            _obj = {};
        }
        var _self = this;

        _self.installed(function() {
            var _param = {
                scene: _obj.scene || 'session',
                title: _obj.title || '',
                description: _obj.msg || '',
                thumb: _obj.thumb || 'widget://image/logo.png',
                webpageUrl: 'https://www.apicloud.com/',
                hdImageData: _obj.thumb || 'widget://image/logo.png',
                withShareTicket: false,
                // contentUrl: _obj.contentUrl || 'https://www.apicloud.com/'
                userName: 'gh_6b3de8003206',
                path: _obj.path || '',
                miniProgramType: APP.hasDebug() ? 'preview' : 'release'
            }
            debugAlert('分享小程序开始', _param)
            _self.init().shareProgram(_param, function(ret, err) {
                debugAlert('分享小程序结束', arguments)
                if (ret.status) {
                    _cb && _cb();
                } else {
                    // fnToast('分享失败');
                }
            });
        })
    }
}

var FACEBOOK = {
    init: function() {
        if (FACEBOOK._app) {

        } else {
            FACEBOOK._app = api.require('facebook');
        }
        return FACEBOOK._app;
    },
    isInstalled: function(_obj, _cb) {
        if (fnHasEmpty_public(_obj)) {
            _obj = {};
        } else if (typeof _obj === 'function') {
            _cb = _obj;
            _obj = {};
        }
        debugAlert('是否安装facebook软件开始')
        FACEBOOK.init().isInstalled(function(ret, err) {
            debugAlert('是否安装facebook软件', arguments)
            if (ret.installed) {
                _cb && _cb(ret);
            } else {
                if (!_obj.no_tips) {
                    fnToast('Facebook app is not installed.');
                }
            }
        });
    },
    login: function(_cb) {
        FACEBOOK.isInstalled(function() {
            var _param = {
                permissions: ['public_profile', 'email']
                // permissions: ['public_profile', 'email', 'user_birthday', 'user_likes']
            }
            debugAlert('facebook授权登录开始', _param)
            FACEBOOK.init().login(_param, function(ret, err) {
                // alert(debugAlert('facebook授权登录结束', arguments))
                debugAlert('facebook授权登录结束', arguments)
                if (ret.status) {
                    var _data = ret;
                    FACEBOOK.getUserInfo(function(ret) {
                        _data.info = ret;
                        _cb && _cb(_data);
                    })
                } else {
                    // +n1qMJID/IZ1BJ0hdiMAVT0R1Jo=
                    fnToast(err.msg);
                }
            });
        })
    },
    getUserInfo: function(_cb) {
        FACEBOOK.init().getUserInfo({
            parameters: 'id'
        }, function(ret) {
            // alert(debugAlert(11111, arguments))
            var _data = {};
            if (ret.status) {
                _data = ret.result;
            }
            _cb && _cb(_data);
        })
    },
    shareLinked: function(_obj, _cb) {
        if (fnHasEmpty_public(_obj)) {
            _obj = {};
        } else if (typeof _obj === 'function') {
            _cb = _obj;
            _obj = {};
        }
        var _param = {
            permissions: ['public_profile', 'email', 'user_birthday', 'user_likes']
        }
        debugAlert('facebook授权登录开始', _param)
        FACEBOOK.init().login(_param, function(ret, err) {
            debugAlert('facebook授权登录结束', arguments)
            if (ret.status) {
                var _param = {
                    title: _obj.title || '分享标题',
                    description: _obj.msg || '分享描述',
                    imgUrl: _obj.imgUrl || 'widget://image/logo.png',
                    url: _obj.url || 'https://www.apicloud.com/',
                    // quote: 'quote'
                }
                debugAlert('facebook分享网页开始', _param);
                FACEBOOK.init().shareLinked(_param, function(ret) {
                    debugAlert('facebook分享网页结束', arguments);
                    _cb && _cb(ret);
                })
            } else {
                // +n1qMJID/IZ1BJ0hdiMAVT0R1Jo=
                fnToast('授权失败');
            }
        });
    }
}


var TWITTER = {
    init: function() {
        var _self = this;
        if (_self._app) {

        } else {
            _self._app = api.require('Twitter');
        }
        return _self._app;
    },
    isInstalled: function(_obj, _cb) {
        if (fnHasEmpty_public(_obj)) {
            _obj = {};
        } else if (typeof _obj === 'function') {
            _cb = _obj;
            _obj = {};
        }
        var _obj = {
            ios: 'twitter://',
            android: 'com.twitter.android'
        }

        var _param = {
            appBundle: APP.hasIos() ? _obj['ios'] : _obj['android']
        };

        debugAlert('是否安装app开始', _param)
        api.appInstalled(_param, function(ret, err) {
            debugAlert('是否安装app返回', arguments)
            _cb && _cb(ret);
        });
    },
    login: function(_cb) {
        var _self = this;
        _self.isInstalled(function(ret){
            if( ret.installed ){
                debugAlert('Twitter login 开始')
                // alert(debugAlert('Twitter login 开始'))
                _self.init().login(function(ret, err) {
                    debugAlert('Twitter login 结束', arguments)
                    // alert(debugAlert('Twitter login 结束', arguments))
                    _cb && _cb(ret, err);
                });
            }else{
                _cb && _cb({
                    status: APP.NO,
                    msg: fnLanguage_public('未安装Twitter')
                })
            }
        })
    },
    share: function(_obj, _cb) {
        if (fnHasEmpty_public(_obj)) {
            _obj = {};
        } else if (typeof _obj === 'function') {
            _cb = _obj;
            _obj = {};
        }

        var _self = this;
        _self.isInstalled(function(ret){
            if( ret.installed ){
                debugAlert('Twitter login 开始')
                _self.init().login(function(ret, err) {
                    debugAlert('Twitter login 结束', arguments)
                    var _param = _obj;
                    debugAlert('推特share开始', _param)
                    _self.init().share(_param, function(ret, err) {
                        debugAlert('推特share结束', arguments)
                        _cb && _cb(ret, err);
                    });
                });
            }else{
                _cb && _cb({
                    status: APP.NO,
                    msg: fnLanguage_public('未安装Twitter')
                })
            }
        })
    }
}





/*
// 设置下拉刷新
fnRefresh(function(){
    //                      下拉以后则会触发该回调
});
*/
function fnRefresh(_cb) {
    window['vSetCustomRefreshHeaderInfo'] = true;
    api.setCustomRefreshHeaderInfo({
        bgColor: '#ffffff',
        image: {
            pull : 'widget://image/refresh/pull.png',
            transform : [
            	'widget://image/refresh/pull_end_image_frame_01.png',
            	'widget://image/refresh/pull_end_image_frame_02.png',
            	'widget://image/refresh/pull_end_image_frame_03.png',
            	'widget://image/refresh/pull_end_image_frame_04.png',
            	'widget://image/refresh/pull_end_image_frame_05.png',
            	'widget://image/refresh/pull_end_image_frame_06.png',
            	'widget://image/refresh/pull_end_image_frame_07.png',
            	'widget://image/refresh/pull_end_image_frame_08.png',
            	'widget://image/refresh/pull_end_image_frame_09.png',
            	'widget://image/refresh/pull_end_image_frame_10.png'
        	],
            load : [
            	'widget://image/refresh/refreshing_image_frame_01.png',
            	'widget://image/refresh/refreshing_image_frame_02.png',
            	'widget://image/refresh/refreshing_image_frame_03.png',
            	'widget://image/refresh/refreshing_image_frame_04.png',
            	'widget://image/refresh/refreshing_image_frame_05.png',
            	'widget://image/refresh/refreshing_image_frame_06.png',
            	'widget://image/refresh/refreshing_image_frame_07.png',
            	'widget://image/refresh/refreshing_image_frame_08.png',
            	'widget://image/refresh/refreshing_image_frame_09.png',
            	'widget://image/refresh/refreshing_image_frame_10.png',
            	'widget://image/refresh/pull_end_image_frame_01.png',
            	'widget://image/refresh/pull_end_image_frame_02.png',
            	'widget://image/refresh/pull_end_image_frame_03.png',
            	'widget://image/refresh/pull_end_image_frame_04.png',
            	'widget://image/refresh/pull_end_image_frame_05.png',
            	'widget://image/refresh/pull_end_image_frame_06.png',
            	'widget://image/refresh/pull_end_image_frame_07.png',
            	'widget://image/refresh/pull_end_image_frame_08.png',
            	'widget://image/refresh/pull_end_image_frame_09.png',
            	'widget://image/refresh/pull_end_image_frame_10.png'
        	]
        }
    }, function() {
        //下拉刷新被触发，自动进入加载状态，使用 api.refreshHeaderLoadDone() 手动结束加载中状态
        //下拉刷新被触发，使用 api.refreshHeaderLoadDone() 结束加载中状态
        window['vSetCustomRefreshHeaderInfoCallback'] = true;
        _cb();
    });
}




// 监听滑动让元素固定在头部
function fnElFixedTop_public(_obj, _cb) {
    if (fnHasEmpty_public(_obj)) {
        _obj = {};
    } else if (typeof _obj === 'function') {
        _cb = _obj;
        _obj = {};
    }
    // console.log( 1 )
    $(_obj.scrollSelector).scroll(function(){
        // console.log($(scrollSelector).scrollTop())
        var _els = $(_obj.elSelector);
        for( var i = 0; i < _els.length; i++ ){
            var _rect = _els[i].getBoundingClientRect();
            if( _rect.top <= 0 ){
                var _nextEl = $(_els[i+1]);
                if( _nextEl.length ){
                    var _nextRect = _nextEl[0].getBoundingClientRect();
                    // $(_els[i]).find(_obj.elChildSelector).removeAttr('style');
                    // console.log( _nextRect, _nextEl, _rect, _els[i])
                    if( _nextRect.top < _rect.height ){
                        // $(_els[i]).removeClass('active');
                        $(_els[i]).find(_obj.elChildSelector).css({
                            top: -(_nextRect.height - _nextRect.top)
                        })
                    }else{
                        $(_els[i]).addClass('active');
                    }
                }else{
                    $(_els[i]).addClass('active');
                }
            }else{
                $(_els[i]).removeClass('active');
            }
        }
    })
}

// 设置列表侧滑
// fnIniRightBtns('ul li');
function fnIniRightBtns(_selector) {
    var _el = document.querySelectorAll(_selector);
    for (var i = 0; i < _el.length; i++) {
        _el[i].addEventListener('touchstart', handleTouchEvent, false);
        _el[i].addEventListener('touchmove', handleTouchEvent, false);
        _el[i].addEventListener('touchend', handleTouchEvent, false);
    }

    function handleTouchEvent(event) {
        var _self = this,
            _btn = this.querySelector('.right-btns'),
            _btn_width = _btn.offsetWidth,
            _startX = _self.getAttribute('data-x'),
            _startY = _self.getAttribute('data-y'),
            _rect = event.changedTouches[0];
        // console.log( event )
        // debugAlert(_startX,_startY,_rect,_self,event);
        //只跟踪一次触摸
        // if (event.touches.length <= 1) {
        // debugAlert('开始触摸', event.type)
        switch (event.type) {
            case 'touchstart':
                // api.systemVersion   >= 4.4
                if( ! fnHasEmpty_public(window['api']) && Number(api.systemVersion) <= 5 ){
                    var _slide = document.querySelectorAll('[data-open]');
                    for (var i = 0; i < _slide.length; i++) {
                        if (_self !== _slide[i]) {
                            _slide[i].style.left = 0;
                            _slide[i].removeAttribute('data-open');
                        }
                    }
                    // debugAlert(222, _slide.length)
                    var _left = _self.style.left.split('px');
                    if( _left.length && _left[0] < 0 ){
                        _self.style.left = 0;
                        _self.removeAttribute('data-open');
                    }else{
                        _self.setAttribute('data-open', true);
                        _self.style.left = -_btn_width + 'px';
                    }
                }else {
                    _self.setAttribute('data-x', _rect.clientX);
                    _self.setAttribute('data-y', _rect.clientY);
                    // debugAlert(_startX,_startY,_rect,_self,event);
                    setTimeout(function() {
                        if (!_self.parentNode) {
                            return;
                        }
                        var _slide = document.querySelectorAll('[data-open]');
                            for (var i = 0; i < _slide.length; i++) {
                            if (_self !== _slide[i]) {
                                _slide[i].style.left = 0;
                                _slide[i].removeAttribute('data-open');
                            }
                        }
                    }, 100);
                }
                break;
            case 'touchend':
                if( window['api'] && window['vSetCustomRefreshHeaderInfo'] ){
                    api.setFrameAttr({
                        name: api.frameName,
                        bounces: true
                    });
                }
                if( ! fnHasEmpty_public(window['api']) && Number(api.systemVersion) <= 5 ){

                }else {
                    // debugAlert('触摸结束', _w)
                    if (Math.abs(_self.style.left.split('px')[0]) >= _btn_width / 2) {
                        _self.style.left = -_btn_width + 'px';
                        _self.setAttribute('data-open', true);
                        // _self.classList.add('_slide');
                    } else {
                        _self.removeAttribute('data-open');
                        _self.style.left = 0;
                    }
                }
                break;
            case 'touchmove':
                if( ! fnHasEmpty_public(window['api']) && Number(api.systemVersion) <= 5 ){

                }else {
                    var _w = _startX - _rect.clientX;
                    // console.log( _w , _self.offsetLeft < 0 , Math.abs(_w) > 50)
                    // debugAlert('触摸移动', _w)
                    if (_self.style.left.split('px')[0] < 0 || Math.abs(_w) > 50) {
                        event && event.preventDefault(); //阻止滚动
                        if( window['api'] && window['vSetCustomRefreshHeaderInfo'] ){
                            api.setFrameAttr({
                                name: api.frameName,
                                bounces: false
                            });
                        }
                        if (_self.getAttribute('data-open')) {
                            if (_w < 0) {
                                var _dis = _btn_width - Math.abs(_w);
                                if (_w <= -_btn_width) {
                                    _self.style.left = 0;
                                } else {
                                    _self.style.left = -_dis + 'px';
                                }
                            }
                        } else {
                            if (_w >= 0) {
                                if (_self.style.left.split('px')[0] <= 0) {
                                    if (_w >= _btn_width) {
                                        _self.style.left = -_btn_width + 'px';
                                    } else {
                                        _self.style.left = -_w + 'px';
                                    }
                                } else {}
                            }
                        }
                    }
                }
                break;
        }
        // }
    }
}


// 拷贝一个对象
function fnCloneObject_public(_obj) {
    return JSON.parse(JSON.stringify(_obj));
}



// 设置状态颜色
/*
fnSetStatusBarStyle_public({
    style: 'light'              //必填 |    'light'       |  String    |  导航栏背景颜色，dark（黑色），light（白色）
})
*/
function fnSetStatusBarStyle_public(_obj, _cb) {
    if (fnHasEmpty_public(_obj)) {
        _obj = {};
    } else if (typeof _obj === 'function') {
        _cb = _obj;
        _obj = {};
    }
    _obj.style = _obj.style || 'light';

    debugAlert('设置状态栏颜色', _obj);
    api.setStatusBarStyle(_obj);
}




// 生成一张二维码图片
function fnEncodeImg_public(_obj, _cb) {
    if (fnHasEmpty_public(_obj)) {
        _obj = {};
    } else if (typeof _obj === 'function') {
        _cb = _obj;
        _obj = {};
    }

    fnHasPermission_public({
        names: ['storage']        //必填 |      |   Array||String  |  需要判断哪些权限是否允许
    }, function(){
        _start();
    })

    function _start(){
        var _param = {
            content: _obj.content,
            saveImg: {
                path: 'fs://FNScanner_code' + fnDateNow_public() + '.png',
                w: 1000,
                h: 1000
            }
        };
        debugAlert('生成二维码参数', _param)
        // alert(debugAlert('生成二维码参数', _param));
        api.require('FNScanner').encodeImg(_param, function(ret, err) {
            // alert(debugAlert('生成二维码', arguments));
            debugAlert('生成二维码', arguments)
            if (ret.status) {
                _cb && _cb({
                    path: ret.imgPath
                });
            }else {
                fnToast('生成二维码失败')
            }
        });
    }
}



// 禁止屏幕息屏
function fnSetKeepScreenOn_public(_keepOn) {
    var _param = {
        keepOn: _keepOn
    };
    debugAlert('调用禁止息屏', _param);
    api.setKeepScreenOn(_param);
}





// 地步选择器
function fnActionSheet_public(_obj, _cb) {
    if (fnHasEmpty_public(_obj)) {
        _obj = {};
    } else if (typeof _obj === 'function') {
        _cb = _obj;
        _obj = {};
    }

    if( _cb ){
        _obj.model = true;
    }

    _obj.time = fnDateNow_public();
    fnKeyboardBlur_public();
    fnOpen('pop/aPublicActionSheet_pop.html', {
        param: _obj
    });

    api.addEventListener({
        name: APP.EV_NAME.ACTION_SHEET
    }, function(ret, err) {
        if (_obj.time == ret.value.time) {
            // 从透明的地方关闭的窗口
            if( ret.value.hasModel ){
                _cb && _cb();
            }else {
                _obj.buttons[ret.value.buttonIndex].callback(ret.value.buttonIndex);
            }
        }
        api.removeEventListener({
            name: APP.EV_NAME.ACTION_SHEET
        });
    });
}




// 城市选择器
function fnCitySelector_public(_obj, _cb) {
    if (fnHasEmpty_public(_obj)) {
        _obj = {};
    } else if (typeof _obj === 'function') {
        _cb = _obj;
        _obj = {};
    }
    _obj.time = fnDateNow_public();
    fnKeyboardBlur_public();
    fnOpen('pop/aPublicCitySelector_pop.html', {
        param: _obj
    });

    api.addEventListener({
        name: APP.EV_NAME.CITY_SELECTOR
    }, function(ret, err) {
        // 从透明的地方关闭的窗口
        if( ret.value.hasModel ){

        }else {
            _cb && _cb(ret.value);
        }
        api.removeEventListener({
            name: APP.EV_NAME.CITY_SELECTOR
        });
    });
}






// 将本地图片转 base64
/*

fnDecodeImgToBase64_public({
    imgPath: ret.path                 //必填     |   ''    |     String  |  需要转换的本地图片路径
}, function(ret){
    // ret.base64Str                  //必返     |     String              |  转换之后的 base64，要显示到页面需要在前面增加 data:image/png;base64,
    $('.scan').css({
        'background-image': 'url(data:image/png;base64,'+ret.base64Str+')'
    })
})
*/
function fnDecodeImgToBase64_public(_obj, _cb) {
    if (fnHasEmpty_public(_obj)) {
        _obj = {};
    } else if (typeof _obj === 'function') {
        _cb = _obj;
        _obj = {};
    }
    var trans = api.require('trans');
    var _param = {
        imgPath: _obj.imgPath
    }
    debugAlert('将本地图片转 base64 开始', _param)

    trans.decodeImgToBase64(_param, function(ret, err) {
    debugAlert('将本地图片转 base64 结束', arguments)
        if (ret.status) {
            _cb && _cb(ret);
        } else {
            fnToast('图片转换失败');
        }
    });
}


// 将 base64 转本地图片转
/*
fnDecodeBase64ToImg_public({
    base64: _base64.replace('data:image/png;base64,', '')                //必填 |           |  String           |  需要转换的 base64（不能包含base64的 “data:image/png;base64,”)
}, function(ret){
    // ret.path                                                          //必返 |           |  String           |  转换后的本地路径
    debugAlert(111, arguments)
})
*/
function fnDecodeBase64ToImg_public(_obj, _cb) {
    if (fnHasEmpty_public(_obj)) {
        _obj = {};
    } else if (typeof _obj === 'function') {
        _cb = _obj;
        _obj = {};
    }
    var trans = api.require('trans'),
        _param = {
            base64Str: _obj.base64,
            album: false,
            imgPath: [api.cacheDir, 'Base64ToImg'].join('/'),
            imgName: [fnDateNow_public(), 'png'].join('.')
        };
    debugAlert('将 base64 转本地图片转开始', _param)
    trans.saveImage(_param, function(ret, err) {
        debugAlert('将 base64 转本地图片转结束', arguments)
        if (ret.status) {
            _cb && _cb({
                path: [_param.imgPath,  _param.imgName].join('/')
            });
        } else {
            fnToast('图片转换失败');
        }
    });
}


// 拨打电话
// fnCall_public('18883881016');       //必填 |      | String  | 电话号码
function fnCall_public(_tel) {
    if (_tel) {
        fnHasPermission_public({
            names: ['phone']        //必填 |      |   Array||String  |  需要判断哪些权限是否允许
        }, function(){
            _fnStart();
        })

        function _fnStart(){
            fnKeyboardBlur_public();
            var _param = {
                type: 'tel_prompt',
                number: _tel.toString().replace(/[^0-9]/ig,"")
            }
            debugAlert('拨打电话', _param)
            api.call(_param);
        }
    }
}



// 打开 h5 页面
function fnOpenWebPage_public(_obj, _cb) {
    if (fnHasEmpty_public(_obj)) {
        _obj = {};
    } else if (typeof _obj === 'function') {
        _cb = _obj;
        _obj = {};
    };
    fnOpen('public/aPublicWebPage_win.html', {
        param: _obj
    });
}



// 清理缓存
function fnClearCache_public(_cb) {
    fnGetCacheSize_public(function(_size) {
        if (_size) {
            fnAlert_public({
                // title: '提示',              //‘’ | 选填 |不传则不显示弹窗顶部文案
                msg: '立即清除缓存',           //’’ | 选填 |不传则不显示内容
                buttons: [{                 //’’ | 至少传入一个按钮 |数组有多少就显示多少按钮
                    text: '取消',        //’确认’ | 至少传入一个按钮 |按钮文案
                    callback: function() {  //function | 必传 |点击按钮时触发该回调函数

                    }
                }, {
                    text: '确定',
                    active: true,           //false | 选填 | 是否高亮
                    callback: function() {
                        api.clearCache(function() {
                            fnToast('清除成功');
                            _cb && _cb(0);
                        });
                    }
                }]
            }, function(){                  //如果设置回调函数，打开的弹窗则可以点击背景关闭，并触发该回调函数

            });
        }else{
            // fnToast('暂无缓存');
            fnAlert_public({
                // title: '提示',              //‘’ | 选填 |不传则不显示弹窗顶部文案
                msg: '已经很干净了，不需要清除',           //’’ | 选填 |不传则不显示内容
                buttons: [{
                    text: '知道了',
                    active: true,           //false | 选填 | 是否高亮
                    callback: function() {

                    }
                }]
            }, function(){                  //如果设置回调函数，打开的弹窗则可以点击背景关闭，并触发该回调函数

            });
        }
    })
}


// 获取缓存大小
function fnGetCacheSize_public(_cb) {
    api.getCacheSize(function(ret) {
        var _size = ret.size / 1024 / 1024;
        if (_size > 1) {
            _size = _size.toFixed(2);
        } else {
            _size = 0;
        }
        debugAlert('获取缓存', _size, arguments)
        _cb && _cb(_size);
    });
}



// 打开一个提示框
// fnToast({
//     msg: ret.msg,       //提示文案
//     duration: 3000,     //提示时长
//     location: 'middle'  //提示位置
// }, function(){

// });

// fnToast(ret.msg, function(){

// });

// fnToast(ret.msg);

function fnToast(_obj, _cb) {
    if (fnHasEmpty_public(_obj)) {
        _obj = {};
    } else if (typeof _obj === 'function') {
        _cb = _obj;
        _obj = {};
    }

    if( typeof _obj == 'string' ){
        _obj = {
            msg: _obj
        }
    }

    _obj.msg = fnLanguage_public(_obj.msg);
    _obj.duration = _obj.duration || 2000;
    _obj.location = _obj.location || 'middle';
    debugAlert('打开一个提示弹窗', _obj)
    // var _html = 'pop/toast_frm.html';
    // fnOpen(_html, {
    //     param: _obj
    // })
    api.toast(_obj);
    setTimeout(function() {
        // api.closeFrame({
        //     name: fnGetPathName_public(_html)
        // });

        _cb && _cb();
    }, _obj.duration);
    // if (!$('#toast').length) {
    //     fnKeyboardBlur_public();
    //     $('body').after('<div id="toast">' + _msg + '</div>');
    //     setTimeout(function() {
    //         $('#toast').remove();
    //         _cb && _cb();
    //     }, 2000);
    // }
}



// 检查是否有新版本并且可以下载新版本安装
function fnCheckVersionUpdate_public() {
    var _mam = api.require('mam');
    fnShowProgress_public('mam_checkUpdate');
    _mam.checkUpdate(function(ret, err) {
        debugAlert('检查更新', arguments)
        fnCloseProgress_public('mam_checkUpdate');
        // if(APP.hasDebug()){
        //     alert(debugAlert(arguments))
        // }
        if (ret) {
            with(ret.result) {
                // 是否有新版本
                if( update ){
                    // 强制更新
                    var _param = {
                        title: '发现新版本', //‘’ | 选填 |不传则不显示弹窗顶部文案
                        msg: versionDes, //’’ | 选填 |不传则不显示内容
                        buttons: [{
                            text: '立即更新',
                            active: true, //false | 选填 | 是否高亮
                            callback: function() {
                                fnInstallApp_public(source);
                            }
                        }]
                    };
                    if( closed ){
                        fnAlert_public(_param);
                    }else{
                        _param.buttons.unshift({ //’’ | 至少传入一个按钮 |数组有多少就显示多少按钮
                            text: '暂不更新', //’确认’ | 至少传入一个按钮 |按钮文案
                            callback: function() {

                            }
                        });
                        fnAlert_public(_param, function() { //如果设置回调函数，打开的弹窗则可以点击背景关闭，并触发该回调函数

                        });
                    }
                }else{

                    fnAlert_public({
                        // title: '提示', //可选 |    ''     | string     |  弹窗标题文案，不传则不显示弹窗顶部文案
                        msg: '当前为最新版本', //可选 |    ''     | string     |  弹窗内容 （可解析html格式内容），不传则不显示内容
                        buttons: [{
                            text: '确定',
                            active: true, //可选 |    false   | Boolean    |  是否高亮
                            callback: function() {
                                // alert('点击正式环境')
                            }
                        }]
                    }, function() { //可选 |            | Function   | 如果设置回调函数，打开的弹窗则可以点击背景关闭，并触发该回调函数，否则点击背景不能关闭弹窗
                        debugAlert('从透明层关闭窗口回调')
                    });
                }
            }
        } else {
            fnToast(err.msg);
        }
    });
}


// 安装 APP 软件
function fnInstallApp_public(_url){
    if( APP.hasIos() ){
        api.installApp({
            appUri: _url
        })
    }else{
        fnDownloadFile_public(_url, function(res){
            api.installApp({
                appUri : res.savePath
            })
        })
    }
}



// 下载文件
/*
fnDownloadFile_public({
    fixe: 'png',                        //选填     |   ''    |     String  |  下载之后保存的图片后缀
    url: APP._user.wxxcx_code           //必填     |         |     String  |  需要下载的文件远程地址 url
}, function(ret){
    // ret.path                         //必返     |     String              |  下载以后的本地文件路径
    // ret.name                         //必返     |     String              |  下载以后的本地文件名称
    debugAlert(111, arguments)
})
*/
function fnDownloadFile_public(_obj, _cb) {
    if (fnHasEmpty_public(_obj)) {
        _obj = {};
    } else if (typeof _obj === 'function') {
        _cb = _obj;
        _obj = {};
    }
    if( typeof _obj.hasProgress === 'undefined' || _obj.hasProgress ){
        fnSysShowProgress_public({
            msg: '正在下载…'
        });
    }
    fnHasPermission_public({
        names: ['storage']        //必填 |      |   Array||String  |  需要判断哪些权限是否允许
    }, function(){
        _fnStart();
    })

    function _fnStart(){
        var _fixe = _obj.url.split('.');
        var _name = ['dfdf', fnDateNow_public(), '.', _obj.fixe || _fixe[_fixe.length-1]].join('')
        var _param = {
            url: _obj.url,
            report: true,
            encode: false,
            cache: true,
            allowResume: true,
            savePath: ['fs://', _name].join('')
        };
        debugAlert('开始下载', _param);
        api.download(_param, function(ret, err) {
            debugAlert('下载', arguments)
            if (ret.state == 1) {
                fnSysCloseProress_public();
                _obj.path = ret.savePath;
                _obj.name = _name;
                _cb&&_cb(_obj);
            } else {
                // fnToast('下载失败');
            }
        });
    }
}



// 判断一个地址是否是 http 协议地址
function fnHasRemote_public(_url) {
    return fnVerify_public('Url').test(_url);
}


// md5 加密
function fnMd5_public(_obj, _cb) {
    if (fnHasEmpty_public(_obj)) {
        _obj = {};
    } else if (typeof _obj === 'function') {
        _cb = _obj;
        _obj = {};
    }


    var signature = api.require('signature');
    signature.md5({
        data: _obj.data,
        uppercase: fnHasEmpty_public(_obj.uppercase) ? _obj.uppercase : false
    }, function(ret, err) {
        if (ret.status) {
            _cb && _cb(ret)
        } else {
            fnToast('加密失败');
        }
    });
}



// 浏览图片
// fnPhotoBrowser_public({
//     pics: []    // [] | Array | 必传 | 图片数组
//     default: 0  // 0 | number | 首次显示图片索引
// });
function fnPhotoBrowser_public(_obj, _cb) {
    if (fnHasEmpty_public(_obj)) {
        _obj = {};
    } else if (typeof _obj === 'function') {
        _cb = _obj;
        _obj = {};
    }
    if (_obj.pics.length) {
        fnOpen('public/aPublicPhotoBrowser_win.html', {
            param: {
                pics: _obj.pics,
                default: _obj.default || 0
            }
        });
    }else{

    }
}



function fnEmpty() {
    fnToast('暂无接口支持');
}



// 隐藏手机号中间四位
function fnHideMobile_public(_tel) {
    return _tel.substr(0, 3) + '****' + _tel.substr(7);
}



// fnCopy('设置剪切板文字');
// fnCopy(function(_txt){
//     // 获取剪切板文字
//     console.log(_txt)
// });
// function fnCopy(_txt) {
//     var _clipBoard = api.require('clipBoard');
//     if( typeof _txt === 'function' ){
//         _clipBoard.get(function(ret, err) {
//             _txt(ret.value);
//         });
//     }else{
//         _clipBoard.set({
//             value: _txt
//         }, function(ret, err) {
//             if (ret.status) {
//                 alert('已复制到剪切板');
//             } else {
//                 alert('复制失败');
//             }
//         });
//     }
// }
function fnCopy(_txt,_cb) {
    var _clipBoard = api.require('clipBoard');
    if( typeof _txt === 'function' ){
        _clipBoard.get(function(ret, err) {
            _txt(ret.value);
        });
    }else{
        var _param = {
            value: _txt
        };
        debugAlert('设置剪切板', _param);
        fnToast('Link Copied')
        _clipBoard.set(_param, function(ret, err) {
            if (ret.status) {
                if(typeof _cb==='function'){
                    _cb()
                }else{
                    // fnToast('Link Copied');
                }
            } else {
                fnToast('Copy fail');
            }
        });
    }
}

// QQ 模块相关
var QQPlus = {
    init: function() {
        return api.require('QQPlus');
    },
    installed: function(_cb) {
        QQPlus.init().installed(function(ret, err) {
            debugAlert('是否安装qq软件', arguments)
            if (ret.status) {
                _cb && _cb(ret);
            } else {
                fnToast(fnLanguage_public('当前设备未安装QQ客户端'));
            }
        });
    },
    getUserInfo: function(_cb) {
        QQPlus.init().getUserInfo(function(ret) {
            debugAlert('qq返回用户信息', arguments)
            if (ret.status) {
                if (typeof ret.info === 'string') {
                    ret.info = JSON.parse(ret.info);
                }
                _cb && _cb(ret);
            } else {
                fnToast('获取用户信息失败');
            }
        });
    },
    login: function(_cb) {
        QQPlus.installed(function() {
            QQPlus.init().login(function(ret, err) {
                debugAlert('qq登录返回信息', arguments)
                if (ret.status) {
                    var _data = ret;
                    QQPlus.getUserInfo(function(ret) {
                        _data.info = ret.info;
                        // _data.info = JSON.parse(ret.info);
                        _cb && _cb(_data);
                    })
                } else {
                    fnToast('授权失败');
                }
            });
        });
    },
    shareNews: function(_obj, _cb) {
        if (fnHasEmpty_public(_obj)) {
            _obj = {};
        } else if (typeof _obj === 'function') {
            _cb = _obj;
            _obj = {};
        }
        QQPlus.installed(function() {
            var _param = {
                url: _obj.url || 'https://www.apicloud.com/',
                title: _obj.title || '分享标题',
                description: _obj.msg || '分享描述',
                imgUrl: _obj.imgUrl || 'http://qiniucnd.suuzi.cn/FmH1q320p93_n1uQ3DpDIqeEmU4K.jpg',
                type: _obj.type || 'QZone'
            };
            debugAlert('qq 分享网页开始', arguments, _param);
            QQPlus.init().shareNews(_param, function(ret, err) {
                debugAlert('qq 分享网页回调', arguments)
                if (ret.status) {
                    _cb && _cb(ret);
                    // 分享成功
                } else {
                }
            });
        });
    }
}

// 微博模块相关
var WEIBO = {
    init: function() {
        return api.require('weiboPlus');
    },
    isInstalled: function(_cb) {
        WEIBO.init().isInstalled(function(ret, err) {
            // alert(debugAlert('是否安装微博软件', arguments))
            if (ret.status) {
                _cb && _cb(ret);
            } else {
                fnToast(fnLanguage_public('当前设备未安装微博客户端'));
            }
        });
    },
    login: function(_cb) {
        WEIBO.isInstalled(function() {
            WEIBO.init().auth({}, function(ret, err) {
                debugAlert('微博登录返回', arguments)
                if (ret.status) {
                    var _data = ret;
                    WEIBO.getUserInfo(_data, function(ret) {
                        _data.info = ret.info;
                        _cb && _cb(_data);
                    })
                } else {
                    fnToast("授权失败");
                }
            });
        })
    },
    getUserInfo: function(_obj, _cb) {
        WEIBO.init().getUserInfo({
            token: _obj.token,
            userId: _obj.userId
        }, function(ret) {
            debugAlert('微博用户返回', arguments);
            if (ret.status) {
                if (typeof ret.info === 'string') {
                    ret.info = JSON.parse(ret.userInfo);
                } else {
                    ret.info = ret.userInfo;
                }
                _cb && _cb(ret)
            } else {
                fnToast('获取用户信息失败');
            }
        });
    },
    shareWebPage: function(_obj, _cb) {
        if (fnHasEmpty_public(_obj)) {
            _obj = {};
        } else if (typeof _obj === 'function') {
            _cb = _obj;
            _obj = {};
        }
        WEIBO.isInstalled(function() {
            var _param = {
                title: _obj.title || '分享标题',
                description: _obj.msg || '分享描述',
                text: _obj.txt || '分享的文本',
                thumb: _obj.thumb || 'widget://image/logo.png',
                contentUrl: _obj.url || 'https://www.apicloud.com/'
            }
            debugAlert('微博分享网页开始', _param)
            WEIBO.init().shareWebPage(_param, function(ret, err) {
                // alert(debugAlert('微博分享网页结束', arguments));
                debugAlert('微博分享网页结束', arguments);
                if (ret.status) {
                    _cb && _cb();
                } else {
                    fnToast('分享失败');
                }
            });
        })
    }
}

var SWIPER = {
    init: function(_obj, _cb) {

        // _obj.param.onTouchEnd = function(_swiper) {
        //     debugAlert('onTouchEnd')
        //     _swiper.stopAutoplay();
        // }

        var _slide_length = $(_obj.el).find(".swiper-slide").length;
        if (_slide_length <= 1) {
            _obj.param.loop = false;
        }

        // if (_obj.disableRefresh) { //滑动时禁止下拉刷新
        //     _obj.param.onTouchStart = function(_swiper) {
        //         if (api.systemType != 'ios') {
        //             vOption = _swiper.touches.currentX;
        //         }
        //     };
        //     _obj.param.onTouchMove = function(_swiper) {
        //         if (api.systemType != 'ios') {
        //             if (Math.abs(vOption - _swiper.touches.currentX) > 10) {
        //                 api.setFrameAttr({
        //                     name: api.frameName,
        //                     bounces: false
        //                 });
        //             } else {
        //                 api.setFrameAttr({
        //                     name: api.frameName,
        //                     bounces: true
        //                 });
        //             }
        //         }
        //     };
        //     _obj.param.onTouchEnd = function(_swiper) {
        //         if (api.systemType != 'ios') {
        //             api.setFrameAttr({
        //                 name: api.frameName,
        //                 bounces: true
        //             });
        //             vOption = 0;
        //         }
        //         _swiper.stopAutoplay();
        //     }
        // }
        // _obj.param.onTap = function(_swiper) {
        //     debugAlert('onTap')
        //     _swiper.stopAutoplay();
        // }
        // _obj.param.onClick = function(_swiper) {
        //         debugAlert('onClick')
        //         _swiper.stopAutoplay();
        //     }
        var _mySwiper = new Swiper(_obj.el, _obj.param);

        _cb && _cb(_mySwiper);
    }
}

var AJPUSH = {
    init: function() {
        return api.require('ajpush');
    },
    getRegistrationId: function(_cb) {
        if (APP.hasIos()) {
            _fn();
        } else {
            (AJPUSH.init()||{init(){}}).init(function(ret) {
                if (ret && ret.status) {
                    _fn();
                } else {
                    fnToast('极光推送初始化失败');
                }
            });
        }

        function _fn() {
            debugAlert('获得极光id开始')
            AJPUSH.init().getRegistrationId(function(ret) {
                debugAlert('获得极光id结束', arguments)
                var registrationId = ret.id || '';
                _cb && _cb(registrationId);
            });
        }
    },
    appintent: function(_cb) {
        AJPUSH.init().setBadge({
            badge: 0
        });
        api.addEventListener({
                name: 'appintent'
            }, function(ret, err) {
                if (ret && ret.appParam && ret.appParam.ajpush) {
                    alert(debugAlert(ret.appParam));
                    _cb && _cb(ret.appParam);
                }
            })
    },
    setBadge: function(_obj, _cb) {
        if (fnHasEmpty_public(_obj)) {
            _obj = {};
        } else if (typeof _obj === 'function') {
            _cb = _obj;
            _obj = {};
        }
        var _param = {
            badge: _obj.badge || 0
        };
        (AJPUSH.init()||{setBadge(){}}).setBadge(_param);
    },
    bindAliasAndTags: function(_obj, _cb) {
        if (fnHasEmpty_public(_obj)) {
            _obj = {};
        } else if (typeof _obj === 'function') {
            _cb = _obj;
            _obj = {};
        }
        (AJPUSH.init()||{bindAliasAndTags(){}}).bindAliasAndTags(_obj, function(ret){
            _cb && _cb(ret);
        });
    }
}


var audioPlay = {
    init: function() {
        return api.require('audioStreamer');
    },
    onCall: function() {
        audioPlay.init().onCall();
    },
    onNormal: function() {
        audioPlay.init().onNormal();
    }
}

// 环信模块相关
var easeChat = {
    init: function() {
        return api.require('easeChat');
    },
    register: function(_obj, _cb) {
        var _param = {
            username: _obj.username,
            password: _obj.password
        }
        debugAlert('环信注册', _param)
        easeChat.init().easeRegister(_param,function(ret,err){
            debugAlert('环信注册返回', arguments)
            if( ret.status ){
                _cb && _cb(ret);
            }else{
                fnToast(ret.msg);
            }
        })
    },
    login: function(_obj, _cb) {
        var _param = {
            username: _obj.username.toString(),
            password: _obj.password.toString(),
            autoLogin: false
        }
        debugAlert('环信登录', _param)
        easeChat.init().login(_param,function(ret, err){
            debugAlert('环信登录返回', arguments)
            if ( ret.status ) {
                _cb && _cb(ret);
            } else {
                fnToast(ret.msg);
            }
        })
    },
    logout: function(_cb) {
        easeChat.init().logout(function(ret){
            debugAlert('环信退出登录');
            if( ret.status ){
                _cb && _cb(ret);
            }else{
                fnToast(ret.msg);
            }
        })
    },
    sendCmd: function(_obj, _cb){
        easeChat.init().sendCmd({
            conversationId: _obj.conversationId,
            chatType: _obj.chatType || 'chat',
            action: _obj.action,
            to: _obj.to,
            ext: _obj.ext || {}
        },function(ret, err){
            if( ret.status ){
                _cb && _cb(ret);
            }else {
                debugAlert(err);
                fnToast(ret);
            }
        })
    }
}

//计算星座
function fnConstellations_public(_date){
    if( !_date ){
        _date = new Date();
    }else{
        _date = _date*1000;
    }

    var _constellationName = '';
    var _constellations = [
        {"start":120,"end":218,"name":"水平座"},
        {"start":219,"end":320,"name":"双鱼座"},
        {"start":321,"end":419,"name":"白羊座"},
        {"start":420,"end":520,"name":"金牛座"},
        {"start":521,"end":621,"name":"双子座"},
        {"start":622,"end":722,"name":"巨蟹座"},
        {"start":723,"end":822,"name":"狮子座"},
        {"start":823,"end":922,"name":"处女座"},
        {"start":923,"end":1023,"name":"天秤座"},
        {"start":1024,"end":1122,"name":"天蝎座"},
        {"start":1123,"end":1221,"name":"射手座"},
        {"start":1222,"end":119,"name":"射手座"}
    ]
    var _myDate = new Date(_date);
    var _m = _myDate.getMonth() + 1;
    var _d = _myDate.getDate();
    var _pos = _m * 100 + _d;
    var _maxIndex = _constellations.length - 1;

    if( _pos <= _constellations[_maxIndex].end  || _pos >= _constellations[_maxIndex].start ){
        _constellationName = _constellations[_maxIndex].name;
    }else{
        for( var i in _constellations ){
            if( _pos >= _constellations[i].start && _pos <= _constellations[i].end ){
                _constellationName = _constellations[i].name;
                break;
            }
        }
    }

    // alert(_constellationName);
    return _constellationName;
}



// 将本地图片保存到相册
/*
//必填     |   ''   |     string  |  需要保存的图片地址，支持网络图片或者本地图片
fnSaveMediaToAlbum_public(APP._codeImg);
*/
function fnSaveMediaToAlbum_public(_path) {
    fnHasPermission_public({
        names: ['storage']        //必填 |      |   Array||String  |  需要判断哪些权限是否允许
    }, function(){
        if( fnHasRemote_public(_path) ){
            fnDownloadFile_public({
                url: _path
            }, function(ret){
                _fn(ret.path);
            })
        }else{
            _fn(_path);
        }
    })

    function _fn(_path){
        var _param = {
            path: _path
        };
        debugAlert('将本地图片保存到相册', _param);
        api.saveMediaToAlbum(_param, function(ret, err) {
            debugAlert('将本地图片保存到相册结果', arguments)
            if (ret.status) {
                fnToast('已保存系统相册');
            } else {
                fnToast('保存失败');
            }
        });
    }
}

// 长按事件
function fnLongPress_public(_obj, _cb) {
    if (fnHasEmpty_public(_obj)) {
        _obj = {};
    } else if (typeof _obj === 'function') {
        _cb = _obj;
        _obj = {};
    }
    _obj.el = typeof _obj.el === 'string' ? APP.dom(_obj.el) : _obj.el;
    var _timer = null;
    _obj.el.addEventListener('touchstart', _fn, false);
    _obj.el.addEventListener('touchend', _fn, false);

    function _fn(event) {
        // debugAlert(event.target);
        event.stopPropagation()
        switch (event.type) {
            case 'touchstart':
                _timer = setTimeout(function() {
                    _cb && _cb(_obj);
                }, 1000);
                break;
            case 'touchend':
                clearTimeout(_timer);
                _timer = null;
                break;
        }
    }
}


// 双击事件
function fnDoubleClick_public(_selector, _cb) {
    var _el = typeof _selector === 'string' ? APP.dom(_selector) : _selector;
    _el.addEventListener('touchend', _fn, false);

    function _fn(event) {
        var _hasClick = $(_el).attr('private-onclick');
        debugAlert(11111111111111111111,_hasClick);
        if (_hasClick) {
            _cb && _cb(_el);
        }

        $(_el).attr('private-onclick', true);
        setTimeout(function() {
            $(_el).removeAttr('private-onclick');
        }, 1000);
    }
}

// 打开一个 group
// 每个导航必选有 data-path html 文件地址属性
// 每个导航需要有一个 active class 类的高亮样式
// data-default-view 属性表示首页默认打开
// data-param 会作为参数传到下个页面
/*
    fnOpenGroup({
        navSeletor: '.nav .nav-item',                                    //必填  |    ''    |    String    |  导航选择器
        marginTop: $('.header-top').height(),                            //选填  |    0     |    Number    |  group 距离顶部距离
        scrollEnabled: true,                                             //选填  |  false   |    Boolean   |  frame 组是否可以左右滑动
        index: 0,                                                        //选填  |    0     |    Number    |  选中的tab项
        preload: 0,                                                      //选填  |    0     |    Number    |  预加载的 frame 个数
        param: {                                                         //选填  |    {}    |    Object    |  公共参数

        }
    });
*/
function fnOpenGroup(_obj, _cb) {
    var _frames = [],
        _groupName = _obj.name || api.winName + '_group',
        _param = fnCloneObject_public(APP._param);
    _obj.param = _obj.param || {};

    for( var x in _param ){
        _obj.param[x] = _param[x];
    }

    if( typeof _obj.navSeletor != 'object' ){
        _obj.navSeletor = $(_obj.navSeletor);
    }

    _obj.navSeletor.each(function(_index, _el) {
        var _path = $(_el).data('path'),
            _data = fnCloneObject_public(_obj.param || {});

        _data._groupParam = $(_el).data('param');
        _data.index = _index;
        _data._groupName = _groupName;
        _frames.push({
            name: fnGetPathName_public(_path) + _data.index,
            url: APP.HTML_PATH + _path,
            pageParam: {
                param: _data
            }
        });

        // 默认显示页面
        if( ! _obj.index && $(_el).attr('data-default-view') != null ){
            _obj.index = $(_el).index();
        }

        // debugAlert(44444, $(_el).length)
        _el.addEventListener('touchstart', function() {
            _fnSwitchNav(_el);
        });
    });
    var _param = {
        name: _groupName,
        // background: '#ebf0f2',
        index: _obj.index || 0,
        rect: {
            marginTop: _obj.marginTop || 0,
            marginBottom: _obj.marginBottom || 0,
            // marginLeft: api.pageParam.leftRect.w,
        },
        scrollEnabled: fnHasEmpty_public(_obj.scrollEnabled) ? false : _obj.scrollEnabled,
        frames: _frames,
        preload: fnHasEmpty_public(_obj.preload) ? 0 : _obj.preload,
    };
    debugAlert('打开 group', _param);
    api.openFrameGroup(_param, function(ret, err) {
        ret.groupParam = _param;
        _cb && _cb(ret);
        _fnSwitchNav($(_obj.navSeletor)[ret.index], true);
    });

    function _fnSwitchNav(_el, hasGroupIndex) {
        $(_el).siblings().removeClass('active');
        $(_el).addClass('active');
        if (!hasGroupIndex) {
            let fgi={
                name: _groupName,
                scroll: fnHasEmpty_public(_obj.scrollEnabled) ? false : _obj.scrollEnabled,
                reload: false,
                index: $(_el).index()
            }
            api.setFrameGroupIndex(fgi);
        }
    }
}
// 打开一个头部和底部联动的窗口组（该方法支持header与footer不在同一个html内，只要在同一个window内任意两个frame或者window中都点击 footer 中 item 可以联动对应 header 的 item)
// 每个底部导航必须要有 data-path 属性(html 文件地址属性)
// 每个底部导航需要有一个 active class 类的高亮样式

// 每个头部导航需要有一个 hide class 类的高亮样式
/*
fnOpenLinkageWindow_public({
    headerSelector: '.head-item',                    //选填  |    ''    |    String    |  头部组 css3 选择器
    headBarSelector: '.head-bar'                     //选填  |    ''    |    String    |  头部组需要加沉浸式子元素 css3 选择器

    // footerSelector: '.footer-item',               //必填  |    ''    |    String    |  底部导航组 css3 选择器
    // footerHeight: $('.footer').height()           //选填  |    0   |    Number    |  底部导航栏高度，用作 frame 设置 marginBottom 距离
}, function(ret){
    // ret.navIndex                                  //必反  |    Number    |  底部导航 item 索引
    // ret.htmlPath                                  //必反  |    String    |  底部导航 item html地址
    // ret.navHeight                                 //必反  |    Number    |  底部导航高度
    debugAlert('头部结果', arguments)
})
*/
function fnOpenLinkageWindow_public(_obj, _cb) {
    if (fnHasEmpty_public(_obj)) {
        _obj = {};
    } else if (typeof _obj === 'function') {
        _cb = _obj;
        _obj = {};
    }
    var _evName = [api.winName, 'fnOpenLinkageWindow_public'].join();
    if( _obj.headBarSelector ){
        api.addEventListener({
            name: _evName
        }, function(ret, err){
            var _data = ret.value,
                _header = $(_obj.headerSelector).eq(_data.navIndex),
                _prevHeaderName = [_evName+'_prevHeader'].join(''),
                _currentGroupName = [_evName+'_group'+_data.navIndex].join(''),
                _prevHeader = APP[_prevHeaderName] || false;

            if(_obj.headBarSelector && _header.find(_obj.headBarSelector).length){
                APP.fixStatusBar(_header.find(_obj.headBarSelector)[0]);
            }

            if( $(_obj.headerSelector).length ){
                $(_obj.headerSelector).addClass('hide');
                _header.removeClass('hide');
            }

            if( _prevHeader ){
                if( _prevHeader.groupName ){
                    api.setFrameGroupAttr({
                        name: _prevHeader.groupName,
                        hidden: true
                    });
                }else{
                    api.setFrameAttr({
                        name: fnGetPathName_public(_prevHeader.htmlPath),
                        hidden: true
                    });
                }
            }
            if( ! _data.htmlPath ){
                _data.groupName = _currentGroupName;
            }

            if( APP[_evName+_data.navIndex] ){
                if( _data.groupName ){
                    api.setFrameGroupAttr({
                        name: _data.groupName,
                        hidden: false
                    });
                }else{
                    api.setFrameAttr({
                        name: fnGetPathName_public(_data.htmlPath),
                        hidden: false
                    });
                }
            }else{
                // 记录 frame 已经被打开

                APP[_evName+_data.navIndex] = true;
                if( _data.groupName ){
                    var _groupData = fnCloneObject_public(_obj.group);
                    _groupData.name = _data.groupName;
                    _groupData.marginTop = _header.height();
                    _groupData.marginBottom = _data.navHeight;
                    _groupData.navSeletor = _header.find(_groupData.navSeletor);
                    fnOpenGroup(_groupData);
                }else{
                    // 打开 frame
                    //console.log(JSON.stringify(_data))
                    fnOpen(_data.htmlPath, {
                        rect: {
                            marginTop: _header.height(),
                            marginBottom: _data.navHeight
                        },
                        param: _data || {}
                    })

                    // 将打开窗口调整到最低成显示
                    api.sendFrameToBack({
                        from: fnGetPathName_public(_data.htmlPath)
                    });
                }
            }
            APP[_prevHeaderName] = _data;
            _data.headerHeight = _header.height();
            _cb && _cb(_data);
        });
    }

    if( _obj.footerSelector ){
        $(_obj.footerSelector).each(function(_index, _el) {
            if( _index==_obj.navIndex ){
                _fnSwitchNav(_el);
            }
            _el.addEventListener('touchstart', function() {
                _fnSwitchNav(_el);
            });
        });
    }


    function _fnSwitchNav(_el){
        if( ! $(_el).hasClass('active') ){
            var _param = {
                name: _evName,
                extra: {
                    navIndex: $(_el).index(),
                    htmlPath: $(_el).data('path'),
                    navHeight: _obj.footerHeight || 0,
                    winParam: $(_el).attr('data-param')
                }
            }
            if( $(_el).attr('data-no-onclick') != null ){
                _cb && _cb(_param.extra);
            }else if( $(_el).attr('data-hasLogin') != null ){
                fnHasLogin_public(function() {
                    _start();
                });
            }else{
                _start();
            }
        }

        function _start(){
            $(_el).siblings().removeClass('active');
            $(_el).addClass('active');
            debugAlert('fnOpenLinkageWindow_public底部导航切换事件开始', _param)
            api.sendEvent(_param);
            _cb && _cb(_param.extra);
        }
    }
}


// 将数据转为 number 类型
function fnToNumber_public(_str) {
    return Number(_str);
}

// 关闭 window、frame、pop 窗口
function fnClose(_obj, _cb) {
    if (fnHasEmpty_public(_obj)) {
        _obj = {};
    } else if (typeof _obj === 'function') {
        _cb = _obj;
        _obj = {};
    }

    fnCookie('POP', function(_arrPop) {
        //debugAlert(1111, arguments)
        if (_arrPop) {
            _hasFrame = _arrPop[_arrPop.length - 1];
            // alert(debugAlert(3333, _arrPop, _hasFrame));
            if (_hasFrame.winName == api.winName) {
                if (_obj.name) {
                    _fnCloseToWin();
                } else {
                    var _arr = [];
                    for (var x in _arrPop) {
                        if (_arrPop[x].time != _hasFrame.time) {
                            _arr.push(_arrPop[x]);
                        }
                    };
                    if (_arr.length) {
                        fnCookie('POP', _arr, function() {
                            _fn();
                        });
                    } else {
                        fnRmCookie('POP', function() {
                            _fn();
                        });
                    }

                    function _fn() {
                        api.closeFrame({
                            name: _hasFrame.frameName
                        });
                        api.sendEvent({
                            name: 'closePop',
                            extra: {
                                popName: _hasFrame.frameName
                            }
                        });
                    }
                }
            } else {
                if (_obj.name) {
                    _fnCloseToWin();
                } else {
                    _fnCloseWin();
                }
            }
        } else {
            if (_cb) {
                _fnCloseToWin();
            } else {
                if (_obj.name) {
                    _fnCloseToWin();
                } else {
                    _fnCloseWin();
                }
            }
        }
    });

    function _fnCloseToWin() {
        if (_obj.name) {
            var _param = {
                name: _obj.name,
                animation: _obj.animation
            };
            debugAlert('关闭窗口', _param);
            api.closeToWin(_param);
        } else {
            _cb && _cb();
        }
    }

    function _fnCloseWin() {
        var _param = {
            animation: _obj.animation
        };
        debugAlert('关闭窗口', _param);
        api.closeWin(_param);
    }
}

// 输出日志
function debugAlert() {
    if (APP.hasDebug()) {
        var vTemp = [];
        for (var x in arguments) {
            vTemp.push(arguments[x]);
        }
        vTemp = JSON.stringify(vTemp);
        vTemp = vTemp.substring(1, vTemp.length - 1);
        // console.log(api.systemType + '   ' + vTemp);
        return vTemp;
    }
}




// 失去所有焦点
function fnKeyboardBlur_public(_obj, _cb) {
    if (fnHasEmpty_public(_obj)) {
        _obj = {};
    } else if (typeof _obj === 'function') {
        _cb = _obj;
        _obj = {};
    }

    var _el = APP.domAll('input,textarea,[contenteditable]');
    for (var i = 0; i < _el.length; i++) {
        _el[i].blur();
    }
}






// 图片缓存
// function fnImgCache(_url, _cb) {
//     if (_url) {
//         // if (fnHasRemote_public(_url)) {
//             var _param = {
//                 encode: false,
//                 url: _url,
//                 policy: 'cache_else_network',
//                 thumbnail:false
//             };
//             debugAlert('开始缓存', _param);
//             if( _obj.el ){
//                 if( $(_obj.el).attr('data-img-thumbnail') ){
//                     _param.thumbnail = true;
//                 }
//             }
//             api.imageCache(_param, function(ret, err) {
//                 debugAlert('缓存结果', _url, arguments);
//                 // $('body').append('<img src="'+ret.url+'">')
//                 if (ret && ret.status) {
//                     _cb(ret.url);
//                 } else {
//
//                 }
//             });
//         // }
//     }
// }
// 图片缓存
// fnImgCache({
//     url: ,
//     thumbnail: true
// }, function(ret){
//
// })
function fnImgCache(_obj, _cb) {
    if (fnHasEmpty_public(_obj)) {
        _obj = {};
    } else if (typeof _obj === 'function') {
        _cb = _obj;
        _obj = {};
    }
    if (_obj.url) {
        // if (fnHasRemote_public(_url)) {
            var _param = {
                encode: false,
                url: _obj.url,
                // policy: 'cache_else_network',
                policy: 'cache_only',
                thumbnail: _obj.thumbnail || false
            };
            if( _obj.el ){
                if( $(_obj.el).attr('data-img-thumbnail') ){
                    _param.thumbnail = true;
                }
            }

            debugAlert('开始缓存', _param);
            api.imageCache(_param, function(ret, err) {
                debugAlert('缓存结果', arguments);
                // $('body').append('< img src="'+ret.url+'">')
                if (ret && ret.status) {
                    _cb(ret.url);
                } else {
                    _cb();
                }
            });
        // }
    }
}

function fnGetWeekData(_time) {
    var _date = new Date(_time),
        _nowYear = new Date(_date.getFullYear(), 0, 1),
        _yesYear = new Date(_date.getFullYear() + 1, 0, 1),
        _nowDay = new Date(),
        _current = 1,
        _tempWeek = _nowYear.getDay(),
        _data = {
            current: 0,
            data: []
        };
    if (_tempWeek == 0) {
        _yesYear.setDate(_yesYear.getDate() + 1);
        _nowYear.setDate(_nowYear.getDate() + 1);
    } else if (_tempWeek != 1) {
        _yesYear.setDate(_yesYear.getDate() + (8 - _tempWeek));
        _nowYear.setDate(_nowYear.getDate() + (8 - _tempWeek));
    }
    while (_nowYear <= _yesYear) {
        var _temp = new Date(_nowYear.getTime());
        _temp.setDate(_temp.getDate() + 6);
        if (_date.getTime() < _nowYear.getTime()) {
            return _current;
            break;
        }
        ++_current;
        _nowYear.setDate(_nowYear.getDate() + 7);
    }
    // return _data;
}

function fnGetWeek(_year) {
    var _nowYear = new Date(_year, 0, 1),
        _yesYear = new Date(_year + 1, 0, 1),
        _nowDay = new Date(),
        _current = 1,
        _tempWeek = _nowYear.getDay(),
        _data = {
            current: 0,
            data: []
        };
    if (_tempWeek == 0) {
        _yesYear.setDate(_yesYear.getDate() + 1);
        _nowYear.setDate(_nowYear.getDate() + 1);
    } else if (_tempWeek != 1) {
        _yesYear.setDate(_yesYear.getDate() + (8 - _tempWeek));
        _nowYear.setDate(_nowYear.getDate() + (8 - _tempWeek));
    }
    while (_nowYear <= _yesYear) {
        var _temp = new Date(_nowYear.getTime());
        _temp.setDate(_temp.getDate() + 6);
        var _isCurrent = _nowDay <= _temp && _nowDay >= _nowYear;
        if (_isCurrent) {
            _data.current = _current;
        }
        _data.data.push({
                current: _current,
                start: _nowYear.getTime(),
                end: _temp.getTime(),
                // start: _nowYear.Format('yyyy/MM/dd hh:mm:ss'),
                // end: _temp.Format('yyyy/MM/dd hh:mm:ss'),
                isCurrent: _isCurrent
            })
            ++_current;
        _nowYear.setDate(_nowYear.getDate() + 7);
    }
    return _data;
}

function fnGetMonth(_year) {
    var _nowYear = new Date(_year, 0, 1),
        _yesYear = new Date(_year + 1, 0, 0),
        _nowDay = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), 0, 0, 0),
        _current = 1,
        _data = {
            current: 0,
            data: []
        };;
    while (_nowYear <= _yesYear) {
        var _temp = new Date(_nowYear.getTime());
        _temp.setMonth(_temp.getMonth() + 1);
        // _temp.setDate(_temp.getDate()+1);
        var _isCurrent = _nowDay <= _temp && _nowDay >= _nowYear;
        if (_isCurrent) {
            _data.current = _current;
        }
        _data.data.push({
                current: _current,
                start: _nowYear.getTime(),
                end: _temp.getTime(),
                isCurrent: _isCurrent
            })
            ++_current;
        _nowYear.setMonth(_nowYear.getMonth() + 1);
    }
    return _data;
}




//获取URL中的参数
function fnGetUrlParam( _url ,_name ) {
    _url = _url.split("?")[1];
    var _arr = {};
    if(_url){
        if( _url.indexOf('=') != -1 ){
            _url = _url.split( '&' );
            for( var x in _url ){
                _arr[ _url[x].split('=')[0] ] = _url[x].split('=')[1];
            }
        }
        if( _name === undefined ){
            return _arr;
        }else{
            return _arr[ _name ];
        }
    }else{
        return _arr;
    }

}



//去除字符串空格
function fnTrim(str,is_global){
    var result;
    result = str.replace(/(^\s+)|(\s+$)/g,"");
    if(is_global.toLowerCase()=="g"){
        result = result.replace(/\s/g,"");
    }
    return result;
}


// 获取电话簿信息
function fnGetcontacts (_cb) {
    var contacts = api.require('contacts');
    contacts.select(function(ret, err) {
        if (ret) {
            if (ret.status) {
                var _key = Object.keys(ret.phones[0]);
                var phones = ret.phones[0][_key];
                ret.phones = phones.replace(/[^0-9]/ig,"");
                _cb(ret);
            }
        } else {
            debugAlert(err);
        }
    });
}

//地图选择
// 需要在 config.xml 中配置访问权限 <preference name="querySchemes" value="iosamap,baidumap,comgooglemaps"/>
function fnSelectMap_public(_obj) {
    fnKeyboardBlur_public(); //注释内容为选择编辑和拨号，现为直接拨号
    var _arr = [{
            name: 'Google Maps',
            ios: 'comgooglemaps://',
            android: 'com.google.android.apps.maps'
        }],
        _buttons = [];
    _fnAppInstalled(0, function() {
        fnActionSheet_public({
            buttons: _buttons
        }, function(_buttonIndex) {
            // alert("点击了取消按钮");
        });
    })

    function _fnCallBack(_buttonIndex){
        var _name = _buttons[_buttonIndex - 1];
        if (_name) {
            if (_name.text.indexOf('not installed') == -1) {
                var _url = '';

                if (_buttonIndex == 3) {
                    var _param = fnConvertParam_public({
                        sourceApplication: 'Apicloud',
                        sid: 'BGVIS1',
                        did: 'BGVIS2',
                        dlon: _obj.end.lon,
                        dlat: _obj.end.lat,
                        // t = 0 驾车；
                        // t = 1 公交；
                        // t = 2 步行；
                        // t = 3 骑行（骑行仅在V788以上版本支持）；
                        t: 0
                    });
                    if (APP.hasIos()) {
                        _url = ['iosamap://Path', _param].join('');
                    } else {
                        _url = ['amapuri://route/plan/', _param].join('');
                    }
                } else if (_buttonIndex == 2) {
                    // if( APP.hasIos() ){
                    var _param = fnConvertParam_public({
                        // origin: [_obj.start.lat, _obj.start.lon].join(),
                        destination: [_obj.end.lat, _obj.end.lon].join(),
                        coord_type: 'bd09ll',
                        mode: 'driving',
                        src: 'ios.baidu.openAPIdemo'
                    });
                    _url = ['baidumap://map/direction', _param].join('');
                    // }else{
                    //
                    // }
                } else if (_buttonIndex == 1) {
                    if (APP.hasIos()) {
                        var _param = fnConvertParam_public({
                            // origin: [_obj.start.lat, _obj.start.lon].join(),
                            // sll: [_obj.end.lat, _obj.end.lon].join(),
                            daddr: [_obj.end.lat, _obj.end.lon].join(),
                            // coord_type: 'bd09ll',
                            // mode: 'driving',
                            // src: 'ios.baidu.openAPIdemo'
                        });
                        _url = ['comgooglemaps://', _param].join('');
                    } else {
                        _url = ['google.navigation:q=' + _obj.end.lat + ',' + _obj.end.lon].join('');
                    }
                }
                if (_url) {
                    debugAlert(_url)
                    location.href = _url;
                    // location.href = encodeURI(_url);
                }
            } else {
                fnToast(_name.text);
            }
        } else {

        }
    }

    function _fnAppInstalled(_num, _cb) {
        if (_num < _arr.length) {
            var _param = {
                appBundle: api.systemType == 'ios' ? _arr[_num]['ios'] : _arr[_num]['android']
            };
            debugAlert('是否安装app开始', _param)
            api.appInstalled(_param, function(ret, err) {
                debugAlert('是否安装app返回', arguments)
                var _name = _arr[_num]['name'];
                if (ret.installed) {

                } else {
                    _name = _name + ' (not installed)';
                }
                _buttons.push({
                    text: _name,
                    callback: function(){
                        _fnCallBack(_num);
                    }
                });
                _fnAppInstalled(++_num, _cb);
            });
        } else {
            _cb && _cb();
        }
    }
}



function fnError_public(ret){
    // fnToast(ret.responseBody.RESULTMSG);
    // debugAlert(2222, api.debug)
    if( api.debug ){
        var _param = JSON.parse(JSON.stringify(ret._param));
        delete ret._param;

        alert(debugAlert('接口报错请求：', _param)+'\n\n\n\n\n'+debugAlert('返回参数：', ret))
        api.prompt({
            text: debugAlert(_param),
            buttons: ['确定', '取消']
        }, function(ret, err) {

        });
    }else{
        fnToast(ret.responseBody.RESULTMSG);
    }
}


function fnMobileFormat_public(_phone){
    return _phone.substr(0, 3) + '-' + _phone.substr(3,4) + '-' + _phone.substr(7);
}


function fnOpenDrawer(_obj){

    if (fnHasEmpty_public(_obj)) {
        _obj = {};
    }
    var _param = {
        name: _obj.name || 'home_win',
        url: _obj.url || 'html/home/home_win.html',
        animation: _obj.animation || {
            type:'movein',
            subType: 'from_left'
        },
        leftPane: _obj.leftPane || {
            edge: 85,
            name: 'my_win',
            bgColor:'rgb(0,0,0,0.1)',
            url: 'html/home/my_win.html'
        },
        slidToOpenPane: _obj.slidToOpenPane || false
    }
    debugAlert('打开一个侧滑', _param)
    api.openDrawerLayout(_param);
}

// function fnOpenDrawer(_direction){
//     api.openDrawerPane({
//         type: _direction || 'left'
//     });
// }





// google 地图
var GOOGLE_MAP = {
    init: function() {
        return api.require('googleMap');
    },
    searchRoute: function(_obj, _cb){
        var _self = this;
        var _param = {
            id: 1,
            origin: [_obj.start.lat, _obj.start.lon].join(),
            destination: [_obj.end.lat, _obj.end.lon].join(),
            alternatives: false,
            mode: 'driving'
        }
        debugAlert('搜索路线开始', _param)
        _self.init().searchRoute(_param, function(ret, err){
            debugAlert('搜索路线结束', arguments)
            // 路线总米数
            ret._distance = 0;
            ret._distance_time = 0;
            if( ret && ret.routes && ret.routes.length ){
                // for( var x in ret.routes ){
                    for( var j in ret.routes[0].legs ){
                        ret._distance += ret.routes[0].legs[j].distance.value;
                        ret._distance_time += ret.routes[0].legs[j].duration.value;
                    }
                // }
            }
            _cb && _cb(ret);
        });
    },
    drawRoute: function(_obj){
        var _self = this;
        var _param = {
            id: _obj.id || 1,
            index: _obj.index || 0,
            styles: _obj.style || {
                width: 12,      //（可选项）数字类型；绘制路线的宽度；默认：3
                color: '#2f7bff'
            }
        }
        debugAlert('在地图上显示指定路线开始', _param)
        _self.init().drawRoute(_param);
    },
    setCenter: function(_obj){
        var _self = this;
        var _param = {
            coords: {
                lon: _obj.lon,
                lat: _obj.lat
            },
            animation: true
        }
        debugAlert('根据经纬度设置谷歌地图中心点开始', _param)
        _self.init().setCenter(_param);
    },
    getNameFromCoords: function(_obj, _cb){
        var _self = this;
        var _param = {
            lon: _obj.lon,
            lat: _obj.lat
        }
        debugAlert('googleMap getNameFromCoords 开始', _param)
        _self.init().getNameFromCoords(_param, function(ret, err){
            debugAlert('googleMap getNameFromCoords 结束', arguments)
            _cb && _cb(ret);
        });
    }
}


var AMAP_LOCATION = {
    init: function() {
        return api.require('aMapLocation');
    },
    startLocation: function(_obj, _cb) {
        _googleMapFn(_cb);
        // googleMap 模块
        function _googleMapFn(_cb){
            var _map = api.require('googleMap');
                var _param = {
                    autoStop: true,
                    accuracy: '10m'
                }
                debugAlert('googleMap获取经纬度开始', _param)
            _map.getLocation(_param, function(ret, err) {
                debugAlert('googleMap获取经纬度结束', arguments);
                if (ret.status) {
                    if( ret.lon && ret.lat ){
                        _cb && _cb({
                            lat: ret.lat,
                            lon: ret.lon
                        });
                    }else{
                        if( _obj.isPopFailed ){
                            fnLocationFail(function(){
                                _googleMapFn(_cb);
                            })
                        }else{
                            _cb && _cb(false);
                        }
                    }
                } else {
                    if( _obj.isPopFailed ){
                        fnLocationFail(function(){
                            _googleMapFn(_cb);
                        })
                    }else{
                        _cb && _cb(false);
                    }
                }
            });
        }

        // _aMapFn(_cb);
        // aMap 地图
        function _aMapFn(_cb){
            var _aMap = api.require('aMap');
                var _param = {
                    autoStop: true
                }
                debugAlert('高德获取经纬度开始', _param)
            _aMap.getLocation(_param, function(ret, err) {
                debugAlert('高德获取经纬度结束', arguments);
                if (ret.status) {
                    if( ret.lon && ret.lat ){
                        _cb && _cb({
                            lat: ret.lat,
                            lon: ret.lon
                        });
                    }else{
                        if( _obj.isPopFailed ){
                            fnLocationFail(function(){
                                _aMapFn(_cb);
                            })
                        }else{
                            _cb && _cb(false);
                        }
                    }
                } else {
                    if( _obj.isPopFailed ){
                        fnLocationFail(function(){
                            _aMapFn(_cb);
                        })
                    }else{
                        _cb && _cb(false);
                    }
                }
            });
        }

        // aMapLocation 模块
        // _fn(_cb);
        function _fn(_cb) {
            var _param = {
                accuracy: '100',
                filter: '1.0',
                autoStop: true
            }
            debugAlert('高德获取经纬度开始', _param)
            AMAP_LOCATION.init().startLocation(_param, function(ret, err) {
                debugAlert('高德获取经纬度结束', arguments);
                if (ret.status) {
                    if( ret.latitude && ret.longitude ){
                        _cb && _cb({
                            lat: ret.latitude,
                            lon: ret.longitude
                        });
                    }else{
                        if( _obj.isPopFailed ){
                            fnLocationFail(function(){
                                _fn(_cb);
                            })
                        }else{
                            _cb && _cb(false);
                        }
                    }
                } else {
                    if( _obj.isPopFailed ){
                        fnLocationFail(function(){
                            _fn(_cb);
                        })
                    }else{
                        _cb && _cb(false);
                    }
                }
            });
        }
    }
}


// 获取经纬度
// fnGetLocation_public({
//     isPopFailed: true     //(可选项)布尔值，如果定位失败是否需要弹出定位失败弹窗，默认false
// }, function(ret){
//     if( ret ){
//         alert(debugAlert(ret))
//     }else{
//         alert('获取经纬度失败')
//     }
// })
function fnGetLocation_public(_obj, _cb) {
    if (fnHasEmpty_public(_obj)) {
        _obj = {};
    } else if (typeof _obj === 'function') {
        _cb = _obj;
        _obj = {};
    }

    var _param = {
            accuracy: '10m',
            filter: 1,
            autoStop: true
        },
        _timer = null,
        _isData = false;
    var _latlng = fnCookie(APP.LC_NAME.LOCATION);
    if(_latlng && _latlng.lat){
        _callback(_latlng);
    }

    if( _obj.isPopFailed ){
        _start();
    }else{
        fnHasPermission_public({
            names: ['location']
        }, function(){
            _start();
        })
    }

    function _start() {
        // debugAlert('手机自带获取经纬度开始', _param)
        if( fnCookie(APP.LC_NAME.IS_VPN) ){
            ret={"status":true,"timestamp":1573092431394,"latitude":39.90419989999999,"longitude":116.4073963}
                _callback({
                    lat: ret.latitude,
                    lng: ret.longitude,
                    lon: ret.longitude
                });
                return;
        }

        _fn();
    }

    function _fn() {
        api.stopLocation();
        AMAP_LOCATION.startLocation(_obj, function(ret) {
            _callback(ret);
        })
    }

    function _callback(_data) {
        if(_data && _data.lat){
            fnCookie(APP.LC_NAME.LOCATION, {
                lat:_data.lat,
                lng:_data.lng || _data.lon,
                lon:_data.lon
            });
        }

        clearTimeout(_timer);
        if (_isData) {

        } else {
            _isData = true;
            _cb && _cb(_data);
        }
    }
}




// 定位失败弹窗
function fnLocationFail(_cb){
    api.confirm({
        title: '定位失败',
        msg: '缺少定位权限',
        // msg: APP.hasIos() ? '缺少定位权限' : err.msg,
        buttons: ['去设置', '退出应用']
    }, function(ret, err) {
        var index = ret.buttonIndex;
        // debugAlert(arguments)
        if (ret.buttonIndex == 1) {
            fnRequestPermission_public({
                name: 'location'
            }, function(_hasPermission){
                if( _hasPermission ){
                    _cb && _cb();
                }else{
                    fnLocationFail(_cb);
                }
            })
            // if (APP.hasIos()) {
            //     api.openApp({
            //         iosUrl: 'app-settings:'
            //     });
            // } else {
            //     api.openApp({
            //         androidPkg: 'android.settings.LOCATION_SOURCE_SETTINGS'
            //     });
            // }
            // api.addEventListener({
            //     name: 'resume'
            // }, function(ret, err) {
            //     api.removeEventListener({
            //         name: 'resume'
            //     });
            //
            //     _cb && _cb();
            // });
        } else {
            fnCloseWidget_public();
        }
    });
}




// 关闭当前应用
function fnCloseWidget_public(_obj, _cb) {
    if (fnHasEmpty_public(_obj)) {
        _obj = {};
    } else if (typeof _obj === 'function') {
        _cb = _obj;
        _obj = {};
    }
    var _param = {
        silent: true,
        animation: {
            type: 'fade',                //动画类型（详见动画类型常量）
            subType:"from_right",       //动画子类型（详见动画子类型常量）
            duration:300
        }
    }
    debugAlert('关闭应用', _param)
    api.closeWidget(_param);
}





// 获取指定页面 APP 对象所有参数
function fnGetPageParam_public(_name, _cb){
    api.sendEvent({
        name:  [APP.EV_NAME.GET_PAGE_PARAM, _name].join(''),
        extra: {}
    });
    api.addEventListener({
        name: [APP.EV_NAME.GET_PAGE_PARAM, _name, 'send'].join('')
    }, function(ret, err){
        api.removeEventListener({
            name: [APP.EV_NAME.GET_PAGE_PARAM, _name, 'send'].join('')
        });
        _cb && _cb(ret.value);
    });
}


// 数字转换万单位
function fnNumberToTenThousand_base(_num){
    _num = Number(_num);
    if(_num < 10000){
        return _num;
    }else{
        var b = (_num/10000).toFixed(3);
        var result = b.substring(0, b.length-1);
        return result+'W';
    }
}

// 支付宝发起支付
// 需要配置 config.xml
// <feature name="aliPayPlus">
//     <param name="urlScheme" value="AliPayPlusA6097557245954" />
// </feature>
// fnAliPay_public({
//     orderInfo: ret.data.info                         //必填 | ''  |  String  |  支付宝支付信息字符串
// }, function(){
//
// })
function fnAliPay_public(_obj, _cb){
    if (fnHasEmpty_public(_obj)) {
        _obj = {};
    } else if (typeof _obj === 'function') {
        _cb = _obj;
        _obj = {};
    }
    var _aliPayPlus = api.require('aliPayPlus'),
        _param = {
            orderInfo: _obj.orderInfo
        };
    debugAlert('支付宝发起支付', _param)
    _aliPayPlus.payOrder(_param, function(ret, err) {
        debugAlert('支付宝支付回调', arguments);
        //字符串类型；错误码，取值范围如下：
        //9000：支付成功
        //8000：正在处理中，支付结果未知（有可能已经支付成功），请查询商户订单列表中订单的支付状态
        //4000：订单支付失败
        //5000：重复请求
        //6001：用户中途取消支付操作
        //6002：网络连接出错
        //6004：支付结果未知（有可能已经支付成功），请查询商户订单列表中订单的支付状态
        if (ret.code == '9000') {
            //支付成功
            _cb && _cb();
        } else if (ret.code == '8000') {
            _cb && _cb();
        } else if (ret.code == '4000') {
            fnToast('订单支付失败');
        } else if (ret.code == '5000') {
            fnToast('请勿重复支付');
        } else if (ret.code == '6001') {
            fnToast('已取消支付');
        } else if (ret.code == '6002') {
            fnToast('网络连接出错');
        } else if (ret.code == '6004') {
            _cb && _cb();
        }
    });
}



// 微信发起支付
// 需要配置 config.xml
// <feature name="wxPay">
//     <param name="urlScheme" value="wx120bf571a49e9fbc"/>
//     <param name="apiKey" value="wx120bf571a49e9fbc"/>
//     <param name="apiSecret" value="732988996afdfb26345c914f91001693"/>
// </feature>
// fnWxPay_public({
//     orderId: ret.data.info.prepayid,
//     mchId: ret.data.info.partnerid,
//     nonceStr: ret.data.info.noncestr,
//     timeStamp: ret.data.info.timestamp,
//     package: ret.data.info.package,
//     sign: ret.data.info.sign
// }, function(){
//
// })
function fnWxPay_public(_obj, _cb){
    if (fnHasEmpty_public(_obj)) {
        _obj = {};
    } else if (typeof _obj === 'function') {
        _cb = _obj;
        _obj = {};
    }

    var wx = api.require('wxPlus');
    wx.isInstalled(function(ret, err) {
        if (!ret.installed) {
            fnToast(fnLanguage_public("当前设备未安装微信客户端"));
        } else {
            var _wxPay = api.require('wxPayPlus'),
                _param = {
                    orderId: _obj.prepayid,
                    mchId: _obj.partnerid,
                    nonceStr: _obj.noncestr,
                    timeStamp: _obj.timestamp,
                    package: _obj.package,
                    sign: _obj.sign
                };
            debugAlert('微信支付发起', _param);
            _wxPay.payOrder(_param, function(ret, err) {
                debugAlert('微信支付回调', _param)
                if (ret.status) {
                    //支付成功
                    _cb && _cb();
                } else {
                    fnToast('支付失败');
                }
            });
        }
    });
}

// 秒转天时分秒格式
function formatTime_public2(seconds,_cb) {
    var _str = '';
    if(parseInt(seconds / 60 / 60 / 24) > 0){
        _str += parseInt(seconds / 60 / 60 / 24) +'天';
    }
    if(parseInt(seconds / 60 / 60 % 60) > 0){
        _str += parseInt(seconds / 60 / 60 % 60)+'时';
    }
    if(parseInt(seconds / 60 % 60) > 0){
        _str += fnLt10Format(parseInt(seconds / 60 % 60))+'分';
    }
    if(parseInt(seconds % 60) > 0){
        _str += fnLt10Format(parseInt(seconds % 60))+'秒';
    }else{
        _str += 0+'秒';
    }
    return _str;
}

// 获得form表单的JSON数据
// fnFormTojson_public({
//     selector:'#form_add'      // 选择的form表单
// },function(ret){

// });
function fnFormTojson_public(_obj,_cb){
    if (fnHasEmpty_public(_obj)) {
        _obj = {};
    } else if (typeof _obj === 'function') {
        _cb = _obj;
        _obj = {};
    }

    var str = $(_obj.selector).serializeArray();
    var res = {};
    for(var i=0; i<str.length; i++){
        res[str[i].name] = str[i].value;
    }
    _cb&&_cb(res);
    return res;
}


// 高德地图
AMAP = {
    init: function() {
        return api.require('aMap');
    },
    open: function(_obj, _cb) {
        AMAP.init().open({
            rect: {
                x: _obj.x || 0, //地图左上角的 x 坐标（相对于所属的 Window 或 Frame）
                y: _obj.y || 0, //地图左上角的 y 坐标
                w: _obj.w || 'auto', //地图的宽度
                h: _obj.h || 'auto' //地图的高度
            },
            showUserLocation: _obj.showUserLocation || true, //是否在地图上显示用户位置
            showsAccuracyRing: _obj.showsAccuracyRing || true,
            zoomLevel: _obj.zoomLevel || 11, //缩放等级
            center: {
                lon: _obj.lon || 116.4021310000,//打开地图时设置的中心点经纬度
                lat: _obj.lat || 39.9994480000 //打开地图时设置的中心点经纬度
            },
            fixed: _obj.fixed || true // 模块是否随所属 window 或 frame 滚动
        },function(ret){
            if( ret.status ){
                _cb &&_cb(ret);
            }else{
                fnToast('打开地图失败');
            }
        })
    },
    close: function(){
        AMAP.init().close()
    },
    getLocation: function(_obj, _cb){
        if (fnHasEmpty_public(_obj)) {
            _obj = {};
        } else if (typeof _obj === 'function') {
            _cb = _obj;
            _obj = {};
        }

        AMAP.init().getLocation({
            autoStop: _obj.autoStop || true // 获取到位置后自动停止定位
        },function(ret){
            debugAlert('高德地图定位结果', ret);
            if (ret.status) {
                _cb && _cb(ret);
            }else{
                fnToast('定位失败');
            }
        })
    },
    setCenter: function(_obj){
        debugAlert('设置中心点', _obj);
        AMAP.init().setCenter({
            coords: {
                lon: _obj.lon,
                lat: _obj.lat
            },
            animation: _obj.animation || false
        });
    },
    addEventListener: function(_obj, _cb){
        if (fnHasEmpty_public(_obj)) {
            _obj = {};
        } else if (typeof _obj === 'function') {
            _cb = _obj;
            _obj = {};
        }

        AMAP.init().addEventListener({
            //事件名 longPress（长按事件）,viewChange（视角改变事件）,click（单击事件）,zoom（放大缩小事件）,trackingMode（userTrackingMode 改变事件，暂仅支持 iOS 平台）
            name: _obj.name || 'click'
        },function(ret){
            debugAlert('高德地图事件回调值', ret);
            if ( ret.status ) {
                _cb && _cb(ret);
            }
        })
    },
    addCircle: function(_obj){// 设置覆盖物
        AMAP.init().addCircle({
            id: _obj.id || 2,
            center: {
                lon: _obj.lon,
                lat: _obj.lat,
            },
            radius: 300,
            styles: {
                borderColor: '#FF0000',
                borderWidth: 2,
                lineDash: true,
                fillColor: '#FF0000'
            }
        })
    },
    removeOverlay: function(_ids){// 移除指定 id 的覆盖物 [1, 2, 3, 4, 5]
        debugAlert('删除覆盖物', _ids);
        AMAP.init().removeOverlay({
            ids: [2]
        })
    }
}



// posPrinter 打印机模块
var POS_PRINTER = {
    init: function() {
        return api.require('posPrinter');
    },
    // 打印
    print: function(_obj, _cb){
        if (fnHasEmpty_public(_obj)) {
            _obj = {};
        } else if (typeof _obj === 'function') {
            _cb = _obj;
            _obj = {};
        }
        var _self = this;
        if( APP.hasIos() ){
            _ios();
        }else{
            _android();
        }

        function _ios(){
            var _param = {
                taskList: [
                    {
                        printerAddr: _obj.printerAddr,  //字符串；打印机地址
                        printerEncoding: 'gbk',             //打印机支持的编码格式，默认gbk
                        tscSetting:{                       //如果是TSC标签打印机，这个属性必须设置，如果忽略此属性，则此打印机为小票打印机
                            width: 40,                      //标签的宽度，单位mm
                            height: 30,                     //标签的高度，单位mm
                            gap: 2                          //每个标签之间的间隔，单位mm
                        },
                        // tagContent: _obj.content,  //设置标签打印的内容，TSC标签打印机专用属性，设置此属性，content属性可以忽略
                        content: _obj.content,     //字符串；打印内容
                        keepAlive: true,       //打印完毕后不断开连接，下次打印将使用同样的连接进行打印（蓝牙打印机建议设置为true）
                        // cmd:[25,23,0]           //打印内容的同时，一并发送指定的ESC/POS命令
                        copyNum: 1                 //数值类型；重复打印次数，默认值为1
                    }
                ]
            };
            debugAlert('打印开始', _param)
            _self.init().printOnSpecifiedPrinters(_param, function(ret, err){
                debugAlert('打印结束', arguments)
                if( ret && ret.result == 'ok' ){
                    _cb && _cb(ret);
                }else{
                    fnToast(err.msg);
                }
            });
        }

        function _android(){
            var _param = {
                taskList: [{
                    printerAddr: _obj.printerAddr,  //字符串；打印机地址
                    printerEncoding: 'gbk',             //打印机支持的编码格式，默认gbk
                    type: 1,  //打印机类型，默认是1。1：小票打印机，2：tsc标签打印机
                    tscSetting:{                       //如果是TSC标签打印机，这个属性必须设置，如果忽略此属性，则此打印机为小票打印机
                        width:40,                      //标签的宽度，单位mm
                        height:30,                     //标签的高度，单位mm
                        gap:2                          //每个标签之间的间隔，单位mm
                    },
                    content: _obj.content,     //字符串；打印内容
                    keepAlive:true,       //打印完毕后不断开连接，下次打印将使用同样的连接进行打印（蓝牙打印机建议设置为true）
                    // cmd:[25,23,0]           //打印内容的同时，一并发送指定的ESC/POS命令
                    copyNum: 1                 //数值类型；重复打印次数，默认值为1
                }]
            };
            debugAlert('打印开始', _param)
            _self.init().print(_param, function(ret, err){
                debugAlert('打印结束', arguments)
                if( ret.result == 'ok' ){
                    _cb && _cb(ret);
                }else{
                    fnToast(err.msg);
                }
            });
        }
    },

    getPrinterStatus: function(_obj, _cb){
        if (fnHasEmpty_public(_obj)) {
            _obj = {};
        } else if (typeof _obj === 'function') {
            _cb = _obj;
            _obj = {};
        }
        var _self = this;

        var _param = {
            printerAddr: _obj.printerAddr  //字符串；打印机地址
        };
        debugAlert('查看打印机状态开始', _param)
        _self.init().getPrinterStatus(_param, function(ret){
            debugAlert('查看打印机状态结束', arguments)
            _cb && _cb(ret);
        })
    }
}


// 语音播报文本内容
/*
fnVoicePlaybackText_public({
    msg: '您有新的云订单'                //选填 |        ''       |     String        |  需要播放语音的文字信息
})
*/
function fnVoicePlaybackText_public(_obj,_cb){
    if (fnHasEmpty_public(_obj)) {
        _obj = {};
    } else if (typeof _obj === 'function') {
        _cb = _obj;
        _obj = {};
    }

    if( APP.hasIos() ){
        var playText = api.require('playText');
        var _param = {
            text: _obj.msg,
            rate: 0.5
        }
        playText.play(_param);
    }else{
        var ttsModule = api.require('ttsModule');
        var _param = {
            language: 0,
            str: _obj.msg,
            speechRate: 1
        }
        ttsModule.initTts(_param, function(ret, err) {
            ttsModule.speakTts();
        });
    }
    debugAlert('语音播报文本开始', _param)
}

// 根据一个目标值，找出数据源中对应的字段并返回
// {{ {'target': $value.attr_relation_type, 'key': 'type', 'resKey': 'company', 'data': $value.goods.unit} | fnGetRelation_public }}           html 模版使用实例

// js 使用方法
/*
fnGetRelation_public({
    target: 1,                      //必填 |           |  String/Number   |  需要对比的值
    key: 'id',                      //选填 |     'id'  |  String          |  需要对比数据中的 key 值
    resKey: 'value',                //选填 |     'id'  |  String          |  需要对比数据中返回的 key 值
    data: [{                        //必填 |           | Object/Array     |  需要对比的源数据
        ……
    }]
})
*/
function fnGetRelation_public(_obj, _cb) {
    if (fnHasEmpty_public(_obj)) {
        _obj = {};
    } else if (typeof _obj === 'function') {
        _cb = _obj;
        _obj = {};
    }
    _obj.key = _obj.key || 'id';
    _obj.resKey = _obj.resKey || 'value';
    var _result = _obj.target;
    for (var x in _obj.data) {
        if (_obj.data[x][_obj.key] == _obj.target) {
            if (_obj.resKey == 'obj') {
                _result = _obj.data[x];
            } else {
                _result = fnLanguage_public(_obj.data[x][_obj.resKey]) || _obj.data[x][_obj.resKey];
            }
            break;
        }
    }
    if(_result=='Active'){
        _result='Your Group'
    }
    if(_result=='Pending'){
        _result='Pay now'
    }
    return _result;
}


// 让页面 js-count-down 类元素根据 data-count-down 属于实现倒计时效果
function fnCountDownInit_public(){
    _start();

    clearTimeout(window['fnCountDownInit_timer']);
    window['fnCountDownInit_timer'] = setTimeout(function(){
        // debugAlert(5555, window['fnCountDownInit_timer'])
        fnCountDownInit_public();
    }, 1000)

    function _start(){
        var _els = $('.js-count-down');
        if( _els.length ){
            // debugAlert(1010, _els.length)
            _els.each(function(_index, _el){
                var _dataCountDown = +$(_el).attr('data-count-down');
                $(_el).attr('data-count-down', --_dataCountDown);

                if( _dataCountDown > 0 ){
                    var _dayEl = $(_el).find('.js-day');
                    if( _dayEl.length ){
                        $(_dayEl[0]).html(parseInt(_dataCountDown / 24 / 60 / 60))
                    }

                    var _hourEl = $(_el).find('.js-hour');
                    if( _hourEl.length ){
                        $(_hourEl[0]).html(parseInt(_dataCountDown / 60 / 60 ))
                    }
                    var _minuteEl = $(_el).find('.js-minute');
                    if( _minuteEl.length ){
                        $(_minuteEl[0]).html(parseInt(_dataCountDown / 60 % 60))
                    }

                    var _secondEl = $(_el).find('.js-second');
                    if( _secondEl.length ){
                        $(_secondEl[0]).html(parseInt(_dataCountDown % 60))
                    }
                }else{
                    if( _dataCountDown < -1 ){
                        var _executionFunctionName = $(_el).attr('data-count-down-end-execution-function');
                        if( _executionFunctionName && window[_executionFunctionName] ){
                            clearTimeout(window['fnCountDownInit_timer']);
                            window[_executionFunctionName] && window[_executionFunctionName]();
                        }
                    }
                }
            })
        }
    }
}



// 获取 26 个字母
function fnGetLetter_public(_obj, _cb){
    if (fnHasEmpty_public(_obj)) {
        _obj = {};
    } else if (typeof _obj === 'function') {
        _cb = _obj;
        _obj = {};
    }

    var _data = {
        letter: []
    };
    for(var i=65;i<91;i++){
        _data.letter.push(String.fromCharCode(i));
    }

    _cb && _cb(_data);
}

// 获取 26 个字母
function getPeopleText_public(number){
    const peopleNum=Number(number);
  if(peopleNum>1){
    return'people';
  }else{
    return'person';
  }
}



// 动态引入一个 js 文件
function fnLoadScript_public(_obj, _cb){
    if (fnHasEmpty_public(_obj)) {
        _obj = {};
    } else if (typeof _obj === 'function') {
        _cb = _obj;
        _obj = {};
    }

    var script = document.createElement('script'),
        head = document.getElementsByTagName('head')[0];
    script.type = 'text/javascript';
    script.charset = 'UTF-8';
    script.src = _obj.src;
    if (script.addEventListener) {
        script.addEventListener('load', function() {
            _cb && _cb();
        }, false);
    } else if (script.attachEvent) {
        script.attachEvent('onreadystatechange', function() {
            var target = window.event.srcElement;
            if (target.readyState == 'loaded') {
                _cb && _cb();
            }
        });
    }
    head.appendChild(script);
}
