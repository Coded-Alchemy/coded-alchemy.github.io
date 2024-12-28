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
                            <p className="mt-2 text-white-500 mt-8">
                                As a Software Engineer with over a decade of experience, I leverage my extensive
                                background in native Android development to deliver cutting-edge and user-friendly
                                applications across diverse client domains. My proficiency spans the entire software
                                development life cycle, encompassing planning, building, testing, deployment, and
                                maintenance. Utilizing modern development practices and tools, I ensure the delivery of
                                high-quality and efficient solutions.
                            </p>

                            <p className="mt-2 text-white-500 mt-8">
                                With a keen passion for continuous learning, I actively explore and experiment with
                                emerging technologies and frameworks. This commitment to staying abreast of industry
                                trends allows me to remain at the forefront of innovation. I possess a strong
                                foundation in key areas such as Java and Kotlin for object-oriented programming, Git
                                for version control, SQL for database management, XML, JSON, and Android Studio with
                                the Android SDK for mobile application development. The Model-View-ViewModel (MVVM)
                                architecture serves as a cornerstone in my approach to crafting robust mobile
                                applications.
                            </p>
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