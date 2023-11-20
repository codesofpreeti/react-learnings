import { useCallback, useState } from "react"

const PasswordGenerator = () => {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password,setPassword] = useState("");
  const passwordGen = useCallback(()=>{
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numAllowed) str+="0123456789";
    if(charAllowed) str+="!@#$%^&*()";

    

  }, [length, numAllowed, charAllowed, setPassword]);
  return (
    <>
    <h1 className="text-4xl px-0 text-center text-white">Password Generator</h1>
    </>
  )
}

export default PasswordGenerator