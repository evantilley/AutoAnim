function rotate(){
    anime({
        targets: '#wheel',
          rotate: '1turn',
         loop:true,
         easing: 'linear',
        duration: 21500,
      });
}
function rotate1(){
    anime({
        targets: '#ferris',
          rotate: '1turn',
         loop:false,
         easing: 'linear',
        duration: speed,
      });
}
//make this more sophisticated - i.e. check when the variable is updated
window.setInterval(function(){
    speed = $("#sliderRange")[0]['value']
    $("#current_speed").html("Current speed is " + speed)
    /// call your function here
    //rotate1()
  }, 200);


var speed = 21500

function resize(){
    var img = document.querySelector("#ferris");
    var currWidth = img.clientWidth;
    var currHeight = img.clientHeight;
    var userImage = document.querySelector("#user-image");
    var customWidth = userImage.clientWidth;
    var customHeight = userImage.clientHeight;
    userImage.style.width = (currWidth) + "px";
    userImage.style.height = (currHeight) + "px"
   // console.log($("#user-image"))
    //$(".image3").attr("src", $(this)[0]['src'])
}


$(document).ready(function(){
    rotate()
    rotate1()
    resize()

    $("#current_speed").html("Current speed is: " + speed)
        

    $(".image3").draggable()
    $("#tire").click(function(){
        console.log("asdfsad")
        var img = document.querySelector("#ferris");
        var currWidth = img.clientWidth;
        var currHeight = img.clientHeight;
        console.log("width of ferris wheel" + currWidth)
        console.log("height of ferris wheel" + currHeight)
        var userImage = document.querySelector("#tire");
        var customWidth = userImage.clientWidth;
        var customHeight = userImage.clientHeight;
        img.style.width = (currWidth) + "px";
        img.style.height = (currHeight) + "px"
        $(".image3").attr("src", "/images/tires.png")
        console.log("width of custom image" + customWidth)
        console.log("height of current image" + customHeight)
    })

    $("#susling").click(function(){
        console.log("asdfgasdfas")
    })
    $("#ferris_wheel_select").click(function(){
        var img = document.querySelector("#ferris");
        var currWidth = img.clientWidth;
        var currHeight = img.clientHeight;
        var userImage = document.querySelector("#tire");
        var customWidth = userImage.clientWidth;
        var customHeight = userImage.clientHeight;
        img.style.width = (currWidth) + "px";
        img.style.height = (currHeight) + "px"
        $(".image3").attr("src", "/images/ferris_wheel.png")
        console.log("width of custom image" + customWidth)
        console.log("height of current image" + customHeight)
    })

    $("#user-image").click(function(){
        var img = document.querySelector("#ferris");
        var currWidth = img.clientWidth;
        var currHeight = img.clientHeight;
        var userImage = document.querySelector("#tire");
        var customWidth = userImage.clientWidth;
        var customHeight = userImage.clientHeight;
        img.style.width = (currWidth) + "px";
        img.style.height = (currHeight) + "px"
        $(".image3").attr("src", $(this)[0]['src'])
    })

    $("#lemon").click(function(){
        var img = document.querySelector("#ferris");
        var currWidth = img.clientWidth;
        var currHeight = img.clientHeight;
        var userImage = document.querySelector("#tire");
        var customWidth = userImage.clientWidth;
        var customHeight = userImage.clientHeight;
        img.style.width = (currWidth) + "px";
        img.style.height = (currHeight) + "px"
        $(".image3").attr("src", "/images/lemon.png")
        console.log("width of custom image" + customWidth)
        console.log("height of current image" + customHeight)
    })
    $("#columbia").click(function(){
        var img = document.querySelector("#ferris");
        var currWidth = img.clientWidth;
        var currHeight = img.clientHeight;
        var userImage = document.querySelector("#tire");
        var customWidth = userImage.clientWidth;
        var customHeight = userImage.clientHeight;
        img.style.width = (currWidth) + "px";
        img.style.height = (currHeight) + "px"
        $(".image3").attr("src", "/images/columbia_logo_circle.png")
        console.log("width of custom image" + customWidth)
        console.log("height of current image" + customHeight)
    })

})   
   
   
