import {Footer, Header, Navigation} from "~/componets";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export function CertificationPage() {
    return (
        <div className="flex items-center justify-center pt-16 pb-4">
            <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
                <Header/>
                <Navigation />
                <main>
                    <Content/>
                </main>
                <Footer/>
            </div>
        </div>
    );
}

function Content() {
    const images = [
        "app/certification/img/google_cs.png",
        "app/certification/img/thm_aoc.png",
        "app/certification/img/critical_thinking_problem_solving.png",
        "app/certification/img/strategic_thinking.png",
        "app/certification/img/how-to-be-more-strategic.png",
        "app/certification/img/emotional_intelligence.png",
        "app/certification/img/active_listening.png",
        "app/certification/img/big_goals.png"
    ];

    return (
        <div className="max-w-[800px] w-full space-y-6 px-4">
            <div className="rounded-3xl border border-gray-200 p-6 dark:border-gray-700 space-y-4">
                <div className="box">
                    <Carousel useKeyboardArrows={true}>
                        {images.map((URL, index) => (
                            <div className="slide">
                                <img alt="sample_file" src={URL} key={index}/>
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>
        </div>
    );
}