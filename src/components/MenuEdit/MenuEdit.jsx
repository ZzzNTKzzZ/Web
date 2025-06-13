import { useState } from "react";
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
            <div className={style.control}>
              <p>Fixed</p>
              <SwitchButton
                value={true}
                onToggle={(val) => console.log("Switched to:", val)}
              />
            </div>

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
            <Typography value={styleSection.typography} onChange={onChange} />
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
 const setVal = (keyPath, val) => {
  const keys = keyPath.split(".");
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
  const [activeSection, setActiveSection] = useState("text");
  return (
    <div className={style.container}>
      <div className={style.header}>
        <p>Item </p>
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
            style={{ flexDirection: "column", alignContent: "space-around" }}
          >
            <TextConfiguration value={styleItem.styleItem} onChange={setVal} type={styleItem.type}/>
            <Typography value={styleItem.styleItem} onChange={onChangeItem}/>
          </div>
        )}
      </div>
    </div>
  );
}

const menuEdit = {
  menuEditNavbar: MenuEditNavbar,
  menuEditHerobanner: MenuEditHerobanner,
  menuEditItem: MenuEditItem,
};

export default menuEdit;