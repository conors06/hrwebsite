import { ExclamationCircleIcon, XMarkIcon } from '@heroicons/react/20/solid'

export const FailureMessage = () => {
  return (
    <div className="fixed right-4 top-4 w-96 rounded-full bg-red-600 p-4 ">
      <div className="flex">
        <div className="flex-shrink-0">
          <ExclamationCircleIcon
            className="h-5 w-5 text-red-400"
            aria-hidden="true"
          />
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium text-zinc-100">
            Failed to send, please try emailing me manually with the email in
            the get in touch section{' '}
          </p>
        </div>
      </div>
    </div>
  )
}
