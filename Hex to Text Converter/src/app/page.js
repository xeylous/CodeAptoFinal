import Footer from "@/components/HexToTextConverter/footer";
import Navbar from "@/components/HexToTextConverter/navbar";
import FAQSection from "@/components/HexToTextConverter/faqsection";
import Hextotext from "@/components/HexToTextConverter/hextotext";


export default function Home() {
  return (
    <div style={styles.container}>
      <header>
        <Navbar />
      </header>
      <main style={styles.mainContent}>
        
<Hextotext/>
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

