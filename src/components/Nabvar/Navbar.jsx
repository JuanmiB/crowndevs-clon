import { Link } from 'react-scroll'
export default function Navbar () {
  const optionsNavbar = [
    {
      name: 'Inicio',
      path: '/'
    },
    {
      name: 'Que hacemos',
      path: '/about'
    },
    {
      name: 'Proyectos',
      path: '/proyects'
    },
    {
      name: 'Nosotros',
      path: '/us'
    },
    {
      name: 'Contacto',
      path: '/contact'
    }
  ]
  return (
        <nav>
            {
                optionsNavbar.map((option, index) => (
                    <Link
                        key={index}
                        activeClass="active"
                        to={option.path}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        style={{ cursor: 'pointer', color: '#fff', margin: '0 10px' }}
                    >
                        {option.name}
                    </Link>
                ))
            }
        </nav>
  )
}
