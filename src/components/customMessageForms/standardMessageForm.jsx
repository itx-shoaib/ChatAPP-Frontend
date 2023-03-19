import React, { useState } from 'react'
import { XMarkIcon } from "@heroicons/react/24/solid"

const StandardMessageForm = () => {
  const [message, setmessage] = useState("");
  const [attachment, setattachment] = useState("");
  const [preview, setpreview] = useState("");
  return (
    <div className="message-form-container">
      {preview && (
        <div className="message-form-preview">
          <img src={preview} alt="No" className="message-form-preview-image" onLoad={() => URL.revokeObjectURL(preview)} />
          <XMarkIcon className="message-form-icon-x" onClick={() => {
            setpreview("");
            setattachment("");
          }} />
        </div>
      )}
    </div>
  )
}

export default StandardMessageForm