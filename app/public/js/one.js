(function() {
    //是否为PC端,如果是scrollbar端,默认自定义滚动条
    var isPC = typeof window.orientation == 'undefined' ;

    //创建MeScroll对象,内部已默认开启下拉刷新,自动执行up.callback,刷新列表数据;
    // var mescroll = new MeScroll("mescroll", {
    //     //下拉刷新的所有配置项
    //     down:{
    //         use: true, //是否初始化下拉刷新; 默认true
    //         auto: true, //是否在初始化完毕之后自动执行下拉回调callback; 默认true
    //         autoShowLoading: false, //如果在初始化完毕之后自动执行下拉回调,是否显示下拉刷新进度; 默认false
    //         isLock: false, //是否锁定下拉,默认false;
    //         isBoth: false, //下拉刷新时,如果滑动到列表底部是否可以同时触发上拉加载;默认false,两者不可同时触发;
    //         callback: function(mescroll) {
    //             //加载轮播数据
    //             //loadSwiper();
    //             //下拉刷新的回调,默认重置上拉加载列表为第一页
    //             mescroll.resetUpScroll();
    //         },
    //         offset: 60, //触发刷新的距离,默认80
    //         outOffsetRate: 0.2, //超过指定距离范围外时,改变下拉区域高度比例;值小于1且越接近0,越往下拉高度变化越小;
    //         bottomOffset: 20, //当手指touchmove位置在距离body底部20px范围内的时候结束上拉刷新,避免Webview嵌套导致touchend事件不执行
    //         minAngle: 45, //向下滑动最少偏移的角度,取值区间  [0,90];默认45度,即向下滑动的角度大于45度则触发下拉;而小于45度,将不触发下拉,避免与左右滑动的轮播等组件冲突;
    //         hardwareClass: "mescroll-hardware", //硬件加速样式;解决iOS下拉因隐藏进度条而闪屏的问题,参见mescroll.css
    //         warpId: null, //可配置下拉刷新的布局添加到指定id的div;默认不配置,默认添加到mescrollId
    //         warpClass: "mescroll-downwarp", //容器,装载布局内容,参见mescroll.css
    //         resetClass: "mescroll-downwarp-reset", //高度重置的动画,参见mescroll.css
    //         htmlContent: '<p class="downwarp-progress"></p><p class="downwarp-tip">下拉刷新 </p>', //布局内容
    //         inited: function(mescroll, downwarp) {
    //             console.log("down --> inited");
    //             //初始化完毕的回调,可缓存dom
    //             mescroll.downTipDom = downwarp.getElementsByClassName("downwarp-tip")[0];
    //             mescroll.downProgressDom = downwarp.getElementsByClassName("downwarp-progress")[0];
    //         },
    //         inOffset: function(mescroll) {
    //             console.log("down --> inOffset");
    //             //进入指定距离offset范围内那一刻的回调
    //             if(mescroll.downTipDom) mescroll.downTipDom.innerHTML = "下拉刷新";
    //             if(mescroll.downProgressDom) mescroll.downProgressDom.classList.remove("mescroll-rotate");
    //         },
    //         outOffset: function(mescroll) {
    //             console.log("down --> outOffset");
    //             //下拉超过指定距离offset那一刻的回调
    //             if(mescroll.downTipDom) mescroll.downTipDom.innerHTML = "释放更新";
    //         },
    //         onMoving: function(mescroll, rate, downHight) {
    //             //下拉过程中的回调,滑动过程一直在执行; rate下拉区域当前高度与指定距离offset的比值(inOffset: rate<1; outOffset: rate>=1); downHight当前下拉区域的高度
    //             console.log("down --> onMoving --> mescroll.optDown.offset="+mescroll.optDown.offset+", downHight="+downHight+", rate="+rate);
    //             if(mescroll.downProgressDom) {
    //                 var progress = 360 * rate;
    //                 mescroll.downProgressDom.style.webkitTransform = "rotate(" + progress + "deg)";
    //                 mescroll.downProgressDom.style.transform = "rotate(" + progress + "deg)";
    //             }
    //         },
    //         beforeLoading: function(mescroll, downwarp) {
    //             console.log("down --> beforeLoading");
    //             //准备触发下拉刷新的回调
    //             return false; //如果要完全自定义下拉刷新,那么return true,此时将不再执行showLoading(),callback();
    //         },
    //         showLoading: function(mescroll) {
    //             console.log("down --> showLoading");
    //             //触发下拉刷新的回调
    //             if(mescroll.downTipDom) mescroll.downTipDom.innerHTML = "加载中 ...";
    //             if(mescroll.downProgressDom) mescroll.downProgressDom.classList.add("mescroll-rotate");
    //         }
    //     },
    //     //上拉加载的所有配置项
    //     up: {
    //         use: true, //是否初始化上拉加载; 默认true
    //         auto: false, //是否在初始化时以上拉加载的方式自动加载第一页数据; 默认false
    //         isLock: false, //是否锁定上拉,默认false;当列表没有更多数据时会自动锁定不可上拉;在endSuccess如果检查到有下一页数据,则会自动解锁true
    //         isBoth: true, //上拉加载时,如果滑动到列表顶部是否可以同时触发下拉刷新;默认false,两者不可同时触发; 这里为了演示改为true,不必等列表加载完毕才可下拉;
    //         callback: getListData, //上拉回调,此处可简写; 相当于 callback: function (page, mescroll) { getListData(page); }
    //         page: {
    //             num: 0, //当前页 默认0,回调之前会加1; 即callback(page)会从1开始
    //             size: 10, //每页数据条数
    //             time: null //加载第一页数据服务器返回的时间; 防止用户翻页时,后台新增了数据从而导致下一页数据重复;
    //         },
    //         noMoreSize: 5, //如果列表已无数据,可设置列表的总数量要大于半页才显示无更多数据;避免列表数据过少(比如只有一条数据),显示无更多数据会不好看
    //         offset: 100, //离底部的距离
    //         toTop: {
    //             //回到顶部按钮,需配置src才显示
    //             warpId: null, //父布局的id; 默认添加在body中
    //             src: "../image/mescroll-totop.png", //图片路径,默认null;
    //             offset: 1000, //列表滚动多少距离才显示回到顶部按钮,默认1000
    //             warpClass: "mescroll-totop", //按钮样式,参见mescroll.css
    //             showClass: "mescroll-fade-in", //显示样式,参见mescroll.css
    //             hideClass: "mescroll-fade-out", //隐藏样式,参见mescroll.css
    //             duration: 300 //回到顶部的动画时长,默认300ms
    //         },
    //         loadFull: {
    //             use: false, //列表数据过少,不足以滑动触发上拉加载,是否自动加载下一页,直到满屏或者无更多数据为止;默认false,因为可通过调高page.size或者嵌套mescroll-bounce的div避免这个情况
    //             delay: 500 //延时执行的毫秒数; 延时是为了保证列表数据或占位的图片都已初始化完成,且下拉刷新上拉加载中区域动画已执行完毕;
    //         },
    //         empty: {
    //             //列表第一页无任何数据时,显示的空提示布局; 需配置warpId或clearEmptyId才生效;
    //             warpId:null, //父布局的id; 如果此项有值,将不使用clearEmptyId的值;
    //             icon: null, //图标,默认null
    //             tip: "暂无相关数据~", //提示
    //             btntext: "", //按钮,默认""
    //             btnClick: null
    //         },
    //         clearId: null, //加载第一页时需清空数据的列表id; 如果此项有值,将不使用clearEmptyId的值;
    //         clearEmptyId: "dataList", //相当于同时设置了clearId和empty.warpId; 简化写法,默认null;
    //         hardwareClass: "mescroll-hardware", //硬件加速样式,动画更流畅,参见mescroll.css
    //         warpId: null, //可配置上拉加载的布局添加到指定id的div;默认不配置,默认添加到mescrollId
    //         warpClass: "mescroll-upwarp", //容器,装载布局内容,参见mescroll.css
    //         htmlLoading: '<p class="upwarp-progress mescroll-rotate"></p><p class="upwarp-tip">加载中..</p>', //上拉加载中的布局
    //         htmlNodata: '<p class="upwarp-nodata">-- END --</p>', //无数据的布局
    //         inited: function(mescroll, upwarp) {
    //             console.log("up --> inited");
    //             //初始化完毕的回调,可缓存dom 比如 mescroll.upProgressDom = upwarp.getElementsByClassName("upwarp-progress")[0];
    //         },
    //         showLoading: function(mescroll, upwarp) {
    //             console.log("up --> showLoading");
    //             //上拉加载中.. mescroll.upProgressDom.style.display = "block" 不通过此方式显示,因为ios快速滑动到底部,进度条会无法及时渲染
    //             upwarp.innerHTML = mescroll.optUp.htmlLoading;
    //         },
    //         showNoMore: function(mescroll, upwarp) {
    //             console.log("up --> showNoMore");
    //             //无更多数据
    //             upwarp.innerHTML = mescroll.optUp.htmlNodata;
    //         },
    //         onScroll: function(mescroll, y, isUp){ //列表滑动监听,默认onScroll: null;
    //             //y为列表当前滚动条的位置
    //             console.log("up --> onScroll 列表当前滚动的距离 y = " + y + ", 是否向上滑动 isUp = " + isUp);
    //         },
    //         scrollbar: {
    //             use: isPC, //默认只在PC端自定义滚动条样式
    //             barClass: "mescroll-bar"
    //         }
    //     }
    // });

    /*联网加载列表数据  page = {num:1, size:10}; num:当前页 从1开始, size:每页数据条数 */
    function getListData(page){
        // getListDataFromNet(page.num, page.size, function(curPageData){
        //     //联网成功的回调,隐藏下拉刷新和上拉加载的状态;
        //     //mescroll会根据传的参数,自动判断列表如果无任何数据,则提示空;列表无下一页数据,则提示无更多数据;
        //     console.log("page.num="+page.num+", page.size="+page.size+", curPageData.length="+curPageData.length);
            
        //     //方法一(推荐): 后台接口有返回列表的总页数 totalPage
        //     //mescroll.endByPage(curPageData.length, totalPage); //必传参数(当前页的数据个数, 总页数)
            
        //     //方法二(推荐): 后台接口有返回列表的总数据量 totalSize
        //     //mescroll.endBySize(curPageData.length, totalSize); //必传参数(当前页的数据个数, 总数据量)
            
        //     //方法三(推荐): 您有其他方式知道是否有下一页 hasNext
        //     //mescroll.endSuccess(curPageData.length, hasNext); //必传参数(当前页的数据个数, 是否有下一页true/false)
            
        //     //方法四 (不推荐),会存在一个小问题:比如列表共有20条数据,每页加载10条,共2页.如果只根据当前页的数据个数判断,则需翻到第三页才会知道无更多数据,如果传了hasNext,则翻到第二页即可显示无更多数据.
        //     mescroll.endSuccess(curPageData.length);
            
        //     //设置列表数据
        //     setListData(curPageData);
        // }, function(){
        //     //联网失败的回调,隐藏下拉刷新和上拉加载的状态;
        //     mescroll.endErr();
        // });
    }
			
    /*设置列表数据*/
    function setListData(curPageData){
        var listDom=document.getElementById("dataList");
        for (var i = 0; i < curPageData.length; i++) {
            var pd=curPageData[i];
            
            var str='<img class="pd-img" src="'+pd.pdImg+'"/>';
            str+='<p class="pd-name">'+pd.pdName+'</p>';
            str+='<p class="pd-price">'+pd.pdPrice+' 元</p>';
            str+='<p class="pd-sold">已售'+pd.pdSold+'件</p>';
            
            var liDom=document.createElement("li");
            liDom.innerHTML=str;
            listDom.appendChild(liDom);
        }
    }
			
    /*联网加载列表数据
    在您的实际项目中,请参考官方写法: http://www.mescroll.com/api.html#tagUpCallback
    请忽略getListDataFromNet的逻辑,这里仅仅是在本地模拟分页数据,本地演示用
    实际项目以您服务器接口返回的数据为准,无需本地处理分页.
    * */
    function getListDataFromNet(pageNum,pageSize,successCallback,errorCallback) {
        //延时一秒,模拟联网
        setTimeout(function () {
                    var listData=[],
                        data = [
                        ];
                    
                    for (var i = (pageNum-1)*pageSize; i < pageNum*pageSize; i++) {
                        if(i == data.length) break;
                        listData.push(data[i]);
                    }
                    
                    //回调
                    successCallback(listData);
        },1000)
    }
			
    //禁止PC浏览器拖拽图片,避免与下拉刷新冲突;如果仅在移动端使用,可删除此代码
    document.ondragstart=function() {return false;}
})()