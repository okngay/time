$(document).ready(function () {
    $('input#input_text, textarea#textarea1').characterCounter();
    $('#mainStage').append('<div id="spacing"></div>');
    $('#mainStage').append('<div id="clockOuter"><img id="clockInner" src="timer.png"></div>');
    $('#mainStage').append('<div id="showtext"> <h2 class="center"><b>Đặt giờ nhanh</b></h2></div>');

	
	
// request permission on page load
document.addEventListener('DOMContentLoaded', function () {
  if (Notification.permission !== "granted")
    Notification.requestPermission();
});

function notifyMe() {
  if (!Notification) {
    alert('Desktop notifications not available in your browser. Try Chromium.'); 
    return;
  }

  if (Notification.permission !== "granted")
    Notification.requestPermission();
  else {
    var notification = new Notification('Đã hết thời gian bạn đặt !', {
      icon: 'http://cdn.sstatic.net/stackexchange/img/logos/so/so-icon.png',
      body: "Bạn ghi chú: " +$("#icon_prefix2").val() + " .",
    });

    notification.onclick = function () {
      notification.close();     
    };
    
  }

}


	
	
	
	
	
	
	
	
	
    function timer() {
        tick1 = 0;
        giay = 1;
        phut = 0;
        bar = 0;
        hetgio;
        sumtime = hetgio * 60;

		//console.log(sumtime);
        if (hetgio < 0) {
			 $("#timeShow").hide();
			 
            alert("Vui lòng nhập số phút lớn hơn 1");
			
            history.go(0)
        }

		
        $('#showtext').hide();
        $('#mainStage').append('<div id="showtext"> <h2 class="center"><b>Bạn đặt ' + (hetgio) + ' phút</b></h2></div>');
        $('#mainStage').append('<div id="spacing"></div>');
        $('#mainStage').append('<div id="timeShow">0 Phút 0 Giây</div>');

        clockVar = setInterval(function () {
            timeControl();
        }, 1000);

        function timeControl() {
            bar++;
            giay--;
            tick1++;
		//	console.log(bar);

            if (tick1 == 8) {
                tick1 = 0;
            }
            if (giay == 0) {
                giay = 59;
                hetgio--;
            }
            //   if(phut == 5) {aler = 1; }

            $('#clockInner').css("left", [tick1 * -100] + "px");
            $('#timeShow').text(hetgio + " Phút " + giay + " Giây");
            $('#timetitle').text(hetgio + " Phút ••• " + giay + " Giây" +" ○ Ghi chú: "+$("#icon_prefix2").val() );

            $("#bar").attr("style", "width:" + (parseInt((bar/sumtime) * 100)) + "%");
			//console.log(parseInt((bar/sumtime)*100)+"%");

            if (hetgio == 0) {
                notifyMe();
				$("#timeShow").hide();
				
				$('#timetitle').text("Hết giờ rồi nhé ==! "), history.go(0), alert(" ******************- THÔNG BÁO -********************* \n Đã hết giờ rồi :) \n +Bạn đã ghi chú: \n "+ $("#icon_prefix2").val() +" \n \n Hãy nhìn xung quanh và mát-xa cho mắt nhé ♥   \n \n******************- HÃY BẢO VỆ MẮT! -***************** \n (Khi bạn nhấn 'Ok' trang sẽ tải lại) .");
            }
        } //timercontrol    
    } //Timer

    // timer(hetgio=100);


    $("#5phut").click(function () {
		
        timer(hetgio = 5);
        hide();
    });


    $("#10phut").click(function () {
        timer(hetgio = 10);
        hide();
    });

    $("#30phut").click(function () {
        timer(hetgio = 30);
        hide();
    });

    $("#oknbsent").click(function () {
        timer(hetgio = $("#numberinput").val());
        hide();

    });

    function hide() {

        $("#oknbsent").hide();
        $("#numberip").hide();
        $("#5phut").hide();
        $("#10phut").hide();
        $("#30phut").hide();

    }

	
}); //doc ready