import './App.css'
import logo from './assets/logo.jpg'
import logoCompra from './assets/compra-segura-2.png'

function App() {

  const gotoWeb = () => {
    window.open("https://www.delcarajo.co/producto/tiburon-de-control-remoto-rc-remoto-control-rc-shark", "_blank");
  }

  const gotoWhatsapp = () => {
    window.open("https://api.whatsapp.com/send?phone=573185859107&text=Hola%2C%20quisiera%20informaci%C3%B3n%20sobre%20el%20TIBUR%C3%93N%20DE%20CONTROL%20REMOTO", "_blank");
  }

  return (
    <>
      <main className="main">
        <header className="header">
          <section className="container">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
            <div className="buy">
              <button onClick={gotoWeb} className="button" role="button">Comprar Ahora!</button>
            </div>
          </section>
        </header>
        <section className="container text first">
          <h1>¡Experimenta la Emoción con el Tiburón de Control Remoto 2023!</h1>
        </section>
        <section className="container">
          <img src="https://res.cloudinary.com/dcplixyte/image/upload/v1702956283/promo01/01-edit_sqtpu8.jpg" alt="imagen1" />
        </section>
        <section className="container text">
          <p>¡Haz que la diversión nade contigo! Presentamos nuestro Juguete Tiburón de Control Remoto 2023, un asombroso juguete que combina alta simulación, rendimiento potente y diversión garantizada para todas las edades.</p>
        </section>
        <section className="container">
          <img src="https://res.cloudinary.com/dcplixyte/image/upload/v1702943748/promo01/02_cmauii.webp" alt="imagen2" />
        </section>
        <section className="container text">
          <h2>Diseño Realista y Fácil de Montar:</h2>
          <p>Sumérgete en la experiencia realista con el diseño de doble paleta de la cola de plástico ABS altamente simulada. El movimiento flexible del tiburón se asemeja sorprendentemente al de un tiburón real, ¡brindándote horas de entretenimiento!</p>
        </section>
        <section className="container">
          <img src="https://res.cloudinary.com/dcplixyte/image/upload/v1702943747/promo01/03_r1eoiu.webp" alt="imagen3" />
        </section>
        <section className="container">
          <img src="https://res.cloudinary.com/dcplixyte/image/upload/v1702943747/promo01/04_auhu8u.webp" alt="imagen5" />
        </section>
        <section className="container text">
          <h2>Batería de Gran Capacidad y Recargable:</h2>
          <p>Equipado con una batería recargable de 700 mAh, nuestro tiburón se carga en solo 30 minutos para ofrecerte 30 minutos de juego continuo. ¡Nunca te quedes sin diversión en el agua!</p>
        </section>
        <section className="container">
          <img src="https://res.cloudinary.com/dcplixyte/image/upload/v1702943747/promo01/05_ysdnli.webp" alt="imagen4" />
        </section>
        <section className="container">
          <img src="https://res.cloudinary.com/dcplixyte/image/upload/v1702943747/promo01/06_ojmk2l.webp" alt="imagen6" />
        </section>
        <section className="container text">
          <h2>Control Remoto Impermeable y de Largo Alcance:</h2>
          <p>Con un control remoto impermeable, llevamos la diversión al siguiente nivel. Disfruta de una distancia remota válida de hasta 131 pies (30 - 40 METROS) y haz que tu tiburón navegue con facilidad en el agua.</p>
        </section>
        <section className="container">
          <img src="https://res.cloudinary.com/dcplixyte/image/upload/v1702943747/promo01/08_bjiizn.webp" alt="imagen8" />
        </section>
        <section className="container text">
          <h2>El Regalo Perfecto para Niños</h2>
          <p>Haz que los ojos de los niños brillen con emoción al ver nadar a este increíble tiburón. Es el regalo ideal para cumpleaños, Navidad o cualquier ocasión especial. El paquete incluye un bonito embalaje y todo lo necesario para empezar la aventura acuática.</p>
        </section>
        <section className="container">
          <img src="https://res.cloudinary.com/dcplixyte/image/upload/v1702943747/promo01/07_ucjipx.webp" alt="imagen9" />
        </section>
        <section className="container text">
          <h2>Descubre una Experiencia Única de Compras</h2>
          <p>Haz que los ojos de los niños brillen con emoción al ver nadar a este increíble tiburón. Es el regalo ideal para cumpleaños, Navidad o cualquier ocasión especial. El paquete incluye un bonito embalaje y todo lo necesario para empezar la aventura acuática.</p>
          <p>🎁 Productos de Calidad: Cada caja contiene productos de alta calidad, seleccionados con esmero para brindarte la mejor experiencia.</p>
          <p>🚀 Variedad para Todos los Gustos: Desde juguetes de control remoto hasta artículos imprescindibles, nuestra selección abarca una amplia gama de intereses y necesidades.</p>
          <p>🌟 Embalaje Especial: Cada artículo está envuelto con cuidado y presentado de manera única. El detalle importa, y queremos que la experiencia desde el momento de recibir el paquete sea tan emocionante como el producto en sí.</p>
          <p>📦 Envío Rápido y Seguro: Nuestro compromiso es llevarte la alegría de nuestras cajas directamente a tu puerta. Con un servicio de envío rápido y seguro, podrás disfrutar de tus nuevos tesoros en poco tiempo.</p>
        </section>
        <section className='container text footer'>
          <img src={logoCompra} alt="logos" />
          <div>Copyright © 2006-23 delcarajo</div>
        </section>
        <button onClick={gotoWhatsapp} className="float">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
            <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
          </svg>
        </button>
        <section id="video">
          <video src="https://res.cloudinary.com/dcplixyte/video/upload/v1702944319/promo01/video_cnv34b.mp4" muted autoPlay loop></video>
        </section>
      </main>
    </>
  )
}

export default App
