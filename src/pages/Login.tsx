
import image from '../assets/image.jpg'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { Button } from "@/components/ui/button"
function Login() {


  return (
  <div  className="flex ">
    <div >
    <Card className="w-[550px] bg-pink-200">
      <CardHeader>
        <CardTitle className='font-bold text-3xl'>login page</CardTitle>
        <CardDescription>please information is required</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Email</Label>
              <Input id="name" placeholder="please enter your email" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">password</Label>
              <Input id="name" placeholder="please enter your password" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Annuler</Button>
        <Button variant="outline">sign in</Button>
       
      </CardFooter>
    </Card>
    </div>
     <div className="w-[230px] h-[50px]" >
      <img src={image} className='rounded-3xl'/>
     </div>
  </div>

)
}

export default Login