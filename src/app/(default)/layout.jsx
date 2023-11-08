export default function DefaultLayout({ children }) {  
  return (
    <div className="flex h-[100dvh] overflow-hidden">

      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        <main className="grow [&>*:first-child]:scroll-mt-16">
          {children}
        </main>

      </div>

    </div>
  )
}