attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uNMatrix;

varying vec2 vTextureCoord;

uniform sampler2D uSampler2;
uniform float maxHeight;

void main() {

    vec3 offset=vec3(0.0,0.0,0.0);
	
	vTextureCoord = aTextureCoord;

	if (texture2D(uSampler2, vTextureCoord).y > 0.5){
		offset=aVertexNormal*texture2D(uSampler2, vTextureCoord).y*0.02;
	}

	vec3 newPos = aVertexPosition - offset;

	if (newPos.z > maxHeight) {
		newPos.z = maxHeight;
	}

	gl_Position = uPMatrix * uMVMatrix * vec4(newPos, 1.0);
}