import { useState } from "react";

const UserNameSettings = ({ userName = "John_doe123", ref}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(userName);
  const [isSaved, setIsSaved] = useState(false);

  const toggleEdit = () => {
    if (isEditing) {
      setIsSaved(true);
      setIsEditing(false);
      setTimeout(() => {
        setIsSaved(false);
      }, 1500);
    } else {
      setIsEditing(true);
    }
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <>

      <div className="!mb-2 w-full flex flex-col gap-1.5 flex-grow" ref={ref} >
        <label htmlFor="Username" className="text-2xl font-bold max-[402px]:text-xl">Username</label>

        <div className="flex gap-2 justify-between">
            <input type="text" id="username" className="mt-2 w-full p-2 !pl-4 bg-white/10 border border-white/20 rounded-[10px] flex items-center !pt-2 !pb-2 overflow-hidden relative shadow-[inset_0px_0px_10.8px_0px_rgba(255,255,255,0.25)] custom-input backdrop-blur-[10px] font-medium text-xl max-[402px]:text-lg" placeholder="Username" value={name} onChange={handleChange} disabled={!isEditing || isSaved}/>
          <div className="flex items-center justify-center gap-1 !w-[115px] !pl-5 !pt-2 !pb-2 !pr-4 h-fit cursor-pointer transition-all duration-100 ease-linear border border-cyan-400 bg-gradient-to-b from-cyan-400 to-blue-600 shadow-[0px_3px_11.5px_rgba(0,0,0,0.12),0px_1px_12.8px_rgba(255,255,255,0.51)_inset] rounded-[10px] hover:opacity-80" onClick={toggleEdit} >
            <img
              src={
                isSaved
                  ? "src/assets/images/icons/ok.webp"
                  : isEditing
                  ? "src/assets/images/icons/Save.png"
                  : "src/assets/images/icons/Edit.png"
              }
              alt="icon" className="w-[20px] h-[20px]" />
            <span className="font-medium text-[18px]">
              {isSaved ? "Saved" : isEditing ? "Save" : "Edit"}
            </span>
          </div>
        </div>
      </div>

    </>
  );
};

export default UserNameSettings;
