import gmail from '../../public/image/gmail.png'
import '../styles/card.css'


export function CardBack() {
  return (
    <div className="card">
      <img src={gmail} alt="" />
      <span>back</span>
    </div>
  )
}