import {memo} from 'react'

const Course = ({item, isOpen, toggle}) => {
    console.log(item.title)
  return (
    <div className='mb-2'>
    <h2 className='text-2xl  mb-4'>{item.title}</h2>
    <button onClick= {() => toggle(item.id)} className='px-8 py-2 bg-orange-600 text-white rounded-lg'> 
    {isOpen ? "Close" : "Open"} 
    </button>
    {isOpen && <p>{item.anons}</p>}
    </div>
  )
}

export default memo(Course)