import React from 'react'

const BurgerCard = () => {
  return (
    <div className='bg-white flex flex-col gap-8 px-10 py-4 rounded-xl shadow-xl hover:scale-110 transition-all ease-in-out duration-150 '>
        <h2>Name</h2>
        <h3>Restaurant</h3>
        <p>Description</p>
        <a href="#">Link</a>
        <div className="flex overflow-auto text-gray-100 gap-5">
            <span className="bg-orange-400 p-2 rounded-xl">Mayones</span>
            <span className="bg-orange-400 p-2 rounded-xl">Mayones</span>
            <span className="bg-orange-400 p-2 rounded-xl">Mayones</span>
            <span className="bg-orange-400 p-2 rounded-xl">Mayones</span>
            <span className="bg-orange-400 p-2 rounded-xl">Mayones</span>
        </div>
    </div>
  )
}

export default BurgerCard