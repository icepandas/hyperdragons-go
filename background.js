var num=localStorage.num;
var br=$("<br>");
//localStorage.num

setTimeout("self.location.reload();",5000);

    $.get("http://13.228.222.206:30221/get-dragon-list?pageno=0&gen=0", function(data, status) {
	var JSON = jQuery.parseJSON(data);
	localStorage.num=JSON.data.detail_data["0"].id;
});
	var url = "http://13.228.222.206:30221/dragon-detail?id=" + num; 
    $.get(url, function(data, status) {
	var JSON = jQuery.parseJSON(data);
	    var unixTimestamp = new Date(JSON.data.birth_time * 1000)
		var txt1=$("<p></p>").text(unixTimestamp.toLocaleString()); 
         $("body").append(txt1,br);
	if (JSON.data.skill2 != ""){
         var txt2=$("<p></p>").text("id:"+JSON.data.id); 
         var txt3=$("<p></p>").text("skill1:"+JSON.data.skill1);
         var txt4=$("<p></p>").text("skill2:"+JSON.data.skill2);
         var txt5=$("<p></p>").text("skill3:"+JSON.data.skill3);
          $("body").append(txt2,txt3,txt4,br,txt5,br);
        var txt6=$("<a></a>").text("Buy it!").attr('id','link_open').attr('herf','#'); 
         $("body").append(txt6,br);

		var txt8=$("<audio autoplay></audio>").attr('src','http://data.huiyi8.com/2014/lxy/05/14/20.mp3');
		$("body").append(txt8);
		
	chrome.browserAction.setBadgeText({text: 'NEW'});
    chrome.browserAction.setBadgeBackgroundColor({color: [255, 0, 0, 255]});
					chrome.notifications.create(null, {
    type: 'basic',
    iconUrl: 'icon.png',
    title: '通知',
    message: '出现新的变异龙！'
	
});
	} else{
		chrome.browserAction.setBadgeText({text: num});
    chrome.browserAction.setBadgeBackgroundColor({color: [255, 0, 0, 255]});
//		var txt8=$("<audio autoplay></audio>").attr('src','http://data.huiyi8.com/2014/lxy/05/14/20.mp3');
//		$("body").append(txt8);
		
// 			chrome.notifications.create(null, {
//     type: 'basic',
//     iconUrl: 'icon.png',
//     title: '通知',
//     message: '没有新的变异龙！'
// });
	}
     $('#link_open').click(function (){
    var linkHref = "http://kovan.hyperdragons.com/#/home/marketplace-buy?id="+num ;
    open(linkHref);
  }); 
});

 


 
