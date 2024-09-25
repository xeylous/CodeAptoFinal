import Footer from "@/components/XmlToJson/footer";
import Navbar from "@/components/XmlToJson/navbar";
import FAQSection from "@/components/XmlToJson/faqsection";
import MetaTagGenerator from "@/components/XmlToJson/metataggenerator";


export default function Home() {
  return (
    <div style={styles.container}>
      <header>
        <Navbar />
      </header>
      <main style={styles.mainContent}>
    <br/>    
<MetaTagGenerator/>
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

