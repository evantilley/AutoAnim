
$(document).ready(function(){
    points = []

    var ctx = document.getElementById("canvas").getContext("2d");

    $("#canvas").click(function(e){
        getPosition(e); 
    });

    var img = document.createElement("img");

// fill image from data string
//img.src = "data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg=="; // insert a dot image contains 1px

// or fill image from url
img.src = "http://www.w3schools.com/tags/img_the_scream.jpg"


    var pointSize = 3;

    function getPosition(event){
        console.log("test")
        var rect = canvas.getBoundingClientRect();
        var x = event.clientX - rect.left;
        var y = event.clientY - rect.top;
        drawCoordinates(x,y);
    }

    

    function drawCoordinates(x,y){	
        ctx.fillStyle = "#ff2626"; // Red color
        ctx.beginPath();
        ctx.arc(x, y, pointSize, 0, Math.PI * 2, true);
        ctx.fill();
        ctx.scale(.1,.1)
        ctx.drawImage(base_image, x*10 - base_image.width/2, y*10 - base_image.height/2)
        ctx.scale(10,10)
        points.push([x,y])

    }
    function make_base()
    {
        base_image = new Image();
        //base_image.src = 'https://i0.wp.com/freepngimages.com/wp-content/uploads/2018/06/football-no-background.png?fit=1000%2C1000';
        base_image.src = "http://www.clker.com/cliparts/W/q/D/p/e/7/small-red-heart-with-transparent-background-md.png"
        base_image.onload = function(){
            console.log(base_image.width)
            ctx.scale(.1,.1)
            ctx.drawImage(base_image, 0, 0);
            ctx.scale(10,10)
        }
        initial_x = (300/10)/2
        initial_y = (300/10)/2
        console.log(initial_x)
        points.push([initial_x+5,initial_y+5])
    }
    make_base()


    $('.background').click(function (e) { //Default mouse Position
        x = e.pageX
        y = e.pageY

        console.log(points) 
    });

    console.log(points)

      const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
      }
    $("#button").click(async function(e){
        for (i = 0; i < points.length-1; i++){

            x = points[i+1][0]
            y = points[i+1][1]
            init_x = points[i][0]
            init_y = points[i][1]
            distancex = x - init_x
            distancey = y - init_y
            x_increment = distancex/10
            y_increment = distancey/10
            if (init_x < x && init_y < y){
            while (x > init_x || y > init_y){
                    await sleep(50)
                    ctx.scale(.1,.1)
                   ctx.clearRect((init_x-x_increment)*10 - base_image.width/2, (init_y-y_increment)*10 - base_image.height/2, 320, 320);
                    ctx.drawImage(base_image, init_x*10 - base_image.width/2, init_y*10 - base_image.height/2);
                    ctx.scale(10,10)
                    init_x += x_increment
                    init_y += y_increment
                }
            }
            else if (init_x > x && init_y < y){
                console.log("asfasd")
                while (x < init_x || y > init_y){
                    await sleep(50)
                    ctx.scale(.1,.1)
                    ctx.clearRect((init_x-x_increment)*10 - base_image.width/2, (init_y-y_increment)*10 - base_image.height/2, 320, 320);
                    ctx.drawImage(base_image, init_x*10 - base_image.width/2, init_y*10 - base_image.height/2);
                    ctx.scale(10,10)
                    init_x += x_increment
                    init_y += y_increment
                }
            }
            else if (init_x < x && init_y > y){
                console.log("asfasd")
                while (x > init_x || y < init_y){
                    await sleep(50)
                    ctx.scale(.1,.1)
                    ctx.clearRect((init_x-x_increment)*10 - base_image.width/2, (init_y-y_increment)*10 - base_image.height/2, 320, 320);
                    ctx.drawImage(base_image, init_x*10 - base_image.width/2, init_y*10 - base_image.height/2);
                    ctx.scale(10,10)
                    init_x += x_increment
                    init_y += y_increment
                }
            }
            else if (init_x > x && init_y > y){
                while (x < init_x || y < init_y){
                        await sleep(50)
                        ctx.scale(.1,.1)
                        ctx.clearRect((init_x-x_increment)*10 - base_image.width/2, (init_y-y_increment)*10 - base_image.height/2, 320, 320);
                        ctx.drawImage(base_image, init_x*10 - base_image.width/2, init_y*10 - base_image.height/2);
                        ctx.scale(10,10)
                        init_x += x_increment
                        init_y += y_increment
                    }
                }
        }
    })
})