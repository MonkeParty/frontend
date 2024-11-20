export default function Template({children}: { children: React.ReactNode }) {
  return <div className="w-full h-full bg-[url('/background.svg')] bg-cover bg-no-repeat bg-center">
    {children}
  </div>
}