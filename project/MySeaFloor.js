import {CGFobject, CGFappearance, CGFshader, CGFtexture} from '../lib/CGF.js';
import { MyPlane } from './MyPlane.js';

/**
 * MySeaFLoor
 * @constructor
 */
 export class MySeaFloor extends CGFobject {
    constructor(scene) {
      super(scene);
      this.scene = scene;
      this.scene.maxHeight = 1.0;
      this.divs = 20;
      this.scene.plane = new MyPlane(this.scene, this.divs);
      this.initTex();
    }

    initTex(){
        this.scene.seaFloorAppearance = new CGFappearance(this.scene);
        this.scene.seaFloorAppearance.setAmbient(1.0, 1.0, 1.0, 1);
        this.scene.seaFloorAppearance.setDiffuse(1.0, 1.0, 1.0, 1);
        this.scene.seaFloorAppearance.setSpecular(1.0, 1.0, 1.0, 1);
        this.scene.seaFloorAppearance.setShininess(10);

        this.scene.texture = new CGFtexture(this.scene, "images/sand2.jpg");
        this.scene.seaFloorAppearance.setTexture(this.scene.texture);
        this.scene.seaFloorAppearance.setTextureWrap('REPEAT', 'REPEAT');

        this.scene.texture2 = new CGFtexture(this.scene, "images/sandMap2.jpg");

        //Initialize shader
        this.scene.seaFloorShader = new CGFshader(this.scene.gl, "shaders/sand.vert", "shaders/sand.frag");
        this.scene.seaFloorShader.setUniformsValues({ uSampler2: 1 });
        this.scene.seaFloorShader.setUniformsValues({ maxHeight: this.scene.maxHeight });
        
    }

    display(){
        this.scene.pushMatrix();
        this.scene.seaFloorAppearance.apply();
        
        // activate selected shader
		this.scene.setActiveShader(this.scene.seaFloorShader);
        this.scene.pushMatrix();

		// bind additional texture to texture unit 1
		this.scene.texture2.bind(1);
        this.scene.scale(50,50,50);
        this.scene.rotate(-90*Math.PI/180,1,0,0);
        this.scene.translate(0,0,0);
        this.scene.plane.display();
        this.scene.popMatrix();
        this.scene.setActiveShader(this.scene.defaultShader);
    }
}