import gmail from '../../public/image/gmail.png'
import '../styles/card.css'


export function CardFront() {
  return (
    <div className="card">
      <img src={gmail} alt="" />
      <span>front</span>
    </div>
  )
}