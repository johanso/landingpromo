import './App.css'
import logo from './assets/logo.jpg'

function App() {

  return (
    <>
      <main className="main">
        <header className="header">
          <section className="container">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
            <div className="buy">
              <button className="button" role="button">Comprar Ahora!</button>
            </div>
          </section>
        </header>
        <section className="container first">
          <img src="https://res.cloudinary.com/dcplixyte/image/upload/v1702943747/promo01/01_vqe1nx.webp" alt="imagen1" />
        </section>
        <section className="container">
          <img src="https://res.cloudinary.com/dcplixyte/image/upload/v1702943748/promo01/02_cmauii.webp" alt="imagen2" />
        </section>
        <section className="container">
          <img src="https://res.cloudinary.com/dcplixyte/image/upload/v1702943747/promo01/03_r1eoiu.webp" alt="imagen3" />
        </section>
        <section className="container">
          <img src="https://res.cloudinary.com/dcplixyte/image/upload/v1702943747/promo01/04_auhu8u.webp" alt="imagen5" />
        </section>
        <section className="container">
          <img src="https://res.cloudinary.com/dcplixyte/image/upload/v1702943747/promo01/05_ysdnli.webp" alt="imagen4" />
        </section>
        <section className="container">
          <img src="https://res.cloudinary.com/dcplixyte/image/upload/v1702943747/promo01/06_ojmk2l.webp" alt="imagen6" />
        </section>
        <section className="container">
          <img src="https://res.cloudinary.com/dcplixyte/image/upload/v1702943747/promo01/08_bjiizn.webp" alt="imagen8" />
        </section>
        <section className="container">
          <img src="https://res.cloudinary.com/dcplixyte/image/upload/v1702943747/promo01/07_ucjipx.webp" alt="imagen9" />
        </section>
        <section className="container">
          <img src="https://res.cloudinary.com/dcplixyte/image/upload/v1702943747/promo01/09_df4c8w.webp" alt="imagen9" />
        </section>
        <section id="video">
          <video src="https://res.cloudinary.com/dcplixyte/video/upload/v1702944319/promo01/video_cnv34b.mp4" muted autoPlay loop></video>
        </section>
      </main>
    </>
  )
}

export default App
