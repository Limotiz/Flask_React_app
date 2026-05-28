import React from 'react'

export default function AddStudent() {

    const [name, setName] = Usestate("")
    const [course, setCourse] = Usestate("")

    return (
        <div className='container mx'>
            <h4 className='font-semibold mt-4'>AddStudent</h4>

            <div class="w-full max-w-xs">
  <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Username
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username">
    </div>

  </form>
</div>
            
            </div>
        
    )
}