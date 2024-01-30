import Navbar from '../Nabvar/Navbar'
import { LOGO } from '../../assets/images'
export default function Header () {
  return (
    <div style={{ height: '80px', paddingInline: '20px' }}>
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '50px' }}>
        <img src={LOGO} alt="logo" />
        <Navbar />
        </header>
    </div>
  )
}
