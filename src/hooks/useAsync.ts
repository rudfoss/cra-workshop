import { useState, useEffect, useCallback } from "react"

/**
 * Provides state values for monitoring an async operation like a fetch.
 * @param asyncFunction 
 * @param immediate 
 */
export const useAsync = <TResult = any>(asyncFunction: () => Promise<TResult>, immediate = true) => {
  const [status, setStatus] = useState<"idle" | "pending" | "success" | "error">("idle")
  const [value, setValue] = useState<TResult | undefined>(undefined)
  const [error, setError] = useState<any>(undefined)

  const execute = useCallback(async () => {
    setStatus("pending")
    setError(undefined)

		try {
			setValue(await asyncFunction())
			setStatus("success")
		} catch (error) {
			setError(error)
			setValue(undefined)
		}
  }, [asyncFunction])

	useEffect(() => {
    if (immediate) {
      execute()
    }
  }, [execute, immediate])

  return { execute, status, value, error }
}