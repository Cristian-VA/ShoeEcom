
 
import { Progress } from "@/components/ui/progress"
 
export function CompletionBar({progress}:{progress:number}) {
 

 
  return <Progress value={progress} className="w-full" />
}