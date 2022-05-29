#ifdef GL_ES
precision highp float;
#endif

varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform sampler2D uSampler2;
uniform float timeFactor;

void main() {
	
	vec4 filter = texture2D(uSampler2, vTextureCoord+vec2(timeFactor*.001,0.0));

	vec2 coords = vTextureCoord;
	coords.s = coords.s+filter.r*0.3;
	coords.t = coords.t+filter.g*0.3;
	coords.s = clamp(coords.s, 0.01, 0.99);
	coords.t = clamp(coords.t, 0.01, 0.99);

	vec4 color2 = texture2D(uSampler, coords);



	gl_FragColor = color2;
}