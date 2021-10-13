title = "Rising Rope";

description = `
    [Hold]
  Grapple onto 
    a point
`;

characters = [   //Custom Sprites
  `
   b
  byb
   b
  `
];

const G = {   //Data we can call later
  WIDTH: 120,
  HEIGHT: 180
}

options = {
  theme:'pixel',
  //seed: 53, //9 is good, 46 is ok, 53 is good
  //isPlayingBgm: true,
  viewSize: {x: G.WIDTH, y: G.HEIGHT}
};

/**
 * @typedef {{
 * pos: Vector,
 * vx: number,
 * hooklaneIndex: number
 * }} Hook
 */
/**
 * @type { Hook [] } 
*/
let hooks
let player
let nextHookTicks;
let hooklaneSpeeds
const hooklaneCount = 4;
const hooklaneWidth = 20;

function update() {
  if (!ticks) {
    let player = vec(50, 80); 
    hooks = []
    nextHookTicks = 0;
    hooklaneSpeeds = times(hooklaneCount, () => 1);
    
  }

  nextHookTicks--;
  if (nextHookTicks < 0) {
    //play("select");
    const hooklaneIndex = rndi(hooklaneCount);
    hooks.push({
      pos: vec(rnd(10, 110), 0),
      //Messes with the speed
      vx: -rnd(1, sqrt(difficulty)) * 0.5,
      hooklaneIndex,
    });
    nextHookTicks = rnd(99, 100) / difficulty;
  }

  color("cyan")
  rect(0, 0, 5, 5)
  if(input.isPressed){
    line(player, input.pos)
  }
  
  remove(hooks, (e) => {
    e.pos.y -= e.vx * hooklaneSpeeds[e.hooklaneIndex];
    const hook = char("a", e.pos.x, e.pos.y - 48)
    color("light_cyan")
    const platform = box(e.pos, 30, 10)
    if(input.isJustPressed){
      if((input.pos.x > e.pos.x - 3  && input.pos.x < e.pos.x + 3) && (input.pos.y > e.pos.y - 51  && input.pos.y < e.pos.y - 45)) {
        player = vec(e.pos.x, e.pos.y - 48)
        
      }
    }  
    
  });
  
  
  
  function calcX(i) {
    return i * hooklaneWidth + hooklaneWidth / 2 + 12;
  }
  
}
