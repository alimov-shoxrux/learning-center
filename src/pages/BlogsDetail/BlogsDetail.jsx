import React from 'react'
import Blog__detail from '../../components/Blog__detail/Blog__detail'
import Blog__detail_info from '../../components/Blog__detail_info/Blog__detail_info'
import Blog__related from '../../components/Blog__related/Blog__related'


function BlogsDetail() {
    return (
        <div>
           <Blog__detail/>
           <Blog__detail_info/>
           <Blog__related/>
        </div>
    )
}

export default BlogsDetail