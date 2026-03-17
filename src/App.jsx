import React, { Suspense } from 'react';
const Home = React.lazy(() => import('./components/home/Home'));
const Nav = React.lazy(() => import('./components/nav/Nav'));
const About = React.lazy(() => import('./components/about/About'));
const Skills = React.lazy(() => import('./components/skills/Skills'));
const Services = React.lazy(() => import('./components/services/Services'));
const Projects = React.lazy(() => import('./components/projects/Projects'));
const Context = React.lazy(() => import('./components/context/Context'));
const Footer = React.lazy(() => import('./components/footer/Footer'));

function App() {
  return (
    <>
      <div className="background-animation">
        <div className="bg-blob-1"></div>
        <div className="bg-blob-2"></div>
        <div className="bg-blob-3"></div>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Home />
        <Nav />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Context />
        <Footer />
      </Suspense>
    </>
  )
}

export default App
