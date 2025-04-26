

export function HashCatnipPage() {
     return (
         <div className="max-w-[800px] w-full space-y-6 px-4">
             <div className="rounded-3xl border border-gray-200 p-6 dark:border-gray-700 space-y-4">
                 <div className="max-w-md mx-auto overflow-hidden md:max-w-2xl">
                     <div >
                         <div className="md:shrink-0">
                             <h1 className="text-3xl">Hash Catnip</h1>
                             <br/>
                             <video controls width="670" height="360">
                                 <source src="/vid/hashcatnip.mp4" type="video/mp4"/>
                                 This browser does not support the video tag.
                             </video>

                             <p className="p-8">
                                 Hash Catnip is a python utility I created that automates Hashcat usage.
                                 A detailed walkthrough amd usage explanation can be found on here: <a
                                 href="https://technofiles.hashnode.dev/hash-catnip">Hash Catnip</a>. And the source code can
                                 be found on my Github: <a href="https://github.com/Coded-Alchemy/HashCatnip">hashcatnip</a>.
                             </p>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
     );

}