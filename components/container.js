export default function Container({ children, className }) {
  return(
    <div className={`px-3 lg:px-3 w-full ${className}`}>
      {children}
    </div>
  )
}