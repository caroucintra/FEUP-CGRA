
#ifdef GL_ES
precision highp float;
#endif

struct lightProperties {
    vec4 position;                  
    vec4 ambient;                   
    vec4 diffuse;                   
    vec4 specular;                  
    vec4 half_vector;
    vec3 spot_direction;            
    float spot_exponent;            
    float spot_cutoff;              
    float constant_attenuation;     
    float linear_attenuation;       
    float quadratic_attenuation;    
    bool enabled;                   
};

#define NUMBER_OF_LIGHTS 8
uniform lightProperties uLight[NUMBER_OF_LIGHTS];

varying vec3 pos;
varying vec2 vTextureCoord;
uniform sampler2D uSampler;

void main() {
        if (pos.x < -0.6)
		    gl_FragColor =  vec4(0.882,0.0,0.5, 1.0) * uLight[0].diffuse;
        else{
            vec4 color = texture2D(uSampler, vTextureCoord);
            gl_FragColor = color;
        }
}