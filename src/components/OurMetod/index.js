import { INFO_CARD } from '../../assets/images'
import Card from '../Card/index'
import './styles.scss'
export default function OurMetod () {
  return (
        <section className='seccionMethodology'>
        <h3>Nuestra metodologia</h3>
        <div className='cardContainer'>
          {
            INFO_CARD.map((item, index) => {
              return (
                <Card
                  key={index}
                  title={item.title}
                  text={item.text}
                  img={item.img}
                />
              )
            })
          }
        </div>
      </section>
  )
}
