import useToggle from '../hooks/useToggle'
import Course from './Course'
import data from '../data'

const CoursesList = () => {
    const {openId, toggle} = useToggle(); 
    
  return (
    <div>
        {data.map((item) => <Course key={item.id} item = {item}
        toggle = {toggle} 
        isOpen = {item.id === openId}
        />)}
        
    </div>
  )
}

export default CoursesList