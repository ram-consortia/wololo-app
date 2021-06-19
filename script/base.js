// 事件相关常量

// group search
APP.EV_NAME.GROUP_SEARCH = 'GROUP_SEARCH';

// 用户被更新产生的事件
APP.EV_NAME.USER_UPDATE = 'USER_UPDATEUSER_UPDATE';
// 极光跳转信息
APP.EV_NAME.JPUSH_JUMP = 'JPUSH_JUMPJPUSH_JUMP';
// 单选一条数据
APP.EV_NAME.CHOICE_REDIO = 'CHOICE_REDIOCHOICE_REDIO';
// 评价数据更新
APP.EV_NAME.EV_EVALUATE_UPDATE = 'EV_EVALUATE_UPDATEEV_EVALUATE_UPDATE';
// 搜索店铺关键字弹窗
APP.EV_NAME.SEARCH_POP = 'SEARCH_POPSEARCH_POP';
// 选择开团时间
APP.EV_NAME.CHOICE_GROUP_TIME = 'CHOICE_GROUP_TIMECHOICE_GROUP_TIME';
// 拼团数据更新
APP.EV_NAME.GROUP_UPDATE = 'GROUP_UPDATEGROUP_UPDATE';
// 选择城市页面
APP.EV_NAME.CHOICE_CITY_PAGE = 'CHOICE_CITY_PAGECHOICE_CITY_PAGE';
// 城市信息发生更新
APP.EV_NAME.CITY_INFO_UPDATE = 'CITY_INFO_UPDATECITY_INFO_UPDATE';
// 收藏数据被更新
APP.EV_NAME.COLLECTION_UPDATE = 'COLLECTION_UPDATECOLLECTION_UPDATE';
// 打开筛选弹窗
APP.EV_NAME.OPEN_SCREEN_POP = 'OPEN_SCREEN_POPOPEN_SCREEN_POP';
// 打开商户分筛选弹窗
APP.EV_NAME.OPEN_SCREEN_CATEGORY_POP = 'OPEN_SCREEN_CATEGORY_POP';
// 订单数据更新
APP.EV_NAME.ORDER_UPDATE = 'ORDER_UPDATEORDER_UPDATE';
// 支付成功
APP.EV_NAME.PAY_SUCCESS = 'PAY_SUCCESSPAY_SUCCESS';
// 售后数据更新
APP.EV_NAME.REFUND_UPDATE = 'REFUND_UPDATEREFUND_UPDATE';
// 消息数据更新
APP.EV_NAME.MESSAGE = 'MESSAGEMESSAGE';
// 打开隐私协议弹窗
APP.EV_NAME.PRIVACY_PROTOCOL_POP = 'PRIVACY_PROTOCOL_POPPRIVACY_PROTOCOL_POP';

// 分享&copy
APP.EV_NAME.SHARE_COPY = 'SHARE_COPY';




// 本地缓存相关
// 是否不是首次启动
APP.LC_NAME.HAS_NOT_WELCOME = 'HAS_NOT_WELCOMEHAS_NOT_WELCOMEHAS_NOT_WELCOME';
// 极光跳转信息
APP.LC_NAME.JPUSH_JUMP = 'JPUSH_JUMPJPUSH_JUMP';
// 城市信息
APP.LC_NAME.CITY_INFO = 'CITY_INFOCITY_INFO';
// 是否同意阅读隐私协议
APP.LC_NAME.READ_PRIVACY_PROTOCOL_POP = 'READ_PRIVACY_PROTOCOL_POP';




// 国家前缀信息
APP.COUNTRY_JSON = [
    {
        id: '44',
        name: '英国',
        value: '+44'
    }, {
        id: '86',
        name: '中国',
        value: '+86'
    }, {
        id: '852',
        name: '中国香港',
        value: '+852'
    }, {
        id: '853',
        name: '中国澳门',
        value: '+853'
    }, {
        id: '886',
        name: '中国台湾',
        value: '+886'
    }]

// 三方服务相关配置
APP.THREE = {
    GOOGLE: {
        map: {
            value: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAcsUl7OL-BDBBHtIfz2C-6AtKKipk3bqs'
        }
    },

    paypal: {
        js_sdk: 'https://www.paypal.com/sdk/js?client-id=AT-ZlXCtF-w1GnTNokGft2ZK97EVMJy5vBX9vGxxSJkXnRgrBLmKAy5fkv6FJ3yiYbGCXwHzH6kGlWH-&currency=GBP'
    },

    // ins 相关
    INSTAGRAML: {
        my_url: 'https://www.instagram.com/'
    },

    // 三方类型。1：微信、2：facebook，3：google，4：twitter，5：apple
    type: {
        wx: {
            id: 1,
            value: '微信'
        },
        facebook: {
            id: 2,
            value: 'facebook'
        },
        google: {
            id: 3,
            value: 'google'
        },
        twitter: {
            id: 4,
            value: 'twitter'
        },
        apple: {
            id: 5,
            value: 'apple'
        }
    }
}


// 用户类型;1:admin; 2:会员，3：商家
APP.USER_TYPE = {
    user: {
        value: 2
    },
    store: {
        value: 3
    }
}

// 用户相关
APP.USER = {
    // 性别;0:保密,1:男,2:女
    SEX: {
        man: {
            id: 1,
            value: '男'
        },
        girl: {
            id: 2,
            value: '女'
        },
        prefer_not_to_say: {
            id: 0,
            value: '保密'
        }
    }
}

// 商户认证相关
APP.AUTH = {
    // 审核状态。1：审核中，2：审核通过，3：未通过
    status: {
        in: {
            id: 1,
            value: '审核中'
        },
        success: {
            id: 2,
            value: '审核通过'
        },
        not: {
            id: 3,
            value: '未通过'
        }
    }
}

// 反馈相关
APP.FEEDBACK = {
    // 反馈类型。1：投诉，2：意见反馈
    type: [{
        id: 1,
        value: '投诉'
    }, {
        id: 2,
        value: '意见反馈'
    }]
}

// 用户等级。1：一级，2：二级，3：三级，4：四级，5：五级
APP.USER_GRADE = {
    LV1: {
        id: 1,
        name: 'LV1'
    },
    LV2: {
        id: 2,
        name: 'LV2'
    },
    LV3: {
        id: 3,
        name: 'LV3'
    },
    LV4: {
        id: 4,
        name: 'LV4'
    },
    LV5: {
        id: 5,
        name: 'LV5'
    }
}

// 拼团相关
APP.GROUP = {
    // 拼团状态。1：拼团中，2：已结束
    status: {
        in: {
            id: 1,
            name: '拼团中'
        },
        end: {
            id: 2,
            name: '已结束'
        }
    }
}

// 售后相关
APP.AFTER_SALE = {
    // 审核状态。1：售后处理中，2：售后完成，3：售后关闭
    status: {
        in: {
            id: 1,
            name: '售后审核中'
        },
        yes: {
            id: 2,
            name: '售后完成'
        },
        close: {
            id: 3,
            name: '售后关闭'
        }
    }
}

// 订单相关
APP.ORDER = {
    // 订单状态。0：全部（默认），1：拼团中，2：待付款，3：未消费，4：已消费，5：已关闭
    status: {
        in: {
            id: 1,
            name: '拼团中'
        },
        wait: {
            id: 2,
            name: '待付款'
        },
        not: {
            id: 3,
            name: '未消费'
        },
        already: {
            id: 4,
            name: '已消费'
        },
        close: {
            id: 5,
            name: '交易关闭'
        }
    },
    // 订单状态。0：全部（默认）。1.未消费，2：待接单，3：制作中，4：在路上，5：已消费，6：已关闭
    store_status: {
        not: {
            id: 1,
            name: '未消费'
        },
        wait: {
            id: 2,
            name: '待接单'
        },
        in: {
            id: 3,
            name: '制作中'
        },
        road: {
            id: 4,
            name: '在路上'
        },
        already: {
            id: 5,
            name: '已消费'
        },
        close: {
            id: 6,
            name: '交易关闭'
        }
    },
    // 支付方式。0：其他，1：微信，2：支付宝，3：paypal，4：ApplePay
    pay_method: {
        wxPay: {
            id: 1,
            name: '微信支付'
        },
        aliPay: {
            id: 2,
            name: '支付宝'
        },
        PayPal: {
            id: 3,
            name: 'PayPal'
        },
        ApplePay: {
            id: 4,
            name: 'ApplePay'
        },
        bankCard: {
            id: 6,
            name: 'bankCard'
        }
    }
}

// 消息相关
APP.NEWS = {
    // 消息类型。1：系统通知，2：平台消息
    type: {
        notification: {
            type: 1,
            name: '系统消息'
        },
        message: {
            type: 2,
            name: '平台消息'
        }
    },
    // 消息目标类型。0：无需跳转处理的消息，1：普通用户-优惠券-已核销成功，2：普通用户-拼团订单-已接单，3：普通用户-拼团订单-已拒单，4：普通用户-拼团订单-已配送，5：普通用户-拼团订单-配送完成，6：商家用户-拼团订单-配送完成，7：商家用户-拼团订单-待接单，8：普通用户-申请售后-审核通过，9：普通用户-申请售后-退款成功，10：商家认证-审核失败，11：商家认证-审核成功，12：优惠券详情查看
    target_type: {
        value1: {
            id: 1,
            name: '优惠券-已核销成功'
        },
        value2: {
            id: 2,
            name: '拼团订单-已接单'
        },
        value3: {
            id: 3,
            name: '拼团订单-已拒单'
        },
        value4: {
            id: 4,
            name: '拼团订单-已配送'
        },
        value5: {
            id: 5,
            name: '拼团订单-配送完成'
        },
        value6: {
            id: 6,
            name: '拼团订单-配送完成'
        },
        value7: {
            id: 7,
            name: '拼团订单-待接单'
        },
        value8: {
            id: 8,
            name: '申请售后-审核通过'
        },
        value9: {
            id: 9,
            name: '申请售后-退款成功'
        },
        value10: {
            id: 10,
            name: '商家认证-审核失败'
        },
        value11: {
            id: 11,
            name: '商家认证-审核成功'
        },
        value12: {
            id: 12,
            name: '优惠券详情查看'
        }
    }
}

// 优惠券相关
APP.COUPON = {
    // 有效期类型。1：固定生效时间，2：领取当天N天内有效，3：领取次日N天内有效
    validity_type: {
        fixed: {
            id: 1,
            name: '固定生效时间'
        },
        day: {
            id: 2,
            name: '领取当天N天内有效'
        },
        next_day: {
            id: 3,
            name: '领取次日N天内有效'
        }
    },
    // 优惠券类型。1：折扣券，2：套餐券，3：单品优惠券
    type: {
        all: {
            id: 0,
            name: '全部',
            active: APP.YES
        },
        discount: {
            id: 1,
            name: '折扣券'
        },
        meal: {
            id: 2,
            name: '套餐券'
        },
        single: {
            id: 3,
            name: '单品优惠券'
        }
    },
    // 优惠券拼团最高人数价格筛选。0：全部（默认），1：10元一下，2：11-50元，3：51-100元，4：101-150元，5：151元以上
    price_type: {
        all: {
            id: 0,
            name: '全部',
            active: APP.YES
        },
        value1: {
            id: 1,
            name: '10元以下'
        },
        value2: {
            id: 2,
            name: '11-50元'
        },
        value3: {
            id: 3,
            name: '51-100元'
        },
        value4: {
            id: 4,
            name: '101-150元'
        },
        value5: {
            id: 5,
            name: '151元以上'
        }
    }
}

// 商铺相关
APP.STORE = {
    // 营业状态。0：全部，1：营业中，2：未营业
    business: {
        all: {
            id: 0,
            name: '全部',
            active: APP.YES
        },
        in: {
            id: 1,
            name: '营业中'
        }
    },
    // 人气。2：由高到低，1：由低到高
    popularity: {
        all: {
            id: 0,
            name: '全部',
            active: APP.YES
        },
        desc: {
            id: 2,
            name: '由高到低'
        },
        asc: {
            id: 1,
            name: '由低到高'
        }
    },
    // 评分。2：由高到低，1：由低到高
    ev_score: {
        all: {
            id: 0,
            name: '全部',
            active: APP.YES
        },
        desc: {
            id: 2,
            name: '由高到低'
        },
        asc: {
            id: 1,
            name: '由低到高'
        }
    },
    // 等级。2：由高到低，1：由低到高
    grade: {
        all: {
            id: 0,
            name: '全部',
            active: APP.YES
        },
        desc: {
            id: 2,
            name: '由高到低'
        },
        asc: {
            id: 1,
            name: '由低到高'
        }
    }
}


// 极光相关
APP.JPUSH = {
    // 极光跳转规则。1:跳转到消息列表，2:跳转订单详情，3:系统消息，跳转到系统消息列表
    JUMP_RULE: {
        message: {
            value: 1
        },
        order: {
            value: 2
        },
        sys_message: {
            value: 3
        }
    }
}

// 公共配置参数
APP.GET_OPTION = {
    agreementuser: {
        value: 'agreementuser',
        title: '用户协议'
    },
    privacyuser: {
        value: 'privacyuser',
        title: '隐私协议'
    },
    contactuser: {
        value: 'contactuser',
        title: '客服电话'
    },
    ev_switchuser: {
        value: 'ev_switchuser',
        title: '未下单评价开关管理'
    },
    after_saleuser: {
        value: 'after_saleuser',
        title: '售后说明'
    },
    unconsumed_switchuser: {
        value: 'unconsumed_switchuser',
        title: '商家未消费订单显示'
    },
    download_appuser: {
        value: 'download_appuser',
        title: 'APP下载地址'
    },
    upload_ruleuser: {
        value: 'upload_ruleuser',
        title: '商家上传规则说明'
    }
}

// 常用状态。0:否，1:是
APP.IS_TYPE = {
    no: {
        id: 0,
        title: '否'
    },
    yes: {
        id: 1,
        title: '是'
    }
}


// 将某个对象去掉键名称变成一个数组对象
function fnObjToArr_public(_data) {
    var _result = [];
    for (var x in _data) {
        _result.push(_data[x]);
    }
    return _result;
}




// 单选一条数据
function fnChoiceRedio_base(_obj, _cb) {
    if (fnHasEmpty_public(_obj)) {
        _obj = {};
    } else if (typeof _obj === 'function') {
        _cb = _obj;
        _obj = {};
    }

    _obj.time = fnDateNow_public();
    fnKeyboardBlur_public();
    fnOpen('sign/areaCode_win.html', {
        param: _obj
    });

    api.addEventListener({
        name: APP.EV_NAME.CHOICE_REDIO
    }, function (ret, err) {
        debugAlert('fnChoiceRedio_base', arguments)
        // 从透明的地方关闭的窗口
        if (ret.value.hasModel) {

        } else {
            _cb && _cb(ret.value);
        }
        api.removeEventListener({
            name: APP.EV_NAME.CHOICE_REDIO
        });
    });
}

// 获取公共配置
// fnGetPublicConfig_base({
//     option_name: api.pageParam.type             //必填 |           | String |  获取类型，类型见接口文档 https://www.showdoc.cc/283904581162442?page_id=1700894279598887
// }, function(ret){
//     // ret.content                       配置信息
//     fnValue(".main", ret.content);
// })
function fnGetPublicConfig_base(_obj, _cb) {
    if (fnHasEmpty_public(_obj)) {
        _obj = {};
    } else if (typeof _obj === 'function') {
        _cb = _obj;
        _obj = {};
    }

    fnAjax({
        url: 'base/index/get_config',
        method: 'GET',
        data: {
            option_name: _obj.value
        }
    }, function (ret) {
        if (ret.code == APP.HTTP_STATUS.SUCCESS) {
            _cb && _cb(ret.data);
        } else {
            fnToast(ret.msg);
        }
    })
}


// 清除本地用户信息
function fnClearUser_public(_cb) {
    fnAjax({
        url: 'user/index/logout',
        method: 'POST'
    }, function (ret) {
        if (ret.code == APP.HTTP_STATUS.SUCCESS) {
            // fnRmCookie(APP.LC_NAME.USER);
            _cb && _cb();
        } else {
            fnToast(ret.msg);
        }
    })
}

// 退出登陆
function fnLogout_public() {
    fnAlert_public({
        title: '提示', //‘’ | 选填 |不传则不显示弹窗顶部文案
        msg: '确认退出登录？', //’’ | 选填 |不传则不显示内容
        buttons: [{ //’’ | 至少传入一个按钮 |数组有多少就显示多少按钮
            text: '取消', //’确认’ | 至少传入一个按钮 |按钮文案
            callback: function () { //function | 必传 |点击按钮时触发该回调函数

            }
        }, {
            text: '确认',
            active: true, //false | 选填 | 是否高亮
            callback: function () {
                fnClearUser_public(function () {
                    fnBackLogin_public();
                });
            }
        }]
    }, function () { //如果设置回调函数，打开的弹窗则可以点击背景关闭，并触发该回调函数

    });
}


// 更新用户信息
// fnUserUpdate_public({
//     avatar: ret.filename        //必填     |      |     Boolean  |  是否使用上一次的数据（如果为true返回数据速度更快）
//      ……                         //更多其他参数见接口文档 https://www.showdoc.cc/283904581162442?page_id=1654436478556762
// }, function(_user){
//     // _user.user         //更新后的用户信息。也可以监听 APP.EV_NAME.USER_UPDATE 事件
// })
function fnUserUpdate_public(_obj, _cb) {
    if (fnHasEmpty_public(_obj)) {
        _obj = {};
    } else if (typeof _obj === 'function') {
        _cb = _obj;
        _obj = {};
    }
    fnAjax({
        url: 'user/index/update_user',
        method: 'POST',
        hasProgress: {
            status: fnHasEmpty_public(_obj.hasProgress) ? true : _obj.hasProgress
        },
        data: _obj
    }, function (ret) {
        if (ret.code == APP.HTTP_STATUS.SUCCESS) {
            fnRefreshUserInfo_public(_obj, function (_user) {
                _cb && _cb(_user);
            })
        } else {
            fnToast(ret.msg);
        }
    })
}

// 刷新本地用户信息，并发出用户信息已更新的事件
function fnRefreshUserInfo_public(_obj, _cb) {
    if (fnHasEmpty_public(_obj)) {
        _obj = {};
    } else if (typeof _obj === 'function') {
        _cb = _obj;
        _obj = {};
    }

    fnUser_public({
        isLastData: false, //必填     |  false    |     Boolean  |  是否使用上一次的数据（如果为true返回数据速度更快）
        hasProgress: fnHasEmpty_public(_obj.hasProgress) ? true : _obj.hasProgress
    }, function (_user) {
        _cb && _cb(_user);

        if (fnHasEmpty_public(_obj.hasSendEvent) || _obj.hasSendEvent) {
            api.sendEvent({
                name: APP.EV_NAME.USER_UPDATE,
                extra: {}
            });
        }
    })
}


//获取用户信息
// fnUser_public({
//     id: '1',               //选填     |      |     Number  |  如果传入该值 isLastData 失效
//     isLastData: true，        //选填     |   false   |     Boolean  |  是否使用上一次的数据（如果为true返回数据速度更快）
//     hasProgress: true        //选填     |   true   |     Boolean  |  是否请求加载动画
// }, function(_user){
//     if( _user ){
//         // 当前登陆了用户
//     }else{
//         // 当前没有登陆用户
//     }
// })
function fnUser_public(_obj, _cb) {
    if (fnHasEmpty_public(_obj)) {
        _obj = {};
    } else if (typeof _obj === 'function') {
        _cb = _obj;
        _obj = {};
    }

    if (_obj.id) {
        _fnFind(function (ret) {
            _cb && _cb(ret.data);
        }, _obj.id);
    } else {
        fnCookie(APP.LC_NAME.USER, function (_user) {
            if (_user) {
                if (_obj.isLastData) {
                    _cb && _cb(_user);
                }
                _fnFind(function (ret) {
                    _user.user = ret.data;

                    // 设置登录手机前缀
                    fnCookie(APP.LC_NAME.LOGIN_USERNAME, function (_login_username) {
                        if (_login_username && !_login_username.country_code && _user.user.mobile && _user.user.mobile == _login_username.username) {
                            _login_username.country_code = _user.user.country_code;
                            fnCookie(APP.LC_NAME.LOGIN_USERNAME, _login_username);
                        }
                    })
                    fnCookie(APP.LC_NAME.USER, _user, function (_user) {
                        if (!_obj.isLastData) {
                            _cb && _cb(_user);
                        }
                    });
                });
            } else {
                _cb && _cb();
            }
        })
    }

    function _fnFind(_cb, _id) {
        var _param = {
            url: 'user/index/user_info',
            method: 'GET',
            hasProgress: {
                status: fnHasEmpty_public(_obj.hasProgress) ? true : _obj.hasProgress
            },
            data: {}
        }
        if (_id) {
            _param.data.id = _id;
        }
        fnAjax(_param, function (ret) {
            if (ret.code == APP.HTTP_STATUS.SUCCESS) {
                _cb && _cb(ret);
            } else {
                fnToast(ret.msg);
            }
        })
    }
}


//发送验证码
// fnGetSmsCode_base({
//     usernames: fnValue('#mobile')                    //必填 | ''  | String  |  手机号（需要在手机上前面加00开头的国家码）/邮箱地址
// }, function(ret){
//     // ret.msg                                    //发送成功返回的提示信息
//     fnToast(ret.msg);
//     fnCount_public(_el, 59);
// })
function fnGetSmsCode_base(_obj, _cb) {
    if (fnHasEmpty_public(_obj)) {
        _obj = {};
    } else if (typeof _obj === 'function') {
        _cb = _obj;
        _obj = {};
    }
    _obj.num = parseInt(Math.random() * 20000000);
    _obj.date = fnDateNow_public() / 1000;

    var _param = {
        url: 'user/verification_code/send',
        method: 'POST',
        data: _obj
    }
    var _data = (_param.data.num * 100) + 'suzikeji' + _param.data.username + _param.data.date;
    fnMd5_public({
        data: _data
    }, function (ret) {
        _param.data.sign = ret.value;
        fnAjax(_param, function (ret, err) {
            if (ret.code == APP.HTTP_STATUS.SUCCESS) {
                _cb && _cb(ret);
            } else {
                fnToast(ret.msg);
            }
        })
    })
}



// 发送验证码倒计时
//     fnCount_public(_el, 59);
function fnCount_base(_el, _num) {
    if (_num <= 0) {
        $(_el).removeClass('no-onclick');
        fnValue(_el, fnLanguage_public('获取验证码'));
    } else {
        $(_el).addClass('no-onclick');
        fnValue(_el, _num + 's');
        setTimeout(function () {
            fnCount_base(_el, --_num);
        }, 1000);
    }
}




// 设置本地token
function fnSetToken_base(_obj, _cb) {
    if (fnHasEmpty_public(_obj)) {
        _obj = {};
    } else if (typeof _obj === 'function') {
        _cb = _obj;
        _obj = {};
    }

    _obj.username && fnCookie(APP.LC_NAME.LOGIN_USERNAME, _obj.username);
    fnCookie(APP.LC_NAME.USER, _obj, function () {
        _cb && _cb(_obj);
    })
}

// 自定义 md5
function fnCustomMd5_base(_obj, _cb) {
    if (fnHasEmpty_public(_obj)) {
        _obj = {};
    } else if (typeof _obj === 'function') {
        _cb = _obj;
        _obj = {};
    }
    _obj.data = ['www.suuzi.cn', _obj.data].join();
    fnMd5_public(_obj, function (ret) {
        _cb && _cb(ret);
    })
}


// 自动登录
function fnJoinHomeLogic_base(_obj, _cb) {
    if (fnHasEmpty_public(_obj)) {
        _obj = {};
    } else if (typeof _obj === 'function') {
        _cb = _obj;
        _obj = {};
    }
    fnUser_public({
        isLastData: false, //必填     |      |     Boolean  |  是否使用上一次的数据（如果为true返回数据速度更快）
        hasProgress: fnHasEmpty_public(_obj.hasProgress) ? true : _obj.hasProgress
    }, function (_user) {

        if (_user) {
            // 当前登陆了用户
            // debugAlert(222, arguments)
            fnCookie('userId', _user.user.id);


            if (!_obj.isNotJumpHome) {
                if (_user.user.user_type == APP.USER_TYPE.store.value) {
                    if (!(_user.user.auth.id && + _user.user.auth.is_can_app)) {
                        fnOpen('sign/business_win.html', {
                            repeat: APP.YES
                        });
                    } else {
                        fnOpen('business/business_win.html');
                    }
                } else {
                    api.execScript({
                        name:"home_win",
                        script: 'fnInitTableBar(0);'
                    });
                    fnOpen('home/home_win.html')
                }
            }

            // 获取极光id
            AJPUSH.getRegistrationId(function (_ajPushId) {
                debugAlert('极光', arguments)
                if (_ajPushId) {
                    fnUserUpdate_public({
                        aj_push_id: _ajPushId,        //必填     |      |     Boolean  |  是否使用上一次的数据（如果为true返回数据速度更快）
                        hasProgress: APP.NO
                    }, function (_user) {
                        // _user.user         //更新后的用户信息。也可以监听 APP.EV_NAME.USER_UPDATE 事件
                    })
                }
            })

            // 根据角色绑定别名

            AJPUSH.bindAliasAndTags({
                alias: _user.user.user_type.toString()
            }, function (ret) {

            })
        } else {
            // 当前没有登陆用户
            // fnOpen('sign/signIn_win.html')
            api.openWin({
                name:"welcomeTo_win",
                url:"./html/public/welcomeTo_win.html"
            });
            api.addEventListener({
                name:'viewdisappear'
            },function(){
                api.closeWin();
            })
        }

        _cb && _cb(_user);

    })
}


// 打开分享弹窗
function fnOpenShare_base(_obj, _cb) {
    if (fnHasEmpty_public(_obj)) {
        _obj = {};
    } else if (typeof _obj === 'function') {
        _cb = _obj;
        _obj = {};
    }
    fnOpen('pop/share_pop.html', {
        param: _obj
    })

    // api.addEventListener({
    //     name: APP.EV_NAME.SHARE_COPY
    // }, function (ret, err) {

    //     console.log(ret);
    //     fnOpen('pop/shareCopy_pop.html');
    //     // api.removeEventListener({
    //     //     name: APP.EV_NAME.SHARE_COPY
    //     // });
    // });

    //APP.EV_NAME.SHARE_COPY
}


// 切换一个table
function fnSwitchTable_base(_obj, _cb, type) {
    if (fnHasEmpty_public(_obj)) {
        _obj = {};
    } else if (typeof _obj === 'function') {
        _cb = _obj;
        _obj = {};
    }

    if (APP.hasDom(_obj)) {
        _obj.el = _obj;
    }

    fnKeyboardBlur_public();
    event && event.stopPropagation();

    if (type) {
        $(_obj.el).siblings().removeClass('clickP');
        $(_obj.el).addClass('clickP');
    } else {
        $(_obj.el).siblings().removeClass('active');
        $(_obj.el).addClass('active');
    }

    $('.sw').addClass('hide');
    $('.sw.' + $(_obj.el).data('class')).removeClass('hide');
    $('#user_pass').val("")
    _cb && _cb();
}


// 切换单个按钮状态
function fnSwitchRedio_base(_obj, _cb) {
    if (fnHasEmpty_public(_obj)) {
        _obj = {};
    } else if (typeof _obj === 'function') {
        _cb = _obj;
        _obj = {};
    }
    if (APP.hasDom(_obj)) {
        _obj.el = _obj;
    }

    fnKeyboardBlur_public();
    event && event.stopPropagation();

    if ($(_obj.el).hasClass('active')) {
        $(_obj.el).removeClass('active');
    } else {
        $(_obj.el).addClass('active');
    }
    _cb && _cb({
        isChoice: +$(_obj.el).hasClass('active')
    });
}


// 切换密码输入框显示
function fnSwitchEye_base(_el) {
    var _input = $(_el).parent().find('input');
    if ($(_el).hasClass('active')) {
        $(_el).removeClass('active');
        _input.attr('type', 'password');
    } else {
        $(_el).addClass('active');
        _input.attr('type', 'text');
    }
}


// 打开密码登录页
function fnOpenPasswordLogin_base(_el) {
    // fnOpen('sign/number_win.html')
    fnOpen('sign/signIn_win.html', {
        param: {
            isPasswordLogin: APP.YES
        },
        repeat: APP.YES
    })
}


// 打开设置密码/忘记密码页面
function fnOpenSetPassword_base(_isSetPassword) {
    fnOpen('sign/setPassword_win.html', {
        param: {
            isSetPassword: _isSetPassword
        },
        repeat: APP.YES
    })
}


// 打开美洽客服
function fnOpenMeiQia_base() {
    fnUser_public({
        isLastData: true,        //选填     |      |     Boolean  |  是否使用上一次的数据（如果为true返回数据速度更快）,
        hasProgress: false       //必填     |      |     Boolean  |  是否使用上一次的数据（如果为true返回数据速度更快）,
    }, function (_user) {
        if (_user) {
            // 当前登陆了用户
            _start(_user.user);
        } else {
            // 当前没有登陆用户
        }
    })

    function _start(_user) {
        //创建美洽
        var meiQia = api.require('meiQia');
        //配置初始化美洽需要的appkey
        var _param = {
            appkey: "a90e46fe24122deac281dad3c0ec0e9b"
        };
        //初始化美洽
        debugAlert('美洽initMeiQia开始', _param)
        meiQia.initMeiQia(_param, function (ret, err) {
            debugAlert('美洽initMeiQia结束', arguments)
            if (ret) {
                //初始化成功
                meiQia.show({
                    showAvatar: true,
                    showTitle: true
                });
                var _param = {
                    id: ret.clientId
                };
                debugAlert('美洽setLoginMQClientId开始', _param)
                meiQia.setLoginMQClientId(_param);

                var _param = {
                    id: _user.id
                };
                debugAlert('美洽setLoginCustomizedId开始', _param)
                meiQia.setLoginCustomizedId(_param);
            } else {
                //初始化失败
            }
        })
    }
}

// 分页获取列表
function fnGetList_base(_obj, _cb) {
    if (fnHasEmpty_public(_obj)) {
        _obj = {};
    } else if (typeof _obj === 'function') {
        _cb = _obj;
        _obj = {};
    }

    api.removeEventListener({
        name: 'scrolltobottom'
    });

    var _param = {
        url: _obj.url,
        method: 'GET',
        data: _obj.data,
        hasProgress: {
            status: fnHasEmpty_public(_obj.hasProgress) ? true : _obj.hasProgress
        }
    }

    _obj.noDataSelector = _obj.noDataSelector || "#no-data";
    _obj.listSelector = _obj.listSelector || "#list";
    _obj.listTemplate = _obj.listTemplate || "list-template";
    fnAjax(_param, function (ret, err) {
        if (ret.code == APP.HTTP_STATUS.SUCCESS) {
            APP._list = (ret.data.data ? ret.data.data : ret.data) || [];
            if (ret.data && (ret.data.length || (ret.data.data && ret.data.data.length))) {
                $(_obj.listSelector).removeClass('hide');
                $(_obj.noDataSelector).addClass("hide");
                $(_obj.listSelector)[APP.PAGE.START_PAGE == APP.PAGE.START_PAGE_TEMP ? 'html' : 'append'](template(_obj.listTemplate, APP));
                // 分页自加
                ++APP.PAGE.START_PAGE;

                api.addEventListener({
                    name: 'scrolltobottom'
                }, function (ret, err) {
                    _cb && _cb({
                        evType: 'scrolltobottom'
                    });
                });
                //alert(APP._list)
                //console.log(JSON.stringify(APP._list))
                /*if(Number(_param.data.status) === 2){
                    fnOpen('home/homeHeader_frm.html',{param: {idr:'status'}})
                    //fnOpen('home/homeHeader_frm.html')
                    //fnOpen('home/home_win.html')
                    //alert(Number(_param.data.status))
                }*/
            } else {
                if (APP.PAGE.START_PAGE == APP.PAGE.START_PAGE_TEMP) {
                    $(_obj.noDataSelector).removeClass("hide");
                    $(_obj.listSelector).addClass('hide');
                    fnValue(_obj.listSelector, '');
                }
            }

            _cb && _cb({
                evType: 'success',
                data: ret.data
            });
        } else {
            fnToast(ret.msg);
        }
    });
}



// 根据当前语言分别显示中英文字段
function fnLanguageSwitch_base(_data) {
    if (fnHasLanguageCN_public()) {
        return _data['zh_cn'];
    } else {
        return _data['en_us'];
    }
}




// 获取拼团最多人数价格
function fnGetMaxPrice_base(_data) {
    //return Math.floor(parseInt(_data[_data.length - 1]) * 100) / 100 ;
    return toDecimal2(parseFloat(_data[_data.length - 1]))
}

function toDecimal2(x) {
    var f = parseFloat(x);
    if (isNaN(f)) {
        return false;
    }
    var f = Math.round(x*100)/100;
    var s = f.toString();
    var rs = s.indexOf('.');
    if (rs < 0) {
        rs = s.length;
        s += '.';
    }
    while (s.length <= rs + 2) {
        s += '0';
    }
    return s;
}

function fomatFloat(src,pos){
    return Math.round(src*Math.pow(10, pos))/Math.pow(10, pos);
}


function arrTrans(num, arr) { // 一维数组转换为二维数组
    const iconsArr = []; // 声明数组
    arr.forEach((item, index) => {
        const page = Math.floor(index / num); // 计算该元素为第几个素组内
        if (!iconsArr[page]) { // 判断是否存在
            iconsArr[page] = [];
        }
        iconsArr[page].push(item);
        iconsArr[page].replace(/,/g, "         ")
    });

    return iconsArr;
}

// 优惠券拼团价格对应人数规则
/*function fnGetCouponPriceRule_base(_data) {

    var _msg = [];
    var _msgT = []

    for (var x in _data) {
        //_msg.push((+ x + 1)+ ' ' + fnLanguage_public('人享') + '￡' + _data[x]);
        if (x == 0) {
            _msg.push("<span style='color: #ff9450;font-weight:bold;'>" + (+ x + 1) + ' ' + "</span>" + '&nbsp;&nbsp;' + fnLanguage_public('人付款') + '￡' + "<span style='color: #ff9450;font-weight:bold;'>" + _data[x] + "</span>");
        } else {
            _msg.push("<span style='color: #ff9450'>" + (+ x + 1) + "</span>" + '&nbsp;&nbsp;' + fnLanguage_public('人付款') + '￡' + "<span style='color: #ff9450'>" + _data[x] +'&nbsp;&nbsp;'+"</span>"+ fnLanguage_public('每'));
        }
    }

    for (var i = 0, len = _msg.length; i < len; i++) { //每组2个
        // var strObjcet = _msg.slice(i, i + 1);
        _msgT.push("<div class='personP'>" + "<p>" + _msg[i] + "</p>" + "</div>");
    }

    return _msgT.join(' ');
}*/
function fnGetCouponPriceRule_base(_data) {
    var _groupData = _data.coupon?_data.coupon.price_group:_data;
    var _orderNum = Number(_data.participants);

    var _msg = [

    ];
    var _msgT = []
    let we

    for (var x in _groupData) {
        //_msg.push((+ x + 1)+ ' ' + fnLanguage_public('人享') + '￡' + _data[x]);
        if (x == 0) {
            if (x == _orderNum - 1) {
                _msg.push("<span style='color: #ff9450;font-weight:bold;'>"+"<span class='spanJT' style='color: #333;font-weight:bold;margin-right: 20px;'> </span>"+ (+ x + 1) + ' ' + "</span>" + '&nbsp;&nbsp;' + 'person will pay' + '￡' + "<span style='color: #ff9450;font-weight:bold;'>" + _groupData[x] + "</span>");
            } else {
                _msg.push("<span style='color: #ff9450;'>" + (+ x + 1) + ' ' + "</span>" + '&nbsp;&nbsp;' + 'person will pay' + '￡' + "<span style='color: #ff9450;'>" + _groupData[x] + "</span>");
            }
        } else {
            if (x == _orderNum - 1) {
                _msg.push(" <span style='color: #ff9450;font-weight:bold;'>"+"<span class='spanJT' style='color: #333;font-weight:bold;margin-right: 20px;margin-left: -20px'> </span>"+ (+x + 1) + "</span>" + '&nbsp;&nbsp;' + fnLanguage_public('人付款') + '￡' + "<span style='color: #ff9450;font-weight:bold;'>" + _groupData[x] + '&nbsp;&nbsp;' + "</span>" + fnLanguage_public('每'));
            } else {
                _msg.push("<span style='color: #ff9450'>" + (+x + 1) + "</span>" + '&nbsp;&nbsp;' + fnLanguage_public('人付款') + '￡' + "<span style='color: #ff9450'>" + _groupData[x] + '&nbsp;&nbsp;' + "</span>" + fnLanguage_public('每'));
            }
        }
    }
    for (var i = 0, len = _msg.length; i < len; i++) { //每组2个
        //console.log(JSON.stringify(we))
        // var strObjcet = _msg.slice(i, i + 1);
        if(i>1){
            _msgT.push("<div class='personP hidden'>" + "<p>" + _msg[i] + "</p>" + "</div>");
        }else{
            _msgT.push("<div class='personP'>" + "<p>" + _msg[i] + "</p>" + "</div>");
        }

    }

    return _msgT.join(' ');
}

// 优惠券有效期时间描述组装
function fnGetCouponDateMsg_base(_data) {
    var _msg = null;
    if (_data.validity_type == APP.COUPON.validity_type.fixed.id) {

        _msg = [fnLanguage_public('{start}-{end}有效', {
            start: dateFormat(_data.validity_start_time, 'yyyy/MM/dd'),
            end: dateFormat(_data.validity_end_time, 'yyyy/MM/dd')
        })].join('');

        // _msg = [dateFormat(_data.validity_start_time, 'yyyy/MM/dd'), '-', dateFormat(_data.validity_end_time, 'yyyy/MM/dd'), fnLanguage_public('有效')].join('');
    } else if (_data.validity_type == APP.COUPON.validity_type.day.id) {
        _msg = fnLanguage_public('领取后当日开始{day}天内有效', {
            day: _data.validity_day
        });
        // _msg = [fnLanguage_public('领取后当日开始'), _data.validity_day, fnLanguage_public('天内有效')].join('');
    } else {
        _msg = fnLanguage_public('领取后次日开始{day}天内有效', {
            day: _data.validity_day
        });

        // _msg = [fnLanguage_public('领取后次日开始'), _data.validity_day, fnLanguage_public('天内有效')].join('');
    }
    return _msg;
}






// 搜索店铺关键字
function fnSearch_base(_obj, _cb) {
    if (fnHasEmpty_public(_obj)) {
        _obj = {};
    } else if (typeof _obj === 'function') {
        _cb = _obj;
        _obj = {};
    }

    _obj.time = fnDateNow_public();
    fnKeyboardBlur_public();
    fnOpen('pop/search_pop.html', {
        param: _obj
    });

    api.addEventListener({
        name: APP.EV_NAME.SEARCH_POP
    }, function (ret, err) {
        debugAlert('fnSearch_base', arguments)
        // 从透明的地方关闭的窗口
        if (ret.value.hasModel) {

        } else {
            _cb && _cb(ret.value);
        }
        api.removeEventListener({
            name: APP.EV_NAME.SEARCH_POP
        });
    });
}



// 增加虚拟人数
function fnAddVirtualHumanCount_base(_obj, _cb) {
    if (fnHasEmpty_public(_obj)) {
        _obj = {};
    } else if (typeof _obj === 'function') {
        _cb = _obj;
        _obj = {};
    }

    _obj.is_add_virtual = APP.YES;
    fnChoiceGroupTime_base(_obj, function (ret) {
        _obj.virtual_human_count = ret.virtual_human_count;
        var _param = {
            url: 'order/group/addVirtualHumanCount',
            method: 'POST',
            data: _obj
        }
        fnAjax(_param, function (ret) {
            if (ret.code == APP.HTTP_STATUS.SUCCESS) {
                fnToast(ret.msg, function () {
                    _cb && _cb(ret);
                })

                api.sendEvent({
                    name: APP.EV_NAME.GROUP_UPDATE,
                    extra: {
                        currentWinName: api.winName
                    }
                });
            } else {
                fnToast(ret.msg);
            }
        })
    })
}

// 选择开团时间
function fnChoiceGroupTime_base(_obj, _cb) {
    if (fnHasEmpty_public(_obj)) {
        _obj = {};
    } else if (typeof _obj === 'function') {
        _cb = _obj;
        _obj = {};
    }

    _obj.time = fnDateNow_public();
    fnKeyboardBlur_public();
    // if(_obj.is_add_virtual){
    //     fnOpen('pop/groupOften_pop.html', {
    //         param: _obj
    //     });
    // }else{
    //     fnOpen('public/groupOften_win.html', {
    //         param: _obj
    //     });
    // }

    /*fnOpen('pop/groupOften_pop.html', {
        param: _obj
    });*/


    api.addEventListener({
        name: APP.EV_NAME.CHOICE_GROUP_TIME
    }, function (ret, err) {
        debugAlert('fnChoiceGroupTime_base', arguments)
        // 从透明的地方关闭的窗口
        if (ret.value.hasModel) {

        } else {
            _cb && _cb(ret.value);
        }
        api.removeEventListener({
            name: APP.EV_NAME.CHOICE_GROUP_TIME
        });
    });
}

function fnTimeSelector(_obj) {
    fnTimeSelector_publicA({
        title: '',
        expire_time:_obj.expire_time,
        closeText: '重置',
        closeCallback: function(){
            delete APP._date;
            delete APP._dateFormat;

        }
    }, function(ret) {
        APP._date = ret.date;
        APP._dateFormat = new Date(APP._date).Format('yyyy-MM');

    })
}

function fnTimeSelector_publicA(_obj, _cb) {

    if (fnHasEmpty_public(_obj)) {
        _obj = {};
    } else if (typeof _obj === 'function') {
        _cb = _obj;
        _obj = {};
    }
    _obj.time = fnDateNow_public();
    fnKeyboardBlur_public();
    fnOpen('pop/groupOftenA_pop.html', {
        param: _obj
    });

    /*fnOpen('pop/aPublicTimeSelector_pop.html', {
        param: _obj
    });*/

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




// 选择城市页面
function fnChoiceCity_base(_obj, _cb) {
    if (fnHasEmpty_public(_obj)) {
        _obj = {};
    } else if (typeof _obj === 'function') {
        _cb = _obj;
        _obj = {};
    }

    _obj.time = fnDateNow_public();
    fnKeyboardBlur_public();
    fnOpen('home/city_win.html', {
        param: _obj
    });

    api.addEventListener({
        name: APP.EV_NAME.CHOICE_CITY_PAGE
    }, function (ret, err) {
        debugAlert('fnChoiceCity_base', arguments)
        // 从透明的地方关闭的窗口
        if (ret.value.hasModel) {

        } else {
            _cb && _cb(ret.value);
        }
        api.removeEventListener({
            name: APP.EV_NAME.CHOICE_CITY_PAGE
        });
    });
}




// 打开筛选弹窗
function fnOpenScreen_base(_obj, _cb) {
    if (fnHasEmpty_public(_obj)) {
        _obj = {};
    } else if (typeof _obj === 'function') {
        _cb = _obj;
        _obj = {};
    }

    _obj.time = fnDateNow_public();
    fnKeyboardBlur_public();
    fnOpen('pop/screen_pop.html', {
        param: _obj
    });

    api.addEventListener({
        name: APP.EV_NAME.OPEN_SCREEN_POP
    }, function (ret, err) {
        debugAlert('fnOpenScreen_base', arguments)
        if (typeof ret.value == 'string') {
            ret.value = JSON.parse(ret.value);
        }

        // 从透明的地方关闭的窗口
        if (ret.value.hasModel) {

        } else {
            _cb && _cb(ret.value);
        }
        api.removeEventListener({
            name: APP.EV_NAME.OPEN_SCREEN_POP
        });
    });
}





// 打开商户分筛选弹窗
function fnOpenScreenCategory_base(_obj, _cb) {
    if (fnHasEmpty_public(_obj)) {
        _obj = {};
    } else if (typeof _obj === 'function') {
        _cb = _obj;
        _obj = {};
    }

    _obj.time = fnDateNow_public();
    fnKeyboardBlur_public();
    fnOpen('pop/merchant_pop.html', {
        param: _obj
    });

    api.addEventListener({
        name: APP.EV_NAME.OPEN_SCREEN_CATEGORY_POP
    }, function (ret, err) {
        debugAlert('fnOpenScreenCategory_base', arguments)
        // 从透明的地方关闭的窗口
        if (ret.value.hasModel) {

        } else {
            _cb && _cb(ret.value);
        }
        api.removeEventListener({
            name: APP.EV_NAME.OPEN_SCREEN_CATEGORY_POP
        });
    });
}




// 获取或者设置城市信息
function fnOperationCityInfo_base(_obj, _cb) {
    if (fnHasEmpty_public(_obj)) {
        _obj = {};
    } else if (typeof _obj === 'function') {
        _cb = _obj;
        _obj = {};
    }

    if (_obj.city) {
        fnCookie(APP.LC_NAME.CITY_INFO, _obj, function (ret) {
            _cb && _cb(ret);
            api.sendEvent({
                name: APP.EV_NAME.CITY_INFO_UPDATE,
                extra: ret
            });
        })
    } else {
        fnCookie(APP.LC_NAME.CITY_INFO, function (ret) {
            if (ret) {
                _cb && _cb(ret);
            } else {
                var _param = {
                    url: 'base/address/get_default',
                    method: 'GET',
                    data: {}
                }
                fnAjax(_param, function (ret) {
                    if (ret.code == APP.HTTP_STATUS.SUCCESS) {
                        if (ret.data && ret.data.id) {
                            fnCookie(APP.LC_NAME.CITY_INFO, ret.data, function (ret) {
                                _cb && _cb(ret);
                            })
                        } else {
                            fnGetLocation_public({
                                isPopFailed: false     //(可选项)布尔值，如果定位失败是否需要弹出定位失败弹窗，默认false
                            }, function (ret) {
                                if (ret) {
                                    fnLocation_to_address_base({
                                        lat: ret.lat,
                                        lon: ret.lon
                                    }, function (ret) {
                                        _cb && _cb(ret);
                                    })
                                } else {
                                    fnToast('获取经纬度失败')
                                }
                            })
                        }
                    } else {
                        fnToast(ret.msg);
                    }
                })
            }
        })
    }
}




// 天、时、分、秒 -> 转秒格式
function fnFormatTimeToSecond_base(_day, _hour, _min, _second) {
    var _result = 0;
    if (+_day) {
        _result = _day * 24 * 60 * 60;
    }

    if (+_hour) {
        _result += +_hour * 60 * 60;
    }

    if (+_min) {
        _result += +_min * 60;
    }

    if (+_second) {
        _result += +_second;
    }

    return _result;
}



// 获取评论统计
function fnGetCommentStatistics_base(_obj, _cb) {
    if (fnHasEmpty_public(_obj)) {
        _obj = {};
    } else if (typeof _obj === 'function') {
        _cb = _obj;
        _obj = {};
    }

    var _param = {
        url: 'base/comment/statistics',
        method: 'GET',
        hasProgress: {
            status: fnHasEmpty_public(_obj.hasProgress) ? APP.YES : _obj.hasProgress
        },
        data: _obj
    }
    fnAjax(_param, function (ret) {
        if (ret.code == APP.HTTP_STATUS.SUCCESS) {
            _cb && _cb(ret.data);
        } else {
            fnToast(ret.msg);
        }
    })
}



// 商户详情
function fnGetStoreDetails_base(_obj, _cb) {
    if (fnHasEmpty_public(_obj)) {
        _obj = {};
    } else if (typeof _obj === 'function') {
        _cb = _obj;
        _obj = {};
    }

    var _param = {
        url: 'user/user/detail',
        method: 'GET',
        data: _obj
    }
    fnAjax(_param, function (ret) {
        if (ret.code == APP.HTTP_STATUS.SUCCESS) {
            _cb && _cb(ret.data);
        } else {
            fnToast(ret.msg);
        }
    })
}



// 获取评论列表
function fnGetCommentList_base(_obj, _cb) {
    if (fnHasEmpty_public(_obj)) {
        _obj = {};
    } else if (typeof _obj === 'function') {
        _cb = _obj;
        _obj = {};
    }

    fnGetList_base({
        url: 'base/comment/index',
        data: _obj,
        hasProgress: false
    }, function (ret) {
        _cb && _cb(ret);
    })
}



// 更新商户信息
function fnUpdateStoreInfo_base(_obj, _cb) {
    if (fnHasEmpty_public(_obj)) {
        _obj = {};
    } else if (typeof _obj === 'function') {
        _cb = _obj;
        _obj = {};
    }

    var _param = {
        url: 'user/auth/operation',
        method: 'POST',
        data: _obj
    }
    fnAjax(_param, function (ret) {
        if (ret.code == APP.HTTP_STATUS.SUCCESS) {
            fnRefreshUserInfo_public(function (_user) {
                _cb && _cb(ret, _user);
            })
        } else {
            fnToast(ret.msg);
        }
    })
}



// 获取某个店铺下优惠券总数
function fnGetCouponStatistics_base(_obj, _cb) {
    if (fnHasEmpty_public(_obj)) {
        _obj = {};
    } else if (typeof _obj === 'function') {
        _cb = _obj;
        _obj = {};
    }

    var _param = {
        url: 'base/coupon/index',
        method: 'GET',
        hasProgress: {
            status: fnHasEmpty_public(_obj.hasProgress) ? APP.YES : _obj.hasProgress
        },
        data: {
            page: 1,
            limit: 1
        }
    }

    fnAjax(_param, function (ret) {
        if (ret.code == APP.HTTP_STATUS.SUCCESS) {
            _cb && _cb(ret.data);
        } else {
            fnToast(ret.msg);
        }
    })
}



// 获取下订单接口
function fnGetOrderData_base(_obj, _cb) {
    if (fnHasEmpty_public(_obj)) {
        _obj = {};
    } else if (typeof _obj === 'function') {
        _cb = _obj;
        _obj = {};
    }

    var _param = {
        url: 'order/order/index',
        method: 'GET',
        data: _obj
    }

    fnAjax(_param, function (ret) {
        if (ret.code == APP.HTTP_STATUS.SUCCESS) {
            _cb && _cb(ret.data);
        } else {
            fnToast(ret.msg);
        }
    })
}



// 获取分类数据
function fnGetCategoryAjax_base(_obj, _cb) {
    if (fnHasEmpty_public(_obj)) {
        _obj = {};
    } else if (typeof _obj === 'function') {
        _cb = _obj;
        _obj = {};
    }

    var _param = {
        url: _obj.url || 'base/category/index',
        method: 'GET',
        hasProgress: {
            status: fnHasEmpty_public(_obj.hasProgress) ? true : _obj.hasProgress
        },
        data: _obj
    }
    fnAjax(_param, function (ret) {
        if (ret.code == APP.HTTP_STATUS.SUCCESS) {
            if (ret.data && ret.data.length) {
                for (var x in ret.data) {
                    ret.data[x].value = fnLanguageSwitch_base(ret.data[x].name);
                }

                var _temp = fnCloneObject_public(ret.data),
                  _child = [];
                ret._formatList = [];
                for (var x in _temp) {
                    if (_temp[x].parent_id) {
                        _child.push(_temp[x]);
                    } else {
                        _temp[x].child = [{
                            id: [_temp[x].id],
                            name: {
                                "zh_cn": "全部",
                                "en_us": "All"
                            },
                            isAll: APP.YES
                        }];
                        ret._formatList.push(_temp[x]);
                    }
                }
                for (var x in _child) {
                    for (var j in ret._formatList) {
                        if (ret._formatList[j].id == _child[x].parent_id) {
                            ret._formatList[j].child.push(_child[x]);
                            ret._formatList[j].child[0].id.push(_child[x].id);
                        }
                    }
                }

                var _live1 = [],
                  _live2 = [];
                for (var x in _temp) {
                    _temp[x].parentId = _temp[x].parent_id;
                    if (_temp[x].parent_id) {
                        _live2.push(_temp[x]);
                    } else {
                        _live1.push(_temp[x]);
                        var _isChild = fnGetRelation_public({
                            target: _temp[x].id,                      //必填 |           |  String/Number   |  需要对比的值
                            key: 'parent_id',                      //选填 |     'id'  |  String          |  需要对比数据中的 key 值
                            resKey: 'obj',                //选填 |     'id'  |  String          |  需要对比数据中返回的 key 值
                            data: _temp
                        })

                        if (!(_isChild && _isChild.id)) {
                            _temp[x].parentId = _temp[x].id;
                            _live2.push(_temp[x]);
                        }
                    }
                }
                ret._relationData = [_live1, _live2];
            }
            _cb && _cb(ret);
        } else {
            fnToast(ret.msg);
        }
    })
}



// google 经纬度转地址
function fnLocation_to_address_base(_obj, _cb) {
    if (fnHasEmpty_public(_obj)) {
        _obj = {};
    } else if (typeof _obj === 'function') {
        _cb = _obj;
        _obj = {};
    }

    var _param = {
        url: 'base/address/get_city',
        method: 'GET',
        hasProgress: {
            status: false
        },
        data: {
            lat: _obj.lat,
            lon: _obj.lon
        }
    }
    fnAjax(_param, function (ret, err) {
        if (ret.code == APP.HTTP_STATUS.SUCCESS) {
            _cb && _cb(ret.data);
        } else {
            fnToast(ret.msg);
        }
    });
}



// 获取经纬度并给出提示
function fnGetLocation_base(_obj, _cb) {
    if (fnHasEmpty_public(_obj)) {
        _obj = {};
    } else if (typeof _obj === 'function') {
        _cb = _obj;
        _obj = {};
    }

    fnGetLocation_public({
        isPopFailed: false //(可选项)布尔值，如果定位失败是否需要弹出定位失败弹窗，默认false
    }, function (ret) {
        if (ret) {
            _cb && _cb(ret);
        } else {
            fnToast('获取经纬度失败')
        }
    })
}


// 获取12小时制时间数据
function fnGetTimeData_base() {
    var _hours = [],
      _mins = [];
    for (var i = 0; i < 24; i++) {
        var _unit = (i <= 12 ? 'am' : 'pm'),
          _value = i <= 12 ? i : i % 12;
        _hours.push({
            id: i, //必填 |           | Number/String |  选项 id
            value: [_value, _unit].join(''), //必填 |           | String        |  选项显示的值
            unit: _unit,
            viewValue: _value
        });
    }

    _mins.push({
        id: 0,
        value: '00min',
        unit: 'min',
        viewValue: '00'
    });
    _mins.push({
        id: 30,
        value: '30min',
        unit: 'min',
        viewValue: 30
    });
    return {
        hours: _hours,
        mins: _mins
    }
}

// 格式化12小时制时间格式
function fnFormatTimeData_base(_second, _resKey) {
    var _data = fnGetTimeData_base();
    var _date = formatTime_public(_second).split(':');

    return {
        hour: fnGetRelation_public({
            target: _date[0],                      //必填 |           |  String/Number   |  需要对比的值
            key: 'id',                      //选填 |     'id'  |  String          |  需要对比数据中的 key 值
            resKey: 'obj',                //选填 |     'id'  |  String          |  需要对比数据中返回的 key 值
            data: _data.hours
        }),
        min: fnGetRelation_public({
            target: _date[1],                      //必填 |           |  String/Number   |  需要对比的值
            key: 'id',                      //选填 |     'id'  |  String          |  需要对比数据中的 key 值
            resKey: 'obj',                //选填 |     'id'  |  String          |  需要对比数据中返回的 key 值
            data: _data.mins
        })
    };
}

// 格式化12小时制时间格式
function fnGetFormatTimeData_base(_second) {
    var _data = fnFormatTimeData_base(_second);
    return [_data.hour.viewValue, ':', _data.min.viewValue, _data.hour.unit].join('');
}



// 打开一个google地图
function fnOpenGoogleMap_base(_obj, _cb) {
    if (fnHasEmpty_public(_obj)) {
        _obj = {};
    } else if (typeof _obj === 'function') {
        _cb = _obj;
        _obj = {};
    }

    if (!APP.hasDom(_obj.el)) {
        _obj.el = APP.dom(_obj.selector);
    }
    fnLoadScript_public({
        src: APP.THREE.GOOGLE.map.value
    }, function () {
        _start();
    })

    function _start() {
        var myLatlng = {
            lat: +_obj.lat,
            lng: +_obj.lon
        };
        var map = new google.maps.Map(_obj.el, {
            zoom: 18,
            center: myLatlng,
            fullscreenControl: false,
            mapTypeControl: false,
            streetViewControl: false,
            zoomControl: false,
            gestureHandling: 'cooperative'
        });

        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
        });
    }
}




// 打开规则弹窗
function fnOpenRule_base(_obj, _cb) {
    if (fnHasEmpty_public(_obj)) {
        _obj = {};
    } else if (typeof _obj === 'function') {
        _cb = _obj;
        _obj = {};
    }
    fnOpen('pop/rule_pop.html', {
        param: _obj
    })
}


// 跳转页面并传入id
function fnJump_base(_path, _id, _key) {
    event && event.stopPropagation();

    if (!_key) {
        _key = 'id';
    }
    var _param = {}
    _param[_key] = _id;

    fnOpen(_path, {
        param: typeof _id == 'object' ? _id : _param,
        repeat: APP.YES
    })


}





// 开团
function fnGroupCreate_base(_obj, _cb) {
    if (fnHasEmpty_public(_obj)) {
        _obj = {};
    } else if (typeof _obj === 'function') {
        _cb = _obj;
        _obj = {};
    }

    if (_obj.coupon && _obj.coupon.id) {
        _start();
    } else {
        fnAjax_base({
            url: 'base/coupon/detail',
            id: _obj.coupon_id
        }, function (ret) {
            _obj.coupon = ret;
            _start();
        })
    }

    function _start() {
        var _param = {
            url: 'order/group/create',
            method: 'GET',
            data: {
                coupon_id: _obj.coupon.id,
                expire_time: 1
            }
        }
        fnAjax(_param, function (ret) {
            if (ret.code == APP.HTTP_STATUS.SUCCESS) {
                api.sendEvent({
                    name: APP.EV_NAME.GROUP_UPDATE,
                    extra: {
                        currentWinName: api.winName
                    }
                });

                fnToast(ret.msg, function () {
                    _cb && _cb(ret);
                })
                fnOpen('assemble/pingtuanchenggong.html',{param: {idr:ret.data.group_id}})
            } else {
                fnToast(ret.msg);
            }
        })
        // var _expire_time = +_obj.coupon.upper_limit_time_temp;

        // if (_expire_time > 0) {
            // fnTimeSelector({
            //     expire_time: _expire_time,
            // })
            // fnChoiceGroupTime_base({
            //     expire_time: _expire_time,
            // }, function (ret) {
            //
            // })
        // } else {
        //     fnToast('The coupon cannot be opened')
        // }
    }
}

// 获取 ajax 数据
function fnAjax_base(_obj, _cb, _errCb) {
    if (fnHasEmpty_public(_obj)) {
        _obj = {};
    } else if (typeof _obj === 'function') {
        _cb = _obj;
        _obj = {};
    }

    var _param = {
        url: _obj.url,
        method: 'GET',
        data: _obj
    }

    fnAjax(_param, function (ret) {
        if (ret.code == APP.HTTP_STATUS.SUCCESS) {
            _cb && _cb(ret.data);
        } else {
            if (_errCb) {
                _errCb(ret);
            } else {
                fnToast(ret.msg);
            }
        }
    })
}






// 获取订单详情
function fnGetOrderDetail_base(_obj, _cb) {
    if (fnHasEmpty_public(_obj)) {
        _obj = {};
    } else if (typeof _obj === 'function') {
        _cb = _obj;
        _obj = {};
    }

    var _param = {
        url: 'order/order/detail',
        method: 'GET',
        data: _obj
    }
    if (fnHasEmpty_public(_obj.hasProgress)) {
    } else {
        _param.hasProgress = _obj.hasProgress
    }
    fnAjax(_param, function (ret) {
        if (ret.code == APP.HTTP_STATUS.SUCCESS) {
            _cb && _cb(ret.data);
        } else {
            fnToast(ret.msg);
        }
    })
}

// 获取城市列表
function fnGetCityListAjax_base(_obj, _cb) {
    if (fnHasEmpty_public(_obj)) {
        _obj = {};
    } else if (typeof _obj === 'function') {
        _cb = _obj;
        _obj = {};
    }

    var _param = {
        url: 'base/address/index',
        method: 'GET',
        data: {
            page: APP.YES,
            limit: 1000
        }
    }
    fnAjax(_param, function (ret) {
        if (ret.code == APP.HTTP_STATUS.SUCCESS) {
            for (var x in ret.data) {
                ret.data[x].value = ret.data[x].city;
            }
            _cb && _cb(ret.data);
        } else {
            fnToast(ret.msg);
        }
    })
}


// 根据数字转换成大写一、二…九十九
function fnNumberToUpperCase_base(textIndex) {
    let newString = '';
    let newTextIndex = (textIndex + 1) + '';

    function sum(value, index) {
        var newValue = '';
        if ((textIndex === 9)) {
            return !index ? '十' : '';
        }
        let isSeat = (~~textIndex > 9 && ~~textIndex < 19);
        switch (~~value) {
            case 1:
                newValue = !index ? (isSeat ? '' : '一') : '十一';
                break;
            case 2:
                newValue = !index ? (isSeat ? '' : '二') : '十二';
                break;
            case 3:
                newValue = !index ? (isSeat ? '' : '三') : '十三';
                break;
            case 4:
                newValue = !index ? (isSeat ? '' : '四') : '十四';
                break;
            case 5:
                newValue = !index ? (isSeat ? '' : '五') : '十五';
                break;
            case 6:
                newValue = !index ? (isSeat ? '' : '六') : '十六';
                break;
            case 7:
                newValue = !index ? (isSeat ? '' : '七') : '十七';
                break;
            case 8:
                newValue = !index ? (isSeat ? '' : '八') : '十八';
                break;
            case 9:
                newValue = !index ? (isSeat ? '' : '九') : '九十';
                break;
            case 0:
                newValue = '十';
                break;
            default:
                break;
        }
        return newValue;
    }

    for (let i = 0; i < newTextIndex.length; i++) {
        newString += sum(newTextIndex.substring(i, i + 1), i);
    }
    return newString;
}





function fnRefuseOrder_base(_obj, _cb) {
    if (fnHasEmpty_public(_obj)) {
        _obj = {};
    } else if (typeof _obj === 'function') {
        _cb = _obj;
        _obj = {};
    }

    event && event.stopPropagation();
    fnAlert_public({
        // title: '提示', //可选 |    ''     | string     |  弹窗标题文案，不传则不显示弹窗顶部文案
        msg: '拒绝接单吗？', //可选 |    ''     | string     |  弹窗内容 （可解析html格式内容），不传则不显示内容
        buttons: [{ //必选 |    []      | Array     |  弹窗底部按钮，至少传入一个按钮（数组有多少就显示多少按钮）
            text: '取消', //必选 |    ''      | string     |  按钮文案
            callback: function () { //必选 |            | Function   | 点击按钮时触发该回调函数
                // alert('点击测试环境')
            }
        }, {
            text: '确定',
            active: true, //可选 |    false   | Boolean    |  是否高亮
            callback: function () {
                // alert('点击正式环境')
                _start();
            }
        }]
    }, function () { //可选 |            | Function   | 如果设置回调函数，打开的弹窗则可以点击背景关闭，并触发该回调函数，否则点击背景不能关闭弹窗
        debugAlert('从透明层关闭窗口回调')
    });

    function _start() {
        var _param = {
            url: 'order/order_store/refuse',
            method: 'POST',
            data: _obj
        }
        fnAjax(_param, function (ret) {
            if (ret.code == APP.HTTP_STATUS.SUCCESS) {
                _cb && _cb(ret);
                api.sendEvent({
                    name: APP.EV_NAME.ORDER_UPDATE,
                    extra: {}
                });
            } else {
                fnToast(ret.msg);
            }
        })
    }
}





function fnReceiptOrder_base(_obj, _cb) {
    if (fnHasEmpty_public(_obj)) {
        _obj = {};
    } else if (typeof _obj === 'function') {
        _cb = _obj;
        _obj = {};
    }

    event && event.stopPropagation();
    fnAlert_public({
        // title: '提示', //可选 |    ''     | string     |  弹窗标题文案，不传则不显示弹窗顶部文案
        msg: '确定接单？', //可选 |    ''     | string     |  弹窗内容 （可解析html格式内容），不传则不显示内容
        buttons: [{ //必选 |    []      | Array     |  弹窗底部按钮，至少传入一个按钮（数组有多少就显示多少按钮）
            text: '取消', //必选 |    ''      | string     |  按钮文案
            callback: function () { //必选 |            | Function   | 点击按钮时触发该回调函数
                // alert('点击测试环境')
            }
        }, {
            text: '确定',
            active: true, //可选 |    false   | Boolean    |  是否高亮
            callback: function () {
                // alert('点击正式环境')
                _start();
            }
        }]
    }, function () { //可选 |            | Function   | 如果设置回调函数，打开的弹窗则可以点击背景关闭，并触发该回调函数，否则点击背景不能关闭弹窗
        debugAlert('从透明层关闭窗口回调')
    });

    function _start() {
        var _param = {
            url: 'order/order_store/receipt',
            method: 'POST',
            data: _obj
        }
        fnAjax(_param, function (ret) {
            if (ret.code == APP.HTTP_STATUS.SUCCESS) {
                _cb && _cb(ret);
                api.sendEvent({
                    name: APP.EV_NAME.ORDER_UPDATE,
                    extra: {}
                });
            } else {
                fnToast(ret.msg);
            }
        })
    }
}

function fnDeliveryOrder_base(_obj, _cb) {
    if (fnHasEmpty_public(_obj)) {
        _obj = {};
    } else if (typeof _obj === 'function') {
        _cb = _obj;
        _obj = {};
    }

    event && event.stopPropagation();
    fnAlert_public({
        // title: '提示', //可选 |    ''     | string     |  弹窗标题文案，不传则不显示弹窗顶部文案
        msg: '已制作完成，开始配送？', //可选 |    ''     | string     |  弹窗内容 （可解析html格式内容），不传则不显示内容
        buttons: [{ //必选 |    []      | Array     |  弹窗底部按钮，至少传入一个按钮（数组有多少就显示多少按钮）
            text: '取消', //必选 |    ''      | string     |  按钮文案
            callback: function () { //必选 |            | Function   | 点击按钮时触发该回调函数
                // alert('点击测试环境')
            }
        }, {
            text: '确定',
            active: true, //可选 |    false   | Boolean    |  是否高亮
            callback: function () {
                // alert('点击正式环境')
                _start();
            }
        }]
    }, function () { //可选 |            | Function   | 如果设置回调函数，打开的弹窗则可以点击背景关闭，并触发该回调函数，否则点击背景不能关闭弹窗
        debugAlert('从透明层关闭窗口回调')
    });

    function _start() {
        var _param = {
            url: 'order/order_store/delivery_start',
            method: 'POST',
            data: _obj
        }
        fnAjax(_param, function (ret) {
            if (ret.code == APP.HTTP_STATUS.SUCCESS) {
                _cb && _cb(ret);
                api.sendEvent({
                    name: APP.EV_NAME.ORDER_UPDATE,
                    extra: {}
                });
            } else {
                fnToast(ret.msg);
            }
        })
    }
}

function fnDeliveryCompletedOrder_base(_obj, _cb) {
    if (fnHasEmpty_public(_obj)) {
        _obj = {};
    } else if (typeof _obj === 'function') {
        _cb = _obj;
        _obj = {};
    }

    event && event.stopPropagation();
    fnAlert_public({
        // title: '提示', //可选 |    ''     | string     |  弹窗标题文案，不传则不显示弹窗顶部文案
        msg: '已经配送完成？', //可选 |    ''     | string     |  弹窗内容 （可解析html格式内容），不传则不显示内容
        buttons: [{ //必选 |    []      | Array     |  弹窗底部按钮，至少传入一个按钮（数组有多少就显示多少按钮）
            text: '取消', //必选 |    ''      | string     |  按钮文案
            callback: function () { //必选 |            | Function   | 点击按钮时触发该回调函数
                // alert('点击测试环境')
            }
        }, {
            text: '确定',
            active: true, //可选 |    false   | Boolean    |  是否高亮
            callback: function () {
                // alert('点击正式环境')
                _start();
            }
        }]
    }, function () { //可选 |            | Function   | 如果设置回调函数，打开的弹窗则可以点击背景关闭，并触发该回调函数，否则点击背景不能关闭弹窗
        debugAlert('从透明层关闭窗口回调')
    });

    function _start() {
        var _param = {
            url: 'order/order_store/delivery_completed',
            method: 'POST',
            data: _obj
        }
        fnAjax(_param, function (ret) {
            if (ret.code == APP.HTTP_STATUS.SUCCESS) {
                _cb && _cb(ret);
                api.sendEvent({
                    name: APP.EV_NAME.ORDER_UPDATE,
                    extra: {}
                });
            } else {
                fnToast(ret.msg);
            }
        })
    }
}



function fnDeleteAfterSale_base(_obj, _cb) {
    if (fnHasEmpty_public(_obj)) {
        _obj = {};
    } else if (typeof _obj === 'function') {
        _cb = _obj;
        _obj = {};
    }

    event && event.stopPropagation();
    fnAlert_public({
        // title: '提示', //可选 |    ''     | string     |  弹窗标题文案，不传则不显示弹窗顶部文案
        msg: '确定删除退款记录吗？', //可选 |    ''     | string     |  弹窗内容 （可解析html格式内容），不传则不显示内容
        buttons: [{ //必选 |    []      | Array     |  弹窗底部按钮，至少传入一个按钮（数组有多少就显示多少按钮）
            text: '取消', //必选 |    ''      | string     |  按钮文案
            callback: function () { //必选 |            | Function   | 点击按钮时触发该回调函数
                // alert('点击测试环境')
            }
        }, {
            text: '确定',
            active: true, //可选 |    false   | Boolean    |  是否高亮
            callback: function () {
                // alert('点击正式环境')
                _start();
            }
        }]
    }, function () { //可选 |            | Function   | 如果设置回调函数，打开的弹窗则可以点击背景关闭，并触发该回调函数，否则点击背景不能关闭弹窗
        debugAlert('从透明层关闭窗口回调')
    });

    function _start() {
        var _param = {
            url: 'order/after_sale/delete',
            method: 'POST',
            data: _obj
        }
        fnAjax(_param, function (ret) {
            if (ret.code == APP.HTTP_STATUS.SUCCESS) {
                _cb && _cb(ret);

                api.sendEvent({
                    name: APP.EV_NAME.REFUND_UPDATE,
                    extra: {}
                });
            } else {
                fnToast(ret.msg);
            }
        })
    }
}



//处理距离
function fnSwitchDistance_base(_distance) {
    if (_distance < 1000) {
        return _distance + "m";
    } else {
        return (Math.round(_distance / 100) / 10).toFixed(1) + "km";
    }
}





// 对象或者数组进行排序
function fnArrayObjSort_base_base(_obj, _cb) {
    if (fnHasEmpty_public(_obj)) {
        _obj = {};
    } else if (typeof _obj === 'function') {
        _cb = _obj;
        _obj = {};
    }

    var _data = fnCloneObject_public(_obj.data);
    var _result = {};
    Object.keys(_data).sort().forEach(function (_key) {
        _result[_key] = _data[_key];
    });
    // // console.log(1111, _data)
    // // 冒泡排序算法
    // var _keys = Object.keys(_data);
    // console.log( _keys )
    // for( var i = 0; i < _keys.length; i++ ){
    //     for( var j = 0; j < _keys.length - i - 1; j++ ){
    //         if( _keys[j] < _keys[i]  ){
    //             var _temp = _data[_keys[j]];
    //             _data[_keys[j]] = _data[_keys[j+1]];
    //             _data[_keys[j+1]] = _temp;
    //             console.log( _keys[j], _temp)
    //         }
    //     }
    // }
    return _result;
}





// 打开一个 h5
function fnOpenWebPage_base(_obj, _cb) {
    if (fnHasEmpty_public(_obj)) {
        _obj = {};
    } else if (typeof _obj === 'function') {
        _cb = _obj;
        _obj = {};
    }

    if (typeof _obj === 'string') {
        _obj = {
            url: _obj
        };
    }
    fnOpenWebPage_public(_obj);
}



// 显示用户昵称顺序
function fnShowUserNickname_base(_obj, _cb) {
    if (fnHasEmpty_public(_obj)) {
        _obj = {};
    } else if (typeof _obj === 'function') {
        _cb = _obj;
        _obj = {};
    }

    return _obj ? (_obj.user_nickname || _obj.mobile || _obj.user_email) : '';
}





// 打开商铺所在地图的位置
function fnOpenStoreMap_base(_store_id, _lat, _lon) {
    fnOpen('home/storeMap_win.html', {
        param: {
            store_id: _store_id,
            lat: _lat,
            lon: _lon
        }
    })
}

// 获取优惠券的图片
function fnGetCouponImage_base(_data) {
    if (_data.coupon && _data.coupon.image) {
        // r如果又优惠券对象，返回优惠券图片
        return _data.coupon.image;
    } else if (_data.image) {
        // 优惠券图片
        return _data.image;
    } else {
        return fnGetStoreImage_base(_data.store);
    }
}

// 获取商户的图片
function fnGetStoreImage_base(_data) {
    if (_data && _data.info && _data.info.images && _data.info.images.length) {
        // 获得商户图片
        return _data.info.images[0].url;
    } else if (_data && _data.auth && _data.auth.images && _data.auth.images.length) {
        // 获得商户图片
        return _data.auth.images[0].url;
    } else {
        return '';
    }
}




function fnOpenScreen(_key) {
    if (_key) {
        var _data = APP._orderScreen || {
            coupon_type: {
                title: '券类型',
                data: APP.COUPON.type
            },
            price_type: {
                title: '优惠券金额',
                data: APP.COUPON.price_type
            }
        }
        fnOpenScreen_base({
            data: JSON.stringify(_data),
            isOrder: APP.YES
        }, function (ret) {
            APP._orderScreen = ret.data;
            var _data = {
                coupon_type: 0,
                price_type: 0
            }
            for (var x in APP._orderScreen.coupon_type.data) {
                if (APP._orderScreen.coupon_type.data[x].active) {
                    APP._coupon_type = APP._orderScreen.coupon_type.data[x].id;
                }
            }
            for (var x in APP._orderScreen.price_type.data) {
                if (APP._orderScreen.price_type.data[x].active) {
                    APP._price_type = APP._orderScreen.price_type.data[x].id;
                }
            }
            fnOrderStart();
        })
    } else {
        var _data = APP._homeScreen || {
            business: {
                title: '营业状态',
                data: APP.STORE.business
            },
            popularity: {
                title: '人气',
                data: APP.STORE.popularity
            },
            ev_score: {
                title: '评分',
                data: APP.STORE.ev_score
            },
            grade: {
                title: '等级',
                data: APP.STORE.grade
            }
        }
        fnOpenScreen_base({
            data: JSON.stringify(_data)
        }, function (ret) {
            if (ret.isJumpCollection) {
                fnOpen('my/collection_win.html');
            } else {
                APP._homeScreen = ret.data;
                fnSendScreen(APP._homeScreen)
            }
        })
    }
}




// 查看一张图片
function fnPhotoBrowser_base(_image) {
    if (_image) {
        fnPhotoBrowser_public({
            pics: [_image],    // [] | Array | 必传 | 图片数组
            default: 0  // 0 | number | 首次显示图片索引
        });
    }
}



function fnGetMsgTotal_base(_obj, _cb) {
    if (fnHasEmpty_public(_obj)) {
        _obj = {};
    } else if (typeof _obj === 'function') {
        _cb = _obj;
        _obj = {};
    }

    var _param = {
        url: 'user/news/get_unread',
        method: 'get',
        data: {
            type: _obj.type
        }
    }

    fnAjax(_param, function (ret) {
        if (ret.code == APP.HTTP_STATUS.SUCCESS) {
            _cb && _cb(ret.data);
        } else {
            fnToast(ret.msg);
        }
    })
}


function fnMessageJump_base(_obj, _cb) {
    if (fnHasEmpty_public(_obj)) {
        _obj = {};
    } else if (typeof _obj === 'function') {
        _cb = _obj;
        _obj = {};
    }
    // alert(debugAlert(_obj))
    var _user = null;

    fnUser_public({
        isLastData: true,        //选填     |      |     Boolean  |  是否使用上一次的数据（如果为true返回数据速度更快）,
        hasProgress: false       //必填     |      |     Boolean  |  是否使用上一次的数据（如果为true返回数据速度更快）,
    }, function (ret) {
        if (ret) {
            _user = ret.user;
            // 当前登陆了用户
            if (_obj.store_id) {
                // 跳转商户详情
                _start('home/storeDetails_win.html', _obj.store_id, APP.USER_TYPE.user.value);
            } else if (_obj.coupon_id) {
                // 跳转优惠券详情
                _start('home/couponsDetails_win.html', _obj.coupon_id, APP.USER_TYPE.user.value);
            } else if (_obj.group_id) {
                // 跳转优惠券详情
                _start('assemble/joinDelegation_win.html', {
                    id: _obj.group_id,
                    share_user_id: _obj.share_user_id
                }, APP.USER_TYPE.user.value);
            } else {
                var _param = {
                    url: 'user/news/detail',
                    method: 'GET',
                    data: {
                        id: _obj.id
                    }
                }
                if(!_obj.id){
                    return;
                }
                fnAjax(_param, function (ret) {
                    if (ret.code == APP.HTTP_STATUS.SUCCESS) {
                        var _data = ret.data;
                        if (+ _data.target_type) {
                            if ([
                                APP.NEWS.target_type.value1.id,
                                APP.NEWS.target_type.value2.id,
                                APP.NEWS.target_type.value3.id,
                                APP.NEWS.target_type.value4.id,
                                APP.NEWS.target_type.value5.id
                            ].indexOf(+ _data.target_type) != -1) {
                                _start('order/myorderDetail_win.html', _data.target_id);
                            } else if ([
                                APP.NEWS.target_type.value6.id,
                                APP.NEWS.target_type.value7.id
                            ].indexOf(+ _data.target_type) != -1) {
                                _start('business/orderDetails_win.html', _data.target_id);
                            } else if ([
                                APP.NEWS.target_type.value8.id,
                                APP.NEWS.target_type.value9.id
                            ].indexOf(+ _data.target_type) != -1) {
                                _start('my/service_win.html', _data.target_id);
                            } else if ([
                                APP.NEWS.target_type.value10.id,
                                APP.NEWS.target_type.value11.id
                            ].indexOf(+ _data.target_type) != -1) {
                                _start('sign/business_win.html');
                            } else if ([
                                APP.NEWS.target_type.value12.id
                            ].indexOf(+ _data.target_type) != -1) {
                                _start('home/couponsDetails_win.html', _data.target_id);
                            }else if(_data.target_type==13){//拼团成功 去拼团详情页面
                                _start('assemble/joinDelegation_win.html', _data.target_id);
                            }else if(_data.target_type==14){//支付成功 去核销
                                _start('order/myorderDetail_win.html', _data.target_id);
                            }else if(_data.target_type==15){//拼团成去支付
                                _start('assemble/pay_win.html', _data.target_id);
                            }
                        } else {
                            _start('business/messageDetails_win.html', _data.id);
                        }

                        api.sendEvent({
                            name: APP.EV_NAME.MESSAGE,
                            extra: {}
                        });

                    } else {
                        fnToast(ret.msg);
                    }
                })
            }
        } else {
            // 当前没有登陆用户
        }
    })

    function _start(_path, _id, _user_type) {
        fnRmCookie(APP.LC_NAME.JPUSH_JUMP);
        if (_user_type) {
            if (_user_type == _user.user_type) {
                fnJump_base(_path, _id);
            } else {
                // alert('不跳转')
            }
        } else {
            fnJump_base(_path, _id);
        }
    }
}



// 打开分享页面
function fnOpenShare_base(_obj, _cb) {
    if (fnHasEmpty_public(_obj)) {
        _obj = {};
    } else if (typeof _obj === 'function') {
        _cb = _obj;
        _obj = {};
    }

    fnOpen('pop/share_pop.html', {
        param: _obj
    })
}




// 获取当前环境语言对象
function fnGetLangData_base(_obj, _cb) {
    if (fnHasEmpty_public(_obj)) {
        _obj = {};
    } else if (typeof _obj === 'function') {
        _cb = _obj;
        _obj = {};
    }


    var _lang = fnGetRelation_public({
        target: 'zh-cn',                      //必填 |           |  String/Number   |  需要对比的值
        key: 'value',                      //选填 |     'id'  |  String          |  需要对比数据中的 key 值
        resKey: 'obj',                //选填 |     'id'  |  String          |  需要对比数据中返回的 key 值
        data: APP.LANGUAGE_LIST
    });

    var _locLang = fnCookie(APP.LC_NAME.LANGUAGE);

    if (_locLang) {
        var _lang = _locLang;
    } else {
        if (fnGetLanguageName_public()) {

        } else {
            var _lang = fnGetRelation_public({
                target: 'en-us',                      //必填 |           |  String/Number   |  需要对比的值
                key: 'value',                      //选填 |     'id'  |  String          |  需要对比数据中的 key 值
                resKey: 'obj',                //选填 |     'id'  |  String          |  需要对比数据中返回的 key 值
                data: APP.LANGUAGE_LIST
            });
        }
    }

    _cb && _cb(_lang);
}



// 组装评分星级结构
function fnScoreLayout_base(_obj, _cb) {
    if (fnHasEmpty_public(_obj)) {
        _obj = {};
    } else if (typeof _obj === 'function') {
        _cb = _obj;
        _obj = {};
    }

    var _score = +_obj.ev_score;
    // ev_score
    var _html = '';
    for (var i = 1; i <= 5; i++) {
        var _class = '';
        if (_score > 0 && _score < 1) {
            _class = 'half-star';
        } else if (_score > 0) {
            _class = 'active';
        }
        _html += '<span class="star ' + _class + '"></span>';

        if (_score > 0) {
            --_score;
        }
    }
    return _html;
}

// 打开隐私协议弹窗
/*
fnPrivacyProtocol_base({
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
function fnPrivacyProtocol_base(_obj, _cb) {
    if (fnHasEmpty_public(_obj)) {
        _obj = {};
    } else if (typeof _obj === 'function') {
        _cb = _obj;
        _obj = {};
    }

    if (_cb) {
        _obj.model = true;
    }

    _obj.time = fnDateNow_public();
    fnKeyboardBlur_public();
    fnOpen('pop/privacyProtocol_pop.html', {
        param: _obj,
        rect: {
            x: 0,
            y: 30,
            w: 'auto',
            h: 'auto'
        }
    });

    api.addEventListener({
        name: APP.EV_NAME.PRIVACY_PROTOCOL_POP
    }, function (ret, err) {
        debugAlert('fnPrivacyProtocol_base', arguments)
        if (ret.value.hasModel) {
            // 点击背景关闭的窗口
            _cb && _cb();
        } else {
            _obj.buttons[ret.value.buttonIndex].callback();
        }
        api.removeEventListener({
            name: APP.EV_NAME.PRIVACY_PROTOCOL_POP
        });
    });
}



// 打开 paypal 支付页面
function fnOpenPayPal_base(_obj, _cb) {
    if (fnHasEmpty_public(_obj)) {
        _obj = {};
    } else if (typeof _obj === 'function') {
        _cb = _obj;
        _obj = {};
    }
    fnLoadScript_public({
        src: APP.THREE.paypal.js_sdk
    }, function () {
        paypal.Buttons({
            // style: {
            //     layout:  'vertical',
            //     color:   'blue',
            //     shape:   'rect',
            //     label:   'paypal'
            // },
            createOrder: function (ret, actions) {
                // This function sets up the details of the transaction, including the amount and line item details.
                return actions.order.create(_obj.pay_info);
            },
            onApprove: function (ret, actions) {
                // _param.data.pay_order_sn = actions.orderID;
                var _param = {
                    url: 'order/order/check_is_pay',
                    method: 'POST',
                    data: {
                        id: _obj.id,
                        pay_sn: ret.orderID
                    }
                }
                fnAjax(_param, function (ret) {
                    if (ret.code == APP.HTTP_STATUS.SUCCESS) {
                        _cb && _cb(ret.data);
                    } else {
                        fnToast(ret.msg);
                    }
                })
            },
            onCancel: function (data) {
                _cb && _cb({
                    status: false
                })
                // Show a cancel page, or return to cart
            },
            onError: function (data) {
                console.log(data)
                // Show a cancel page, or return to cart
            }
        }).render(_obj._selector);
    })
}





function fnOpenSwiperLayout_base(_obj, _cb) {
    if (fnHasEmpty_public(_obj)) {
        _obj = {};
    } else if (typeof _obj === 'function') {
        _cb = _obj;
        _obj = {};
    }

    _obj.param = _obj.param || {};
    _obj.param.on = _obj.param.on || {};

    if (!_obj.param.on.touchStart) {
        _obj.param.on.touchStart = function (_event) {
            if (!APP.hasIos()) {
                // debugAlert(4444, mySwiper.getTranslate())
                APP._swiperOption = 1;
            }
        }
    }

    if (!_obj.param.on.touchMove) {
        _obj.param.on.touchMove = function (_event) {
            if (!APP.hasIos()) {
                APP._swiperOption += 1;
                if (APP._swiperOption > 2) {
                    api.setFrameAttr({
                        name: api.frameName,
                        bounces: false
                    });
                } else {
                    // api.setFrameAttr({
                    //     name: api.frameName,
                    //     bounces: true
                    // });
                }
            }
        }
    }

    if (!_obj.param.on.touchEnd) {
        _obj.param.on.touchEnd = function (_event) {
            // debugAlert(2222)
            if (!APP.hasIos()) {
                api.setFrameAttr({
                    name: api.frameName,
                    bounces: true
                });
                APP._swiperOption = 0;
            }
        }
    }
    debugAlert('打开一个swiper轮播', _obj)
    var mySwiper = new Swiper(_obj.selector, _obj.param);
}


function fnLackPersonMsg_base(_lackPerson) {
    let str="";
    if(_lackPerson==1){
        str='1 more person needed to complete the group'
    }else{
        str=_lackPerson+' more people needed to complete the group'
    }
    return str;
}

function exitApp() {
    api.addEventListener({
        name: 'keyback'
    }, function (ret, err) {
        api.closeToWin({
            name: 'signIn'
        });
    });
}


function openURLInApp(uri) {

    //判断操作系统
    if (api.systemType == 'android') {

        //Android中的使用方法如下：
        api.openApp({
            androidPkg: 'android.intent.action.VIEW',

            mimeType: 'text/html',
            uri: uri
        }, function (ret, err) { });
    } else {
        //iOS中的使用方法如下：
        api.openApp({
            iosUrl: uri
        });
    }

}


function getToFixed(_data) {
    //return parseInt(_data).toFixed(2)
    /*if(parseInt(_data) === parseFloat(_data)){
        return parseInt(_data).toFixed(2)
    }else{
        return _data
    }*/

    return toDecimal2(parseFloat(_data))

}
