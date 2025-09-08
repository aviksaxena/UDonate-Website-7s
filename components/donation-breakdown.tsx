import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

interface Program {
  name: string
  description: string
  budget: number
  beneficiaries: number
}

interface DonationBreakdownProps {
  programs: Program[]
}

export function DonationBreakdown({ programs }: DonationBreakdownProps) {
  const totalBudget = programs.reduce((sum, program) => sum + program.budget, 0)

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">How Your Donations Are Used</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {programs.map((program, index) => {
            const percentage = (program.budget / totalBudget) * 100
            return (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h4 className="font-semibold text-sm">{program.name}</h4>
                    <p className="text-xs text-muted-foreground">{program.description}</p>
                  </div>
                  <div className="text-right ml-4">
                    <div className="font-semibold text-sm">₹{program.budget.toLocaleString("en-IN")}</div>
                    <div className="text-xs text-muted-foreground">{percentage.toFixed(1)}%</div>
                  </div>
                </div>
                <Progress value={percentage} className="h-2" />
                <div className="text-xs text-muted-foreground">
                  Beneficiaries: {program.beneficiaries.toLocaleString("en-IN")}
                </div>
              </div>
            )
          })}
        </div>
        <div className="mt-6 pt-4 border-t">
          <div className="flex justify-between font-semibold">
            <span>Total Budget</span>
            <span>₹{totalBudget.toLocaleString("en-IN")}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
