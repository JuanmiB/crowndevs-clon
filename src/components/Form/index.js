export default function Form () {
  return (
        <form className="footer__form">
        <label htmlFor="name">NAME</label>
        <input type="text" id="name" />

        <label htmlFor="email">EMAIL</label>
        <input type="email" id="email" />

        <label htmlFor="phone">PHONE</label>
        <input type="tel" id="phone" />

        <label htmlFor="message">MESSAGE</label>
        <input type="text" id="message" />
          <div className="footer__form__button">
        <button type="submit" className='btnForm'>SEND</button>
          </div>
      </form>
  )
}
