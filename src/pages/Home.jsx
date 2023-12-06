import AvatarTyper from "../components/AvatarTyper";
import Summary from "../components/Summary"
import Skills from "../components/Skills"

const Home = () => (
    <>
        <section id="about" className="container mx-auto my-8 px-4">
            <AvatarTyper/>
            <Summary/>
            <Skills/>
        </section>
    </>
);

export default Home;