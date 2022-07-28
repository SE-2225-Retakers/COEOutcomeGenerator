
import React, {useState} from "react";
import { Dropdown, Form, ButtonGroup } from "react-bootstrap";

const courses = [{ name: "BSSE" }, { name: "BSCE" }, { name: "BSChE" }]

export default function CourseDropdownMenu() {
    const [text, setText] = useState("");

    return (
        <Dropdown as={ButtonGroup} className="mb-4 me-4">
            <Form.Control placeholder="Select Course" value={text} onChange={(e) => setText(e.target.value)}></Form.Control>
            <Dropdown.Toggle style={{ maxWidth: 50 }} variant="success" id="dropdown-basic" />
            <Dropdown.Menu>
                {courses.map((course, index) => (
                    <Dropdown.Item eventKey={index}>{course.name}</Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    )
}