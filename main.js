title = "Rising Rope";

description = `
[Hold]
  Hook to a point
`;

characters = [   //Custom Sprites
  `
 b
byb
 b
  `
  ,
`
pppppp
pyppyp
pyppyp
pppppp
pp  pp
pp  pp
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
 * pos: Vector
 * }} Hook
 */
/**
 * @type { Hook [] } 
*/
let hooks

/**
 * @typedef {{
 * pos: Vector
 * }} Player
 */
let player

function update() {
  if (!ticks) { //Initialize Values/Sprites/Characters

    player = {
      pos: vec(G.WIDTH / 2, G.HEIGHT/2)
    }
  }
    //player
    color("black");
    char("b", player.pos);

}
