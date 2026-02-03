import gmail from '../../public/image/gmail.png'
import '../styles/card.css'
export function Card() {
  return (
    <div className="card">
      <img src={gmail} alt="" />
      <span>Gmail</span>
    </div>
  )
}