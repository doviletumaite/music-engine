import { ChangeEvent, useEffect, useState } from "react"
import {Col, Form, Row, Table} from "react-bootstrap"
import { RouteComponentProps } from "react-router"
import Music from "../types/music"
import Details from "./Details"


interface MainSearcProps {
  id: number 
}
// interface RouteComponentProps {
//   history: number
//   match: string
// }

// type AllTheProps = MainSearcProps & RouteComponentProps

const MainSearch = ({history}: RouteComponentProps & MainSearcProps ) => {
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
    setQuery(e.target.value.toLowerCase())
   }

 return(
     <div className="m-5">
     <Row className="m-5">
       <Col>
       <h1 className="mx-5 title">Music Engine</h1>
       <Form.Control 
         type="text" 
         placeholder="Search" 
         onChange={handleInput}
          />
         <Form.Text className="text-muted">
           Find here your favourite songs :) 
         </Form.Text>
       </Col>
     </Row>

    
       <div > 
        <Table striped bordered hover variant="dark" className="mr-5">
  <thead>
    <tr>
      <th>#</th>
      <th>TITLE</th>
      <th>ARTIST</th>
      <th>ALBUM</th>
    </tr>
  </thead>
  <tbody>
{music.map(p => (
    <tr>
      <td></td>
      <td onClick={() => history.push('/details/:' + p.id)}>
        <Details/>
        {p.title}</td> 
      <td>{p.artist.name}</td>
      <td>{p.album.title}</td>
    </tr>
     ))}
  </tbody>
</Table>
</div>
    
     </div>
   
 )
}
export default MainSearch