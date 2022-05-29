import {CGFobject, CGFappearance, CGFshader, CGFtexture} from '../lib/CGF.js';
import { MyQuad } from './MyQuad.js';

/**
 * MyWaterSurface
 * @constructor
 */
 export class MyWaterSurface extends CGFobject {
    constructor(scene) {
      super(scene);
      this.scene = scene;
      this.scene.quad = new MyQuad(this.scene);
      this.initTex();
    }

    initTex(){
        this.scene.waterSurfaceAppearance = new CGFappearance(this.scene);
        this.scene.waterSurfaceAppearance.setAmbient(1.0, 1.0, 1.0, 1);
        this.scene.waterSurfaceAppearance.setDiffuse(1.0, 1.0, 1.0, 1);
        this.scene.waterSurfaceAppearance.setSpecular(1.0, 1.0, 1.0, 1);
        this.scene.waterSurfaceAppearance.setShininess(10);

        this.scene.texture3 = new CGFtexture(this.scene, "images/pier.jpg");
        this.scene.waterSurfaceAppearance.setTexture(this.scene.texture3);
        this.scene.waterSurfaceAppearance.setTextureWrap('REPEAT', 'REPEAT');

        this.scene.texture4 = new CGFtexture(this.scene, "images/distortionmap.png");

        //Initialize shader
        
        this.scene.waterSurfaceShader = new CGFshader(this.scene.gl, "shaders/water.vert", "shaders/water.frag");
        this.scene.waterSurfaceShader.setUniformsValues({ uSampler2: 1 });
        //this.scene.waterSurfaceShader.setUniformsValues({ maxHeight: this.scene.maxHeight });
        
    }

    update(t){
        this.scene.waterSurfaceShader.setUniformsValues({ timeFactor: t / 100 % 100 });
    }

    display(){
        this.scene.pushMatrix();
        this.scene.waterSurfaceAppearance.apply();
        
        // activate selected shader
	    this.scene.setActiveShader(this.scene.waterSurfaceShader);
        this.scene.pushMatrix();

		// bind additional texture to texture unit 1
		this.scene.texture4.bind(1);
        
        this.scene.translate(0,10,0);
        this.scene.rotate(90*Math.PI/180,1,0,0);
        this.scene.scale(20,20,20);
        this.scene.quad.display();
        this.scene.popMatrix();
        this.scene.setActiveShader(this.scene.defaultShader);
    }

}