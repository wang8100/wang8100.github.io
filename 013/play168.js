function play68_init() {
	updateShare(0);
}

function updateShare(bestScore) {
	imgUrl = 'http://www.weixin199.com/youxi/games/feidegenggao/icon.png';
	lineLink = 'http://www.weixin199.com/youxi/games/feidegenggao/';
	descContent = "我要飞的更高，快来一起飞起来吧！";
	updateShareScore(bestScore);
	appid = '';
}

function updateShareScore(bestScore) {
	if(bestScore > 0) {
		shareTitle = "我可以飞到" + bestScore + "米，你能飞多高呢？";
        document.head.getElementsByTagName("title")[0].innerText = "我在玩《飞的更高》游@戏，飞行"+bestScore+"米，有胆来挑战我吧！";
	}
	else{
		shareTitle = "我要飞的更高，快来一起飞起来吧！";
	}
}
