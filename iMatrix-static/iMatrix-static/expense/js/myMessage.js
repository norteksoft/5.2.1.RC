function setMessageState(b){var a=imatrixRoot+"/portal/index/my-message-setState.htm?id="+b+"&callback=?";$.getJSON(a,function(c){getMeassagesTimeout()})}function openMessageInput(a){$("#mess"+a).hide();$.colorbox({href:imatrixRoot+"/portal/index/my-message-view.htm?id="+a+"&isOpen=true",iframe:true,innerWidth:$(window).width()-40,innerHeight:$(window).height()-60,overlayClose:false,title:"\u4e2a\u4eba\u6d88\u606f\u7ba1\u7406"})}function messageOpen(a){var b=screen.width-10;var d=screen.height-120;var c="top=0px,left=0px,fullscreen=0,toolbar=no,location=no,directories=no,status=yes,menubar=no,scrollbars=false,resizable=yes,width="+b+",height="+d;window.open(a,"",c)}function taskMessageOpen(c,b){var d=screen.width-10;var g=screen.height-120;var f="top=0px,left=0px,fullscreen=0,toolbar=no,location=no,directories=no,status=yes,menubar=no,scrollbars=false,resizable=yes,width="+d+",height="+g;var a=window.open(c,"",f);var e=(new Date()).getTime();$("body").everyTime("2s","timer"+e,function(){if(a.closed){$("body").stopTime("timer"+e);if($("#portalMessage")!="undefined"&&$("#portalMessage").attr("value")=="portal"){loadWidgetContent(b,"widget-content-"+b)}}},0,true)}function getMeassagesTimeout(){var a=imatrixRoot+"/portal/index/my-message-getInfor.htm?callback=?";$.getJSON(a,function(b){if(b.msg=="error"){if($("#dialog").attr("id")=="dialog"){$("#dialog").dialog("close")}}else{$("#dialog").html(b.msg);$("#dialog").dialog({stack:true,title:"<img style='float: left;width:16px;height:16px;' src='"+resourceRoot+"/images/mail.png'>\u4e2a\u4eba\u6d88\u606f",position:"right bottom",show:"1000",hide:"1000"})}})}function openMessage(){$.colorbox({href:imatrixRoot+"/portal/index/my-message.htm",iframe:true,innerWidth:$(window).width()-40,innerHeight:$(window).height()-60,overlayClose:false,title:"\u4e2a\u4eba\u6d88\u606f\u7ba1\u7406"})}$(function(){$("body").append('<div id="dialog" style="max-height:300px; overflow-y: auto;"></div>');getMessageInfor()});function getMessageInfor(){var a=imatrixRoot+"/portal/index/get-base-setting.htm?callback=?";$.getJSON(a,function(c){var b=c.msg.split("_");if(b[0]=="true"){setTimeout("getMeassagesTimeout()",1000);setInterval("getMeassagesTimeout()",parseInt(b[1])*1000)}})};