import React, { useState } from "react"

const EmailSignupForm = () => {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setMessage("")

    try {
      const response = await fetch(
        "https://api.airtable.com/v0/appgoSqN0ZFVvZzD9/tbl2gZ7iUEMUr6RVD",
        {
          method: "POST",
          headers: {
            Authorization:
              "Bearer pata6DJbkp61Emfaf.5b50be9dc01714230fdb4ac240dccf76a22bdb67142292ee427ecb3d617857cf",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fields: {
              Email: email,
            },
          }),
        }
      )

      if (response.ok) {
        setMessage("Thank you for signing up!")
        setEmail("")
      } else {
        throw new Error("Failed to submit")
      }
    } catch (error) {
      console.error("Error submitting to Airtable:", error)
      setMessage("An error occurred. Please try again.")
    }

    setIsLoading(false)
  }

  return (
    <form onSubmit={handleSubmit}>
      {message ? (
        <p className="mt-10 text-base text-white">{message}</p>
      ) : (
        <div className="flex flex-col sm:flex-row gap-4 mt-10">
          <div>
            <input
              type="email"
              className="h-12 w-full sm:w-64 border rounded-lg focus:ring-purple-500 focus:border-purple-500 focus:bg-gray-600 block px-4 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
              placeholder="name@example.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="flex items-center justify-center h-12 px-5 bg-purple-600 text-white rounded-lg hover:bg-purple-500  hover:border-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition-colors"
            disabled={isLoading}
          >
            {isLoading ? "Joining..." : "Join waiting list"}
          </button>
        </div>
      )}
    </form>
  )
}

export default EmailSignupForm
