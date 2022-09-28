Nose_Y = 0;
Nose_X = 0;

function preload()
{
    clown_nose = loadImage("clown_nose.png");

}
function setup()
{
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet= ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded()
{
    console.log("poseNet is initlised");
}
function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        Nose_X = results[0].pose.nose.x;
        Nose_Y = results[0].pose.nose.y;
        console.log("Nose-X=",Nose_X);
        console.log("Nose-Y=",Nose_Y);
    }
}

function draw()
{
    image(video,0,0,300,300);
    fill(0,0,255);
    stroke(0,0,255);
    image(clown_nose , Nose_X-15 , Nose_Y-10 , 30,30)

}
function take_snapshot()
{
    save('myClownface.png');
}