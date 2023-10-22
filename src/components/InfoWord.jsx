import { sound, searchSound } from "../service/sound"



function InfoWord({ datos }) {


  return <section className="conted-word">
    <h1>{datos.word}
      <img onClick={sound} src="./images/icon-play.svg" alt="icon play sound" />
    </h1>
    <audio id="audio" >
      <source src={searchSound(datos.phonetics)} />
    </audio>
    <strong>
      {datos.phonetic}
    </strong>
    <h2>
      {datos.meanings[0].partOfSpeech}
      <div></div>
    </h2>
    <article className="meanings">
      <h3>Meaning</h3>
      {
        datos.meanings[0].definitions.map((e, i) => {
          return <p key={i}><div className='cir-2'></div> {e.definition}</p>
        })
      }

    </article>

    <h3 className="syn">Synonyms <strong>{datos.meanings[0].synonyms}</strong></h3>

    <h2>
      {datos?.meanings[1]?.partOfSpeech}
      <div></div>
    </h2>

    <h3 className="syn">Meaning</h3>

    <article className="meanings c">
      {
        datos?.meanings[1]?.definitions?.map((e, i) => {
          return <section key={i + 1000}>
            <p><span className='cir-2'></span>{e.definition}</p>
            {e.example && <p className="example">"{e.example}"</p>}
          </section>
        })
      }
    </article>
  </section>
}



function ErrorFeching({ datos }) {
  const n = datos?.title ? "😕" : "Dictionary 😁"
  return <div className="error">
    <h1>{n}</h1>
    <h3>{datos?.title}</h3>
    <p>{datos?.message}.{datos?.resolution}</p>
  </div>
}




export function InfoWords({ datos }) {
  const len = datos?.length > 0
  return len ? <InfoWord datos={datos[0]} /> : <ErrorFeching datos={datos} />
}