import Footer from "@/components/DecimalToOctalConverter/footer";
import Navbar from "@/components/DecimalToOctalConverter/navbar";
import FAQSection from "@/components/DecimalToOctalConverter/faqsection";
import Decimaltooctal from "@/components/DecimalToOctalConverter/decimaltooctal";


export default function Home() {
  return (
    <div style={styles.container}>
      <header>
        <Navbar />
      </header>
      <main style={styles.mainContent}>
        
<Decimaltooctal/>
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

