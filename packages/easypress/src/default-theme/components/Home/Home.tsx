export function Home({
  title,
  description,
}: {
  title?: string
  description?: string
}) {
  return (
    <>
      <div className="pt-nav flex h-screen flex-col items-center justify-center">
        <div className="text-[10vw]">{title}</div>
        <div className="text-[6vw]"> {description}</div>
      </div>
    </>
  )
}
