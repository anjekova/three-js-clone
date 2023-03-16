import React, { useRef } from 'react'
import Ferret from './Model'

const Wildlife = (props) => {
  const group = useRef()
  const animals = []

  for (let i = 0; i < props.animalsQuantity; i++)
    animals.push(
      <Ferret
        key={'Ferret' + i}
        position={[
          Math.floor(Math.random() * (Math.round(Math.random()) ? 250 : -250)),
          -2.5,
          Math.floor(Math.random() * (Math.round(Math.random()) ? 250 : -250))
        ]}
      />
    )

  return (
    <group ref={group} dispose={null}>
      {animals}
    </group>
  )
}

export default Wildlife
