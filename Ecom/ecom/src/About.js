import HeroSection from './components/HeroSection'
import { AppContext, useProductContext } from "./context/productContext";

const About = () => {
  const {myName} = useProductContext();
  console.log(myName)

  const data = {
    name: "Jason Ecommerce",
  };
  //TODO cannot provide neither data
  //nor myName into HeroSection Component

  return (
    <>
      {myName}
      <HeroSection myData={myName} />{" "}
    </>

  )
}

export default About