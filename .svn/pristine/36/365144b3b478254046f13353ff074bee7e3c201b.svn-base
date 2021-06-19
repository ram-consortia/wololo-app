var api = {
    debug: true
}
// 打开一个window、frame或者pop窗口
function fnOpen(_path, _obj, _cb) {
    if (fnHasEmpty_public(_obj)) {
        _obj = {};
    } else if (typeof _obj === 'function') {
        _cb = _obj;
        _obj = {};
    }
    

    if (_obj.hasLogin) {
        fnHasLogin_public({
            redirect: _path
        }, function() {
            _fnOpen();
        });
    } else {
        _fnOpen();
    }

    function _fnOpen(){
        var _param = '';
        if( _obj.param && Object.keys(_obj.param).length ){
            _param = fnConvertParam_public(_obj.param);
        }

        if( fnVerify_public('Url').test(_path) ){

        }else{
            _path = [APP.APP_ROOT_PATH, '/web/', _path, _param].join('');
        }

        location.href = _path;
    }
}


// 关闭 window、frame、pop 窗口
function fnClose(_obj, _cb) {
    if (fnHasEmpty_public(_obj)) {
        _obj = {};
    } else if (typeof _obj === 'function') {
        _cb = _obj;
        _obj = {};
    }
    // $('.sw').addClass('hide');
    history.go(-1);
}


// // 获取路径中参数
// function fnGetUrlParam_public(){
//     var _data = {},
//         _url = decodeURIComponent(window.location.href),
//         _index = _url.indexOf('?');
//     // if( _index != -1 ){
//     //     if( _param.indexOf('=') != -1 ){
//     //         _param = _param.split('&');
//     //         for (var key in _param) {
//     //             var _result = _param[key].split('=');
//     //             _data[_result[0]] = _result[1];
//     //         }

//     //     }else{
//     //         if( _param && _param != 'undefined' ){
//     //             _data = JSON.parse(_param);
//     //         }
//     //     }
//     // }
//     var _param = '';
//     console.log( _param, _url.substr(_index+1) )
//     // console.log('页面传递的数据', _data);
//     return _data;
// }


// 获取路径中参数
function fnGetUrlParam_public(){
    var _data = {};
    var _param = window.location.href.split('?')[1] || '';
    if( _param.indexOf('=') != -1 ){
        _param = _param.split('&');
        for (var key in _param) {
            var _result = _param[key].split('=');
            _data[_result[0]] = _result[1];
        }

    }else{
        if( _param && _param != 'undefined' ){
            _data = JSON.parse(_param);
        }
    }
    // console.log('页面传递的数据', _data);
    return _data;
}

APP.init = function(_cb){
    window.onload = function(){
        (function(m, ei, q, i, a, j, s) {
            m[i] = m[i] || function() {
                (m[i].a = m[i].a || []).push(arguments)
            };
            j = ei.createElement(q),
                s = ei.getElementsByTagName(q)[0];
            j.async = true;
            j.charset = 'UTF-8';
            j.src = 'https://static.meiqia.com/dist/meiqia.js?_=t';
            s.parentNode.insertBefore(j, s);
        })(window, document, 'script', '_MEIQIA');
        _MEIQIA('entId', APP.MEIQIA.ENT_ID);
        _MEIQIA('withoutBtn');
        _MEIQIA('init');

        APP._href = location.href;
        APP._param = fnGetUrlParam_public() || {};
        APP._languageName = fnGetLanguageName_public();
        fnUser_public({
            isLastData: true,        //选填     |      |     Boolean  |  是否使用上一次的数据（如果为true返回数据速度更快）,
            hasProgress: false       //必填     |      |     Boolean  |  是否使用上一次的数据（如果为true返回数据速度更快）,
        }, function(_user){
            if( _user ){
                // 当前登陆了用户
                APP._user = _user.user;
                if (_user.user.user_type == APP.USER_TYPE.store.value) {
                    if( !(_user.user.auth.id && + _user.user.auth.is_can_app) ){
                        if( APP._href.indexOf('sign') != -1 ){
                            _cb && _cb();
                        }else{
                            fnOpen('sign/quick_login')
                        }
                    }else{
                        _cb && _cb();
                    }
                }else{
                    _cb && _cb();
                }
            }else{
                _cb && _cb();
            }
        })
    }
}


// 初始化需要加载的函数
APP.initFn = function() {
    fnInputLimitInit_public();
    fnCacheImgs();
    fnCountDownInit_public();
}

APP.APP_ROOT_PATH = location.origin;

// 获取当前环境接口地址
APP.getHost = function(){
    return [APP.APP_ROOT_PATH, '/api/'].join('');
}


    // 重启APP
APP.rebootApp = function() {
    var _self = this;
    debugAlert('重启 APP');

    _start();
    function _start(){
        location.reload();
    }
}

// 输出日志
function debugAlert() {
    if (APP.hasDebug()) {
        console.log(arguments);
    }
}


// 将所有图片缓存
function fnCacheImgs() {
    var _elTemp = $('[data-img-url]');
    for (var i = 0; i < _elTemp.length; i++) {
        (function(_el) {
            var _url = $(_el).attr('data-img-url');
            var _type = $(_el).attr('data-img-type');
            if (_url) {
                // _url = [_url].join('');
                // var _index = _url.indexOf('!') == -1 ? 0 : _url.indexOf('!');
                // _url = _url.substring(_index, _url.length);

                _url = _url.split('!')[0];
                if( _type ){
                    _url += _type
                }
                $(_el).css({
                    backgroundImage: 'url('+_url+')'
                })
            }
        })(_elTemp[i]);
    }
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
    if (!$('#toast').length) {
        debugAlert('打开一个提示弹窗', _obj)
        fnKeyboardBlur_public();
        $('body').after('<div id="toast">' + _obj.msg + '</div>');
        setTimeout(function() {
            $('#toast').remove();
            _cb && _cb();
        }, 2000);
    }
}





// md5 加密
function fnMd5_public(_obj, _cb) {
    if (fnHasEmpty_public(_obj)) {
        _obj = {};
    } else if (typeof _obj === 'function') {
        _cb = _obj;
        _obj = {};
    }
    _value = hex_md5(_obj.data).toLocaleUpperCase();

    if(_obj.uppercase){
        _value = _value.toLocaleLowerCase();
    }

    _cb && _cb({
        value: _value
    })
}


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

    if( fnHasEmpty_public(_obj.isBlur) || _obj.isBlur){
        fnKeyboardBlur_public();
    }
    _obj.data = _obj.data || {};

    var _headers = {
        // 'Content-Type': 'application/json',
        // 'XX-Device-Type': APP.DEVICE_TYPE.APP
    };
    _headers['XX-Device-Type'] = 'pc';

    var _user = fnCookie(APP.LC_NAME.USER);
    if ( _user ) {
        // 传入当前登录 token
        _headers['XX-Token'] = _user.token;
        if( _user.user ){
            _obj.data.user_type = _user.user.user_type;
        }
    }
    

    // 传入当前城市数据
    var _city = fnCookie(APP.LC_NAME.CITY_INFO);
    if( _city && _city.city ){
        if( fnHasEmpty_public(_obj.data.address_id) ){
            _obj.data.address_id = _city.id;
        }
        if( fnHasEmpty_public(_obj.data.address_city_name) ){
            _obj.data.address_city_name = _city.city;
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

    var _param = {
        url: _url,
        // url: 'http://59.110.230.111/api/courses/courseshare',
        type: _obj.method || 'post',
        data: _obj.data || {},
        dataType: 'json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
        success: function(ret, status, xhr){
            fnCloseProgress_public();
            if( ret.code == APP.ERROR_CODE.TOKEN_INVALID ){
                fnClearUser_public(function() {
                    fnHasLogin_public();
                });
            }else{
                _cb && _cb(ret);
            }
        },
        error: function(xhr, errorType, error){
            fnCloseProgress_public();
            console.log('error', arguments )
        },
        complete: function(xhr, status){
            fnCloseProgress_public();
            console.log('complete', arguments )
        }
    };

    if( _param.type.toLowerCase() == 'get' ){

    }else{
        // _param.data = JSON.stringify(_param.data);
    }

    if( _obj.file ){
        _param.contentType = false;
        _param.processData = false;
        _param.data = _obj.file;
    }

    // fnCookie(APP.LC_NAME.WX_OPEN_ID, function(_open_id){
    //     // _headers['openid'] = _open_id;
    //     fnCookie(APP.LC_NAME.USER, function(_user){
    //         if( _user ){
    //             // _headers['XX-Token'] = _user.token;
    //         }
    //         _param.headers = _headers;
    //         // console.log(JSON.stringify(_param.data));

    //         console.log(_param);
    //         // alert(JSON.stringify(_param));
    //         fnShowProgress_public();
    //         $.ajax(_param);
    //     })
    // })
    
    _param.headers = _headers;
    debugAlert('开始请求', _param)
    $.ajax(_param);
}



function fnShowProgress_public(_txt, _path) {
    debugAlert('打开加载进度条', arguments);
    if (!$('#loading-public').length) {
        fnKeyboardBlur_public();
        $('body').after('<div id="loading-public"></div>');
    }
}

// 关闭加载窗口
function fnCloseProgress_public(_txt) {
    debugAlert('关闭加载进度条', arguments);
    $('#loading-public').remove();
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

    _fnOpenSelector(_obj, function(ret){
        _cb && _cb(ret.data);
    });

    function _fnOpenSelector(_data, _cb){
        var oneLevelId = _fnHas(_data.active[0], 0);
        var twoLevelId = _fnHas(_data.active[1], 0);
        var threeLevelId = _fnHas(_data.active[2], 0);
        var fourLevelId = _fnHas(_data.active[3], 0);
        var fiveLevelId = _fnHas(_data.active[4], 0);
        var sixLevelId = _fnHas(_data.active[5], 0);
        var _sureText = fnLanguage_public(_data.sureText || '完成');
        var _closeText = fnLanguage_public(_data.closeText || '取消');

        var _title = fnLanguage_public(_data.title || '');

        // console.log( APP._date )
        $('.ios-select-widget-box').remove();
        var iosSelect = new IosSelect(_data.data.length,
            _data.data,
            {
                // title: '时间选择',
                closeText: _closeText,
                sureText: _sureText,
                title: _title,
                oneLevelId: oneLevelId,
                twoLevelId: twoLevelId,
                threeLevelId: threeLevelId,
                fourLevelId: fourLevelId,
                fiveLevelId: fiveLevelId,
                sixLevelId: sixLevelId,
                itemShowCount: _data.itemShowCount || 5,
                itemHeight: _data.itemHeight || 55,
                relation: _data.relation || [],
                callback: function () {
                    // 选择完毕后的回调函数
                    var _data = [];
                    for( var x in arguments ){
                        delete arguments[x].dom;
                        _data.push(arguments[x]);
                    }
                    var _obj = {
                        data: _data
                    }
                    // fnSubmit(_obj);
                    _cb && _cb(_obj);
                },
                fallback: function () {
                    // 选择取消后的回调函数
                    // fnCloseModel();
                },
                maskCallback: function () {
                    // 点击背景层关闭组件时触发的方法
                    // fnCloseModel();
                },
                scrollback: function(){
                    // 滚动完毕立刻的回调函数
                }
        });
        // $('body').removeClass('hide');
        $('ul').each(function(_index, _el) {
            if ($(_el).find('li').length) {

            } else {
                $(_el).parent().remove();
            }
        })

        function _fnHas(_value, _default){
            return fnHasEmpty_public(_value) ? _default : _value;
        }
    }
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
    fnKeyboardBlur_public();
    APP._continuity = 0;
    APP._selected_date = [];
    APP._timeSelectorData = _obj;
    
    setTimeout(function(){
        fnInit(APP._timeSelectorData.date);
    }, 100)

    function fnInit(_date) {
        APP._date = new Date(_date);
        // return;
        // 判断是否是一个正常的时间x
        if( isNaN(APP._date) ){
            APP._date = new Date();
        }

        // 判断是否设置过需要显示的时间层级
        if( ! APP._len ){
            if( typeof _date === 'string' ){
                var _split = _date.split(/[/ :]/);
                if( _split.length <= 1 ){
                    if( _split[0].length <= 4 ){
                        APP._len = 1;
                    }
                }else if( _split.length == 2 ){
                    // 年月格式补日，处理 ios 不能时间格式化兼容问题
                    _date+='/01';
                    APP._date = new Date(_date);
                    APP._len = 2;
                }else{
                    APP._len = _split.length;
                }
            }
        }
        fnOpenSelector();
        // $('body').removeClass('hide');
    }

    function fnOpenSelector(){
        var _date = new Date(APP._date);
        var oneLevelId = APP._nowYear = _date.getFullYear();
        // console.log( oneLevelId )
        var twoLevelId = _date.getMonth() + 1;
        var threeLevelId = _date.getDate();
        var fourLevelId = _date.getHours();
        var fiveLevelId = _date.getMinutes();
        var sixLevelId = _date.getSeconds();
        var _sureText = fnLanguage_public(APP._timeSelectorData.sureText || '完成');
        var _closeText = fnLanguage_public(APP._timeSelectorData.closeText || '取消');

        APP._title = fnLanguage_public(APP._timeSelectorData.title || '时间选择');
        if( typeof APP._title == 'string' ){
            APP._title = [APP._title];
        };

        var _title = APP._title[APP._continuity];
        // debugAlert(1111, APP._title)

        var _data = [yearData, monthData, dateData, hourData, minuteData, secondsData];
        if( APP._len ){
            _data = _data.splice(0, APP._len);
        }
        var iosSelect = new IosSelect(_data.length,
            _data,
            {
                // title: '时间选择',
                closeText: _closeText,
                sureText: _sureText,
                title: _title,
                oneLevelId: oneLevelId,
                twoLevelId: twoLevelId,
                threeLevelId: threeLevelId,
                fourLevelId: fourLevelId,
                fiveLevelId: fiveLevelId,
                sixLevelId: sixLevelId,
                itemShowCount: APP._timeSelectorData.itemShowCount || 5,
                itemHeight: APP._timeSelectorData.itemHeight || 55,
                callback: function (selectOneObj, selectTwoObj, selectThreeObj, selectFourObj, selectFiveObj, selectSixObj) {
                    // 选择完毕后的回调函数
                    for( var x in arguments ){
                        arguments[x].dom = null;
                    }
                    // debugAlert('2222222222 2',selectOneObj, selectTwoObj, selectThreeObj, selectFourObj, selectFiveObj, selectSixObj);
                    var _date = new Date(selectOneObj.id, selectTwoObj.id-1, selectThreeObj.id, selectFourObj.id, selectFiveObj.id, selectSixObj.id);
                    var _obj = {
                        date: _date,
                        value: {
                            one: selectOneObj,
                            two: selectTwoObj,
                            three: selectThreeObj,
                            four: selectFourObj,
                            five: selectFiveObj,
                            six: selectSixObj
                        }
                    }
                    _cb && _cb(_obj);
                },
                fallback: function () {
                    // 选择取消后的回调函数
                    APP._timeSelectorData.closeCallback && APP._timeSelectorData.closeCallback();
                },
                maskCallback: function () {
                    // 点击背景层关闭组件时触发的方法
                    // fnCloseModel();
                }
        });

        $('.iosselect-box ul').each(function(_index, _el) {
            if ($(_el).find('li').length) {

            } else {
                $(_el).parent().remove();
            }
        })
    }



    // 数据初始化
    function formatYear(nowYear) {
        nowYear = APP._timeSelectorData.is_after ? nowYear : nowYear - 100;
        var arr = [];
        for (var i = nowYear; i <= nowYear + 200; i++) {
            arr.push({
                id: i + '',
                value: i + (APP._timeSelectorData.is_show_unit === false ? '' : '')
            });
        }
        return arr;
    }

    function formatMonth() {
        var arr = [];
        for (var i = 1; i <= 12; i++) {
            arr.push({
                id: i + '',
                value: i + (APP._timeSelectorData.is_show_unit === false ? '' : '')
            });
        }
        return arr;
    }

    function formatDate(count) {
        var arr = [];
        for (var i = 1; i <= count; i++) {
            arr.push({
                id: i + '',
                value: i + (APP._timeSelectorData.is_show_unit === false ? '' : '')
            });
        }
        return arr;
    }
    var yearData = function(callback) {
        callback(formatYear(APP._nowYear))
    }
    var monthData = function(year, callback) {
        callback(formatMonth());
    };
    var dateData = function(year, month, callback) {
        if (/^(1|3|5|7|8|10|12)$/.test(month)) {
            callback(formatDate(31));
        } else if (/^(4|6|9|11)$/.test(month)) {
            callback(formatDate(30));
        } else if (/^2$/.test(month)) {
            if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
                callback(formatDate(29));
            } else {
                callback(formatDate(28));
            }
        } else {
            throw new Error('month is illegal');
        }
    };
    var hourData = function(one, two, three, callback) {
        var hours = [];
        for (var i = 0, len = 24; i < len; i++) {
            hours.push({
                id: i,
                value: i + (APP._timeSelectorData.is_show_unit === false ? '' : '时')
            });
        }
        callback(hours);
    };
    var minuteData = function(one, two, three, four, callback) {
        var minutes = [];
        if( APP._timeSelectorData.is_quarter ){
            var _quarter = 15;
            for (var i = 0, len = 60; i < len; i++) {
                var _result = i % _quarter;
                if( !_result ){
                    minutes.push({
                        id: i,
                        value: fnLt10Format(i) + (APP._timeSelectorData.is_show_unit === false ? '' : '分')
                    });
                }
            }
        }else {
            for (var i = 0, len = 60; i < len; i++) {
                minutes.push({
                    id: i,
                    value: i + (APP._timeSelectorData.is_show_unit === false ? '' : '分')
                });
            }
        }
        callback(minutes);
    };

    var secondsData = function(one, two, three, four, five, callback) {
        var seconds = [];
        for (var i = 0, len = 60; i < len; i++) {
            seconds.push({
                id: i,
                value: i + (APP._timeSelectorData.is_show_unit === false ? '' : '秒')
            });
        }
        callback(seconds);
    };
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

    _start();

    function _start() {
        ret={"status":true,"timestamp":1573092431394,"latitude":29.622263369737567,"longitude":106.49153483866212}
        _callback({
            lat: ret.latitude,
            lng: ret.longitude,
            lon: ret.longitude
        });
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


// 打开富文本展示页面
function fnOpenRichText_public(_obj, _cb){
    if (fnHasEmpty_public(_obj)) {
        _obj = {};
    } else if (typeof _obj === 'function') {
        _cb = _obj;
        _obj = {};
    }
    fnGetPublicConfig_base(_obj, function(ret){
        // ret.content                       配置信息
        $('body').append(
            '<!-- 协议弹窗 -->\
            <div class="flex frame-pop">\
                <div class="user-agreement flex-vertical">\
                    <div class="user-title">'+fnLanguage_public(_obj.title)+'<span onclick="fnClosePop_base(this)" class="close cursor-pointer"></span></div>\
                    <div class="text pre-text flex-item-vertical">'+ret.content+'</div>\
                </div>\
            </div>'
        )
    })
}





// 判断是否已经登录
function fnHasLogin_public(_obj, _cb) {
    if (fnHasEmpty_public(_obj)) {
        _obj = {};
    } else if (typeof _obj === 'function') {
        _cb = _obj;
        _obj = {};
    }
    fnUser_public({
        isLastData: true,        //选填     |      |     Boolean  |  是否使用上一次的数据（如果为true返回数据速度更快）,
        hasProgress: false       //必填     |      |     Boolean  |  是否使用上一次的数据（如果为true返回数据速度更快）,
    }, function(_user){
        if( _user ){
            // 当前登陆了用户
            _cb && _cb(_user.user);
        }else{
            fnRmCookie(APP.LC_NAME.USER);
            // 当前没有登陆用户
            var _param = {};
            if( _obj.redirect ){
                _param = {
                    redirect: encodeURIComponent(_obj.redirect)
                    // redirect: encodeURIComponent(_obj.redirect || location.href)
                }
            }
            fnOpen('sign/quick_login', {
                param: _param
            })
        }
    })
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
    if(confirm(_obj.msg)){
        if( _obj.buttons[1] ){
            _obj.buttons[1].callback();
        }
    }else {
        if( _obj.buttons[0] ){
            _obj.buttons[0].callback();
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
    fnOpen('http://'+_obj.url);
}


function fnGetPicture_public(_obj, _cb) {
    if( fnHasEmpty_public(_obj) ){
        _obj = {};
    }else if( typeof _obj === 'function' ){
        _cb = _obj;
        _obj = {};
    }

    Wind.css('artDialog');
    var _param = {
        multi: _obj.max || 0,
        max_files: _obj.max || 1,
        filetype: _obj.filetype || 'image',
        app: _obj.app || GV.APP
    }
    debugAlert('选择图片开始', _param)
    // return;
    Wind.use("artDialog", "iframeTools", function () {
        art.dialog.open(GV.ROOT + 'user/Asset/webuploader' + fnConvertParam_public(_param), {
            title: '选择图片',
            id: new Date().getTime(),
            width: '600px',
            height: '350px',
            lock: true,
            fixed: true,
            background: "#CCCCCC",
            opacity: 0,
            ok: function () {
                var _iframewindow = this.iframe.contentWindow;
                var _files        = _iframewindow.get_selected_files();
                _cb && _cb(_files);
            },
            cancel: true
        });
    });
    
// function openUploadDialog(dialog_title, callback, extra_params, multi, filetype, app, max_files) {
//     Wind.css('artDialog');
//     multi      = multi ? 1 : 0;
//     filetype   = filetype ? filetype : 'image';
//     app        = app ? app : GV.APP;
//     var params = '&multi=' + multi + '&filetype=' + filetype + '&app=' + app+ '&max_files=' + max_files;
//     Wind.use("artDialog", "iframeTools", function () {
//         art.dialog.open(GV.ROOT + 'user/Asset/webuploader?' + params, {
//             title: dialog_title,
//             id: new Date().getTime(),
//             width: '600px',
//             height: '350px',
//             lock: true,
//             fixed: true,
//             background: "#CCCCCC",
//             opacity: 0,
//             ok: function () {
//                 if (typeof callback == 'function') {
//                     var iframewindow = this.iframe.contentWindow;
//                     var files        = iframewindow.get_selected_files();
//                     console.log(files);
//                     if (files && files.length > 0) {
//                         callback.apply(this, [this, files, extra_params]);
//                     } else {
//                         return false;
//                     }

//                 }
//             },
//             cancel: true
//         });
//     });
// }

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

    APP._inputPopInfo = _obj;

    $('body').append(template('alert-input-pop-template', APP));
    // fnKeyboardBlur_public();
    // var _confirmCallback = null,
    //     _cancelCallback = null;
    // for( var x in _obj.buttons ){
    //     if( _obj.buttons[x].active ){
    //         _confirmCallback = _obj.buttons[x];
    //     }else{
    //         _cancelCallback = _obj.buttons[x];
    //     }
    // }
    

    // var _msg = prompt(_obj.placeholder || '', _obj.msg || '');
    // if( _msg === null ){
    //     _cancelCallback && _cancelCallback.callback();
    // }else{
    //     console.log( _confirmCallback )
    //     _confirmCallback && _confirmCallback.callback({
    //         text: _msg
    //     });
    // }
}

function fnOpenInputPopSubmit_public(_el){
    var _text = fnValue("#alert-input .text");
    if( APP._inputPopInfo.isForcedInput ){
        if( $(_el).hasClass('active') ){
            if( _text.length ){

            }else{
                fnToast($("#alert-input .text").attr('placeholder'));
                return;
            }
        }else{

        }
    }else{

    }

    APP._inputPopInfo.buttons[$(_el).index()].callback({
        text: _text
    });
    fnClosePop_base($('#alert-input .close')[0]);
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
        APP._photoBrwser = {
            pics: _obj.pics,
            default: _obj.default || 0
        }

        $('body').append(template('photo-browser-pop-template', APP));
        APP.initFn();
        new Swiper('#photo-browser .swiper-container', {
            initialSlide: APP._photoBrwser.default || 0,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false
            },
            pagination: {
                el: '#photo-browser .pagination',
            },
            on: {
                
            }
        });
    }else{

    }
}



//地图选择
function fnOpenGoogleMap_public(_lat, _lon) {
    event && event.stopPropagation();
    fnOpen('https://www.google.com/maps/search/?api=1&query='+_lat+','+_lon);
}