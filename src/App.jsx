import { useState } from "react"

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [click, setClick] = useState(false)

  const handleClick = () => {
    setClick(!click)
      setOpenModal(!openModal)  
  }

  return (
    <>
          <div className="container">
            <div className="titleContainer">
              {
              openModal?
              <div onClick={handleClick} className={`modalContainer ${click&&'animationOpen'}`}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde ea labore beatae non laboriosam libero totam corrupti nam veniam atque quaerat explicabo vitae, aperiam consequuntur quis, rerum ipsum culpa molestiae.</div>
                :<h1 onClick={handleClick} className={`title ${!click&&'animationClose'}`}>Animacion</h1>}
              
              
            </div>
            
            <div className="bubbles">
              <span style={{'--i':11}}></span>
              <span style={{"--i":24}}></span>
              <span style={{"--i":12}}></span>
              <span style={{"--i":10}}></span>
              <span style={{"--i":14}}></span>
              <span style={{"--i":23}}></span>
              <span style={{"--i":18}}></span>
              <span style={{"--i":16}}></span>
              <span style={{"--i":19}}></span>
              <span style={{"--i":20}}></span>
              <span style={{"--i":22}}></span>
              <span style={{"--i":25}}></span>
              <span style={{"--i":18}}></span>
              <span style={{"--i":21}}></span>
              <span style={{"--i":15}}></span>
              <span style={{"--i":13}}></span>
              <span style={{"--i":26}}></span>
              <span style={{"--i":17}}></span>
              <span style={{"--i":13}}></span>
              <span style={{"--i":28}}></span>
              <span style={{"--i":18}}></span>
              <span style={{"--i":16}}></span>
              <span style={{"--i":19}}></span>
              <span style={{"--i":20}}></span>
              <span style={{"--i":18}}></span>
              <span style={{"--i":16}}></span>
              <span style={{"--i":19}}></span>
              <span style={{"--i":20}}></span> 
              <span style={{"--i":22}}></span>
              <span style={{"--i":25}}></span>
              <span style={{"--i":18}}></span>
              <span style={{"--i":21}}></span>
              <span style={{"--i":15}}></span>
              <span style={{"--i":13}}></span>
              <span style={{"--i":12}}></span>
              <span style={{"--i":10}}></span>
              <span style={{"--i":14}}></span>
            </div>
          </div>
    </>
  )
}

export default App
