canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

car1_width = 120;
car1_height = 70;
car1_image = "https://thumbs.dreamstime.com/b/toy-yellow-car-cartoon-vector-illustration-isolated-white-background-187859273.jpg";
car1_x = 10;

car2_width = 120;
car2_height = 70;
car2_image = "https://thumbs.dreamstime.com/b/toy-yellow-car-cartoon-vector-illustration-isolated-white-background-187859273.jpg";
car2_x = 10;
car2_y = 100;

background_image = "https://cdn130.picsart.com/246569152014202.gif?to=min&r=640";
function uploadBackground() {
ctx.drawImage (background_imgTag, 0, 0, canvas.width, canvas.height);
}

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    car1_imgTag = new Image();
    car1_imgTag.onload = uploadBackground;
    car1_imgTag.src = car1_image;
}

function uploadcar1() {
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == '38')
    {
        car1_up();
        console.log("up arrow key");
    }
    if(keyPressed == '40')
    {
        car1_up();
        console.log("down arrow key");
    }
    if(keyPressed == '37')
    {
        car1_up();
        console.log("left arrow key");
    }
    if(keyPressed == '39')
    {
        car1_up();
        console.log("right arrow key");
    }
    if(keyPressed == '87')
    {
        car1_up();
        console.log("key w");
    }
    if(keyPressed == '83')
    {
        car1_up();
        console.log("key s");
    }
    if(keyPressed == '68')
    {
        car1_up();
        console.log("key d");
    }
    if(keyPressed == '65')
    {
        car1_up();
        console.log("key a");
    }
}

function car1_up()
{
   if(car1_y >=0)
   {
    car1_y = car1_y - 10;
    console.log("When up arrow is pressed, x = " + car1_x + " | y = " +car1_y);
    uploadBackground();
    uploadcar1();
    uploadcar2();
   }
    
}

function car1_down()
{
   if(car1_y <=500)
   {
    car1_y = car1_y + 10;
    console.log("When dowm arrow is pressed, x = " + car1_x + " | y = " +car1_y);
    uploadBackground();
    uploadcar1();
    uploadcar2();
   }
    
}

function car1_left()
{
   if(car1_x >=0)
   {
    car1_x = car1_x - 10;
    console.log("When left arrow is pressed, x = " + car1_x + " | y = " +car1_y);
    uploadBackground();
    uploadcar1();
    uploadcar2();
   }
    
}

function car1_down()
{
   if(car1_y <=500)
   {
    car1_y = car1_y + 10;
    console.log("When dowm arrow is pressed, x = " + car1_x + " | y = " +car1_y);
    uploadBackground();
    uploadcar1();
    uploadcar2();
   }
    
}

if(car1_x > 700)
{
    console.log("car1 Won");
    document.getElementById('game_status').innerHTML = "Car 1 Won!!";
}