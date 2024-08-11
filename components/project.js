export default function Project({ title, images, type, tags, price, description, i }) {
  let shape = 'rounded-bl-[100px] group-hover:rounded-bl-[0]'
  i % 2 === 0 && (shape = 'rounded-br-[100px] group-hover:rounded-br-[0]')

  return(
    <div className="mb-3 border-t border-black pt-3 [*>.test]:bg-red-400 even:flex-row-reverse flex flex-wrap group">
      <div className={`w-full lg:w-2/3 h-[60vw] lg:h-[40vw] bg-black/25 shape ${shape} relative overflow-hidden will-change-transform transition-all ease-custom duration-[450ms] rounded-fix`}></div>

      <div className={`w-full lg:w-1/3 lg:max-w-[500px] mr-auto py-3 lg:py-0 ${i % 2 === 0 ? 'lg:px-3' : 'lg:pr-3' }`}>
        <div className="w-[90%] test">
          <div className="flex space-x-3 mb-3">
            {tags.map((e,i) => {
              let color = '#D1C4B3'
              i == 0 && (color = '#D1C4B3')
              i == 1 && (color = '#BDD1B3')
              return (
                <span className="p-1 font-mono uppercase text-xs/none inline-block" style={{ backgroundColor: color}}>{e.title}</span>
              )
            })}
          </div>
          <h2 className="text-[7.5vw]/[0.95] lg:text-[3.3vw]/[0.95] mb-1.5 pb-0">{title}</h2>
          <span className="block text-lg/[1] mb-1.5">{type}</span>
          <span className="block text-lg/[1] mb-12">{price}</span>

          <div className="content">
            <p>We are strong believers in collaboration - a problem shared is a problem halved. Our network of expertise, from structural engineers to contractors, product manufacturers and more, ensures our projects are continually optimised, and have the right blend of people on hand to see it through to a successful completion.</p>

            <ul>
              <li>New Build</li>
              <li>Greenbelt</li>
              <li>Conservation Area</li>
              <li>Luxury Development</li>
            </ul>
          </div>
        </div>
      </div>

      <div className={`flex space-x-3 w-full mt-3 lg:mb-[10vw] ${i % 2 === 0 ? 'justify-start' : 'justify-end' }`}>
        {images.map((e, i) => {
          return (
            <div key={i} className="w-[33.3%] lg:w-[12%] lg:max-w-[125px] aspect-video bg-black/10"></div>
          )
        })}
      </div>
    </div>
  )
}