import { useState } from "react"
import { wordInfo } from "../service/word"

export function useWord () {
  const [datos, setDatos] = useState()
  const [loangind, setLoading] = useState(false)



  const getServiceWord = async({ word }) => {

    try{
      setLoading(true)
      const dat = await wordInfo({word})
      setDatos(dat)
    }catch(e){
      throw new Error("No feching")
    }finally{
      setLoading(false)
    } 
  }
  
  return {datos, getServiceWord, loangind}
} 