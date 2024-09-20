import Footer from "@/components/OctalToHexConverter/footer";
import Navbar from "@/components/OctalToHexConverter/navbar";
import FAQSection from "@/components/OctalToHexConverter/faqsection";
import Octaltohex from "@/components/OctalToHexConverter/octaltohex";


export default function Home() {
  return (
    <div style={styles.container}>
      <header>
        <Navbar />
      </header>
      <main style={styles.mainContent}>
        
<Octaltohex/>
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

