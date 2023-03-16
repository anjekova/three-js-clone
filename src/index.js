import React, { Suspense, useState, useRef } from 'react'
import ReactDOM from 'react-dom'
import { Canvas } from '@react-three/fiber'
import Wildlife from './Wildlife'
import { OrbitControls } from '@react-three/drei'
import './styles.css'

const Main = () => {
  const keyhandler = (e) => {
    //if (e.key === 'c') showAllys()
  }
  return (
    <div id={'maindiv'} onKeyDown={keyhandler} tabIndex={'0'}>
      <Canvas>
        <ambientLight intensity={0.9} />
        <Suspense fallback={null}>
          <Wildlife animalsQuantity={500} />
        </Suspense>
        <OrbitControls enableRotate={true} />
      </Canvas>
    </div>
  )
}

ReactDOM.render(<Main />, document.getElementById('root'))
