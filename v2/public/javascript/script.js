function rotate(){
    anime({
        targets: '#wheel',
          rotate: '1turn',
         loop:true,
         easing: 'linear',
        duration: 21500,
      });
}


//make this more sophisticated - i.e. check when the variable is updated





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


function restart(){
    rotate1.restart
}

function stop(){
    rotate1.pause
}


$(document).ready(function(){
    //speed = 4000
    // setInterval(function() {
    //     ye(speed).pause
    //     speed = $("#sliderRange")[0]['value']
    //     document.querySelector("#rangeslider").onclick = ye(speed).start
    //   }, 1000);
    
    var animation = anime({
        targets: '#ferris',
        rotate: '1turn',
        loop: true,
        easing: 'linear',
        duration: function(){
            return anime.random(100, 10000)
        },
        autoplay: false
      })



      document.querySelector("#rangeslider").onclick =  anime({
        targets: '#ferris',
        rotate: '1turn',
        loop: true,
        easing: 'linear',
        duration: function(){
            return anime.random(100, 10000)
        },
        autoplay: true
      }).restart
      //document.querySelector("#rangeslider").onclick = animation.restart


      
      
      

    // document.querySelector("#rangeslider").onclick = function(){
    //     speed = $("#sliderRange")[0]['value']
    //     ye(speed).pause
    //     ye(speed).restart()
        
    // }



    function ye(speed){
        console.log("speed is" + speed)
        return animation = anime({
            targets: '#ferris',
            rotate: '1turn',
            loop: true,
            easing: 'linear',
            duration: speed,
            autoplay: false
          })
    }



    rotate()
    //restart()
    resize()

    $("#current_speed").html("Current speed is: " + 10000)
        

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

   
   
