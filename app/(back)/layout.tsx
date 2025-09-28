import React, { ReactNode } from 'react'

const layout = ({children}:{children:ReactNode}) => {
  return (
    <div>
      <h2> i am Dashboard only pages</h2>
      {children}
    </div>
  )
}

export default layout
