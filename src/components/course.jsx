import axios from "axios"
import { Col, Container, Row } from "react-bootstrap"
import Card from "./card"
import CTA from "./cta"
import '../styles/button.scss'
import { useState } from "react"
import { useEffect } from "react"

const Course = () => {
    const [courses, setCourses] = useState();
    const [hasLoad, setHasLoad] = useState(false)
    useEffect(()=>{
        axios.get('http://localhost:3030/course')
        .then((result)=>{
            setCourses(result.data)
            setHasLoad(true)
        })
    },[])
    return (
        <div id="kursus" className="bg-second pt-3 mt-4">
            <Container>
                <div className="fs-3 fw-bold text-center">Kursus Tersedia</div>
                <Row className="mt-2">
                {hasLoad && courses.map(course => {
                    return (
                    <Col sm={12} md={6} lg={3} key={course._id}>
                        <Card
                        link={`/course/${course._id}`}
                        btn='Lihat detail'
                        category={course.category}
                        title={course.title}
                        teacher={course.teacher}
                        image={course.image}
                        />
                        </Col>
                    )
                })}
                {!hasLoad}
                </Row>
                <Row>
                    <Col className="text-center">
                        <CTA
                            variantValue='outline-secondary'
                            classValue='mb-4 ps-5 pe-5 text-black'
                            btnvalue='Lihat Semua Kursus'
                            linkValue='courses'
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Course