import React, {ReactElement} from "react";
import Grid from '@mui/material/Grid';

interface AppLayoutProps {
    header: ReactElement,
    content: ReactElement
}

const AppLayout: React.FC <AppLayoutProps> = (props) => {
  return (
      <Grid container direction={'column'}>
          <Grid item>
              {props.header}
          </Grid>
          <Grid item>
              <Grid container direction={'row'}>
                  <Grid item xs={0} md={1} lg={2}></Grid>
                  <Grid item xs={12} md={10} lg={8}>
                      {props.content}
                  </Grid>
                  <Grid item xs={0} md={1} lg={2}></Grid>
              </Grid>
          </Grid>
      </Grid>
  );
}

export default AppLayout