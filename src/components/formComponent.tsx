'use client'
import { useState } from 'react'
import { SuccessMessage } from '@/components/emailSentSuccessfullyNotification'
import { FailureMessage } from '@/components/emailSentFailedNotification'
import { sendEmail } from '@/components/sendEmail'

export const FormComponent = () => {
    const [emailSent, setEmailSent] = useState<boolean | null>(null)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const result = await sendEmail(formData)
        setEmailSent(result)
    }

    return (
        <>
            {emailSent === true && <SuccessMessage />}
            {emailSent === false && <FailureMessage />}
            <form
                        onSubmit={handleSubmit}
                        className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48"
                    >
                        <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
                            <div className="sm:col-span-2">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-semibold leading-6 text-gray-900 dark:text-zinc-100"
                                    >
                                        Name
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            autoComplete="name"
                                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:text-zinc-100"
                                        />
                                    </div>
                                </div>
                                <div className="mt-2.5 sm:col-span-2">
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-semibold leading-6 text-gray-900 dark:text-zinc-100 "
                                    >
                                        Email
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            autoComplete="email"
                                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:text-zinc-100"
                                        />
                                    </div>
                                </div>
                                <div className="mt-2.5 sm:col-span-2">
                                    <label
                                        htmlFor="phone-number"
                                        className="block text-sm font-semibold leading-6 text-gray-900 dark:text-zinc-100"
                                    >
                                        Phone number
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            type="tel"
                                            name="phone-number"
                                            id="phone-number"
                                            autoComplete="tel"
                                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:text-zinc-100"
                                        />
                                    </div>
                                </div>
                                <div className="mt-2.5 sm:col-span-2">
                                    <label
                                        htmlFor="message"
                                        className="block text-sm font-semibold leading-6 text-gray-900 dark:text-zinc-100"
                                    >
                                        Message
                                    </label>
                                    <div className="mt-2.5">
                                        <textarea
                                            name="message"
                                            id="message"
                                            rows={4}
                                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            defaultValue={''}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-8 flex justify-end">
                                <button
                                    type="submit"
                                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Send message
                                </button>
                            </div>
                        </div>
                    </form>
        </>
    )
}