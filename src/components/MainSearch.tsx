import Button from "@restart/ui/esm/Button"
import { ChangeEvent, FormEvent, MouseEventHandler, useEffect, useState } from "react"
import {Col, Form, FormControl, InputGroup, Row, Table} from "react-bootstrap"
import { RouteComponentProps } from "react-router-dom"
import Music from "../types/music"
import Details from "./Details"


interface MainSearcProps {
  type: string
}
// interface RouteComponentProps {
//   history: number
//   match: string
//   location: string
// }

// type AllTheProps = MainSearcProps & RouteComponentProps

const MainSearch = ({history}:RouteComponentProps ) => {
  const [music, setMusic] = useState<Music[]>([])
  const [query, setQuery] = useState("")
  // const [value, setValue] = useState("")
  useEffect(() => {
    const fetchMusic = async () => {
     try {
       let response = await fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=' + query)
       if (response.ok) {
         let fetchedMusic = await response.json()
         const arrayOfMusic = fetchedMusic.data
         setMusic(arrayOfMusic)
       }
     } catch (error) {
       console.log(error)
     }
    }
    fetchMusic()
   }, [])

   const handleInput = (e:ChangeEvent<HTMLInputElement>) =>{
    e.preventDefault()
    setQuery(e.target.value.toLowerCase())
    console.log("query",query)
   }
   const submitSearch = async (e: FormEvent) => {
    e.preventDefault()
    
    // setQuery(query)
    // console.log("query", query)
   }
  
 return(
     <div className="m-5">
     <Row className="m-5">
       <Col>
       <h1 className="mx-5 title">Music Engine</h1>
       <Form onSubmit={submitSearch}>
       <Form.Control 
         type="text"
         placeholder="Search" 
       
         onSubmit={handleInput}
          />
          <Button type="submit">go!</Button>
         <Form.Text className="text-muted">
           Find here your favourite songs :) 
         </Form.Text>
         </Form>
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
      <td onClick={() => history.push('/details/' + p.id)}>
        {/* <Details id={p.id} musicData={p}/> */}
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