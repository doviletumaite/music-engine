import { useEffect, useState } from "react"
import { Container } from "react-bootstrap"
import { RouteComponentProps } from "react-router"
import Music from "../types/music"


interface DetailProps {
    id: number
    musicData: object

}
const Details = ({match}: RouteComponentProps) => {
  const id = match.params
  const [music, setMusic] = useState<Music[]>([])
  useEffect(() => {
    const fetchMusic = async () => {
     try {
       let response = await fetch('https://striveschool-api.herokuapp.com/api/deezer/track/' + id)
       if (response.ok) {
         let fetchedMusic = await response.json()
         console.log("fetchedMusic",fetchedMusic )
         const arrayOfMusic = fetchedMusic.data
         console.log("music in details",arrayOfMusic)
        //  const thatMusic = arrayOfMusic.find(j => j.id == id)
         setMusic(arrayOfMusic)
       }
     } catch (error) {
       console.log(error)
     }
    }
    fetchMusic()
   }, [])
return(
    <Container>
      <p> {} </p>
    </Container>
)
}
export default Details