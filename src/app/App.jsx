import ContactUs from './sections/ContactUs';
import Fitur from './sections/Fitur';
import Hero from './sections/Hero';
import PriceList from './sections/PriceList';
import WhyUs from './sections/WhyUs';

const App = () => {
  return (
    <div className="bg-dark-secondary space-y-10">
      <section className="w-full">
        <Hero />
      </section>
      <section className="px-[9.4rem] w-full" id="fitur">
        <Fitur />
      </section>
      <section className="px-[9.4rem] w-full">
        <WhyUs />
      </section>
      <section className="px-[9.4rem] w-full">
        <PriceList />
      </section>
      <section className="px-[9.4rem] w-full mb-10">
        <ContactUs />
      </section>
    </div>
  );
};

export default App;
