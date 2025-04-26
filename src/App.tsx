import {Routes, Route} from 'react-router-dom';
import './App.css'
import {Header} from "./components/header.tsx";
import {Footer} from "./components/footer.tsx";
import {Navigation} from "./components/navigation.tsx";
import {HomePage} from "./pages/home.tsx";
import {AboutPage} from "./pages/about.tsx";
import {CertificationPage} from "./pages/certification.tsx";
import {HashCatnipPage} from "./pages/hashcatnip.tsx";

// This is the application entry point.

export default function App() {
    return (
        <div className="flex items-center justify-center pt-16 pb-4">
            <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
                <Header/>
                <Navigation/>
                <main>
                    <Routes>
                        <Route path="/" element={<HomePage/>}/>
                        <Route path="about" element={<AboutPage/>}/>
                        <Route path="certification" element={<CertificationPage/>}/>
                        <Route path="hashcatnip" element={<HashCatnipPage/>}/>
                    </Routes>
                </main>
                <Footer/>
            </div>
        </div>
    )
}
