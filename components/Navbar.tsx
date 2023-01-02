import Link from 'next/link'

interface NavItemProps {
  title: string;
  link: string;
}

const NavItem = ({title, link}: NavItemProps) => {
  return(
    <li><Link href={link} className="btn btn-primary ml-2">{title}</Link></li>
  )
}

const Navbar = () => {
  return (
    <nav>
      <ul className="flex justify-end">
        <NavItem title="Home" link="/" />
        <NavItem title="About me" link="/about-me" />
        <NavItem title="Contact me" link="/contact-me" />
      </ul>
    </nav>
  )
}

export default Navbar
