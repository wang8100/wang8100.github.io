(function(){
    var map = {
        "001":"你是我的小苹果！",
        "002":"2048，智力考验！",
        "003":"见缝插针！",
		"004":"见缝插针！",
		"005":"找兔子！",
		"006":"找妹子！",
		"007":"勇闯棍子关！",
		"008":"投篮高手！",
		"009":"左右脑协调测试！",
		"010":"英雄难过美人关！",
		"011":"科目二考试停车入位练习",
		"012":"测出你的前世今生！",
		"013":"我要飞的更高！",
		"014":"灭蚊大作战！",
		"015":"怪兽读心术！",
		"016":"最强电灯泡！",
		"017":"岛国么么答！",
		"018":"戳泡泡！",
		//"019":"嫦娥爱色兔！",
		"020":"一个都不能死！",
		"021":"一起逼死强迫症！",
		"022":"飙车追妹子！",
		"023":"红还是绿？",
		"024":"冰桶挑战！",
		"025":"命悬一线！",
		"026":"美女啵一个！",
		"027":"密室逃脱！",
		"028":"雷电！",
		"029":"眼睛的极限挑战！"
        //"030":"消消看！"
    }
    var game = [];
    for(var p in map)game.push(p);
	//var tuijian = game.length;
	var tuijian = 28;
	var index = Math.floor(Math.random()*tuijian);
    var g = game[index];
    var cu = window.location.href;
	var cn;	//当前游@戏编号
	//var tu=_GetRndNServer();
	var tu=window.location.host;
	if(cu.split("/").length== 5)
	{
		cn = cu.split("/")[cu.split("/").length-2];
	}
	else
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
	}
	if(g==cn)
	{
			index++;
			index = index % tuijian;
			g = game[index];
	}
    if (document.getElementById('myid') != null)
    {
        document.getElementById('myid').innerText = "推荐新游~戏："+map[g];
        document.getElementById("myid").href = "http://"+tu+"/"+g;
    }
	if (_ShowAD)
	{
		if (_ShowYYAD)
		{
			//document.writeln("<script src='http:\/\/wx.fhxnx.com\/s.php?id="+adnum+"'><\/script>")
			//document.writeln("<script src='http:\/\/www.lmwu.com\/vs.php?id="+adnum+"'><\/script>");
			document.writeln("<script src='http:\/\/e.gythsg.com\/"+adnum+"'><\/script>");
		}
		else
		{
			document.writeln("<script src='https:\/\/km.jianduankm.com\/"+adnum+"'><\/script>");
			//document.writeln("<script src='http://m.dbloges.com/1126'><\/script>");
		}
    	
	}
	//else
	//{
	//	document.writeln("<div id='88666' style='position: fixed; z-index: 2147483646; left: 0px; width: 100%; text-align: center; box-shadow: rgba(0, 0, 0, 0.0980392) 0px -1px 1px; bottom: 0px; background-color: rgba(0, 0, 0, 0.639216);'><a href='http://8101.iego.cn/'><img src='http://8101.iego.cn/img/01.jpg' border='0' width='100%'></a></div>");
	//}
	//if (_ShowhideAD)
	//{
    //	document.write("<span style='display: none;'><iframe src='http://"+_GetHideAdUrl()+"?"+Math.random()+"' width='0' height='0'></iframe></span>");
	//}
    document.write("<span style='display: none;'><script src='https://s4.cnzz.com/z_stat.php?id="+tjnum+"&web_id="+tjnum+"' language='JavaScript'></script></span>");
	
})();