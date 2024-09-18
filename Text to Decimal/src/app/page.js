import Footer from "@/components/TextToDecimalConverter/footer";
import Navbar from "@/components/TextToDecimalConverter/navbar";
import FAQSection from "@/components/TextToDecimalConverter/faqsection";
import Texttodecimal from "@/components/TextToDecimalConverter/texttodecimal";


export default function Home() {
  return (
    <div style={styles.container}>
      <header>
        <Navbar />
      </header>
      <main style={styles.mainContent}>
        
<Texttodecimal/>
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

