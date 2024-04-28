import React from 'react'

const Hero = () => {
  return (
    <div className="hero min-h-screen" style={{backgroundImage: 'url(https://academy-public.coinmarketcap.com/srd-optimized-uploads/a4054a6bd23d47f781f7f2dfe08c1e14.jpeg)'}}>
  <div className="hero-overlay bg-opacity-50"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold text-white">Welcome to <br/>
      Kryptolink
      </h1>
      <p className="mb-5 text-white">Your trusted platform to send and recieve Cryptocurrency. Rest assured as all the security and complexity is handled by us.</p>
      <div className="badge badge-primary px-5 py-5 text-white font-semibold">Get started!</div>
    </div>
  </div>
</div>
  )
}

export default Hero
