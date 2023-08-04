import Link from 'next/link'

export default function FancyLink( {destination, a11yText, label, className, active, onClick} ) {
  return (
    <Link scroll={false} href={destination} aria-label={a11yText} className={`${className} group`} onClick={onClick}>
      {label}
      
      <span className={`block border-b border-black translate-y-[3px] ${active ? 'w-[75%]' : 'w-0'} mx-auto lg:group-hover:w-[75%] transition-all ease-custom duration-[220ms]`}></span>
    </Link>
  )
}