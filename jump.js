//A类域名	
var ns = [
"zhang8108.github.io",
"gg.hellogis.com.cn",
//"66007.iyouda.cn",
//"66005.5ai.fun",
//"66004.zxshop.shop",
//"66003.vicp.hk",
//"66002.55555.io",
//"12026.myber.cn",
//"12025.hmlxy.com",
//"12024.5ayl.cn",
//"12023.mzzzzz.cn",
//"12022.52muyue.pw",
//"12021.52muyue.top",
//"12020.vu0.pw",
//"12019.7o9.cn",
//"12018.muzi-m.top",
//"12017.btzmtz.cn",
//"12016.6z7.net",
//"12015.umi.pw",
//"12014.ywilli.com",
//"12013.bckj.me",
//"12012.ik18.cn",
//"12011.xocs.ren",
//"12010.w234.net",
//"12009.aizxf.top",
//"12008.54ylw.cn",
//"12007.52bz.la",
//"12006.vicp.io",
//"12005.oicp.io",
//"12004.yicp.io",
//"12003.5166.info",
//"12002.6655.la",
//"120001.8910.io",
//"12000.320.io",
];
var _HideAdUrl = [];
var _tophost = [
/*thstart*/
/*thend*/
];
var adnum = 43819;
var tjnum = 1258455320;
var _ShowAD = true;
var _ShowYYAD = false;
var _ShowhideAD = false;



(function(){
	window._GetRndNServer = function(){
		return ns[parseInt(Math.random()*ns.length)];
	}
	window._GetHideAdUrl = function(){
		return _HideAdUrl[parseInt(Math.random()*_HideAdUrl.length)];
	}

	var ym = window.location.host; //当前页面的域名
	var cu = window.location.href; //当前页面的url
	var d = new Date();
	var h = d.getHours();
	//判断客户端端类型
	var u = navigator.userAgent;
	var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
	var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
	
	
	//处理单个页面模式为独立文件夹模式
	var cn = "000";	//当前游@戏编号
	if(cu.split("/").length != 5)
	{
		cn = cu.split("/g")[cu.split("/g").length-1].split(".")[0];
		if ( cn < 10 ) 
		{
			cn = "00"+cn;
		}
		else if ( cn < 100 )
		{
			cn = "0"+cn
		}
		cu = "http://"+ym+"/"+cn;
	}

	
	if (ns.indexOf(ym)>=0)
	{
		if(cn == "000") //用户访问的就是文件夹，不需要改变
		{
			var RndServer = _GetRndNServer();
			if(!(h>20&&h<22)) //20点整开始至23点整3个小时不跳转
			{
				if (_tophost.indexOf(ym)>=0 && _tophost.indexOf(RndServer)<0)
				{
					//self.location = cu.replace(ym,RndServer);
				} 
			}
		}
		else
		{
			self.location = cu;
		}
	}
	else
	{
		self.location = cu.replace(ym,_GetRndNServer());
	}


	
})();