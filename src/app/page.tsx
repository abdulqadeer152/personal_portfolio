import About from "./about/page";
import Main from "./component/main";
import Contact from "./contact/page";
import Project from "./project/page";
import Skills from "./skills/page";



export default function Home() {
  return (
  <div className="bg-black">
    <Main/>
    <Contact/>
    <Project/>
    <About/>
    <Skills/>
  </div>
  );
}
