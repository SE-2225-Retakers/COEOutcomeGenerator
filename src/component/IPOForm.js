import React from "react";
import { Container } from "react-bootstrap";
import CourseDropdownMenu from "./CourseDropdown";
import StudentDropdownMenu from "./StudentDropdown";
import TemplateDropdownMenu from "./TemplateDropdown";



export default function IPOForm() {
    return (
        <Container style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <CourseDropdownMenu />
            <StudentDropdownMenu />
            <TemplateDropdownMenu />
        </Container>
    )
}