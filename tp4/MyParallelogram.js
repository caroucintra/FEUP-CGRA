import {CGFobject} from '../lib/CGF.js';
/**
 * MyParallelogram
 * @constructor
 * @param scene - Reference to MyScene object
 */

export class MyParallelogram extends CGFobject{
    constructor(scene){
        super(scene);
        this.initBuffers();
    }

    initBuffers() {
		this.vertices = [
            0, 0, 0, //0
            1, 1, 0, //1
            2, 1, 0, //2
            3, 1, 0, //3
            1, 0, 0, //4
            2, 0, 0,  //5

            0, 0, 0, //0    6
            1, 1, 0, //1    7
            2, 1, 0, //2    8
            3, 1, 0, //3    9
            1, 0, 0, //4    10
            2, 0, 0  //5    11
		];

		//Counter-clockwise reference of vertices
		this.indices = [
            0, 1, 4,
            4, 1, 5,
            5, 1, 2,
            5, 2, 3,

            6, 10, 7,
            10, 11, 7,
            11, 8, 7,
            11, 9, 8
		];

        this.normals = [
            0, 0, 1,
			0, 0, 1,
			0, 0, 1,

			0, 0, -1,
			0, 0, -1,
			0, 0, -1,
        ];
        this.texCoords = [
            1.0, 1.0,
            0.75, 0.75,
            0.5, 0.75,
            0.25, 0.75,
            0.75, 1.0,
            0.5, 1.0
		];

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}
}