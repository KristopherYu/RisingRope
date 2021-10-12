title = "Rising Rope";

description = `
[Hold]
  Grapple onto a point
`;

characters = [   //Custom Sprites
  `
   b
  byb
   b
  `
];

const G = {   //Data we can call later
  WIDTH: 90,
  HEIGHT: 150
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

function update() {
  if (!ticks) {
  }
}
