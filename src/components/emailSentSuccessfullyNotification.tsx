import { CheckCircleIcon } from '@heroicons/react/20/solid'
import { useState, useEffect } from 'react'

export const SuccessMessage = () => {
    const [isVisible, setIsVisible] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false)
        }, 5000)

        return () => clearTimeout(timer)
    }, [])

    return (
        <>
            {isVisible && (
                <div className="fixed right-4 top-4 rounded-full bg-green-200 p-4 dark:bg-green-50">
                    <div className="flex">
                        <div className="flex-shrink-0">
                            <CheckCircleIcon
                                className="h-5 w-5 text-green-400"
                                aria-hidden="true"
                            />
                        </div>
                        <div className="ml-3">
                            <p className="text-sm font-medium text-green-800">
                                Successfully sent
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
