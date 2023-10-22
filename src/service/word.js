


export async function wordInfo ({ word }) {
  const API_WORD = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`

  const res = await fetch(API_WORD)
  const json = await res.json()
  return json

}