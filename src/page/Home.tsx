import React,{ Component} from 'react'
import { Container, Card, Row, Col, Image, Button } from 'react-bootstrap'
import { Avatar, AvatarBadge, Stack } from '@chakra-ui/react'
import { ReactTypical } from '@deadcoder0904/react-typical'
import { Link } from  'react-router-dom'



const profilepic = "https://media.istockphoto.com/photos/cheerful-fashionable-adult-man-in-city-setting-picture-id1310533180?b=1&k=20&m=1310533180&s=170667a&w=0&h=EdRuvIkrMifhyZJkHXf5Pk68ri44_g7OFnU8lIdbc-c="
export const Home = () => {
    return (
        <div className="home-body mt-4">
            <Container>
                <Row className="home-main-row ">
                    <Col>
                        <Card className='card ' >
                            <Card.Body >
                                <Avatar className="avatar" src={profilepic} h={200} w={200}  m={0}/>
                                <Card.Title  >
                                    <h1>John Doe</h1>
                                </Card.Title> 
                                <Card.Subtitle className='mb-2 text-muted'>
                                    <h2>I ' am {''}<ReactTypical steps={['Full Stack Developer 💖', 2000, 'Web Developer 🚀', 2000]} loop={Infinity} wrapper="p" /></h2>
                                </Card.Subtitle>
                                <br></br>
                                <Card.Text>
                                    <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae totam optio est voluptate error, itaque quam aliquid saepe unde accusamus nostrum dicta modi veritatis, facere deserunt rem in dolores, animi numquam natus officia quidem omnis perspiciatis autem? Quasi repellat voluptatum, molestiae sequi deleniti ipsa ea totam expedita, esse doloremque corrupti. Vitae, necessitatibus assumenda modi nihil molestias voluptatibus magni, dolores odio minima voluptates velit provident, nemo similique. A quod doloremque odio autem quasi voluptatum, pariatur eligendi suscipit hic molestiae! Inventore dolore officia libero sit dolores quos, illum natus perferendis esse est nobis iure maiores aliquam accusamus quaerat alias odio asperiores repellendus.</p>
                                </Card.Text>
                                <br/>
                                <nav>
                                    <Link to="/about"><Button variant='primary' >About</Button></Link>
                                </nav>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
