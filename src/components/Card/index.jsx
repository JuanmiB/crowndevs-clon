import './styles.scss'
export default function Card ({ img, title, text }) {
  return (
        <div className='card'>
            <img src={img} alt={title} width={75} height={90} />
            <div className='cardContainer_info'>
            <h2>{title}</h2>
            <p>{text}</p>
            </div>
        </div>
  )
}
