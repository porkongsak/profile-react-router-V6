import React from 'react'
import { Container, Card, Row, Col, Image } from 'react-bootstrap'
import { Avatar} from '@chakra-ui/react'
import { useNavigate } from 'react-router'
import { Button, Stack } from '@chakra-ui/react'
import { ArrowBackIcon } from '@chakra-ui/icons'
import { ReactTypical } from '@deadcoder0904/react-typical'

const profilepic = "https://media.istockphoto.com/photos/cheerful-fashionable-adult-man-in-city-setting-picture-id1310533180?b=1&k=20&m=1310533180&s=170667a&w=0&h=EdRuvIkrMifhyZJkHXf5Pk68ri44_g7OFnU8lIdbc-c="
const js = "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/000000/external-javascript-is-a-high-level-interpreted-programming-language-logo-shadow-tal-revivo.png"
const reactjs = "https://img.icons8.com/color/48/000000/react-native.png"
const python = "https://img.icons8.com/color/48/000000/python--v1.png"
const nodejs = "https://img.icons8.com/color/48/000000/nodejs.png"



export const About = () => {

    let navigate = useNavigate();


    const handleBack = () =>{
        navigate(-1);
    }


    return (
        <div className="home-body mt-4">
            <Container>
                <Row className="home-main-row ">
                    <Col>
                        <Card className='card ' >
                            <Card.Body >
                                <Avatar className="avatar" src={profilepic} h={200} w={200} />
                                <Card.Title  >
                                    <h1>John Doe</h1>
                                </Card.Title> 
                                
                                <Card.Text>
                                    <p> 
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quos hic exercitationem, eos quas quia laudantium deleniti id provident? Asperiores incidunt corporis placeat ratione deserunt nemo, in, ipsum esse aspernatur voluptas adipisci quae cum neque hic veritatis illum quasi. Blanditiis velit est dolorum perspiciatis repellat eum id nulla perferendis culpa quasi earum corrupti adipisci animi, aspernatur minus dignissimos vitae quo molestiae nemo quaerat quos. Natus quos distinctio, veniam dolore ipsa voluptate totam veritatis aliquid delectus ad. Accusantium quo, blanditiis aliquid molestiae sapiente modi impedit tenetur asperiores enim ipsum. Fugiat quam debitis ut eos rerum eveniet minima veritatis delectus, repellat dicta.
                                    </p>
                                    <br/>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt facilis facere alias laborum vitae, nulla eligendi sint tenetur error cum tempore fugiat veritatis aperiam ipsa quibusdam expedita eius quae beatae earum consequuntur veniam. Neque cumque tempora mollitia officiis voluptatem ullam, quo velit dolore nisi, officia consectetur voluptate. Odit, totam sit!
                                    </p>
                                    
                                    <Card.Title  className='mt-2' >
                                    <ReactTypical
                                        steps={['My Skills', 1800]}
                                        loop={Infinity}
                                        wrapper="p"
                                    />
                                    
                                    </Card.Title>
                                    <ul className='myskills'>
                                    
                                        <li><Image src={js}/></li>
                                        <li><Image src={reactjs}/></li>
                                        <li><Image src={python}/></li>
                                        <li><Image src={nodejs}/></li>
                                    </ul>
                                    <div className='back-next-button'>
                                    <Stack direction='row' spacing={4} justifyContent='center' m={10}>
                                        <Button rightIcon={<ArrowBackIcon />} colorScheme='teal' variant='solid' onClick={handleBack}>
                                            Back
                                        </Button>
                                    </Stack>
                                    </div>
                                
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
