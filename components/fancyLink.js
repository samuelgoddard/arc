import Link from 'next/link'

export default function FancyLink( {destination, a11yText, label, className, active} ) {
  return (
    <Link scroll={false} href={destination} aria-label={a11yText} className={`${className}`}>
      {label}
      
      {active && (
        <span className="block border-b border-black translate-y-[3px] w-[75%] mx-auto"></span>
      )}
    </Link>
  )
}