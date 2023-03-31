import { ShaderMaterial } from 'three';

export function Shader() {
  // .1 to avoid z-fighting 
  const vertices = new Float32Array([
    5, 0, .1,
    0, 5, .1,
    -5, 0, .1,
  ])
  const material = new ShaderMaterial({
    uniforms: {
      // specify your uniforms here
    },
    vertexShader: `
      void main() {
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
        void main() {
          gl_FragColor = vec4(1.0, 1.0, 0.0, 1.0); // set the color to yellow (default is red)
        }
      `,
  })
  return (<mesh>
    <bufferGeometry>
      <bufferAttribute args={[vertices, 3, false]} attach={'attributes-position'} />
    </bufferGeometry>;
    <shaderMaterial attach="material" args={[material]} />
  </mesh>)
}