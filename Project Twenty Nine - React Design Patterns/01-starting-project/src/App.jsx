import Accordian from "./components/Accordian/Accordian";
import AccordianItem from "./components/Accordian/AccordianItem";


AccordianItem
function App() {
  return <main>
    <section>
      <h2>Why Work With Us!</h2>
      <Accordian className="accordian" >
          <AccordianItem id="experience" title="we have 20 yr of expirence">
            <article>
              <p>you can't go wrong with us</p>
              <p>we are in this bussiness for long</p>
            </article>
          </AccordianItem>
          <AccordianItem id="people" title="we are working with local guide">
            <article>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni eaque beatae quae esse odio facere vitae impedit necessitatibus dolorum. Quidem.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </article>
          </AccordianItem>

      </Accordian>
    </section>
  </main>
}

export default App;
