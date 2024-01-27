export default function Card ({ img, title, text }) {
  return (
        <div style={{ display: 'flex', flexDirection: 'column', width: 'auto', border: 'solid 1px #fff', maxWidth: '200px', maxHeight: '300px' }}>
            <img src={img} alt={title} />
            <div style={{ flexDirection: 'flex-start' }}>
            <h3>{title}</h3>
            <p>{text}</p>
            </div>
        </div>
  )
}
