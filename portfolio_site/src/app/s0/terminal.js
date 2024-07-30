"use client";
import React, { useState }from "react";

const Terminal = () => {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState([
        { type: 'output', text: 'Instructions: Type `contact` to get my info or `clear` to clear the screen.' }
    ]);

    const handleSubmit = (entry) => {
        entry.preventDefault();

        if (input.trim().toLowerCase() === 'clear') {
            setOutput([{ type: 'output', text: 'Instructions: Type `contact` to get my info or `clear` to clear the screen.' }]);
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
                { type: 'output', text: `You typed: ${input}` }]);
        }
        setInput('');
    };

    return(
        <div className="bg-black text-white h-screen p-4 font-mono animate-fadeIn">
                <form onSubmit={handleSubmit} className="mt-2">
                    <div className="flex items-center">
                        <span className="text-green-500 mr-2">user@letsimagine-desktop:~$</span>
                            <input
                                id="terminal-input"
                                type="text"
                                className="bg-black text-white outline-none flex-grow"
                                value={input}
                                onChange={(a) => setInput(a.target.value)}
                            />
                    </div>
                    <div className="h-64 overflow-y-auto">
                        {output.map((line, index) => (
                            <div key={index} className={line.type === 'input' ? 'text-green-500' : ''}>
                                {line.text}
                            </div>
                        ))}
                    </div>
                </form>
        </div>
    );

};

export default Terminal;