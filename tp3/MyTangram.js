import {CGFobject, CGFappearance} from '../lib/CGF.js';
import { MyDiamond } from "./MyDiamond.js";
import { MyTriangle } from "./MyTriangle.js";
import { MyParallelogram } from "./MyParallelogram.js";

/**
 * MyTangram
 * @constructor
 */
 export class MyTangram extends CGFobject {
    constructor(scene) {
      super(scene);
      this.scene = scene;
      this.initMaterials(scene);
      this.diamond = new MyDiamond(scene);
      this.triangle = new MyTriangle(scene);
      this.parallelogram = new MyParallelogram(scene);
    }

    initMaterials(){
        //material do diamond
        this.tangrammaterial1 = new CGFappearance(this.scene);
        this.tangrammaterial1.setAmbient(0, 1, 0, 1.0);
        this.tangrammaterial1.setDiffuse(0, 1, 0, 1.0);
        this.tangrammaterial1.setSpecular(1, 1, 1, 1.0);
        this.tangrammaterial1.setShininess(10.0);

        this.tangrammaterial2 = new CGFappearance(this.scene);
        this.tangrammaterial2.setAmbient(0, 206/255, 209/255, 1.0);
        this.tangrammaterial2.setDiffuse(0, 206/255, 209/255, 1.0);
        this.tangrammaterial2.setSpecular(1, 1, 1, 1.0);
        this.tangrammaterial2.setShininess(10.0);

        this.tangrammaterial3 = new CGFappearance(this.scene);
        this.tangrammaterial3.setAmbient(1, 140/255, 0, 1.0);
        this.tangrammaterial3.setDiffuse(1, 140/255, 0, 1.0);
        this.tangrammaterial3.setSpecular(1, 1, 1, 1.0);
        this.tangrammaterial3.setShininess(10.0);

        
        this.tangrammaterial4 = new CGFappearance(this.scene);
        this.tangrammaterial4.setAmbient(1, 0.0, 0.0, 1.0);
        this.tangrammaterial4.setDiffuse(1, 0, 0, 1.0);
        this.tangrammaterial4.setSpecular(1, 1, 1, 1.0);
        this.tangrammaterial4.setShininess(10.0);

        
        this.tangrammaterial5 = new CGFappearance(this.scene);
        this.tangrammaterial5.setAmbient(1, 0, 1, 1.0);
        this.tangrammaterial5.setDiffuse(1, 0, 1, 1.0);
        this.tangrammaterial5.setSpecular(1, 1, 1, 1.0);
        this.tangrammaterial5.setShininess(10.0);

        this.tangrammaterial6 = new CGFappearance(this.scene);
        this.tangrammaterial6.setAmbient(1, 1, 0, 1.0);
        this.tangrammaterial6.setDiffuse(1, 1, 0, 1.0);
        this.tangrammaterial6.setSpecular(1, 1, 1, 1.0);
        this.tangrammaterial6.setShininess(10.0);

        this.tangrammaterial7 = new CGFappearance(this.scene);
        this.tangrammaterial7.setAmbient(139/255, 0.0, 139/255, 1.0);
        this.tangrammaterial7.setDiffuse(139/255, 0.0, 139/255, 1.0);
        this.tangrammaterial7.setSpecular(1, 1, 1, 1.0);
        this.tangrammaterial7.setShininess(10.0);
        

    }
    

    display(){

        var translateMatrix = [
            1.0, 0.0, 0.0, 0.0,
            0.0, 1.0, 0.0, 0.0,
            0.0, 0.0, 1.0, 0.0,
            -1.7, 1.2, 0.0, 1.0
        ];
       
        this.scene.pushMatrix();
        this.scene.customMaterial.apply();
        this.scene.multMatrix(translateMatrix);
        this.scene.diamond.display();
        this.scene.popMatrix();
    
        var escalonamentoMatrix = [
            2.0, 0.0, 0.0, 0.0,
            0.0, 2.0, 0.0, 0.0,
            0.0, 0.0, 2.0, 0.0,
            0.0, 0.0, 0.0, 1.0
        ];
        this.scene.pushMatrix();
        this.tangrammaterial2.apply();
        this.scene.multMatrix(escalonamentoMatrix);
        this.scene.triangle.display();
        this.scene.popMatrix();
    
        translateMatrix = [
            1.0, 0.0, 0.0, 0.0,
            0.0, 1.0, 0.0, 0.0,
            0.0, 0.0, 1.0, 0.0,
            -2.0, 0.80, 0.0, 1.0
        ];
        var angle = 45*Math.PI/180;
        var rotateMatrix = [
            Math.cos(angle), Math.sin(angle), 0.0, 0.0,
            -Math.sin(angle), Math.cos(angle), 0.0, 0.0,
            0.0, 0.0, 1.0, 0.0,
            0.0, 0.0, 0.0, 1.0
        ];
    
        this.scene.pushMatrix();
        this.tangrammaterial3.apply();
        this.scene.multMatrix(translateMatrix);
        this.scene.multMatrix(escalonamentoMatrix);
        this.scene.multMatrix(rotateMatrix);
        this.scene.triangle.display();
        this.scene.popMatrix();
    
        
        angle = 90*Math.PI/180;
        rotateMatrix = [
            Math.cos(angle), Math.sin(angle), 0.0, 0.0,
            -Math.sin(angle), Math.cos(angle), 0.0, 0.0,
            0.0, 0.0, 1.0, 0.0,
            0.0, 0.0, 0.0, 1.0
        ];
        translateMatrix = [
            1.0, 0.0, 0.0, 0.0,
            0.0, 1.0, 0.0, 0.0,
            0.0, 0.0, 1.0, 0.0,
            -2.7, -1.3, 0.0, 1.0
        ];
        var escalonamentoMatrix = [
            -0.7, 0.0, 0.0, 0.0,
            0.0, 0.7, 0.0, 0.0,
            0.0, 0.0, 1.0, 0.0,
            0.0, 0.0, 0.0, 1.0
        ];
        this.scene.pushMatrix();
        this.tangrammaterial6.apply();
        this.scene.multMatrix(translateMatrix);
        this.scene.multMatrix(escalonamentoMatrix);
        this.scene.multMatrix(rotateMatrix);
        this.scene.parallelogram.display();
        this.scene.popMatrix();
        
    
        var escalonamentoMatrix = [
        -1.0, 0.0, 0.0, 0.0,
        0.0, -1.0, 0.0, 0.0,
        0.0, 0.0, 1.0, 0.0,
        0.0, 0.0, 0.0, 1.0
        ];
        angle = 45*Math.PI/180;
        rotateMatrix = [
            Math.cos(angle), Math.sin(angle), 0.0, 0.0,
            -Math.sin(angle), Math.cos(angle), 0.0, 0.0,
            0.0, 0.0, 1.0, 0.0,
            0.0, 0.0, 0.0, 1.0
        ];
        translateMatrix = [
            1.0, 0.0, 0.0, 0.0,
            0.0, 1.0, 0.0, 0.0,
            0.0, 0.0, 1.0, 0.0,
            -2.0, -2.0, 0.0, 1.0
        ];
        this.scene.pushMatrix();
        this.tangrammaterial4.apply();
        this.scene.multMatrix(translateMatrix);
        this.scene.multMatrix(escalonamentoMatrix);
        this.scene.multMatrix(rotateMatrix);
        this.scene.triangle.display();
        this.scene.popMatrix();
    
        var escalonamentoMatrix = [
            -1.5, 0.0, 0.0, 0.0,
            0.0, -1.5, 0.0, 0.0,
            0.0, 0.0, 1.0, 0.0,
            0.0, 0.0, 0.0, 1.0
        ];
        angle = 90*Math.PI/180;
        rotateMatrix = [
            Math.cos(angle), Math.sin(angle), 0.0, 0.0,
            -Math.sin(angle), Math.cos(angle), 0.0, 0.0,
            0.0, 0.0, 1.0, 0.0,
            0.0, 0.0, 0.0, 1.0
        ];
        translateMatrix = [
            1.0, 0.0, 0.0, 0.0,
            0.0, 1.0, 0.0, 0.0,
            0.0, 0.0, 1.0, 0.0,
            1.5, -1.5, 0.0, 1.0
        ];
        this.scene.pushMatrix();
        this.tangrammaterial5.apply();
        this.scene.multMatrix(translateMatrix);
        this.scene.multMatrix(escalonamentoMatrix);
        this.scene.multMatrix(rotateMatrix);
        this.scene.triangle.display();
        this.scene.popMatrix();
    
        
        angle = -45*Math.PI/180;
        rotateMatrix = [
            Math.cos(angle), Math.sin(angle), 0.0, 0.0,
            -Math.sin(angle), Math.cos(angle), 0.0, 0.0,
            0.0, 0.0, 1.0, 0.0,
            0.0, 0.0, 0.0, 1.0
        ];
        translateMatrix = [
            1.0, 0.0, 0.0, 0.0,
            0.0, 1.0, 0.0, 0.0,
            0.0, 0.0, 1.0, 0.0,
            2.5, -1.5, 0.0, 1.0
        ];
        this.scene.pushMatrix();
        this.tangrammaterial7.apply();
        this.scene.multMatrix(translateMatrix);
        this.scene.multMatrix(rotateMatrix);
        this.scene.triangle.display();
        this.scene.popMatrix();
    }
}