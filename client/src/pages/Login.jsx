import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
const Login = () => {
  const [loginInput, setLoginInput] = useState({ email: "", password: "" });
  const [signupInput, setSignupInput] = useState({
    name: "",
    email: "",
    password: "",
  });
  const changeInputHandler = (e, type) => {
    const { name, value } = e.target;
    if (type === "signup") {
      setSignupInput({ ...signupInput, [name]: value });
    } else {
      setLoginInput({ ...loginInput, [name]: value });
    }
  };

  const handleRegistration = (type) => {
    const inputData = type === "signup" ? signupInput : loginInput;
    console.log(inputData);
  };

  return (
    <div className="flex items-center w-full justify-center">
      <Tabs
        defaultValue="account"
        className="w-[400px]"
      >
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="signup">Signup</TabsTrigger>
          <TabsTrigger value="login">Login</TabsTrigger>
        </TabsList>
        <TabsContent value="signup">
          <Card>
            <CardHeader>
              <CardTitle>Signup</CardTitle>
              <CardDescription>
                Create a new account and click signup when you're done.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="name">Name</Label>
                <Input
                  onChange={(e) => changeInputHandler(e, "signup")}
                  type="text"
                  placeholder="eg. Samarth"
                  name="name"
                  value={signupInput.name}
                  required="true"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="username">Username</Label>
                <Input
                  onChange={(e) => changeInputHandler(e, "signup")}
                  name="email"
                  value={signupInput.email}
                  type="email"
                  placeholder="username@gmail.com"
                  required="true"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="username">Password</Label>
                <Input
                  onChange={(e) => changeInputHandler(e, "signup")}
                  name="password"
                  value={signupInput.password}
                  type="password"
                  placeholder="password"
                  required="true"
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={(e) => handleRegistration("signup")}>
                Signup
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="login">
          <Card>
            <CardHeader>
              <CardTitle>Login</CardTitle>
              <CardDescription>
                Login your password here. After signup,you'll be logged in.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label>Email</Label>
                <Input
                  onChange={(e) => changeInputHandler(e, "login")}
                  name="email"
                  value={loginInput.email}
                  placeholder="Enter your email"
                  type="email"
                />
              </div>
              <div className="space-y-1">
                <Label>New password</Label>
                <Input
                  onChange={(e) => changeInputHandler(e, "login")}
                  name="password"
                  value={loginInput.password}
                  type="password"
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={(e) => handleRegistration("login")}>
                Login
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Login;
