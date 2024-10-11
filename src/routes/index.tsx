import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import Footer from '../components/footer'

export const Route = createFileRoute('/')({
  component: HomeComponent,
})

function HomeComponent() {
  return (
    <div className="p-2 h-max min-h-screen flex flex-col items-center justify-center text-center">
      <div className="flex flex-col items-center justify-center w-max gap-2 flex-1">
        <h1 className="text-4xl font-bold">Portal <span className="underline underline-offset-4 text-red-500">Hilang</span></h1>
        <p>Sebuah portal memudahkan mencari orang yang hilang</p>
        <p className="px-4 py-2 bg-white rounded-lg text-slate-800 uppercase opacity-20 font-bold">Akan datang</p>
      </div>
      <Footer />
      {/* <p className="absolute bottom-8 text-xs opacity-10">Sebuah projek sumber terbuka</p> */}
    </div>
  )
}
