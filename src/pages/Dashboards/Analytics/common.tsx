import { CheckCircle2, XCircle } from "lucide-react"

export const getStatus = (status: string) => {
  if (status === "Paid") return (
    <span className="inline-flex items-center px-2.5 py-0.5 text-xs font-medium rounded border border-transparent dark:border-transparent bg-cyan-100  text-cyan-500 dark:bg-cyan-500/20">
      <CheckCircle2 className="size-3 ltr:mr-1 rtl:ml-1"></CheckCircle2>
      {status}
    </span>
  )
  if (status === "Deposited") return (
    <span className="inline-flex items-center px-2.5 py-0.5 text-xs font-medium rounded border border-transparent dark:border-transparent bg-yellow-100  text-yellow-500 dark:bg-yellow-500/20">
      <CheckCircle2 className="size-3 ltr:mr-1 rtl:ml-1"></CheckCircle2>
      {status}
    </span>
  )
  if (status === "Shipped") return (
    <span className="inline-flex items-center px-2.5 py-0.5 text-xs font-medium rounded border border-transparent dark:border-transparent bg-purple-100  text-purple-500 dark:bg-purple-500/20">
      <XCircle className="size-3 ltr:mr-1 rtl:ml-1"></XCircle >
      {status}
    </span >
  )
  return (
    <span className="inline-flex items-center px-2.5 py-0.5 text-xs font-medium rounded border border-transparent dark:border-transparent bg-green-100  text-green-500 dark:bg-green-500/20">
      <CheckCircle2 className="size-3 ltr:mr-1 rtl:ml-1"></CheckCircle2>
      {status}
    </span>
  )
}