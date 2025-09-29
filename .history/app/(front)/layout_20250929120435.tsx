import Chatbot from '@/components/Frontend/Chatbot'
import Navbar from '@/components/Frontend/Navbar'
import React, { ReactNode } from 'react'

const layout = ({children}:{children:ReactNode}) => {
  return (
    <div>
        <Navbar/>
     <Chatbot/>
      {children}
    </div>
  )
}

export default layout
