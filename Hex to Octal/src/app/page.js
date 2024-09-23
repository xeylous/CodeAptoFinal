import Footer from "@/components/HexToOctalConverter/footer";
import Navbar from "@/components/HexToOctalConverter/navbar";
import FAQSection from "@/components/HexToOctalConverter/faqsection";
import HexToOctal from "@/components/HexToOctalConverter/hexToOctal";


export default function Home() {
  return (
    <div style={styles.container}>
      <header>
        <Navbar />
      </header>
      <main style={styles.mainContent}>
        
<HexToOctal/>
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

