import React from 'react'
import Posts from './Posts'
import Status from './Status'

const Feed = () => {
  return (
    <div className='flex-1 my-8 flex flex-col items-center pl-[20%]'>
      <Status/>
        <Posts/>
    </div>
  )
}

export default Feed