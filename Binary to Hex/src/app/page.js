import Footer from "@/components/BinaryToHexConverter/footer";
import Navbar from "@/components/BinaryToHexConverter/navbar";
import FAQSection from "@/components/BinaryToHexConverter/faqsection";
import BinaryToHex from "@/components/BinaryToHexConverter/binaryToHex";


export default function Home() {
  return (
    <div style={styles.container}>
      <header>
        <Navbar />
      </header>
      <main style={styles.mainContent}>
        
<BinaryToHex/>
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

