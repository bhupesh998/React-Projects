
import Accordian from "./components/Accordian/Accordian";
import SearchableList from "./components/SearchableList/SearchableList";
import Place from "./PlaceComponent";
import { PLACES } from "./places";



function App() {
  return <main>
    <section>
      <h2>Why Work With Us!</h2>
      <Accordian className="accordian">
        <Accordian.Item id="experience" className="accordian-item">
          <Accordian.Title  className="accordian.item-title">we have 20 yr of expirence</Accordian.Title>
          <Accordian.Content className="accordian.item-content">
            <article>
              <p>you can't go wrong with us</p>
              <p>we are in this bussiness for long</p>
            </article>
          </Accordian.Content>

        </Accordian.Item>
        <Accordian.Item id="people" className="accordian-item">
          <Accordian.Title className="accordian.item-title">we are working with local guide</Accordian.Title>
          <Accordian.Content className="accordian.item-content">
            <article>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni eaque beatae quae esse odio facere vitae impedit necessitatibus dolorum. Quidem.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </article>
          </Accordian.Content>

        </Accordian.Item>

      </Accordian>
    </section>
    <section>
      <SearchableList items={PLACES} itemKeyFn={(item)=> item.id} >
        { (item)=> <Place item={item}/> }
      </SearchableList>
      <SearchableList items={["item1" , "item2"]} itemKeyFn={(item)=> item}>
      { (item)=> item }
      </SearchableList>
    </section>
  </main>
}

export default App;
