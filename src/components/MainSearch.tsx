import { ChangeEvent, useEffect, useState } from "react"
import {Col, Form, Row} from "react-bootstrap"
import Music from "../types/music"

const MainSearch = () => {
  const [music, setMusic] = useState<Music[]>([])
  const [query, setQuery] = useState("")
  useEffect(() => {
    const fetchMusic = async () => {
     try {
       let response = await fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=' + query)
       if (response.ok) {
         let fetchedMusic = await response.json()
         console.log("fetchedMusic",fetchedMusic )
         const arrayOfMusic = fetchedMusic.data
         setMusic(arrayOfMusic)
       }
     } catch (error) {
       console.log(error)
     }
    }
    fetchMusic()
   }, [])

   const handleInput = (e: ChangeEvent<HTMLInputElement>) =>{
    setQuery(e.target.value)
    console.log(e.target.value)
   }

 return(
     <div>
     <Row className="m-5">
       <Col>
       <h1 className="mx-5">Music Engine</h1>
       <Form.Control 
         type="email" 
         placeholder="Search" 
         onChange={handleInput}
          />
         <Form.Text className="text-muted">
           Find here your favourite songs :) 
         </Form.Text>
       </Col>
     </Row>

     <div>{music.map(p => (
        <p>{p.title}</p>
     ))}</div>
     </div>
 )
}
export default MainSearch