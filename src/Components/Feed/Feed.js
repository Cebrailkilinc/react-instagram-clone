import React from 'react'
import MiniProfile from './MiniProfile'
import Posts from './Posts'
import Stories from './Stories'
import Uggestions from './Uggestions'

function Feed() {
  return (
    <div className='bg-gray-50'>
      <div className='grid grid-cols-1 md:grid-cols-3 max-w-xl p-2 mx-auto ' >
        <section className='col-span-2'>
          {/* Storie */}
          <Stories />
          {/* Post */}
          <Posts />
        </section>
        <section className='invisible md:visible '>
          {/*Mini Profile */}
          <MiniProfile />
          {/* Uggetions */}
          <Uggestions />
        </section>
      </div>
    </div>
  )
}

export default Feed