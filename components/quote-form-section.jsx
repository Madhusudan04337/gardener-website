"use client"

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useActionState } from "react" // Import useActionState
import { submitQuoteForm } from "@/app/actions" // Import the server action

export function QuoteFormSection() {
  // useActionState hook to manage form submission state and feedback
  // It takes the server action and an initial state as arguments
  const [state, formAction, isPending] = useActionState(submitQuoteForm, null)

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-text-dark mb-6 text-center">Get A Free Quote</h2>
      {/* Use the formAction from useActionState as the form's action prop */}
      <form action={formAction} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          type="text"
          name="name" // Ensure name attribute matches formData.get in server action
          placeholder="Your Name"
          className="bg-gray-50 border-gray-200 p-4 rounded-md text-text-dark placeholder:text-text-light focus:border-garden-green-500 focus:ring-garden-green-500"
          required
        />
        <Input
          type="email"
          name="email" // Ensure name attribute
          placeholder="Your Email"
          className="bg-gray-50 border-gray-200 p-4 rounded-md text-text-dark placeholder:text-text-light focus:border-garden-green-500 focus:ring-garden-green-500"
          required
        />
        <Input
          type="tel"
          name="mobile" // Ensure name attribute
          placeholder="Your Mobile"
          className="bg-gray-50 border-gray-200 p-4 rounded-md text-text-dark placeholder:text-text-light focus:border-garden-green-500 focus:ring-garden-green-500"
          required
        />
        <Input
          type="text"
          name="serviceType" // Ensure name attribute
          placeholder="Service Type"
          className="bg-gray-50 border-gray-200 p-4 rounded-md text-text-dark placeholder:text-text-light focus:border-garden-green-500 focus:ring-garden-green-500"
          required
        />
        <div className="md:col-span-2">
          <Textarea
            name="message" // Ensure name attribute
            placeholder="Message"
            rows={6}
            className="bg-gray-50 border-gray-200 p-4 rounded-md text-text-dark placeholder:text-text-light resize-none focus:border-garden-green-500 focus:ring-garden-green-500"
            required
          />
        </div>
        <div className="md:col-span-2 text-center">
          <Button
            type="submit"
            className="bg-garden-green-600 hover:bg-garden-green-700 text-white px-8 py-3 rounded-full text-lg shadow-md transition-colors"
            disabled={isPending} // Disable button during submission
          >
            {isPending ? "Submitting..." : "Submit Now"}
          </Button>
        </div>
        {/* Display submission status feedback */}
        {state && state.success && (
          <p className="md:col-span-2 text-center text-garden-green-600 mt-4">{state.message}</p>
        )}
        {state && !state.success && <p className="md:col-span-2 text-center text-red-500 mt-4">{state.message}</p>}
      </form>
    </div>
  )
}
