"use client";
import React, { useEffect, useRef, useState }from "react";

const Terminal = () => {
  const iRef = useRef(null);

  useEffect(() => { 
    if (iRef.current) {
      iRef.current.focus();
    }
  }, []);

  const [input, setInput] = useState('');
  const [output, setOutput] = useState([
    { type: 'output', text: '' }
  ]);

  const handleSubmit = (entry) => {
    entry.preventDefault();

    if (input.trim().toLowerCase() === 'clear' || input.trim().toLowerCase() === 'cls') {
      setOutput([{ type: 'output', text: '' }]);
    } 
    else if(input.trim().toLowerCase() === 'contact') {
      setOutput([...output, 
        { type: 'input', text: `user@letsimagine-desktop:~$ ${input}` }, 
        { type: 'output', text: `Juan Vera's contact info: ` }, 
        { type: 'output', text: `Mobile: (956) 432-9412` }, 
        { type: 'output', text: `Email: jjvera2001g@gmail.com` }]);
    } else {
      setOutput([...output, 
        { type: 'input', text: `user@letsimagine-desktop:~$ ${input}` }, 
        { type: 'error', text: `"${input}" does not exist as a command.` }
      ]);
    }
    setInput('');
  };

  return(
    <div className=" text-white text-xs sm:text-base h-screen p-4 font-mono">
      <form onSubmit={handleSubmit} className="bg-black rounded-md mt-2">
        <div className="flex items-center">
          <span className="text-green-500 mr-2">user@letsimagine-desktop:~$</span>
            <input id="terminal-input" 
              ref={iRef} 
              type="text" 
              className="bg-transparent text-white outline-none flex-grow"
              placeholder="<-- Type `contact` for info."
              value={input}
              onChange={(a) => setInput(a.target.value)}
            />
        </div>
        <div className="h-96 overflow-y-auto">
          {output.map((line, index) => (
            line.type === 'error' ? (
              <div key={index} className="text-red-600">
                &nbsp;&nbsp;{line.text}
              </div>
            ) : (
              <div key={index} className={line.type === 'input' ? 'text-green-500' : ''}>
                {line.text}
              </div>
            )
          ))}
        </div>
      </form>
    </div>
  );

};

export default Terminal;