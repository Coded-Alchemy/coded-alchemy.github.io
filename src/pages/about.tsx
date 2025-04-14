

export function AboutPage() {
    return (
        <div className="max-w-[800px] w-full space-y-6 px-4">
            <div className="rounded-3xl border border-gray-200 p-6 dark:border-gray-700 space-y-4">
                <div className="max-w-md mx-auto overflow-hidden md:max-w-2xl">
                    <div className="md:flex">
                        <div className="p-8">
                            <h1 className="text-3xl">About Taji Abdullah</h1>
                            <p className="mt-2 text-white-500 mt-8">
                                After 10 years of building cutting-edge Android applications and delivering exceptional
                                mobile experiences, I am charting a bold new course into the field of cybersecurity.
                                My decade of experience as a software engineer has equipped me with a strong foundation
                                of transferable skills that empower me to protect and secure digital ecosystems in this
                                new role.
                            </p>

                            <div className="md:shrink-0 flex justify-center items-center">
                                <img
                                    className="h-64 w-full object-cover md:h-full md:w-64"
                                    src="/img/google-cybersecurity-certificate.png"
                                    alt="Google Cybersecurity certificate badge"
                                />
                            </div>

                            <h3 className="text-xl mt-8">Why Transition to Cybersecurity?</h3>
                            <p className="text-white-500 mt-8">
                                The rise in cyber threats has revealed the critical need for experts who can safeguard
                                sensitive information and defend against attacks. While working in mobile development, I
                                frequently encountered the need for secure coding practices and proactive threat
                                mitigation. This exposure sparked my interest in cybersecurity, driving me to pursue
                                certifications, training, and real-world projects in the field.
                            </p>

                            <div className="flex justify-center items-center mt-16">
                                <iframe
                                    src="https://tryhackme.com/api/v2/badges/public-profile?userPublicId=3514365"
                                    style={{
                                        border: 'none',
                                        width: '100%',
                                        maxWidth: '329px',
                                        height: '88px',
                                        background: 'darkgrey'
                                    }}
                                    title="TryHackMe Profile Badge"
                                ></iframe>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}