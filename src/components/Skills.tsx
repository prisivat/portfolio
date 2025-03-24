import React from "react";
import { Grid } from "@mui/material";
import "../App.css"
import { ReactComponent as AngularIcon } from "../assets/angular-original.svg";
import { ReactComponent as BootStrapIcon } from "../assets/bootstrap-original.svg";
import { ReactComponent as CatalystIcon } from "../assets/catalyst.svg";
import { ReactComponent as CSSIcon } from "../assets/css3-original.svg";
import { ReactComponent as GITIcon } from "../assets/git-original.svg";
import { ReactComponent as HTMLIcon } from "../assets/html5-original.svg";
import { ReactComponent as JavaScriptIcon } from "../assets/javascript-original.svg";
import { ReactComponent as SQLIcon } from "../assets/microsoftsqlserver-plain.svg";
import { ReactComponent as MongoDBIcon } from "../assets/mongodb-original.svg";
import { ReactComponent as MuiIconIcon } from "../assets/muiIcon.svg";
import { ReactComponent as MySQLIcon } from "../assets/mysql-original.svg";
import { ReactComponent as NetlifyIcon } from "../assets/netlify-original.svg";
import { ReactComponent as PostgresqlIcon } from "../assets/postgresql-original.svg";
import { ReactComponent as ReactIcon } from "../assets/react.svg";
import { ReactComponent as SpringBootIcon } from "../assets/spring-boot.svg";
import { ReactComponent as TypeScriptIcon } from "../assets/typescript-original.svg";
import { ReactComponent as Java } from "../assets/java-icon.svg";
import { ReactComponent as DB2 } from "../assets/db2.svg";



const TechStack = () => {
    return (
        <>
            <div style={{
                width: "90%", display: "flex", alignItems: "center", justifyContent: "center",
                flexWrap: "wrap", background: " #2d2a2a", marginRight: "2rem", padding: "1rem"
            }}>
                <div style={{ fontSize: "2rem" }}><b>SKILLS</b> </div>
                <Grid container xs={12} sx={{ marginTop: "1rem", borderBottom: "2px solid white", paddingBottom: "2rem" }}>
                    <Grid item xs={12} sx={{ fontSize: "1.5rem" }}><b>Front-end </b> </Grid>
                    <Grid xs={3} sx={{ display: "flex", flexDirection: "column", alignItems: "center" }} item > <AngularIcon style={{ marginBottom: "1rem", marginTop: "1rem", width: "6rem", transition: "transform 0.3s" }} className="icon" />
                        <b>Angular </b>         </Grid>
                    <Grid xs={3} sx={{ display: "flex", flexDirection: "column", alignItems: "center" }} item > <ReactIcon style={{ marginBottom: "1rem", marginTop: "1rem", width: "6rem", height: "6rem", transition: "transform 0.3s" }} className="icon" />
                        <b>ReactJS </b>     </Grid>
                    <Grid xs={3} sx={{ display: "flex", flexDirection: "column", alignItems: "center" }} item > <HTMLIcon style={{ marginBottom: "1rem", marginTop: "1rem", width: "6rem", transition: "transform 0.3s" }} className="icon" />
                        <b>HTML </b>    </Grid>
                    <Grid xs={3} sx={{ display: "flex", flexDirection: "column", alignItems: "center" }} item > <CSSIcon style={{ marginBottom: "1rem", marginTop: "1rem", width: "6rem", transition: "transform 0.3s" }} className="icon" />
                        <b>CSS </b>     </Grid>
                    <Grid xs={3} sx={{ display: "flex", flexDirection: "column", alignItems: "center" }} item > <TypeScriptIcon style={{ marginBottom: "1rem", marginTop: "1rem", width: "6rem", transition: "transform 0.3s" }} className="icon" />
                        <b>TypeScript </b>   </Grid>
                    <Grid xs={3} sx={{ display: "flex", flexDirection: "column", alignItems: "center" }} item > <JavaScriptIcon style={{ marginBottom: "1rem", marginTop: "1rem", width: "6rem", transition: "transform 0.3s" }} className="icon" />
                        <b>JavaScript </b>   </Grid>
                    <Grid xs={3} sx={{ display: "flex", flexDirection: "column", alignItems: "center" }} item > <BootStrapIcon style={{ marginBottom: "1rem", marginTop: "1rem", width: "6rem", transition: "transform 0.3s" }} className="icon" />
                        <b>BootStrap </b>   </Grid>
                    <Grid xs={3} sx={{ display: "flex", flexDirection: "column", alignItems: "center" }} item > <MuiIconIcon style={{ marginBottom: "1rem", marginTop: "1rem", width: "6rem", height: "6rem", transition: "transform 0.3s" }} className="icon" />
                        <div style={{ fontSize: "1rem" }}>Material UI  </div> </Grid>

                </Grid>
                {/* //backend */}

                <Grid container xs={12} sx={{ marginTop: "1rem", borderBottom: "2px solid white", paddingBottom: "2rem" }}>
                    <Grid item xs={12} sx={{ fontSize: "1.5rem" }}><b>Back-end </b> </Grid>
                    <Grid xs={3} sx={{ display: "flex", flexDirection: "column", alignItems: "center" }} item > <Java style={{ marginBottom: "1rem", marginTop: "1rem", width: "6rem", height: "6rem", transition: "transform 0.3s" }} className="icon" />
                        <b>Java </b>         </Grid>
                    <Grid xs={3} sx={{ display: "flex", flexDirection: "column", alignItems: "center" }} item > <SpringBootIcon style={{ marginBottom: "1rem", marginTop: "1rem", width: "6rem", height: "6rem", transition: "transform 0.3s" }} className="icon" />
                        <b>Spring Boot  </b>   </Grid>
                </Grid>

                {/* //DB */}

                <Grid container xs={12} sx={{ marginTop: "1rem", borderBottom: "2px solid white", paddingBottom: "2rem" }}>
                    <Grid item xs={12} sx={{ fontSize: "1.5rem" }}><b>Database </b> </Grid>
                    <Grid xs={3} sx={{ display: "flex", flexDirection: "column", alignItems: "center" }} item > <MySQLIcon style={{ marginBottom: "1rem", marginTop: "1rem", width: "6rem", height: "6rem", transition: "transform 0.3s" }} className="icon" />
                        <b>MySQL </b>         </Grid>
                    <Grid xs={3} sx={{ display: "flex", flexDirection: "column", alignItems: "center" }} item > <MongoDBIcon style={{ marginBottom: "1rem", marginTop: "1rem", width: "6rem", height: "6rem", transition: "transform 0.3s" }} className="icon" />
                        <b>MongoDB </b>     </Grid>
                    <Grid xs={3} sx={{ display: "flex", flexDirection: "column", alignItems: "center" }} item > <DB2 style={{ marginBottom: "1rem", marginTop: "1rem", width: "6rem", height: "6rem", transition: "transform 0.3s", background: "white" }} className="icon" />
                        <b>IBM DB2 </b>     </Grid>
                </Grid>

                {/* //Tools */}

                <Grid container xs={12} sx={{ marginTop: "1rem", borderBottom: "2px solid white", paddingBottom: "2rem" }}>
                    <Grid item xs={12} sx={{ fontSize: "1.5rem" }}><b>Tools </b> </Grid>
                    <Grid xs={3} sx={{ display: "flex", flexDirection: "column", alignItems: "center" }} item > <GITIcon style={{ marginBottom: "1rem", marginTop: "1rem", width: "6rem", height: "6rem", transition: "transform 0.3s" }} className="icon" />
                        <b>Git & GitHub   </b>       </Grid>
                    <Grid xs={3} sx={{ display: "flex", flexDirection: "column", alignItems: "center" }} item > <NetlifyIcon style={{ marginBottom: "1rem", marginTop: "1rem", width: "6rem", height: "6rem", transition: "transform 0.3s" }} className="icon" />
                        <b>Netlify </b>     </Grid>
                    <Grid xs={3} sx={{ display: "flex", flexDirection: "column", alignItems: "center" }} item > <CatalystIcon style={{ marginBottom: "1rem", background: "white", marginTop: "1rem", width: "6rem", height: "6rem", transition: "transform 0.3s" }} className="icon" />
                        <b>Catalyst </b>     </Grid>
                </Grid>
            </div>
        </>
    );
};

export default TechStack;
