import { SearchIcon } from '@heroicons/react/outline'
import React from 'react'
import { TwitterTimelineEmbed } from 'react-twitter-embed'

function Widgets() {
  return (
    // col-span-2 = this takes up 2 cols on the right
    <div className="mt-2 px-2 col-span-2 hidden lg:inline">
      {/* Search */}
      <div className="mt-2 flex items-center space-x-2 rounded-full bg-gray-100 p-3">
        <SearchIcon className="h-5 w-5 text-gray-400" />
        <input
          className="flex-1 bg-transparent outline-none"
          type="text"
          placeholder="Search Twitter"
        />
      </div>

      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="nextjs"
        options={{ height: 1000 }}
      />
    </div>
  )
}

export default Widgets
