useWKWebView 环境带来的问题和需要修改的内容：

    以下方法都需要修改：

        APP.fixIos7Bar
        APP.fixStatusBar
        APP.fixTabBar
        fnOpen
        APP.init
        APP.getPageParam 该方法必须传 key 表示获取哪一个字段值， useWKWebView 环境下 api.sendEvent 方法没办法把整个 APP（因为数据量太大） 传递到下一个页面
        fnOpenGroup

    以下是都需要修改的页面：

        pop\aPublicActionSheet_pop.html
        pop\aPublicAlert_pop.html
        pop\aPublicChoiceOfPlace_pop.html
        pop\aPublicCitySelector_pop.html
        pop\aPublicInput_pop.html
        pop\aPublicTimeSelector_pop.html
        pop\aPublicTimeStartEndSelector_pop.html


    需要注意的地方：

        api.pageParam 全部需要用 APP._param 代替，否则就会出错

        api.sendEvent 不能传递超过 kb 的数据，否则会失效

        如果在页面处理化以后需要立马使用 api.sendEvent 方法，需要特别注意，这种情况下 iOS 可能并不生效，所以需要在页面初始化完成以后 setTimeout 100 毫秒以后在执行 api.sendEvent 方法，确保一定能成功


已修改的方法

    fnGetLanguageName_public 已修改
