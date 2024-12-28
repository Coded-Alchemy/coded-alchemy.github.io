import {Footer, Header, Navigation} from "~/componets";

export function CertificationPage() {
    return (
        <main className="flex items-center justify-center pt-16 pb-4">
            <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
                <Header/>
                <Navigation />
                <Content/>
                <Footer/>
            </div>
        </main>
    );
}

function Content() {
    return (
        <div>
        </div>
    );
}