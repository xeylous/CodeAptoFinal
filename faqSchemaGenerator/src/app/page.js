import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";
import FAQSection from "@/components/faqsection/faqsection";
import FaqSchemaGenerator from "@/components/faqschemagenerator/faqschemagenerator";

export default function Home() {
  return (
    <div style={styles.container}>
      <header>
        <Navbar />
      </header>
      <main style={styles.mainContent}>
        <FaqSchemaGenerator />
        <br></br>
        <FAQSection />
      </main>
      <footer style={styles.footer}>
        <Footer />
      </footer>
    </div>
  );
}
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  mainContent: {
    flex: "1",
    padding: "20px",
  },
  footer: {
    marginTop: "auto",
  },
};
