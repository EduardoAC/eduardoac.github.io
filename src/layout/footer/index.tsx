import React from "react";
import {
  Container,
  Grid,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  Link,
} from "@mui/material";
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}.
    </Typography>
  );
}

export function Footer() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        backgroundColor: "secondary.main",
        paddingTop: "1rem",
        paddingBottom: "1rem",
        bottom: 0,
      }}
    >
      <Grid
        container
        direction="row"
        alignItems="baseline"
        justifyContent="space-evenly"
      >
        <Grid item xs={4}>
          <Typography variant="h5">Navigation</Typography>
          <List>
            <ListItem>
              <Link href="blog/index">Business And Technology blog</Link>
            </ListItem>
            <ListItem>
              <Link href="forum/index">The brainstorming forum</Link>
            </ListItem>
            <ListItem>
              <Link href="pages/about">About me</Link>
            </ListItem>
            <ListItem>
              <Link href="pages/contact">Contact</Link>
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h5">My background</Typography>
          <List>
            <ListItem>
              <Link href="pages/frontend-profile">As frontend developer</Link>
            </ListItem>
            <ListItem>
              <Link href="pages/software-architect-profile">
                As software architect
              </Link>
            </ListItem>
            <ListItem>
              <Link href="pages/backend-profile">As backend developer</Link>
            </ListItem>
            <ListItem>
              <Link href="pages/my-experience">My work experience</Link>
            </ListItem>
            <ListItem>
              <Link href="pages/my-projects">
                Projects, hackathons and ideas
              </Link>
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h5">Useful links</Typography>
          <List>
            <ListItem>
              <Link href="https://github.com/EduardoAC" target="blank">
                Check me out on GitHub
              </Link>
            </ListItem>
            <ListItem>
              <Link href="http://www.tuocio.org" target="blank">
                TuOcio - Tools for event organizer
              </Link>
            </ListItem>
            <ListItem>
              <Link href="http://www.dreammakerfactory.com" target="blank">
                Dream Maker Factory
              </Link>
            </ListItem>
          </List>
        </Grid>
      </Grid>
      <Container maxWidth="sm">
        <Typography color="textSecondary" variant="subtitle1">
          {`${new Date().getFullYear()} | React | Material UI | React Router`}
        </Typography>
        <Copyright />
      </Container>
    </Box>
  );
}
