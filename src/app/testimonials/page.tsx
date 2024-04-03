import { Container } from '@/components/Container'
import Image from 'next/image';
import sjogLogo from '@/images/logos/sjog.jpg';
import childVisionLogo from '@/images/logos/childvision.jpg';

function classNames(...classes: any[]): string {
    return classes.filter(Boolean).join(' ')
}

export default function Testimonials() {
    return (
        <Container className="mt-16 sm:mt-32">
            <div className="relative isolate bg-white dark:bg-zinc-900  pb-32 pt-24 sm:pt-32">
                {/* Background pattern */}
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-xl text-center">
                        <p className="mt-2 text-3xl dark:text-zinc-100 font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Testimonials
                        </p>
                    </div>
                    <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-2 sm:gap-16 xl:mx-0 xl:max-w-none xl:grid-cols-2">
                        <figure className="rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/5">
                            <blockquote className="p-6 min text-lg font-semibold leading-7 tracking-tight text-gray-900 sm:p-12 sm:text-xl sm:leading-8">
                                <p>{`"Anna Marie is the person you want to meet when you require HR support services. Anna Marie fosters a healthy work environment that attracts and inspires excellence in people. Anna Marie is not a custodian of the HR Policies but can implement the policies in a way that informs, and promotes feedback and real staff engagement which is very difficult to do. Anna Marie does this naturally, she has true integrity and her knowledge across the broad sector of HR is a real loss to our organisation but a major benefit to those who work with Anna Marie now and in the future."`}</p>
                            </blockquote>
                            <figcaption className="flex flex-wrap items-center gap-x-4 gap-y-4 border-t border-gray-900/10 px-6 py-4 sm:flex-nowrap">
                                <Image className="h-10 w-auto flex-none" src={sjogLogo} alt="St John of God Logo" width={40} height={10} />
                                <div className="flex-auto">
                                    <div className="font-semibold">{"Natalie Sheils"}</div>
                                    <div className="text-gray-600">{"Operations Manager, St John of God Community Services"}</div>
                                </div>
                            </figcaption>
                        </figure>
                        <figure className="rounded-2xl h-98 bg-white shadow-lg ring-1 ring-gray-900/5">
                            <blockquote className="p-6 text-lg font-semibold leading-7 tracking-tight text-gray-900 sm:p-12 sm:text-xl sm:leading-8">
                                <p>{`"I have been more than happy with the quality of Anna Marie’s work. Anna Marie is an absolute professional, nothing phases her. In addition to having a very impressive HR knowledge-base, Anna Marie is pragmatic, cogent and very personally engaging, putting people at their ease, something which is invaluable when having potentially difficult conversations."`}</p>
                            </blockquote>
                            <figcaption className="flex flex-wrap items-center gap-x-4 gap-y-4 border-t border-gray-900/10 px-6 py-4 sm:flex-nowrap">
                                <Image className="h-10 w-auto flex-none" src={childVisionLogo} alt="St John of God Logo" width={40} height={10} />
                                <div className="flex-auto">
                                    <div className="font-semibold">{"James Forbes"}</div>
                                    <div className="text-gray-600">{"Director of Care, ChildVision, National Education Centre for Blind Children"}</div>
                                </div>
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </div>
        </Container>
    )
}