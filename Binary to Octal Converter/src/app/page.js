import Footer from "@/components/BinaryToOctalConverter/footer";
import Navbar from "@/components/BinaryToOctalConverter/navbar";
import FAQSection from "@/components/BinaryToOctalConverter/faqsection";
import Binarytooctal from "@/components/BinaryToOctalConverter/binarytooctal";


export default function Home() {
  return (
    <div style={styles.container}>
      <header>
        <Navbar />
      </header>
      <main style={styles.mainContent}>
        
<Binarytooctal/>
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

