import ReactQuill from "react-quill";
import "./rich-text.css";
const RichTextEditor = (value, onChange) => {
  const modules = {
    toolbar: [
      ["bold", "italic", "underline", "strike"],
      [{ list: "ordered" }, { list: "bullet" }],
    ],
  };

  const formats = ["bold", "italic", "underline", "strike", "list", "bullet"];

  return (
    <ReactQuill
      theme="snow"
      modules={modules}
      formats={formats}
      value={value}
      onChange={onChange}
      placeholder={"Type your message"}
    />
  );
};

export default RichTextEditor;
