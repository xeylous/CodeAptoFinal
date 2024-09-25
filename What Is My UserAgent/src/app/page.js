import Footer from "@/components/Xmltojson/footer";
import Navbar from "@/components/Xmltojson/navbar";
import FAQSection from "@/components/Xmltojson/faqsection";
import WhatIsMyUserAgent from "@/components/Xmltojson/whatIsMyUserAgent";

export default function Home() {
  return (
    <div style={styles.container}>
      <header>
        <Navbar />
      </header>
      <main style={styles.mainContent}>
    <br/> <br/>   
<WhatIsMyUserAgent/>
<br></br>
        <FAQSection/>
      </main>
      <footer style={styles.footer}>
        <Footer />
      </footer>
    </div>
  );
}
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  mainContent: {
    flex: '1',
    padding: '20px',
  },
  footer: {
    marginTop: 'auto',
  },
};

