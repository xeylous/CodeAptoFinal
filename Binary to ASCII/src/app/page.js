import Footer from "@/components/BinaryToASCIIConverter/footer";
import Navbar from "@/components/BinaryToASCIIConverter/navbar";
import FAQSection from "@/components/BinaryToASCIIConverter/faqsection";
import Binarytoascii from "@/components/BinaryToASCIIConverter/binarytoascii";


export default function Home() {
  return (
    <div style={styles.container}>
      <header>
        <Navbar />
      </header>
      <main style={styles.mainContent}>
        
<Binarytoascii/>
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

