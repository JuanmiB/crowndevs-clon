import { INFO_CARD } from '../../assets/images'
import Card from '../Card/index'
export default function MetodMain () {
  return (
        <section className='seccionMethodology'>
        <span>Nuestra metodologia</span>
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
