import Link from 'next/link';
import navStyles from '../styles/Nav.module.css';

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
    <ul>
      <li>
        <Link href="/" className='hover:text-bubble-gum'>Home</Link>
      </li>
      <li>
        <Link href="/about" className='hover:text-bubble-gum'>About</Link>
      </li>
    </ul>
    </nav>
  )
}

export default Nav;
