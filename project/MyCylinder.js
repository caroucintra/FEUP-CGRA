import {CGFobject} from '../lib/CGF.js';

export class MyCylinder extends CGFobject {
  /**
   * @method constructor
   * @param  {CGFscene} scene - MyScene object
   * @param  {integer} slices - number of slices around Y axis
   */
  constructor(scene, slices) {
    super(scene);
    this.slices = slices;

    this.initBuffers();
  }

  /**
   * @method initBuffers
   * Initializes the cylinder buffers
   * TODO: DEFINE TEXTURE COORDINATES
   */
  initBuffers() {
    this.vertices = [];
    this.indices = [];
    this.normals = [];
    this.texCoords = [];

    var theta = 0;
    var tmap = 0;
    var tmapInc = 1/this.slices;
    var thetaInc = (2 * Math.PI) / this.slices;
  
    for (var aux = 0; aux <= this.slices; aux++) {
      var sinTheta = Math.sin(theta);
      var cosTheta = Math.cos(theta);

      this.vertices.push(cosTheta, 0, -sinTheta);
      this.texCoords.push(tmap, 1);
      this.vertices.push(cosTheta, 1, -sinTheta);
      this.texCoords.push(tmap, 0);
      this.normals.push(cosTheta, 0, -sinTheta, cosTheta, 0, -sinTheta);

      tmap = tmap + tmapInc;
      theta = theta + thetaInc;

      if(aux !==0){
        this.indices.push((aux*2), (aux*2+1), (aux*2-1));
        this.indices.push((aux*2), (aux*2-1), (aux*2-2));
      }
    }
    this.primitiveType = this.scene.gl.TRIANGLES;
    this.initGLBuffers();
  }
}