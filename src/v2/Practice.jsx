import { useEffect, useState } from "react";

function Practice(){
    const [text,setText] = useState("");
    const [status,setStatus] = useState("");
    

    useEffect(()=>{
        const savedDraft = localStorage.getItem("draft")
        if(savedDraft){
            setText(savedDraft)
        }
    } , []);

   // Auto-save every 3 seconds
  useEffect(() => {
  if (!text) return;

  const timeout = setTimeout(() => {
    localStorage.setItem("draft", text);
    setStatus("Draft Saved");
    setTimeout(() => setStatus(""), 2000);
  }, 2000);

  return () => clearTimeout(timeout); // cancel previous timer if user types again
}, [text]);



     // Handle publish
  const handlePublish = () => {
    setText("");
    localStorage.removeItem("draft");
    setStatus("Draft cleared");
    setTimeout(() => setStatus(""), 2000);
  };

    return(
        <div>
            <h1 className="text-4xl font-medium"> auto save text editor </h1>

            <textarea name="" id=""
            value={text}
            rows={8}
            onChange={(e)=> setText(e.target.value)}
             className="w-full border rounded p-3 text-gray-700"
             placeholder="Type ur text....">

                
            </textarea>


            <button 
            onClick={handlePublish}
            className="px-6 py-3 bg-blue-300 rounded-xl border border-gray-500 mt-5">
                Clear
            </button>

            {status && 
          <span className="text-green-600 text-sm">{status} </span>
            
            }
        </div>
    )

}

export default Practice;