import { Accordion, AccordionDetails, AccordionSummary, Grid, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React, { useState } from "react";

const Experience = () => {
    const [expanded, setExpanded] = useState<string | false>(false);

    const handleChange = (panel: string) => (
        event: React.SyntheticEvent,
        isExpanded: boolean
    ) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div style={{
            display: "flex", alignItems: "center", justifyContent: "center",
            flexDirection: "column", width: "90%", margin: "2rem auto"
        }}>
            <div style={{ fontSize: "2rem", marginBottom: "1rem" }}><b>EXPERIENCE</b></div>

            <Accordion
                expanded={expanded === 'tcs'}
                onChange={handleChange('tcs')}
                sx={{ background: "#2d2a2a", color: "#fff", width: "100%", marginBottom: "1rem" }}
            >
                <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}>
                    <Typography><b>Tata Consultancy - System Engineer</b> (2023 - Present)</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ borderTop: "1px solid #c6c6cc", paddingTop: "1rem" }}>
                    <Grid container spacing={1}>
                        <Grid item xs={12}><b>Technologies:</b> ReactJS, JQuery, Angular, HTML, CSS, Spring Boot</Grid>
                        <Grid item xs={12}>
                            <b>Responsibilities:</b>
                            <ul>
                                <li>Worked as a <b>Full Stack Developer</b> in a BFSI project using React, Angular, jQuery and Spring Boot.</li>
                                <li>Developed and optimized <b>responsive</b> and <b>user-friendly</b> interfaces.</li>
                                <li>Integrated frontend with backend services and managed <b>API interactions</b>.</li>
                                <li>Followed <b>Agile methodology</b>, creating user stories and participating in sprint activities.</li>
                                <li>Used <b>Azure</b> for maintaining code, managing repositories, and tracking <b>user stories</b>.</li>
                                <li>Conducted <b>code reviews</b> and ensured best practices for scalability and performance.</li>
                            </ul>
                        </Grid>
                    </Grid>
                </AccordionDetails>
            </Accordion>

            <Accordion
                expanded={expanded === 'infy'}
                onChange={handleChange('infy')}
                sx={{ background: "#2d2a2a", color: "#fff", width: "100%" }}
            >
                <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}>
                    <Typography><b>Infosys - Senior Operation Executive</b> (2021 - 2023)</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ borderTop: "1px solid #c6c6cc", paddingTop: "1rem" }}>
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <b>Responsibilities:</b>
                            <ul> 
                            <li>Worked as a Full Stack Developer, mainly focused on Spring Boot for backend development.</li>
                            <li>Built and supported a few Angular screens for the frontend.</li>
                            <li>Converted legacy mainframe app to a modern web-based system. </li>
                            <li>Designed and developed 50+ screens across 20+ Agile sprints. </li>
                            <li>Used VersionOne (V1) for user story tracking and Analyzed 30+ user requirements to create technical designs. </li>
                            <li>Wrote 100+ unit test cases to check backend, and database.</li>
                            <li>Participated in code reviews and ensured backend code quality and performance.</li>

                            
                            </ul>
                        </Grid>
                    </Grid>
                </AccordionDetails>
            </Accordion>
        </div>
    );
};

export default Experience;
