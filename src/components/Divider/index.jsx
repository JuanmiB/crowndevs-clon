import Button from '../Button'
import './styles.scss'
export default function Divider ({ children, title, text, button }) {
  const styles = {
    marginTop: '50px',
    position: 'absolute',
    zIndex: 1
  }
  return (
        <div style={styles}>
          <h1 className='title'>{title}</h1>
          {children}
          <h3 style={{ textWrap: 'wrap' }}>{text}</h3>
          {button && (
            <Button text={'Learn more'}/>
          )}
        </div>

  )
}
