import { Selector } from "./components/Selector"
import { useState } from "react"
import { InfoWords } from "./components/InfoWord"
import { useWord } from "./hook/useWord"
import { Mood } from "./icon/Icon"
import './style/header.css'
import './style/main.css'


function App() {
  const [word, setWord] = useState()
  const { datos, getServiceWord, loangind } = useWord()
  const [font, setFont] = useState("inconsolata")
  const [error, setError] = useState(false)
  const [themeDark, setDark] = useState(false)


  const handleSumit = (e) => {
    e.preventDefault()

    if (word === undefined || word === "") {
      setError(true)
      return
    } else {
      getServiceWord({ word })
    }
  }

  const handleChange = (e) => {
    setWord(e.target.value)

  }

  const handleTheme = () => {
    setDark(!themeDark)
  }
  return (
    <>
      <div className={themeDark ? "page dark-page" : "page"}>
        <header
          style={{ fontFamily: font }}
          className={themeDark ? "header-dark" : null}
        >
          <nav className="nav">
            <img src="./images/logo.svg" alt="web icon principal" />
            <div className="rigth-menu">
              <Selector
                setFont={setFont}
                font={font}
                themeDark={themeDark}
              />
              <span
                onClick={handleTheme}
                className={themeDark ? "btn-theme btn-dark" : "btn-theme"}>
                <div
                  className={themeDark ? "circle circle-dark" : "circle"}></div>
              </span>
              <Mood themeDark={themeDark} />
            </div>
          </nav>
          <form onSubmit={handleSumit} className="search">
            <input
              style={error ? { fontFamily: font, border: "1px solid red" } : { fontFamily: font }}
              defaultValue={word}
              onFocus={() => { setError(false) }}
              onChange={handleChange}
              className={themeDark ? "search-input search-dark" : "search-input"}
              type="text"
              placeholder="Search for any word..." />
            <button>
              <img
                className="icon-search"
                src="./images/icon-search.svg"
                alt="icon search" />
            </button>
          </form>
          {
            error ? <p style={{ color: "red" }}>Whoops, can't be empty...</p> : null
          }
        </header>


        <main
          className={themeDark ? "main-dark " : null}
          style={{ fontFamily: font }}>
          {loangind ?
            <img className="loanding-icon" src="./images/Loading.svg" /> :
            <InfoWords datos={datos} />
          }
        </main>
      </div>
    </>
  )
}

export default App
