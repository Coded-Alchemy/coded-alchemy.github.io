import {Footer, Header, Navigation} from "~/componets";
import {useNavigate} from "react-router";

export function HomePage() {
  return (
      <main className="flex items-center justify-center pt-16 pb-4">
          <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
              <Header/>
              <Navigation/>
              <div className="max-w-[800px] w-full space-y-6 px-4">
              <div className="rounded-3xl border border-gray-200 p-6 dark:border-gray-700 space-y-4">

                  <div className="max-w-md mx-auto overflow-hidden md:max-w-2xl">
                      <div className="md:flex">
                          <div className="md:shrink-0">
                              <img className="h-48 w-full object-cover md:h-full md:w-48"
                                   src="/public/Designer.jpeg"
                                   alt="Taji Abdullah"/>
                          </div>
                          <div className="p-8">
                              <h1 className="text-3xl">Im Taji Abdullah, software engineer, and builder of things</h1>

                              <p className="mt-2 text-white-500">Welcome to my website</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <Footer/>
      </div>
</main>
)
    ;
}

function EnterButton() {
    const navigate = useNavigate();

    function handleClick() {
        navigate("/about");
    }

    return (
        <button
            type="button"
            onClick={handleClick}
            class="bg-sky-500 hover:bg-sky-700"
        >
            Enter
        </button>
    );
}