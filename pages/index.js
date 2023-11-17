import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Video from "../components/Video";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Video App</title>
      </Head>

      {/* HEADER */}
      <Header />

      {/* NAVBAR */}
      <Nav />

      {/*VIDEOS */}
      <Video />

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
