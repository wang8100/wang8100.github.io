function play68_init() {
	updateShare(0);
}
function play68_submitScore(score) {
	updateShareScore(score);
	setTimeout( function() { Play68.shareFriend(); }, 1000 )
}

function updateShare(bestScore) {
	var descContent = "考驾照之科目二";
   if(bestScore > 0 && bestScore <=100) {
		shareTitle = "我用了" + bestScore + "秒停车入位,我是赛车手，小伙伴来试试!";
	}
	else if(bestScore > 100 && bestScore <=300){
	shareTitle = "我用了" + bestScore + "秒停车入位,我是新手，小伙伴来试试!";
	}
	else if(bestScore >300){
	shareTitle = "我用了" + bestScore + "秒停车入位,我是马路杀手，小伙伴来试试!";
	}
	else{
		shareTitle = "我在玩#停车入位#，大家一起来练习考驾照之科目二吧！";
	}
	appid = '';
	Play68.setShareInfo(shareTitle,descContent);
}

function updateShareScore(bestScore) {
	updateShare(bestScore);
}