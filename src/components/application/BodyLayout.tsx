import React, {ReactElement} from "react";
import Grid from '@mui/material/Grid';

interface BodyLayoutProps {
    left: ReactElement,
    right: ReactElement
}

const BodyLayout: React.FC <BodyLayoutProps> = (props) => {
    return (
        <Grid container direction={'row'}>
            < Grid item xs={12} md={3}>
                {props.left}
            </Grid>
            < Grid item xs={12} md={9}>
                {props.right}
            </Grid>
        </Grid>
    );
}

export default BodyLayout