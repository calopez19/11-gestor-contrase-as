import logo from '../../public/image/placeHolderLogo.png'
import '../styles/header.css'
export function Header() {
  return (
    <>
      <header>
        <img className='logo' src={logo} alt="" />
        <input type="text" placeholder="Search.."></input>
        <img className='userIcon' src={logo} alt="" />
      </header>
    </>
  )
}