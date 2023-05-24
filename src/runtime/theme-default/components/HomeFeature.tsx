import { Feature } from 'shared/types'

interface FeatureProps {
  features?: Feature[]
}

export function HomeFeature({ features }: FeatureProps) {
  return (
    <div className=" px-64px">
      <div className="max-w-1152px mx-auto flex flex-wrap -translate-x-8px">
        {features?.map((feature) => {
          const { icon, title, details } = feature

          return (
            <div
              key={title}
              className="rounded-6px p-8px w-full"
              un-md="w-1/2"
              un-lg="w-1/3"
            >
              <article className="bg-bg-soft border-px border-bg-soft rounded-12px p-24px h-full">
                <div
                  className="bg-gray-light-4 rounded-6px mb-20px w-48px h-48px text-3xl flex-center"
                  un-dark="bg-white"
                >
                  {icon}
                </div>
                <h2 className="font-700">{title}</h2>
                <p className="text-sm leading-6 text-text-2 font-500 pt-8px">
                  {details}
                </p>
              </article>
            </div>
          )
        })}
      </div>
    </div>
  )
}
