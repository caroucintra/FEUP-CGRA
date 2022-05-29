import { CGFscene, CGFcamera, CGFaxis, CGFappearance, CGFtexture, CGFshader } from "../lib/CGF.js";
import { MyTriangle } from "./MyTriangle.js";
import { MyCubeMap } from "./MyCubeMap.js";
import { MyFish } from "./MyFish.js";
import { MySeaFloor } from "./MySeaFloor.js";
import { MyWaterSurface } from "./MyWaterSurface.js";
import { MyPillar } from "./MyPillar.js";
import { MySeaweedSet } from "./MySeaweedSet.js";
import { MyPlant } from "./MyPlant.js";
import { MyMovingFish } from "./MyMovingFish.js";
import { MyRockSet } from "./MyRockSet.js";
import { MyNest } from "./MyNest.js";
import { MyAutoMovingFishSet } from "./MyAutoMovingFishSet.js";
import { CGFcamera2 } from "./CGFCamera2.js";


/**
* MyScene
* @constructor
*/
export class MyScene extends CGFscene {
    constructor() {
        super();
		this.texture = null;
		this.appearance = null;
    }
    init(application) {
        super.init(application);
        this.initCameras();
        this.initLights();

        //Background color
        this.gl.clearColor(0.0, 0.0, 0.0, 1.0);

        this.gl.clearDepth(100.0);
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.enable(this.gl.CULL_FACE);
        this.gl.depthFunc(this.gl.LEQUAL);
        this.enableTextures(true);

        this.setUpdatePeriod(50);

        this.turnVal = Math.PI/16;
        this.accelerateVal = 0.01;
        this.floatageVal = 0.3;
        
        this.enableTextures(true);

        //Initialize Cube textures
        this.textureTop = new CGFtexture(this, 'images/underwater_cubemap/top.jpg');
        this.textureBottom = new CGFtexture(this, 'images/underwater_cubemap/bottom.jpg');
        this.textureLeft = new CGFtexture(this, 'images/underwater_cubemap/left.jpg');
        this.textureRight = new CGFtexture(this, 'images/underwater_cubemap/right.jpg');
        this.textureFront = new CGFtexture(this, 'images/underwater_cubemap/front.jpg');
        this.textureBack = new CGFtexture(this, 'images/underwater_cubemap/back.jpg');
        this.cubetextures = [this.textureTop, this.textureBottom, this.textureLeft, this.textureRight, this.textureFront, this.textureBack]; 
    

        //Initialize appearances
        this.defaultAppearance = new CGFappearance(this);
		this.defaultAppearance.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.defaultAppearance.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.defaultAppearance.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.defaultAppearance.setEmission(0,0,0,1);
		this.defaultAppearance.setShininess(120);

        this.fishAppearance = new CGFappearance(this);
        this.fishAppearance.setAmbient(0.3, 0.3, 0.3, 1);
        this.fishAppearance.setDiffuse(0.7, 0.7, 0.7, 1);
        this.fishAppearance.setSpecular(0.0, 0.0, 0.0, 1);
        this.fishAppearance.setShininess(10);
        this.fishAppearance.loadTexture('images/escamasverdes.jpg');
        this.fishAppearance.setTextureWrap('REPEAT', 'REPEAT');


        //Initialize scene objects
        this.axis = new CGFaxis(this);
        this.fish = new MyFish(this);
        this.triangle = new MyTriangle(this);
        this.movingfish = new MyMovingFish(this, new MyFish(this, this.fishAppearance));
        this.cubemap = new MyCubeMap(this,this.cubetextures);
        this.seafloor = new MySeaFloor(this);
        this.watersurface = new MyWaterSurface(this);
        this.pillar = new MyPillar(this,16);
        this.seaweedset = new MySeaweedSet(this);
        this.plant = new MyPlant(this,0.5,2);
        this.rockset = new MyRockSet(this, 5, 5);
        this.nest = new MyNest(this);
        this.automovingfishset = new MyAutoMovingFishSet(this);
        this.rock = null;

        //Objects connected to MyInterface
        this.displayAxis = false;
        this.displayFish = true;
        this.displayRocks = true;
        this.displaySeaweeds = true;
        this.displayAnimatedFish = true;
        this.displayPillars = true;

    }
    initLights() {
        this.lights[0].setPosition(15, 2, 5, 1);
        this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[0].enable();
        this.lights[0].update();
    }
    initCameras() {
        this.camera = new CGFcamera2(1.7, 0.1, 500, vec3.fromValues(2, 2, 2), vec3.fromValues(0, 2, 0));
    }

    setDefaultAppearance() {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setEmission(0,0,0,1);
        this.setShininess(10.0);
    }

    checkKeys(){
        this.turningright = false;
        this.turningleft = false;

        if (this.gui.isKeyPressed("KeyW")){
            this.movingfish.accelerate(this.accelerateVal);
        }

        if (this.gui.isKeyPressed("KeyS")){
            this.movingfish.accelerate(-this.accelerateVal);
        }

        if (this.gui.isKeyPressed("KeyA")){
            this.turningleft = true;
            this.movingfish.turn(this.turnVal);
        }

        if (this.gui.isKeyPressed("KeyD")){
            this.turningright = true;
            this.movingfish.turn(-this.turnVal);
        }

        if (this.gui.isKeyPressed("KeyP")){
            this.movingfish.up(this.floatageVal);
        }

        if (this.gui.isKeyPressed("KeyL")){
            this.movingfish.down(this.floatageVal);
        }

        if (this.gui.isKeyPressed("KeyR")){
            if (this.movingfish.hasarock){
                this.rocks.push(this.movingfish.rock);
            }
            this.movingfish.reset();
            
        }

        if (this.gui.isKeyPressed("KeyC")){
            if (!this.movingfish.hasarock) {
                this.checkRockFishProx();
                this.movingfish.picksRock(this.rock);
            }
            else {
                this.checkFishNestProx();
            }
        }
    }

    checkFishNestProx(){
        var distance = Math.sqrt(
                Math.pow((this.movingfish.pos[0]-this.nest.pos[0]),2)+
                Math.pow((this.movingfish.pos[1]-this.nest.pos[1]),2)+
                Math.pow((this.movingfish.pos[2]-this.nest.pos[2]),2)
            );
        if (distance <= 4) {
            this.nest.rocks.push(this.movingfish.rock);
            this.movingfish.dropsRock();
        }
    }

    checkRockFishProx(){
        this.rock = null;
        for(let i = 0; i < this.rocks.length; i++){
            var distance = Math.sqrt(
                Math.pow((this.movingfish.pos[0]-this.rocks[i].x),2)+
                Math.pow((this.movingfish.pos[1]-this.rocks[i].y),2)+
                Math.pow((this.movingfish.pos[2]-this.rocks[i].z),2)
            );
            if (distance <= 2) {
                this.rock = this.rocks[i];
                this.rocks.splice(i,1);
                break;
            }
        }
    }

    // called periodically (as per setUpdatePeriod() in init())
    update(t){
        this.watersurface.update(t);
        this.checkKeys();
        this.movingfish.update(t);
        this.automovingfishset.update(t);
    }

    display() {
        // ---- BEGIN Background, camera and axis setup
        // Clear image and depth buffer everytime we update the scene
        this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
        // Initialize Model-View matrix as identity (no transformation
        this.updateProjectionMatrix();
        this.loadIdentity();
        // Apply transformations corresponding to the camera position relative to the origin
        this.applyViewMatrix();
        
        // Update all lights used
		this.lights[0].update();
        
        // restore default shader (will be needed for drawing the axis in next frame)
        this.defaultAppearance.apply();
        this.setActiveShader(this.defaultShader);

        // Draw axis
        if (this.displayAxis)
            this.axis.display();

        // ---- BEGIN Primitive drawing section

        this.cubemap.display();
        this.watersurface.display();
        this.seafloor.display();
        this.nest.display();

        if (this.displayRocks){
            this.rockset.display();
        }
        
        if (this.displayPillars){
            this.pillar.display();
        }

        if (this.displaySeaweeds){
            this.seaweedset.display();
        }

        if (this.displayFish){
            this.movingfish.display();   
        }

        if (this.displayAnimatedFish){
            //this.setActiveShader(this.defaultShader);
            this.automovingfishset.display();
        }
        
        // ---- END Primitive drawing section
    }
}