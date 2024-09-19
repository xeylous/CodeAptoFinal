import Footer from "@/components/HexToBinaryDecimalConverter/footer";
import Navbar from "@/components/HexToBinaryDecimalConverter/navbar";
import FAQSection from "@/components/HexToBinaryDecimalConverter/faqsection";
import Hextobinarydecimal from "@/components/HexToBinaryDecimalConverter/hextobinarydecimal";


export default function Home() {
  return (
    <div style={styles.container}>
      <header>
        <Navbar />
      </header>
      <main style={styles.mainContent}>
        
<Hextobinarydecimal/>
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

