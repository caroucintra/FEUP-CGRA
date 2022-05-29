import {CGFinterface, dat} from '../lib/CGF.js';

/**
* MyInterface
* @constructor
*/
export class MyInterface extends CGFinterface {
    constructor() {
        super();
    }

    init(application) {
        // call CGFinterface init
        super.init(application);
        // init GUI. For more information on the methods, check:
        // http://workshop.chromeexperiments.com/examples/gui
        this.gui = new dat.GUI();
        
        var obj = this;

        //Checkbox element in GUI
        this.gui.add(this.scene, 'displayAxis').name('Display Axis');
        this.gui.add(this.scene, 'displayFish').name('Display Fish');
        this.gui.add(this.scene, 'displayAnimatedFish').name("Display Animated Fish");
        this.gui.add(this.scene, 'displaySeaweeds').name("Display Seaweeds");
        this.gui.add(this.scene, 'displayRocks').name("Display Rocks");
        this.gui.add(this.scene, 'displayPillars').name("Display Pillars");

        this.initKeys();

        return true;
    }

    initKeys(){
        this.scene.gui = this;
        this.processKeyboard = function(){};
        this.activeKeys = {};
    };

    processKeyDown(event){
        this.activeKeys[event.code] = true;
    };

    processKeyUp(event){
        this.activeKeys[event.code] = false;
    };

    isKeyPressed(keyCode){
        if (this.activeKeys[keyCode] == true){
            this.activeKeys[keyCode] = false;
            return true;
        }
        return this.activeKeys[keyCode] || false;
    }

}