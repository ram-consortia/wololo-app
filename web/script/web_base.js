// 美洽相关
APP.MEIQIA = {
    // 企业ID
    ENT_ID: '174031'
}

// 侧边导航
APP.TABLE_NAV = {
    Business: {
        business: {
            name: '商家主页'
        },
        evaluate: {
            name: '全部评价'
        },
        detail: {
            name: '商铺详情'
        },
        business_coupon: {
            name: '优惠券'
        },
        account: {
            name: '帐号管理'
        }
    },
    // 支持配送导航
    Businessorder: {
        index: {
            name: '全部订单'
        },
        wait: {
            name: '待接单',
            status: APP.ORDER.store_status.wait.id
        },
        in: {
            name: '制作中',
            status: APP.ORDER.store_status.in.id
        },
        road: {
            name: '在路上',
            status: APP.ORDER.store_status.road.id
        },
        already: {
            name: '已完成',
            status: APP.ORDER.store_status.already.id
        },
        not: {
            name: '未消费',
            status: APP.ORDER.store_status.not.id
        }
    },
    // 不支持配送导航
    BusinessOrderNotDelivery: {
        already: {
            name: '已消费',
            status: APP.ORDER.store_status.already.id
        },
        not: {
            name: '未消费',
            status: APP.ORDER.store_status.not.id
        }
    },
    Businessother: {
        opinion: {
            name: '意见反馈'
        },
        contact: {
            name: '联系我们'
        },
        agreementuser: {
            name: '规则协议'
        }
    },
    News: APP.NEWS.type,
    Member: {
        personal: {
            name: '个人资料'
        },
        account: {
            name: '帐号管理'
        },
        code: {
            name: '我的二维码'
        }
    },
    Memberorder: {
        index: {
            name: '全部订单'
        },
        in: {
            name: '拼团中',
            status: APP.ORDER.status.in.id
        },
        wait: {
            name: '待付款',
            status: APP.ORDER.status.wait.id
        },
        not: {
            name: '未消费',
            status: APP.ORDER.status.not.id
        },
        already: {
            name: '已消费',
            status: APP.ORDER.status.already.id
        },
        after_sale: {
            name: '退款售后'
        }
    }
}

// 切换一个table
function fnSwitchTable_base(_obj, _cb) {
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

    $(_obj.el).siblings().removeClass('active');
    $(_obj.el).addClass('active');
    $('.sw').addClass('hide');
    $('.sw.' + $(_obj.el).data('class')).removeClass('hide');
    _cb && _cb();
}


// 单选一条数据
function fnChoiceRedio_base(_obj, _cb) {
    if (fnHasEmpty_public(_obj)) {
        _obj = {};
    } else if (typeof _obj === 'function') {
        _cb = _obj;
        _obj = {};
    }
    
    fnMultistageSelector_public({
        active: [_obj.default || 0],                      //必填 |               | Array |  默认被选中的值，对应 data 中的 id，数组长度与 data 长度一致
        data: [_obj.data],               //必填 |               | Array |  需要选择的数据源，数组中一组数据表示一组选项
        title: _obj.title
    }, function(ret){
        // ret                               // Array |  如果点击确定按钮该回调则会触发，并返回数组数据，数组索引与传入数据源 data 一一对应
        _cb && _cb(ret);
    })

    // api.addEventListener({
    //     name: APP.EV_NAME.CHOICE_REDIO
    // }, function(ret, err) {
    //     debugAlert('fnChoiceRedio_base', arguments)
    //         // 从透明的地方关闭的窗口
    //     if (ret.value.hasModel) {

    //     } else {
    //         _cb && _cb(ret.value);
    //     }
    //     api.removeEventListener({
    //         name: APP.EV_NAME.CHOICE_REDIO
    //     });
    // });
}



// 自动登录
function fnJoinHomeLogic_base() {
    fnUser_public({
        isLastData: false //必填     |      |     Boolean  |  是否使用上一次的数据（如果为true返回数据速度更快）
    }, function(_user) {
        if (_user) {
            // 当前登陆了用户
            // debugAlert(222, arguments)
            // return;
            APP._user = _user.user;
            if(APP._param.redirect){
                fnOpen(decodeURIComponent(APP._param.redirect));
            }else{
                if (_user.user.user_type == APP.USER_TYPE.store.value) {
                    if( !(_user.user.auth.id && + _user.user.auth.is_can_app) ){
                        fnOpenBusinessPop_base();
                    }else{
                        fnOpen('business/business')
                    }
                } else {
                    fnOpen('index/index')
                }
            }
        } else {
            // 当前没有登陆用户
            if( APP._href.indexOf('sign') != -1 ){

            }else{
                fnOpen('sign/quick_login')
            }
        }
    })
}

// 关闭 .frame-pop 类弹窗
function fnClosePop_base(_obj, _cb) {
    if (fnHasEmpty_public(_obj)) {
        _obj = {};
    } else if (typeof _obj === 'function') {
        _cb = _obj;
        _obj = {};
    }

    if (APP.hasDom(_obj)) {
        _obj.el = _obj;
    }

    $(_obj.el).closest('.frame-pop').remove();
}

function fnBusinessNavSwitch_base(_key){
    $('.sw-'+( APP._param._ac || _key)).each(function(_index, _el){
        fnSwitchTable_base(_el);
    })
}

// 设置语言
function fnSetLanguage_base(_data){
    fnCookie(APP.LC_NAME.LANGUAGE, _data, function(){
        APP.rebootApp();
    })
}


// 退出登陆
function fnLogout_public() {
    fnAlert_public({
        title: '提示', //‘’ | 选填 |不传则不显示弹窗顶部文案
        msg: '确认退出登录？', //’’ | 选填 |不传则不显示内容
        buttons: [{ //’’ | 至少传入一个按钮 |数组有多少就显示多少按钮
            text: '取消', //’确认’ | 至少传入一个按钮 |按钮文案
            callback: function() { //function | 必传 |点击按钮时触发该回调函数

            }
        }, {
            text: '确认',
            active: true, //false | 选填 | 是否高亮
            callback: function() {
                fnClearUser_public(function() {
                    fnHasLogin_public();
                });
            }
        }]
    }, function() { //如果设置回调函数，打开的弹窗则可以点击背景关闭，并触发该回调函数

    });
}




// 获得拼团最大时长
function fnGetGroupMaxExpireTime_base(_obj, _cb) {
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
        }, function(ret) {
            _obj.coupon = ret;
            _start();
        })
    }

    function _start() {
        var _expire_time = +_obj.coupon.upper_limit_time_temp;
        // if (_obj.coupon.validity_type == APP.COUPON.validity_type.fixed.id) {
        //     var _time = _obj.coupon.validity_end_time - fnDateNow_public();
        // } else if (_obj.coupon.validity_type == APP.COUPON.validity_type.day.id) {
        //     var _time = _obj.coupon.validity_day * 24 * 60 * 60;
        // } else {
        //     var _time = (_obj.coupon.validity_day + 1) * 24 * 60 * 60;
        // }
        // if (_time < _expire_time) {
        //     _expire_time = _time;
        // }

        if (_expire_time > 0) {
            _cb && _cb({
                coupon_id: _obj.coupon.id,
                expire_time: _expire_time
            });
        } else {
            fnToast('该优惠券无法开团')
        }
    }
}



function fnJumpGroupInfo_base(_group_id, _coupon_id, _is_order){
    fnJump_base('group/coupondetails_ssemble', {
        id: _coupon_id,
        group_id: _group_id,
        is_order: _is_order
    })
}

function fnOpenWriteLog_base(_obj, _cb) {
    if (fnHasEmpty_public(_obj)) {
        _obj = {};
    } else if (typeof _obj === 'function') {
        _cb = _obj;
        _obj = {};
    }

    if( typeof _obj != 'object' ){
        _obj = {
            order_id: _obj
        }
    }

    var _param = {
        url: 'order/order_store_write_off_log/index',
        method: 'GET',
        data: {
            page: APP.YES,
            limit: 1000,
            order_id: _obj.id
        }
    }
    
    fnAjax(_param, function(ret){
        if( ret.code == APP.HTTP_STATUS.SUCCESS ){
            ret.data.write_off_count = _obj.write_off_count;
            APP._writeLog = ret.data;
            $('body').append(template('write-off-pop-template', APP));
        }else{
            fnToast(ret.msg);
        }
    })
}




// 打开设置密码/忘记密码页面
function fnOpenSetPassword_base(_isSetPassword) {
    fnOpen('sign/setPassword', {
        param: {
            isSetPassword: _isSetPassword
        }
    })
}



function fnAddTemplate_base(_obj, _cb) {
    if (fnHasEmpty_public(_obj)) {
        _obj = {};
    } else if (typeof _obj === 'function') {
        _cb = _obj;
        _obj = {};
    }

    $('body').append(template(_obj.templateName, APP));
    APP.initFn();
}



// 打开商铺所在地图的位置
function fnOpenStoreMap_base(_store_id, _lat, _lon) {
    fnOpen('index/index_map', {
        param: {
            store_id: _store_id,
            lat: _lat,
            lon: _lon
        }
    })
}