import React,{useState} from 'react'
import StoryModal from '../Modal/StoryModal'



function Story({ image, name }) {

  const [showStoryModal, setShowStoryModal] = useState(false)

  if(showStoryModal === true){
      return <StoryModal image={image} name={name} setShowStoryModal={setShowStoryModal}/>
  }


  return (
    <div className='mx-1 cursor-pointer text-center' >
      <button onClick={()=>setShowStoryModal(true)}>
        <img src={image} className="w-14 h-14 cursor-pointer border-2 border-red-500 p-[2px] rounded-full" />
        <h1 className='text-xxs text-center w-16 flex truncate justify-self-center' >{name}</h1>
      </button>
    </div>
  )
}
export default Story