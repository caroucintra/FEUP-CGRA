
attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uNMatrix;
uniform float timeFactor;

varying vec2 vTextureCoord;
uniform sampler2D uSampler2;

uniform float normScale;

void main() {
	vec3 offset=vec3(0.0,0.0,0.0);
	
	vTextureCoord = aTextureCoord;

    if (aVertexNormal[0] < 0.0)
        offset[0]=-aVertexNormal[0]*normScale*0.1*cos(timeFactor);

    else
        offset[0]=aVertexNormal[0]*normScale*0.1*cos(timeFactor);
    
    offset[1]=aVertexNormal[1]*0.1;

    offset[2]=aVertexNormal[2]*0.1;

		
	gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition+offset, 1.0);
}

