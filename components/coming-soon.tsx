import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Construction } from 'lucide-react'

export function ComingSoon() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50/50">
      <Card className="mx-auto max-w-md p-6 text-center">
        <div className="mb-6 flex justify-center">
          <Construction className="h-12 w-12 text-blue-600" />
        </div>
        <h1 className="mb-2 text-2xl font-bold">Coming Soon</h1>
        <p className="mb-6 text-slate-600">
          We're working hard to bring you an amazing feedback analytics dashboard. Stay tuned!
        </p>
        <Button
          className="bg-blue-600 hover:bg-blue-700"
          onClick={() => window.location.reload()}
        >
          Check Again
        </Button>
      </Card>
    </div>
  )
}

