import Navbar from '../Nabvar/Navbar'
import { LOGO } from '../../assets/images'
import './styles.scss'
export default function Header () {
  return (
    <div className="navbar">
      <div>
        <div className='navbar_container'>
        <img src={LOGO} alt="logo" className='navbar_logo' />
        <Navbar />
        </div>
      </div>
    </div>
  )
}
