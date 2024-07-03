#version 330 core

in vec2 UV;

out vec3 color;

uniform sampler2D renderedTexture;
uniform float time;

void main(){
	color = texture( renderedTexture, UV + 0.005*vec2( sin(time+1024.0*UV.x),cos(time+768.0*UV.y)) ).xyz ;
	
	
}

const float blurSizeH = 1.0/1024;
const float blurSizeV = 1.0/768;
const vec2 targetSize = vec2(1024,768);
vec4 boxFilter(vec2 UV) {
//box blur
vec4 sum = vec4 (0.0);
for(int x = - 4; x <= 4 ; x++)
for(int y = - 4; y <= 4 ; y++)
sum += texture (renderedTexture , vec2 (UV. x + x * blurSizeH , UV. y + y * blurSizeV )) / 81.0;
return sum;
}

