import Footer from "@/components/JsonToJsonschema/footer";
import Navbar from "@/components/JsonToJsonschema/navbar";
import FAQSection from "@/components/JsonToJsonschema/faqsection";
import JSONToSchema from "@/components/JsonToJsonschema/jsontoschema";


export default function Home() {
  return (
    <div style={styles.container}>
      <header>
        <Navbar />
      </header>
      <main style={styles.mainContent}>
    <br/>    
<JSONToSchema/>
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

