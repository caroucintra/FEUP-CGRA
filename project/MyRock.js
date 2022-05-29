import {CGFobject, CGFappearance} from '../lib/CGF.js';

export class MyRock extends CGFobject {
  /**
   * @method constructor
   * @param  {CGFscene} scene - MyScene object
   * @param  {integer} slices - number of slices around Y axis
   * @param  {integer} stacks - number of stacks along Y axis, from the center to the poles (half of sphere)
   */
  constructor(scene, slices, stacks) {
    super(scene);
    this.scene = scene;
    this.latDivs = stacks * 2;
    this.longDivs = slices;
    this.setRandomValues();
    this.initBuffers();
  }

  setRandomValues(){
    var posx = Math.ceil(Math.random() * 2) - 1;
    var posz = Math.ceil(Math.random() * 2) - 1;
    if (posx == 0) posx = -1;
    if (posz == 0) posz = -1;
    posx *=  (Math.random() * 15);
    posz *=  (Math.random() * 15);
    this.x = posx;
    this.y = 0.3;
    this.z = posz;

    this.orientation = Math.random()*360/(Math.PI*180);
    this.dimensionx = Math.random()/5;
    this.dimensiony = Math.random()/5;
    this.dimensionz = Math.random()/5;

  }

  /**
   * @method initBuffers
   */
  initBuffers() {
    this.vertices = [];
    this.indices = [];
    this.normals = [];
    this.texCoords = [];

    var phi = 0;
    var theta = 0;
    var phiInc = Math.PI / (this.latDivs);
    var thetaInc = (2 * Math.PI) / this.longDivs;
    var latVertices = this.longDivs + 1;
    var latVertices = this.longDivs + 1;
    var textmaplong = 0;
    var textmaplat = 0;
    var textlatadd = 1/this.latDivs;
    var textlongadd = 1/this.longDivs;

    // build an all-around stack at a time, starting on "north pole" and proceeding "south"
    for (let latitude = 0; latitude <= this.latDivs; latitude++) {
      var sinPhi = Math.sin(phi);
      var cosPhi = Math.cos(phi);

      // in each stack, build all the slices around, starting on longitude 0
      theta = 0;
      textmaplong = 0;
      
      for (let longitude = 0; longitude <= this.longDivs; longitude++) {
        //--- Vertices coordinates

        var rand = Math.random();
        var sign = rand < 0.5 ? 1 : -1;
        var x = Math.cos(theta) * sinPhi;
        var y = cosPhi;
        var z = Math.sin(-theta) * sinPhi;

        x += x*(rand*sign + 0.5);
        y += y*(rand*sign + 0.5);
        z += z*(rand*sign + 0.5)*0.7;
        this.vertices.push(x, y, z);

        //--- Indices
        if (latitude < this.latDivs && longitude < this.longDivs) {
          var current = latitude * latVertices + longitude;
          var next = current + latVertices;
          // pushing two triangles using indices from this round (current, current+1)
          // and the ones directly south (next, next+1)
          // (i.e. one full round of slices ahead)
          
          this.indices.push(current + 1, current, next);
          this.indices.push(current + 1, next, next +1);
        }

        //--- Normals
        // at each vertex, the direction of the normal is equal to 
        // the vector from the center of the sphere to the vertex.
        // in a sphere of radius equal to one, the vector length is one.
        // therefore, the value of the normal is equal to the position vectro
        
        this.normals.push(x, y, z);
        theta += thetaInc;
        textmaplong += textlongadd;

        //--- Texture Coordinates
        this.texCoords.push(textmaplong, textmaplat);
        // To be done... 
        // May need some additional code also in the beginning of the function.
        
      }
      phi += phiInc;
      textmaplat += textlatadd;
    }


    this.primitiveType = this.scene.gl.TRIANGLES;
    this.initGLBuffers();
  }
}