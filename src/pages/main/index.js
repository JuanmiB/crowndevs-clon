import Header from '../../components/Header'
import Divider from '../../components/Divider'
import { TEXTO, IMAGEN_BACKGROUND, IMG_CARD } from '../../assets/images'
import Card from '../../components/Card'

export default function Main () {
  return (
        <div style={{ width: '100%' }}>
            <Header/>
            <section style={
              {
                display: 'grid',
                gridTemplateColumns: 'repeat(2,1fr)',
                width: '100%',
                borderTop: 'solid 1px #fff',
                marginTop: '10px'
              }
            }>
            <Divider
            title="Human Centralice Technologies"
            text={TEXTO}
            button
            />
            <div style={{ marginLeft: '20%', marginRight: '-20%' }}>
              <img
              src={IMAGEN_BACKGROUND}
              alt='Imagen de fondo'
              style={{ width: '100%' }}
              ></img>
            </div>
            </section>

            <section style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-center',
              border: 'solid 1px #fff',
              backdropFilter: 'blur(10px)',
              backgroundColor: '#1b104766',
              position: 'relative'
            }}>
              <h3>Nuestra metodologia</h3>
              <div style={{ display: 'flex', margin: '20px', gap: '220px', width: '100%', justifyContent: 'center' }}>
           <Card
           title={'Analizamos'}
           text={'Tenemos un primer contacto, en el que nos traes tu idea y te proponemos nuevas mejoras, definimos las funcionalidades de tu desarrollo y el alcance'}
           img={IMG_CARD}/>
           <Card
           title={'Analizamos'}
           text={'Tenemos un primer contacto, en el que nos traes tu idea y te proponemos nuevas mejoras, definimos las funcionalidades de tu desarrollo y el alcance'}
           img={IMG_CARD}/>
           <Card
           title={'Analizamos'}
           text={'Tenemos un primer contacto, en el que nos traes tu idea y te proponemos nuevas mejoras, definimos las funcionalidades de tu desarrollo y el alcance'}
           img={IMG_CARD}/>
           </div>
           </section>
        </div>
  )
}
