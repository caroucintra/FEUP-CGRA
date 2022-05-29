import {CGFobject} from '../lib/CGF.js';
/**
 * MyUnitCube
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyUnitCube extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	
	initBuffers() {
		this.vertices = [];
        this.indices = [];
        this.normals = [];

		this.vertices = [
			0.5, 0.5, 0.5,	 //0	0
			0.5, -0.5, 0.5,	 //1	1
			-0.5, 0.5, 0.5,	 //2	2
			-0.5, -0.5, 0.5, //3	3

			0.5, 0.5, 0.5,	 //0	4
			0.5, 0.5, -0.5,	 //4	5
			-0.5, 0.5, 0.5,	 //2	6
			-0.5, 0.5, -0.5, //6	7

			0.5, 0.5, 0.5,	 //0	8
			0.5, 0.5, -0.5,	 //4	9
			0.5, -0.5, 0.5,	 //1	10
			0.5, -0.5, -0.5, //5	11

			-0.5, 0.5, 0.5,	 //2	12
			-0.5, 0.5, -0.5, //6	13
			-0.5, -0.5, -0.5, //7	14
			-0.5, -0.5, 0.5, //3	15

			0.5, -0.5, 0.5,	  //1	16
			-0.5, -0.5, -0.5, //7	17
			0.5, -0.5, -0.5, //5	18
			-0.5, -0.5, 0.5, //3	19

			0.5, 0.5, -0.5,	 //4	20
			0.5, -0.5, -0.5, //5	21
			-0.5, 0.5, -0.5, //6	22
			-0.5, -0.5, -0.5 //7	23
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			0, 3, 1,	//A
			3, 0, 2,	//B
			4, 5, 6,	//C
			6, 5, 7,	//D
			10, 11, 9,	//E
			9, 8, 10,	//F

			14, 15, 12,	//G
			14, 12, 13,	//H

			17, 18, 16,	//I
			19, 17, 16,	//J

			21, 23, 22,	//K
			22, 20, 21	//L
		];

		this.normals = [
			0, 0, 1,
			0, 0, 1,
			0, 0, 1,
			0, 0, 1,
			0, 1, 0,
			0, 1, 0,
			0, 1, 0,
			0, 1, 0,
			1, 0, 0,
			1, 0, 0,
			1, 0, 0,
			1, 0, 0,
			-1, 0, 0,
			-1, 0, 0,
			-1, 0, 0,
			-1, 0, 0,
			0, -1, 0,
			0, -1, 0,
			0, -1, 0,
			0, -1, 0,
			0, 0, -1,
			0, 0, -1,
			0, 0, -1,
			0, 0, -1,
		];
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}
}