import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import './styles.scss'
export default function ArrowsContainer ({ title, onSlide }) {
  return (
    <div className="containerContent" >
      <h3>{title}</h3>
      <div className="container-arrows">
        <MdKeyboardArrowLeft
          onClick={() => onSlide(0)}
          size={35}
          className="headerArrow"
        />
        <MdKeyboardArrowRight
          onClick={() => onSlide(1)}
          size={35}
          className="headerArrow"
        />
      </div>
    </div>
  )
}
