import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import ScrollToTop from './components/layout/ScrollToTop'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Faq = lazy(() => import('./pages/Faq'))
const Partners = lazy(() => import('./pages/Partners'))
const WhyRise = lazy(() => import('./pages/WhyRise'))
const Programs = lazy(() => import('./pages/Programs'))
const Academy = lazy(() => import('./pages/Academy'))

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Suspense fallback={<div className="flex h-screen items-center justify-center">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/why-rise" element={<WhyRise />} />
            <Route path="/why-rise-networks" element={<WhyRise />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/academy" element={<Academy />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/partners" element={<Partners />} />
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  )
}

export default App
