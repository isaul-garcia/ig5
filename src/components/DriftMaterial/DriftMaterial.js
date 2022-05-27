
import { extend } from '@react-three/fiber'
import { shaderMaterial } from '@react-three/drei'
import glsl from 'babel-plugin-glsl/macro'

// Shader made with https://github.com/mrdoob/three.js/blob/master/examples/webgl_shader.html


//Shader Projection Width
let proj = intToFloat(400.0, 1);
function intToFloat(proj, decPlaces) { return proj.toFixed(decPlaces) };

const isMobile = () => {
  if (window.innerWidth <= 960) {
    proj = intToFloat(10.0, 1)
  } else {
    proj = intToFloat(399.9, 1)
  }
};

isMobile();
console.log(proj);

window.addEventListener('resize', isMobile);

const DriftMaterial = shaderMaterial(
  {
    time: 0.1
  },
  glsl`
    varying vec2 vUv;
    void main() {
      vec4 modelPosition = modelMatrix * vec4(position, 1.0);
      vec4 viewPosition = viewMatrix * modelPosition;
      vec4 projectionPosition = projectionMatrix * viewPosition;
      gl_Position = projectionPosition;
      vUv = uv;
    }`,
  glsl`
    varying vec2 vUv;

    uniform float time;

    void main()	{

    vec2 p = - 0.25 * vUv;
    float a = time * 3.5;
    float d, e, f, g = 0.1 ,h ,i ,r ,q;

    e = ${proj} * ( p.x * 0.9 + 0.7 );
    f = 300.0 * ( p.y * 0.5 + 0.5 );
    d = 400.0 + cos( g );
    r = sqrt( pow( abs( i - e ), 2.0 ) + pow( abs( d - f ), 2.0 ) );
    h = sin( f * g ) * 1.0 - sin( e * g ) * 212.0 * p.x;
    h = ( h + ( f - e ) * q + sin( r - ( a + h ) / 7.0 ) * 10.0 + i / 4.0 ) * g;
    i += cos( sin( a / 300.0 - q ) ) * 124.0 * sin( q - ( r * 4.3 + a / 12.0 ) * g ) + tan( r * g + h ) * 190.0 * cos( r * g + h );
    i = mod( i / 2.6, 256.0 ) / 64.0;
    if ( i >= 2.0 ) i = 2.0 - i;
    gl_FragColor = vec4( vec3( i / 40.0, h / 1.2 + h, i ) * h * p.x + vec3( i + d, i, i ) * p.y * ( 1.0 - p.x ), 1.0 );

  }`
)

extend({ DriftMaterial })

export { DriftMaterial }
