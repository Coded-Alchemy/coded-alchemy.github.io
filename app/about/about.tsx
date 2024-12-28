import {Footer, Header, Navigation} from "~/componets";

export function AboutPage() {
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
            <About/>
        </div>
    );
}

function About() {
    return (
        <div className="max-w-[800px] w-full space-y-6 px-4">
            <div className="rounded-3xl border border-gray-200 p-6 dark:border-gray-700 space-y-4">
                <div className="max-w-md mx-auto overflow-hidden md:max-w-2xl">
                    <div className="md:flex">
                        <div className="p-8">
                            <h1 className="text-3xl">About</h1>
                            <p className="mt-2 text-white-500 mt-8">Since 2011 I have worked as a software engineer.
                                I have worked on web applications, but mostly my focus has been on Android apps.
                                During this time I have worked at:</p>

                            <h3 className="text-2xl mt-8">Skills</h3>
                            <p className="mt-2 text-white-500 mt-8">Since 2011 I have worked as a software engineer.
                                I have worked on web applications, but mostly my focus has been on Android apps.
                                During this time I have worked at:</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Skills() {
    return (
        <div className="max-w-[800px] w-full space-y-6 px-4 mt-12">
            <div className="rounded-3xl border border-gray-200 p-6 dark:border-gray-700 space-y-4">
                <div className="max-w-md mx-auto overflow-hidden md:max-w-2xl">
                    <div className="md:flex">
                        <div className="p-8">
                            <h1 className="text-3xl">Skills</h1>

                            <p className="mt-2 text-white-500 mt-8">Since 2011 I have worked as a software engineer.
                                I have worked on web applications, but mostly my focus has been on Android apps.
                                During this time I have worked at:</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}