import { CheckCircleIcon, XMarkIcon } from '@heroicons/react/20/solid'

export const SuccessMessage = () => {
  return (
    <div className="rounded-full dark:bg-green-50 bg-green-200 p-4 fixed top-4 right-4">
      <div className="flex">
        <div className="flex-shrink-0">
          <CheckCircleIcon className="h-5 w-5 text-green-400" aria-hidden="true" />
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium text-green-800">Successfully sent</p>
        </div>
      </div>
    </div>
  )
}
