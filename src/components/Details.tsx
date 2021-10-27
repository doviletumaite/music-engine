import { Container } from "react-bootstrap"


interface DetailProps {
    id: number
    musicData: object
}
const Details = ({id, musicData}: DetailProps) => {
return(
    <Container>
      <p> {id} </p>
    </Container>
)
}
export default Details