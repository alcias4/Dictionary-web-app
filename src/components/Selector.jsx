import { useState } from "react"


export function Selector({ setFont, font, themeDark }) {


  const [selecVisable, setVisable] = useState(false)
  const n = ['lora', 'inter', 'inconsolata']
  const handleClick = () => {
    setVisable(true)
  }

  const handleLeaving = () => {
    setVisable(false)
  }

  return <div className="cont-select">
    <button
      style={themeDark ? { color: "white", fontFamily: font } : { fontFamily: font }}
      className="btn-font"
      onMouseEnter={handleClick}
      onMouseLeave={handleLeaving}
    >
      {font}
      <img src="./images/icon-arrow.svg" alt="icon arrow down" />
    </button>
    <menu
      onMouseLeave={handleLeaving}
      onMouseEnter={handleClick}
      className={themeDark ? "selec selec-dark" : "selec"}
      style={selecVisable ? { display: "flex" } : { display: "none" }}
    >
      {
        n.map((n, i) => (
          <li
            className={themeDark ? "dark-btn" : null}
            style={{ fontFamily: font }}
            onClick={() => { setFont(n) }}
            key={i + 2000}>{n}
          </li>
        ))
      }
    </menu>
  </div>
}
