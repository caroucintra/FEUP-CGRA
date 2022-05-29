#ifdef GL_ES
precision highp float;
#endif

varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform sampler2D uSampler2;
uniform float height;

void main() {
	vec4 color = texture2D(uSampler, vTextureCoord);
	vec4 filter = texture2D(uSampler2, vTextureCoord);

	if (filter.g > 0.5){
		color.r = color.r - filter.b*0.2;
		color.g = color.g - filter.b*0.2;
		color.b = color.b - filter.b*0.2;
	}
	
	
	gl_FragColor = color;
}