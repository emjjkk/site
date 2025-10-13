import { LuUsers, LuAward, LuGraduationCap } from "react-icons/lu";
import { Button } from "./ui/button";

export default function ForEducatorsBlock() {
    return (
        <>
            <section className="w-full min-h-[80dvh] bg-gray-50 py-12 sm:py-16 lg:py-20 border-b">
                <div className="mx-auto px-4 sm:px-6 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                        <div className="bg-gray-200 h-64 sm:h-80 lg:h-96 rounded-lg bg-center bg-cover bg-[url('https://www.timeshighereducation.com/sites/default/files/styles/the_breaking_news_image_style/public/istock_000014504421small.jpg?itok=Q5lA3kIf')]"></div>

                        <div>
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-mono mb-6">Empower Your Institution</h2>
                            <p className="text-base sm:text-lg text-foreground/80 mb-8">
                                Partner with Keita to reach more students, reduce costs, and keep full control of your educational delivery.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-8 h-8 bg-white flex items-center justify-center flex-shrink-0">
                                        <LuUsers className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-1">Expand Your Audience</h4>
                                        <p className="text-sm text-foreground/70">
                                            Take your institution beyond borders with access to learners across Africa and beyond.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-8 h-8 bg-white flex items-center justify-center flex-shrink-0">
                                        <LuAward className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-1">Zero Cost</h4>
                                        <p className="text-sm text-foreground/70">
                                            Partner with Keita at no upfront cost—our platform is built to make scaling education effortless.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-8 h-8 bg-white flex items-center justify-center flex-shrink-0">
                                        <LuGraduationCap className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-1">Full Control</h4>
                                        <p className="text-sm text-foreground/70">
                                            Maintain ownership of your content, brand, and teaching style while leveraging Keita's infrastructure.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-10 text-center font-mono">
                        <Button>Partner With Us</Button>
                    </div>
                </div>
            </section>
        </>
    )
}