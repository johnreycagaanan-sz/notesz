import React from "react";
import "./pad.css";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const Pad = () => {
  return (
    <div className="editor">
      <Editor
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        toolbarClassName="toolbarClassName"
        placeholder="Enter your text here:"
        editorStyle={{
          padding: "5px",
          borderRadius: "5px",
          height: "90%",
          width: "100%",
          border: "1px solid gray",
          backgroundColor: "white",
          lineHeight: "75%",
        }}
        toolbarStyle={{
          borderRadius: "5px",
          border: "1px solid gray",
        }}
        toolbar={{
          options: [
            "inline",
            "blockType",
            "fontSize",
            "fontFamily",
            "list",
            "textAlign",
            // "colorPicker",
            "history",
          ],
          inline: { inDropdown: true },
          blockType: { inDropdown: true },
          fontSize: { inDropdown: true },
          fontFamily: { inDropdown: true },
          list: { inDropdown: true },
          textAlign: { inDropdown: true },
          //   colorPicker: { inDropdown: true },
          history: { inDropdown: true },
        }}
      />
    </div>
  );
};

export default Pad;
