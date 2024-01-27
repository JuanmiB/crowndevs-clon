import Button from '../Button'

export default function Divider ({ children, title, text, button }) {
  const styles = {
    marginTop: '50px'
  }
  const h1Style = {
    fontFamily: 'Nunito',
    fontSize: '72px',
    fontWeight: '800',
    lineHeight: '98px',
    letterSpacing: '0em',
    textAlign: 'left'
  }
  return (
        <div style={styles}>
          <h1 style={h1Style}>{title}</h1>
          {children}
          <h3 style={{ textWrap: 'wrap' }}>{text}</h3>
          {button && (
            <Button text={'Learn more'}/>
          )}
        </div>

  )
}
