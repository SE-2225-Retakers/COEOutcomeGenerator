import React, {useState} from "react";
import { Dropdown, Form, ButtonGroup } from "react-bootstrap";

const students = [{name: "Dominic Bernas"}, {name: "Renzo Laporno"}, {name:"George Abaygar"}]

export default function StudentDropdownMenu() {
    const [text, setText] = useState("");

    return (
        <Dropdown as={ButtonGroup} className="mb-4 me-4">
            <Form.Control placeholder="Select Student" value={text} onChange={(e) => setText(e.target.value)}></Form.Control>
            <Dropdown.Toggle style={{ maxWidth: 50 }} variant="success" id="dropdown-basic" />
            <Dropdown.Menu>
                {students.map((student, index) => (
                    <Dropdown.Item eventKey={index}>{student.name}</Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    )
}