import { lazy, useEffect, useState } from "react";
import CloseButton from "../Common/CloseButton/CloseButton";
import DisplayEdit from "../Common/PortfolioEdit/DisplayEdit";
import ProgressBar from "../Common/PortfolioEdit/ProgressBar";
import SwitchButton from "../Common/SwitchButton/SwitchButton";
import PickerColor from "../Common/PortfolioEdit/PickerColor";
import Typography from "../Common/PortfolioEdit/Typography";
import AlignEdit from "../Common/PortfolioEdit/AlignEdit";
import style from "./MenuEdit.module.css";
import ImageBackgroundEdit from "../Common/PortfolioEdit/ImageBackgroundEdit";
import TextConfiguration from "../Common/PortfolioEdit/TextConfiguration";
import TextAlign from "../Common/PortfolioEdit/TextAlign";
import DesignButton from "../Common/PortfolioEdit/DesignButton";
import TypographyNavbar from "../Common/PortfolioEdit/TypographyNavbar";
import BorderEdit from "../Common/PortfolioEdit/BorderEdit";
import BorderRadiusEdit from "../Common/PortfolioEdit/BorderRadiusEdit";

function MenuEditNavbar({ setMenuType, styleSection, onChange }) {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("design"); // 'design' or 'text'
  return (
    <div className={style.container}>
      <div className={style.header}>
        <p>Navigation bar</p>
        <CloseButton onClick={() => setMenuType(null)} />
      </div>

      <div className={style.body}>
        <div className={style.section}>
          <p
            className={activeSection === "design" ? style.active : ""}
            onClick={() => setActiveSection("design")}
          >
            Design
          </p>
          <p
            className={activeSection === "text" ? style.active : ""}
            onClick={() => setActiveSection("text")}
          >
            Text
          </p>
        </div>

        {activeSection === "design" && (
          <>
            {/* <div className={style.control}>
              <p>Fixed</p>
              <SwitchButton
                value={true}
                onToggle={(val) => console.log("Switched to:", val)}
              />
            </div> */}

            <div className={style.control}>
              <p
                onClick={() => setOpen((prev) => !prev)}
                style={{ cursor: "pointer" }}
              >
                Menu
              </p>
              <div
                className={`${style.dropdownList} ${open ? style.show : ""}`}
                onClick={(e) => e.stopPropagation()}
              >
                <DisplayEdit
                  value={styleSection.justifyContent}
                  onChange={onChange}
                />
                <ProgressBar
                  label={"Spacing between menus"}
                  value={styleSection.gap}
                  keyName={"gap"}
                  onChange={onChange}
                />
                <ProgressBar
                  label={"Padding Top & Bottom"}
                  value={styleSection.paddingTop}
                  keyName={"paddingTop"}
                  onChange={(updateFn) =>
                    onChange((prev) => {
                      const next = updateFn(prev);
                      return {
                        ...prev,
                        paddingTop: next.paddingTop,
                        paddingBottom: next.paddingTop,
                      };
                    })
                  }
                />
              </div>
            </div>
          </>
        )}

        {activeSection === "text" && (
          <div
            className={style.control}
            style={{ flexDirection: "column", alignContent: "space-around" }}
          >
            <PickerColor
              label="Background Color"
              value={styleSection.backgroundColor}
              onChange={(newColor) =>
                onChange((prev) => ({
                  ...prev,
                  backgroundColor: newColor,
                }))
              }
            />
            <PickerColor
              label="Menu Color"
              value={styleSection.color}
              onChange={(newColor) =>
                onChange((prev) => ({
                  ...prev,
                  color: newColor,
                }))
              }
            />
            <ProgressBar
              label={"Font size menu"}
              value={styleSection.fontSize}
              keyName={"fontSize"}
              onChange={onChange}
              max={42}
            />
            <TypographyNavbar
              value={styleSection}
              onChange={(path, val) => {
                onChange((prev) => {
                  const key = path.split(".")[1];
                  return {
                    ...prev,
                    typography: {
                      ...prev.typography,
                      [key]: val,
                    },
                  };
                });
              }}
            />
            <ProgressBar
              label={"Padding Left & Right"}
              value={styleSection.paddingLeft}
              keyName={"paddingLeft"}
              onChange={(updateFn) =>
                onChange((prev) => {
                  const next = updateFn(prev);
                  return {
                    ...prev,
                    paddingLeft: next.paddingLeft,
                    paddingRight: next.paddingLeft,
                  };
                })
              }
            />
          </div>
        )}
      </div>
    </div>
  );
}

function MenuEditHerobanner({ setMenuType, styleSection, onChange }) {
  const [openImage, setOpenImage] = useState(false);
  const [activeSection, setActiveSection] = useState("design");
  return (
    <div className={style.container}>
      <div className={style.header}>
        <p>Hero Banner</p>
        <CloseButton onClick={() => setMenuType(null)} />
      </div>

      <div className={style.body}>
        <div className={style.section}>
          <p
            className={activeSection === "design" ? style.active : ""}
            onClick={() => setActiveSection("design")}
          >
            Design
          </p>
          <p
            className={activeSection === "background" ? style.active : ""}
            onClick={() => setActiveSection("background")}
          >
            Background
          </p>
        </div>

        {activeSection === "design" && (
          <div
            className={style.control}
            style={{ flexDirection: "column", alignContent: "space-around" }}
          >
            <ProgressBar
              label={"Spacing between inner columns"}
              value={styleSection?.gap}
              min={50}
              keyName="gap"
              onChange={onChange}
            />
            <AlignEdit value={styleSection.alignItems} onChange={onChange} />
          </div>
        )}

        {activeSection === "background" && (
          <div
            className={style.control}
            style={{
              flexDirection: "column",
              alignItems: "flex-start",
              gap: 20,
            }}
          >
            <PickerColor
              label="Background Color"
              value={styleSection.backgroundColor}
              onChange={(newColor) =>
                onChange((prev) => ({ ...prev, backgroundColor: newColor }))
              }
            />

            <ImageBackgroundEdit
              open={openImage}
              handleToggle={() => setOpenImage((prev) => !prev)}
              value={styleSection.backgroundImage}
              onChange={(newImage) =>
                onChange((prev) => ({ ...prev, backgroundImage: newImage }))
              }
            />
          </div>
        )}
      </div>
    </div>
  );
}

function MenuEditItem({ setMenuType, styleItem, onChangeItem }) {
  console.log(styleItem)
  const [activeSection, setActiveSection] = useState("text");

  const setVal = (keyPath, val) => {
    console.log(val)
    const keys = keyPath.split(".");
    console.log(keys)
    const lastKey = keys.pop();

    const newStyle = { ...styleItem.styleItem };
    let curr = newStyle;
    for (const key of keys) {
      curr[key] = { ...curr[key] };
      curr = curr[key];
    }

    if (curr[lastKey] !== val) {
      curr[lastKey] = val;
      onChangeItem({ id: styleItem.id, styleItem: newStyle });
    }
  };

  return (
    <div className={style.container}>
      <div className={style.header}>
        <p>Item</p>
        <CloseButton onClick={() => setMenuType(null)} />
      </div>

      <div className={style.body}>
        <div className={style.section}>
          <p
            className={activeSection === "text" ? style.active : ""}
            onClick={() => setActiveSection("text")}
          >
            Text
          </p>
        </div>

        {activeSection === "text" && (
          <div
            className={style.control}
            style={{
              flexDirection: "column",
              alignItems: "flex-start",
              width: "100%",
            }}
          >
            <TextConfiguration
              value={styleItem.styleItem}
              onChange={setVal}
              type={styleItem.type}
            />
            <Typography
              value={styleItem.styleItem}
              onChange={setVal}
              showLabel={false}
            />
            <TextAlign value={styleItem.styleItem} onChange={setVal} />
            <PickerColor
              label={"Background Color"}
              value={styleItem.styleItem.backgroundColor}
              onChange={(newColor) => {setVal("backgroundColor", newColor)}}
            />
            <PickerColor
              label={"Color"}
              value={styleItem.styleItem.color}
              onChange={(newColor) => setVal("color", newColor)}
            />
          </div>
        )}
      </div>
    </div>
  );
}

function MenuEditButton({ setMenuType, styleItem, onChangeItem }) {
  const [activeSection, setActiveSection] = useState("text");
  const setVal = (keyPathOrObject, val) => {
    // CASE 1: Full style object passed, merge with existing
    if (typeof keyPathOrObject === "object") {
      onChangeItem({
        id: styleItem.id,
        styleItem: {
          ...styleItem.styleItem,
          ...keyPathOrObject,
        },
      });
      return;
    }

    // CASE 2: key is "styleItem" — merge, not replace
    if (keyPathOrObject === "styleItem") {
      onChangeItem({
        id: styleItem.id,
        styleItem: {
          ...styleItem.styleItem,
          ...val,
        },
      });
      return;
    }

    // CASE 3: Nested update (e.g., "typography.fontWeight")
    const keys = keyPathOrObject.split(".");
    const lastKey = keys.pop();

    const newStyle = { ...styleItem.styleItem };
    let curr = newStyle;

    for (const key of keys) {
      curr[key] = { ...curr[key] };
      curr = curr[key];
    }

    if (curr[lastKey] !== val) {
      curr[lastKey] = val;
      onChangeItem({ id: styleItem.id, styleItem: newStyle });
    }
  };
  return (
    <div className={style.container}>
      <div className={style.header}>
        <p>Button</p>
        <CloseButton onClick={() => setMenuType(null)} />
      </div>

      <div className={style.body}>
        <div className={style.section}>
          <p
            className={activeSection === "text" ? style.active : ""}
            onClick={() => setActiveSection("text")}
          >
            Text
          </p>
          <p
            className={activeSection === "button" ? style.active : ""}
            onClick={() => setActiveSection("button")}
          >
            Button
          </p>
        </div>
        {activeSection === "text" && (
          <div
            className={style.control}
            style={{
              flexDirection: "column",
              alignItems: "flex-start",
              width: "100%",
            }}
          >
            <TextConfiguration
              value={styleItem.styleItem}
              onChange={setVal}
              type={styleItem.type}
            />
            <Typography
              value={styleItem.styleItem}
              onChange={setVal}
              showLabel={false}
            />
            <PickerColor
              label={"Background Color"}
              value={styleItem.styleItem.backgroundColor}
              onChange={(newColor) => setVal("backgroundColor", newColor)}
            />
            <PickerColor
              label={"Color"}
              value={styleItem.styleItem.color}
              onChange={(newColor) => setVal("color", newColor)}
            />
          </div>
        )}
        {activeSection === "button" && (
          <div
            className={style.control}
            style={{
              flexDirection: "column",
              alignItems: "flex-start",
              width: "100%",
            }}
          >
            <DesignButton
              onChange={(newStyle) => setVal("styleItem", newStyle)}
            />
            <PickerColor
              label={"Background Color"}
              value={styleItem.styleItem.backgroundColor}
              onChange={(newColor) => setVal("backgroundColor", newColor)}
            />
            <PickerColor
              label={"Color"}
              value={styleItem.styleItem.color}
              onChange={(newColor) => setVal("color", newColor)}
            />
            <BorderEdit
              value={styleItem.styleItem.border}
              onChange={(newBorder) => setVal("border", newBorder)}
            />
            <BorderRadiusEdit
              value={styleItem.styleItem.borderRadius}
              onChange={(newBorderRadius) =>
                setVal("borderRadius", newBorderRadius)
              }
            />
          </div>
        )}
      </div>
    </div>
  );
}

function MenuEditAdd({ setMenuType, onAdd, section }) {
  const TYPES = [
    "Heading 1",
    "Heading 2",
    "Heading 3",
    "Heading 4",
    "paragraph",
  ];
  const [text, setText] = useState("");
  const [type, setType] = useState("Heading 1");
  const [buttonText, setButtonText] = useState("");
  const handleAdd = () => {
    onAdd(section, {
      type: type,
      content: text,
    });
    setText("");
  };

  const handleAddButton = () => {
    onAdd(section, {
      type: "button",
      content: buttonText,
    });
    setButtonText("");
  };

  return (
    <div className={style.container}>
      <div className={style.header}>
        <p className={style.label}>Add New Content</p>
        <CloseButton onClick={() => setMenuType(null)} />
      </div>

      <div className={style.body}>
        <div>
          <div
            className={style.control}
            style={{ flexDirection: "column", gap: 24, alignItems: "unset" }}
          >
            <p className={style.label} style={{ fontSize: 24 }}>
              Create paragraph
            </p>
            <input
              className={style.input}
              placeholder="Enter content..."
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>

          <div className={style.section} style={{ flexWrap: "wrap" }}>
            {TYPES.map((t) => (
              <p
                key={t}
                className={`${style.type} ${type === t ? style.active : ""}`}
                onClick={() => setType(t)}
              >
                {t}
              </p>
            ))}
          </div>

          <div className={style.addButton}>
            <button className={style.button} onClick={handleAdd}>
              Add
            </button>
          </div>
        </div>
        <div>
          <div
            className={style.control}
            style={{ flexDirection: "column", gap: 24, alignItems: "unset" }}
          >
            <p className={style.label} style={{ fontSize: 24 }}>
              Create button
            </p>
            <input
              className={style.input}
              placeholder="Enter content..."
              value={buttonText}
              onChange={(e) => setButtonText(e.target.value)}
            />
          </div>
          <div className={style.addButton}>
            <button className={style.button} onClick={handleAddButton}>
              Add Button
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function MenuEditFaq({ contentItem, onChangeItem, setMenuType }) {
  const [question, setQuestion] = useState(contentItem?.question || "");
  const [answer, setAnswer] = useState(contentItem?.answer || "");

  useEffect(() => {
    setQuestion(contentItem?.question || "");
    setAnswer(contentItem?.answer || "");
  }, [contentItem]);

  const handleSave = () => {
    if (typeof onChangeItem === "function") {
      onChangeItem({
        ...contentItem,
        question,
        answer,
      });
    }
    setMenuType(null);
  };

  return (
    <div className={style.container}>
      <div className={style.header}>
        <p className={style.label}>Edit FAQ</p>
        <CloseButton onClick={() => setMenuType(null)} />
      </div>

      <div className={style.body}>
        <div
          className={style.control}
          style={{ flexDirection: "column", alignItems: "unset", gap: 16 }}
        >
          <label className={style.label}>Question</label>
          <input
            className={style.input}
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Enter your question..."
          />

          <label className={style.label}>Answer</label>
          <textarea
            className={style.input}
            style={{ minHeight: 100 }}
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="Enter your answer..."
          />
        </div>

        <div className={style.addButton}>
          <button className={style.button} onClick={handleSave}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

function MenuEditTestimonial({ setMenuType, styleItem, onChangeItem }) {
  const [localItem, setLocalItem] = useState(styleItem || {});

  useEffect(() => {
    setLocalItem(styleItem || {});
  }, [styleItem]);

  const handleChange = (key, value) => {
    const updated = { ...localItem, [key]: value };
    setLocalItem(updated);
    onChangeItem(updated);
  };

  return (
    <div className={style.container}>
      <div className={style.header}>
        <h3>Testimonial Editor</h3>
        <CloseButton onClick={() => setMenuType(null)} />
      </div>

      <div className={style.body}>
        <div style={{ marginBottom: 12 }}>
          <label className={style.label}>Name</label>
          <input
            type="text"
            value={localItem.name || ""}
            onChange={(e) => handleChange("name", e.target.value)}
            className={style.input}
          />
        </div>

        <div style={{ marginBottom: 12 }}>
          <label className={style.label}>Feedback</label>
          <textarea
            value={localItem.feedback || ""}
            onChange={(e) => handleChange("feedback", e.target.value)}
            className={style.input}
            style={{ minHeight: 80 }}
          />
        </div>

        <div style={{ marginBottom: 12 }}>
          <label className={style.label}>Avatar URL</label>
          <input
            type="text"
            value={localItem.avatar || ""}
            onChange={(e) => handleChange("avatar", e.target.value)}
            className={style.input}
          />
        </div>

        {localItem.avatar && (
          <div style={{ textAlign: "center", marginTop: 10 }}>
            <img
              src={localItem.avatar}
              alt="Avatar preview"
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
          </div>
        )}

        <div className={style.addButton}>
          <button className={style.button} onClick={() => setMenuType(null)}>
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
 function MenuEditFooter({
  setMenuType,
  styleSection,
  contentItem,
  onChange,
  section,
  onChangeItem,
}) {
  const [text, setText] = useState(contentItem?.text || "");
  const [links, setLinks] = useState(contentItem?.links || []);

  useEffect(() => {
    setText(contentItem?.text || "");
    setLinks(contentItem?.links || []);
  }, [contentItem]);

  const handleTextChange = (e) => {
    setText(e.target.value);
    onChangeItem({
      id: section,
      index: 0,
      text: e.target.value,
      links,
    });
  };

  const handleLinkChange = (index, key, value) => {
    const newLinks = [...links];
    newLinks[index][key] = value;
    setLinks(newLinks);
    onChangeItem({
      id: section,
      index: 0,
      text,
      links: newLinks,
    });
  };

  return (
    <div className={style.menuEditSection}>
      <h3 className={style.title}>Footer Content</h3>

      <label className={style.label}>Copyright Text</label>
      <input
        type="text"
        className={style.input}
        value={text}
        onChange={handleTextChange}
      />

      <h4 className={style.subtitle}>Links</h4>
      {links.map((link, index) => (
        <div key={index} className={style.linkRow}>
          <input
            type="text"
            className={style.input}
            placeholder="Label"
            value={link.label}
            onChange={(e) =>
              handleLinkChange(index, "label", e.target.value)
            }
          />
          <input
            type="text"
            className={style.input}
            placeholder="URL"
            value={link.url}
            onChange={(e) =>
              handleLinkChange(index, "url", e.target.value)
            }
          />
        </div>
      ))}
    </div>
  );
}


const menuEdit = {
  menuEditNavbar: MenuEditNavbar,
  menuEditHerobanner: MenuEditHerobanner,
  menuEditItem: MenuEditItem,
  menuEditButton: MenuEditButton,
  menuEditAdd: MenuEditAdd,
  menuEditFaq: MenuEditFaq,
  menuEditTestimonial: MenuEditTestimonial,
  menuEditFooter: MenuEditFooter
};

export default menuEdit;
