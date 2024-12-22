import Accordian from "./components/Accordian/Accordian";

function App() {
  return <main>
    <section>
      <h2>Why Work With Us!</h2>
      <Accordian className="accordian" >
          <Accordian.Item id="experience" title="we have 20 yr of expirence">
            <article>
              <p>you can't go wrong with us</p>
              <p>we are in this bussiness for long</p>
            </article>
          </Accordian.Item>
          <Accordian.Item id="people" title="we are working with local guide">
            <article>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni eaque beatae quae esse odio facere vitae impedit necessitatibus dolorum. Quidem.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </article>
          </Accordian.Item>

      </Accordian>
    </section>
  </main>
}

export default App;
