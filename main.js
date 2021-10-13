title = "Itsy Spider";

description = `
[Hold] 
to go up

[Release]
to go down
`;

characters = [
  `
  ppp
 ppppp
 p p p
 p p p
  `
  ,
  `
   ppp
  ppppp
  pppppp
  ppppp
   ppp
  `
];

options = {
  theme: "dark",
  isPlayingBgm: true,
  isReplayEnabled: true
};

let droplets;
let nextDropletTicks;
let p, v
let nextAnchorDist;
let scr;
let laneSpeeds
const laneCount = 4;
const laneWidth = 20;
let speedMultiplier

function update() {
  if (!ticks) {
    //Burrowed from Zarton
    droplets = [];
    nextDropletTicks = 0;
    laneSpeeds = times(laneCount, () => 1);
    p = vec(5, 50);
    speedMultiplier = 0.5
  }
  nextDropletTicks--;
  if (nextDropletTicks < 0) {
    //play("select");
    const laneIndex = rndi(laneCount);
    droplets.push({
      pos: vec(103, calcY(laneIndex)),
      vx: -rnd(1, sqrt(difficulty)) * 0.5,
      laneIndex,
    });
    nextDropletTicks = rnd(30, 50) / difficulty;
  }
  
  color("black")
  rect(3, 0, 5, 100)
  color("cyan")
  char('a', p)
  color("blue")
  rect(0, 0, 100, 20)
  color("blue")
  rect(0, 85, 100, 20)
  
  
  

  if (input.isPressed && p.y > 22) {
    p.y -= 1
  }
  else if (!input.isPressed && p.y < 84){
    p.y += 1
  }

  remove(droplets, (e) => {
    e.pos.x += e.vx * laneSpeeds[e.laneIndex];
    color("light_cyan")
    if (char("b", e.pos).isColliding.char.a) {
      play("powerUp");
      particle(e.pos);
      end()
    }
    
    
    if(char("b", e.pos).isColliding.rect.black){
      score += 0.1
    }
  });

  if(score > 100){
    speedMultiplier = 1.5
  }
  function calcY(i) {
    return i * laneWidth + laneWidth / 2 + 12;
  }
  
  
  
}
