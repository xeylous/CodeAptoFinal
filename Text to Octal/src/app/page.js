import Footer from "@/components/TextToOctalConverter/footer";
import Navbar from "@/components/TextToOctalConverter/navbar";
import FAQSection from "@/components/TextToOctalConverter/faqsection";
import Texttooctal from "@/components/TextToOctalConverter/texttooctal";


export default function Home() {
  return (
    <div style={styles.container}>
      <header>
        <Navbar />
      </header>
      <main style={styles.mainContent}>
        
<Texttooctal/>
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

