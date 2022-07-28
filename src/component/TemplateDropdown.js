import React, {useState} from "react";
import { Dropdown, Form, ButtonGroup } from "react-bootstrap";

const templates = [{desc: "Template 1"}, {desc: "Template 2"}, {desc: "Template 3"}]

export default function TemplateDropdownMenu() {
    const [text, setText] = useState("");

    return (
        <Dropdown as={ButtonGroup} className="mb-4 me-4">
            <Form.Control placeholder="Select Template" value={text} onChange={(e) => setText(e.target.value)}></Form.Control>
            <Dropdown.Toggle style={{ maxWidth: 50 }} variant="success" id="dropdown-basic" />
            <Dropdown.Menu>
                {templates.map((template, index) => (
                    <Dropdown.Item eventKey={index}>{template.desc}</Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    )
}