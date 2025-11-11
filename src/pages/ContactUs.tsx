import "./Page.css";
import Introduction from "../components/Introduction";
import Contact from "../components/Contact";

export default function ContactUs() {

  return (
    <section className="page home-page">
      <div className="container">
        <Introduction />
        <Contact /> 
      
      </div>
    </section>
  );
}
