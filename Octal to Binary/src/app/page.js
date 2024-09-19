import Footer from "@/components/OctalToBinaryConverter/footer";
import Navbar from "@/components/OctalToBinaryConverter/navbar";
import FAQSection from "@/components/OctalToBinaryConverter/faqsection";
import Octaltobinary from "@/components/OctalToBinaryConverter/octaltobinary";


export default function Home() {
  return (
    <div style={styles.container}>
      <header>
        <Navbar />
      </header>
      <main style={styles.mainContent}>
        
<Octaltobinary/>
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

