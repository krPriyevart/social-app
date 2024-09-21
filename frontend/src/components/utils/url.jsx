import { useState, useCallback, useEffect, useRef } from 'react'
import { Copy } from 'lucide-react';



function Url() {
  const [length, setLength] = useState(6)
  const [numberAllowed, setNumberAllowed] = useState(true);
 
  const [password, setPassword] = useState("")

  //useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "abcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
  

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
      
    }

    setPassword("https://social-app/"+pass)


  }, [length, numberAllowed,  setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed,  passwordGenerator])
  return (
    <>
 
    <div className="w-80 h-10  bg-[#044b09] text-[#00FF09] p-2 rounded-sm mx-5 absolute right-0 overflow-hidden ">
        <input
            type="text"
            value={password}
            className="outline-none w-full pb-1 px-3 bg-[#044b09] text-[#00FF09]"
            placeholder="Password"
            readOnly
            ref={passwordRef}
        />
    <div onClick={copyPasswordToClipboard} className='w-14 h-10 p-2 px-4 bg-[#044b09] border-l-0 absolute right-0 top-0 border-[#0b6b10]'><Copy /></div>

    </div>


</> 
  )
}

export default Url