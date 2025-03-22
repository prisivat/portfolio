import React from "react";
import { Grid } from "@mui/material";
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



const TechStack = () => {
    return (
        <>
            <Grid container xs={12} sx={{ marginTop: "10rem" }}>
                <Grid item xs={12}> DBS </Grid>
                <   Grid xs={3} item > <MongoDBIcon /> mongo         </Grid>
                <Grid xs={3} item > <MongoDBIcon />   a     </Grid>
                <Grid xs={3} item > <MongoDBIcon />   as     </Grid>
                <Grid xs={3} item > <MongoDBIcon />  ad      </Grid>
                <Grid xs={3} item > <MongoDBIcon />     ad   </Grid>

            </Grid>
        </>
    );
};

export default TechStack;
