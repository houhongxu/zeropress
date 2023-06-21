import { Hero } from 'shared/types'
import { normalizeUrl } from '../utils'
import { Button } from './Button'

interface HeroProps {
  hero?: Hero
}

export function HomeHero({ hero }: HeroProps) {
  return (
    <div className="p-64px">
      <div className="flex max-w-1152px mx-auto">
        <div className="flex flex-col max-w-592px">
          <h1 className="text-6xl font-700 max-w-576px">
            <span className="gradient-title">{hero?.name}</span>
          </h1>
          <div className="text-6xl font-700 max-w-576px">{hero?.text}</div>
          <div className="pt-12px text-2xl text-text-2 font-500 whitespace-pre-wrap max-w-576px">
            {hero?.tagline}
          </div>
          <div className="flex pt-32px -translate-x-4px">
            {hero?.actions?.map(({ text, link, theme }) => (
              <div key={link} className="p-4px">
                <Button
                  text={text}
                  href={normalizeUrl(link)}
                  theme={theme}
                ></Button>
              </div>
            ))}
          </div>
        </div>

        {hero?.image && (
          <div className="max-w-384px max-h-384px flex-center mx-auto">
            <img src={hero.image.src} alt={hero.image.alt}></img>
          </div>
        )}
      </div>
    </div>
  )
}
