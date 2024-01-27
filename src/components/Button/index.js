export default function Button ({ text }) {
  const styles = {
    alignItems: 'center',
    background: 'linear-gradient(#0a0033,#0a0033) padding-box,linear-gradient(150deg,#27daae,#4e35e4,#33208e) border-box',
    border: '2px solid #0000',
    borderRadius: '30px',
    color: '#fff',
    cursor: 'pointer',
    display: 'flex',
    fontSize: '16px',
    fontWeight: '600',
    height: '42px',
    justifyContent: 'center',
    width: '155px'
  }

  return (

        <div>
            <button style={styles}>{text}</button>
        </div>
  )
}
