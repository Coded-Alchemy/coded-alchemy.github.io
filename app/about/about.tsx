import {Footer, Header} from "~/componets";

export function AboutPage() {
    return (
        <main className="flex items-center justify-center pt-16 pb-4">
            <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
                <Header />
                {/*<div className="max-w-[300px] w-full space-y-6 px-4">*/}
                {/*    <div className="rounded-3xl border border-gray-200 p-6 dark:border-gray-700 space-y-4">*/}
                {/*        <p className="leading-6 text-gray-700 dark:text-gray-200 text-center">*/}
                {/*            Welcome to Coded Alchemy! This portfolio site is an experience in itself...*/}
                {/*        </p>*/}
                {/*        <button class="bg-sky-500 hover:bg-sky-700">Enter</button>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <Footer />
            </div>
        </main>
    );
}