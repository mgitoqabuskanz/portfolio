import { Button } from "./components/ui/button"
import { motion } from "motion/react"
import "./index.css"

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-svh">
      <Button variant="secondary" className="cursor-pointer">Click me</Button>
    </div>
  )
}

export default App