import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import './Header.scss'
export default function ProjectsHeader ({ title, onSlide }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <h3>{title}</h3>
      <div className="container-arrows">
        <MdKeyboardArrowLeft
          onClick={() => onSlide(0)}
          size={35}
          className="header_arrow"
        />
        <MdKeyboardArrowRight
          onClick={() => onSlide(1)}
          size={35}
          className="header_arrow"
        />
      </div>
    </div>
  )
}
