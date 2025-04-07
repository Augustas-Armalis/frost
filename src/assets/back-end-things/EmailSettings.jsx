import { useState, useEffect, useRef } from "react";
import EnterEmailCode from "./EnterEmailCode";

// This was a bit of a hasstle to figure out, but from the UI perspective it works and I hope it will be easy to set it from the bacck end too, good luck!

const EmailSettings = ({ email = "johndoe123@gmail.com", ref }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [emailValue, setEmailValue] = useState(email);
  const [isSaved, setIsSaved] = useState(false);
  const [isCodeVisible, setIsCodeVisible] = useState(false);
  const [isEmailChanged, setIsEmailChanged] = useState(false);
  const [originalEmail, setOriginalEmail] = useState(email);
  const emailInputRef = useRef(null);

  const handleEmailChange = (e) => {
    setEmailValue(e.target.value);
    setIsEmailChanged(e.target.value !== originalEmail);
  };

  const handleSaveClick = () => {
    if (isEmailChanged) {
      setIsCodeVisible(true);
      setIsEditing(false);
    }
  };

  const handleCancelClick = () => {
    setEmailValue(originalEmail);
    setIsEditing(false);
    setIsCodeVisible(false);
    setIsEmailChanged(false);
  };

  const handleCodeConfirm = (code) => {
    setIsSaved(true);
    setTimeout(() => {
      setIsCodeVisible(false);
      setTimeout(() => {
        setIsSaved(false);
        setOriginalEmail(emailValue);
        setIsEmailChanged(false);
      }, 2000);
    }, 2000);
  };

  const handleEditClick = () => {
    setIsEditing(true);
    setEmailValue(originalEmail);
    setIsCodeVisible(false);
    setIsSaved(false);
  };

  useEffect(() => {
    if (isEditing && emailInputRef.current) {
      emailInputRef.current.focus();
    }
  }, [isEditing]);

  return (
    <div className="!mb-2 w-full flex flex-col gap-1.5 flex-grow" ref={ref}>
      <label htmlFor="Email" className="text-2xl font-bold max-[402px]:text-xl">
        Email
      </label>

      <div className="flex gap-2 justify-between">
        <input type="email" id="email" className="mt-2 w-full custom-input p-2 !pl-4 bg-white/10 border border-white/20 rounded-[10px] flex items-center !pt-2 !pb-2 overflow-hidden relative shadow-[inset_0px_0px_10.8px_0px_rgba(255,255,255,0.25)] backdrop-blur-[10px] font-medium text-xl max-[402px]:text-lg"
          placeholder="Email"
          value={emailValue}
          onChange={handleEmailChange}
          disabled={!isEditing}
          required
          ref={emailInputRef}
        />

        <div
          className="flex items-center justify-center gap-1 !w-[115px] !pl-5 !pt-2 !pb-2 !pr-4 h-fit cursor-pointer transition-all duration-100 ease-linear border border-cyan-400 bg-gradient-to-b from-cyan-400 to-blue-600 shadow-[0px_3px_11.5px_rgba(0,0,0,0.12),0px_1px_12.8px_rgba(255,255,255,0.51)_inset] rounded-[10px] hover:opacity-80"
          onClick={
            isSaved
              ? null
              : isEditing && !isCodeVisible
              ? handleSaveClick
              : isCodeVisible
              ? handleCancelClick
              : handleEditClick
          }
          disabled={isSaved || (!isEmailChanged && isEditing && !isCodeVisible)}
        >
          <img
            src={
              isSaved
                ? "src/assets/images/icons/ok.webp"
                : isEditing && !isCodeVisible
                ? "src/assets/images/icons/Save.png"
                : "src/assets/images/icons/Edit.png"
            }
            alt="icon" className="w-[20px] h-[20px]"
          />
          <span className="font-medium text-[18px]">
            {isSaved ? "Saved" : isEditing && !isCodeVisible ? "Save" : isCodeVisible ? "Cancel" : "Edit"}
          </span>
        </div>
      </div>

      {isCodeVisible && <EnterEmailCode onConfirm={handleCodeConfirm} />}
    </div>
  );
};

export default EmailSettings;