rightWristX = 0;
leftWristX = 0;
difference = 0;

function setup() {
    canvas = createCanvas(400, 400);
    canvas.position(900, 135);

    video = createCapture(VIDEO);
    video.size(450, 450)
    video.position(100, 110);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}

function modelLoaded() {
    console.log("POSENET IS INITIALIZED");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results)

        rightWristX = results[0].pose.rightWrist.x;
        leftWristX = results[0].pose.leftWrist.x;
        difference = floor(rightWristX - leftWristX);
        console.log("RightWrist X = " +rightWristX+ " LeftWrist Y = " +leftWristX+ " difference = " +difference);
    }
}

function draw() {
    background('black');
    textSize(difference);
    stroke(255, 255, 0);
    fill(255, 255, 0);
    text("Siddhesh Salvi",180,180);
}