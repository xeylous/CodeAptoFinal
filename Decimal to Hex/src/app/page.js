import Footer from "@/components/DecimalToHexConverter/footer";
import Navbar from "@/components/DecimalToHexConverter/navbar";
import FAQSection from "@/components/DecimalToHexConverter/faqsection";
import DecimalToHex from "@/components/DecimalToHexConverter/decimalToHex";


export default function Home() {
  return (
    <div style={styles.container}>
      <header>
        <Navbar />
      </header>
      <main style={styles.mainContent}>
        
<DecimalToHex/>
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

