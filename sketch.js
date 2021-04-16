let totalS = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;
let s = 0;
let m = 0;
let h = 0;

function setup() {
  createCanvas(750, 500);
  setInterval(updateTime, 40);
}

function draw() {
  background(255);
  stroke(180);
  for (i = 0; i < 18; i++) {
    line(50, (18.7 * i) + 146, 700, (18.7 * i) + 146);
  }
  updateTimer();
  Highlight();

  noStroke();
  fill(0);
  textSize(50);
  text("CHANGEOVER", 75, 75);
  text(h + ":" + m + ":" + s, 460, 75);
  textSize(20);
  text("Task", 60, 130);
  text("Time", 440, 130);
  text("Duration", 620, 130);
  textSize(15);
  text("Collect End Fill Sample\nEnd Run Production\nGather new labels\nInitiate Pigging and Wash Water Process\nPigging (AUTOMATIC)\n>>>>>Setup, Download, Validation\nWash Water Process (AUTOMATIC)\n>>>>>Clean Fill Heads\nCall Setup Operator for Paint Transfer to Filler\nPaint Transfer (AUTOMATIC)\n>>>>Change Labels + Clean Labeler\n>>>>>Label Sample Cans With Stickers\nCollect Start Fill Sample\nQuality Control Approval (AUTOMATIC)\n>>>>>Test and Adjust Filler\n>>>>>Supervisor Check\nStart Run", 60, 160);
  text("00:00 - 02:00\n02:00 - 04:00\n04:00 - 06:00\n06:00 - 06:30\n06:30 - 11:00\n06:30 - 11:00\n11:00 - 15:00\n11:00 - 15:00\n15:00 - 16:00\n16:00 - 22:00\n16:00 - 21:00\n21:00 - 22:00\n22:00 - 24:00\n24:00 - 35:00\n24:00 - 30:00\n30:00 - 35:00\n35:00 - 35:30", 440, 160);
  text("2 minutes\n2 minutes\n2 minutes\n0.5 minutes\n4.5 minutes\n4.5 minutes\n4 minutes\n4 minutes\n1 minute\n6 minutes\n5 minutes\n1 minute\n2 minutes\n11 minutes\n6 minutes\n5 minutes\n0.5 minutes", 620, 160);
}

function updateTime() {
  totalS++;
  seconds++;
  if (seconds >= 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes >= 60) {
    minutes = 0;
    hours++;
  }
  if (hours >= 99) {
    hours = 0;
  }
}

function updateTimer() {
  if (seconds < 10) {
    s = "0" + seconds;
  } else {
    s = seconds;
  }
  if (minutes < 10) {
    m = "0" + minutes;
  } else {
    m = minutes;
  }
  if (hours < 10) {
    h = "0" + hours;
  } else {
    h = hours;
  }
}

function Highlight() {
  fill(255, 200, 200);
  if (totalS >= 2100) {
    rect(50, 444, 650, 19);
  } else if (totalS >= 1440) {
    if (totalS >= 1800) {
      rect(50, 426, 650, 19);
    } else {
      rect(50, 407, 650, 19);
    }
    fill(200, 255, 200);
    rect(50, 388, 650, 19);
  } else if (totalS >= 1320) {
    rect(50, 369, 650, 19);
  } else if (totalS >= 960) {
    if (totalS >= 1260) {
      rect(50, 351, 650, 19);
    } else {
      rect(50, 332, 650, 19);
    }
    fill(200, 255, 200);
    rect(50, 313, 650, 19);
  } else if (totalS >= 900) {
    rect(50, 295, 650, 19);
  } else if (totalS >= 660) {
    rect(50, 276, 650, 19);
    fill(200, 255, 200);
    rect(50, 257, 650, 19);
  } else if (totalS >= 390) {
    rect(50, 239, 650, 19);
    fill(200, 255, 200);
    rect(50, 220, 650, 19);
  } else if (totalS >= 360) {
    rect(50, 201, 650, 19);
  } else if (totalS >= 240) {
    rect(50, 182, 650, 19);
  } else if (totalS >= 120) {
    rect(50, 164, 650, 19);
  } else {
    rect(50, 145, 650, 19);
  }
}