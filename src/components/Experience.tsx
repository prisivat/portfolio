import { Dialog, DialogContent, Grid, Modal } from "@mui/material";
import React, { useState } from "react";

const Experience = () => {
    const [openDialog, setOpenDialog] = useState(false);
    const [dialogContent, setDialogContent] = useState({});

    const openModule = (value: any) => {
        if (value == "tcs") {

        } else {

        }
        setDialogContent(value);
        setOpenDialog(true);
    }
    return (
        <>
            <div style={{
                display: "flex", alignItems: "center", justifyContent: "center",
                flexWrap: "wrap", width: "90%", marginRight: "2rem"
            }}><div style={{ fontSize: "2rem" }}><b>EXPERIENCE</b> </div>
                <Grid container sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Grid xs={5.9} onClick={() => openModule("tcs")} item sx={{ background: "#2d2a2a", marginRight: "1rem", padding: "1rem", display: "flex", justifyContent: "center" }}>
                        Tata Consultancy - System Engineer<br />
                        2023 - Present</Grid>
                    <Grid xs={5.9} onClick={() => openModule("infy")} item sx={{ background: "#2d2a2a", padding: "1rem", display: "flex", justifyContent: "center" }}>
                        Infosys - Senior Operation Executive </Grid>
                </Grid> </div>

            <Dialog open={openDialog} onClose={() => setOpenDialog(false)} >
                <DialogContent sx={{ width: "500px" }}>
                    <Grid container xs={12}>
                        <Grid item xs={12} sx={{ marginTop: "0.5rem" }} >
                            <b>Tata Consultancy</b>
                        </Grid>
                        <Grid item xs={12} sx={{ marginTop: "0.5rem" }} >
                            <b>System Engineer</b>
                        </Grid>
                        <Grid item xs={12} sx={{ marginTop: "0.5rem" }} >
                            <b>Experience: </b> Apr 2023 - Present
                        </Grid>
                        <Grid item xs={12} sx={{ marginTop: "0.5rem" }} >
                            <b>Technologies: </b> ReactJS, JQuery, Angular, HTML, CSS, Spring Boot
                        </Grid>
                        <Grid item xs={12} sx={{ marginTop: "0.5rem" }}>
                            <b>Technologies: </b> <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>•</b> Worked as a <b>Full Stack Developer</b> in a BFSI related project using React, Angular, jQuery and Spring Boot.<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>•</b> Developed and optimized <b>responsive</b> and <b>user-friendly</b> interfaces.<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>•</b> Integrated frontend with backend services and managed <b>API interactions</b>.<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>•</b> Followed <b>Agile methodology</b>, creating <b>user stories</b> and participating in sprint activities.<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>•</b> Used <b>Azure</b> for maintaining code, managing repositories, and tracking <b>user stories</b>.<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>•</b> Conducted <b>code reviews</b> and ensured best practices for scalability and performance.<br />

                        </Grid>
                    </Grid>
                </DialogContent>
            </Dialog>
        </>
    )
}
export default Experience;