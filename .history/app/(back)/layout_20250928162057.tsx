import React, { ReactNode } from 'react'

const layout = ({children}:{children:ReactNode}) => {
  return (
    <div>
      <h2> i am front only pages</h2>
      {children}
    </div>
  )
}

export default layout
