import {useEffect} from "react";
import {Footer, Header, Navigation} from "~/componets";

export function HomePage() {
    return (
        <main className="flex items-center justify-center pt-16 pb-4">
            <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
                <Header/>
                <Navigation/>
                <Content/>
                <Footer/>
            </div>
        </main>
    );
}

function Content() {
    useTypewriterEffect(".typewriter");
    return (
        <div className="max-w-[800px] w-full space-y-6 px-4">
            <div className="rounded-3xl border border-gray-200 p-6 dark:border-gray-700 space-y-4">
                <div className="max-w-md mx-auto overflow-hidden md:max-w-2xl">
                    <div className="md:flex">
                        <div className="md:shrink-0">
                            <img
                                className="h-64 w-full object-cover md:h-full md:w-64"
                                src="/app/home/Designer.jpeg"
                                alt="Taji Abdullah"
                            />
                        </div>
                        <div className="p-8">
                            <h1 className="text-3xl typewriter text-center"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function useTypewriterEffect(selector: string) {
    useEffect(() => {
        const dataText = [
            "Im Taji Abdullah",
            "software engineer",
            "and builder of things.",
            "Welcome to my website!",
        ];

        function typeWriter(text: string, i: number, fnCallback?: () => void): void {
            const element = document.querySelector(selector);
            if (element) {
                if (i < text.length) {
                    element.innerHTML =
                        text.substring(0, i + 1) + '<span aria-hidden="true"></span>';
                    setTimeout(() => typeWriter(text, i + 1, fnCallback), 100);
                } else if (fnCallback) {
                    setTimeout(fnCallback, 700);
                }
            }
        }

        function startTextAnimation(i: number): void {
            if (i >= dataText.length) {
                setTimeout(() => startTextAnimation(0), 20000);
                return;
            }
            if (dataText[i]) {
                typeWriter(dataText[i], 0, () => startTextAnimation(i + 1));
            }
        }

        startTextAnimation(0);
    }, [selector]);
}
