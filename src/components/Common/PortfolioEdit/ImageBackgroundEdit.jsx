import { useRef } from "react";

import { ReactComponent as Trash } from "../../../assets/icon/Trash.svg";
import { ReactComponent as Upload } from "../../../assets/icon/Upload.svg";
import style from "./ImageBackgroundEdit.module.css";

export default function ImageBackgroundEdit({ value, onChange }) {
    console.log(value)
  const fileInputRef = useRef();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      onChange?.(imageURL);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  const handleDeleteImage = (e) => {
    e.stopPropagation();
    onChange(""); // Clear the image
  };

  return (
    <div className={style.uploader}>
      <p className={style.label}>Background Image</p>

      <div className={style.downLoadImage} onClick={triggerFileInput}>
        {value ? (
          <div className={style.imagePreviewWrapper}>
            <img
              src={value}
              alt="Uploaded preview"
              className={style.imagePreview}
            />
            <button
              className={style.deleteButton}
              onClick={handleDeleteImage}
            >
              <Trash />
            </button>
          </div>
        ) : (
          <div className={style.uploadPrompt}>
            <Upload />
            <span>Upload photo</span>
          </div>
        )}
      </div>

      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
    </div>
  );
}
