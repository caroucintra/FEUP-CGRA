import {CGFobject} from '../lib/CGF.js';
/**
 * MyDiamond
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyDiamond extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	
	initBuffers() {
		this.vertices = [];
        this.indices = [];
        this.normals = [];

		this.vertices = [
			-1/Math.sqrt(2), 0, 0,	//0
			0, -1/Math.sqrt(2), 0,	//1
			0, 1/Math.sqrt(2), 0,	//2
			1/Math.sqrt(2), 0, 0,	//3

			
			0, -1/Math.sqrt(2), 0,	//1	4
			0, 1/Math.sqrt(2), 0,	//2	5
			-1/Math.sqrt(2), 0, 0,	//0	6
			1/Math.sqrt(2), 0, 0,	//3	7
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			0, 1, 2,
			1, 3, 2,
			
			6, 5, 4,
			4, 5, 7
		];

		this.normals = [
			0, 0, 1,
			0, 0, 1,
			0, 0, 1,
			0, 0, 1,
			
			0, 0, -1,
			0, 0, -1,
			0, 0, -1,
			0, 0, -1,
		];

		this.texCoords = [
			0, 0.5,
			0.25, 0.25,
			0.25, 0.75,
			0.5, 0.5
		]

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}
}

