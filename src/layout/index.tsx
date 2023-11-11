import { Container } from "@mui/material";
import { Header } from "./header";
import { Outlet } from "react-router-dom";
import { Footer } from "./footer";

export function Layout() {
  return (
    <>
      <Container maxWidth="sm">
        <Header />
        <main>
          <Outlet />
        </main>
      </Container>
      <Footer />
    </>
  );
}
