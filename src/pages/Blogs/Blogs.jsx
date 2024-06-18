import React from 'react'
import Blog__header from '../../components/Blog__header/Blog__header'
import Blog__reading from '../../components/Blog__reading/Blog__reading'
import Blog__related from '../../components/Blog__related/Blog__related'
import Blog__marketing from '../../components/Blog__marketing/Blog__marketing'

function Blogs() {
  return (
    <div>
     <Blog__header/>
     <Blog__reading/>
     <Blog__related/>
     <Blog__marketing/>
    </div>
  )
}

export default Blogs