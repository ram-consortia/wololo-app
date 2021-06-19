function login(){
    const email=$('#email').val().trim();
    const user_pass=$('#pass').val();
    var _param = {
        method: 'POST',
        data: {
            username: email,
            user_type: 2,
            marketing_is_open:fnCookie(APP.LC_NAME.HAS_NOT_WELCOME)||2
        },
    }
    // 账号密码登录
    fnCustomMd5_base({
        data: user_pass
    }, function (ret) {
        _param.url = 'user/index/login';
        _param.data.user_pass = ret.value;
        fnAjax(_param, function (ret) {
            if (ret.code == APP.HTTP_STATUS.SUCCESS) {
                fnCookie(APP.LC_NAME.LOGIN_USERNAME, email);
                fnCookie(APP.LC_NAME.USER, ret.data, function () {
                    api.execScript({
                        name:"home_win",
                        script: 'fnInitTableBar(0);'
                    });
                    fnJoinHomeLogic_base();
                    // fnOpen('home/home_win.html');
                    closeThis();

                })
            } else {
                fnToast(ret.msg);
            }
        })

    })
};
function closeThis(){
    api.addEventListener({
        name:'viewdisappear'
    },function(){
        api.closeWin();
    })
}