import BurgerMenu from '../BurgerMenu'
export default function Navbar () {
  return (
    <>
        {/* <nav>
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
        </nav> */}
        <>
        <BurgerMenu />
        </>
              </>
  )
}
