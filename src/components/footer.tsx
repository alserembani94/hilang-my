import React from 'react'
import { RiGithubFill, RiTwitterXFill } from 'react-icons/ri';

const Footer = () => {
  return (
    <footer className="w-full max-w-screen-lg flex flex-col gap-12 px-4 py-8">
      <div className="grid md:grid-cols-2 lg:grid-cols-3  gap-12">
        <div className="text-left flex flex-col gap-2">
          <h3 className="underline underline-offset-1 text-3xl text-red-500">Hilang</h3>
          <p className="text-sm">Sebuah portal memudahkan mencari orang yang hilang.</p>
          <div className="flex gap-4 mt-8">
            <a href="https://twitter.com/alserembani" target="_blank" role="link" rel="noreferrer noopener" title="Akaun X Atif">
              <RiTwitterXFill className="size-6" />
            </a>
            <a href="https://github.com/alserembani94/hilang-my" target="_blank" role="link" rel="noreferrer noopener" title="Repositori Github Hilang MY">
              <RiGithubFill className="size-6" />
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-4 text-sm text-left">
          <h2 className="font-bold text-xl">Lawati Juga</h2>
          <a href="https://sedekah-je.com" target="_blank" role="link" rel="noreferrer noopener" title="SedekahJe">
            SedekahJe
          </a>
          <a href="https://kelasmengaji.online/" target="_blank" role="link" rel="noreferrer noopener" title="Kelas Mengaji Online">
            Kelas Mengaji Online
          </a>
          <a href="https://www.quran-manzil.com/" target="_blank" role="link" rel="noreferrer noopener" title="Belasungkawa">
            Quran Manzil
          </a>
          <a href="https://www.belasungkawa.my/" target="_blank" role="link" rel="noreferrer noopener" title="Belasungkawa">
            Belasungkawa
          </a>
        </div>
        <div className="flex flex-col gap-4 text-sm text-left">
          <h2 className="font-bold text-xl">Rujukan</h2>
          <a href="https://www.rmp.gov.my/orang-hilang-1" target="_blank" role="link" rel="noreferrer noopener" title="Portal Rasmi PDRM - Orang Hilang">
            Portal Rasmi PDRM - Orang Hilang
          </a>

          <h2 className="font-bold text-xl mt-8">Komuniti</h2>
          <a href="https://devtalk.my/" target="_blank" role="link" rel="noreferrer noopener" title="DevTalk">
            DevTalk
          </a>
          <a href="https://techin.my/" target="_blank" role="link" rel="noreferrer noopener" title="Tech In Malaysia">
            Tech In Malaysia
          </a>
        </div>
      </div>
      <hr />
      <div className="flex justify-between gap-8 text-xs">
        <p>© 2024 All rights reserved.</p>
        <p>Dibina oleh Atif</p>
      </div>
    </footer>
  )
}

export default Footer;