import { Dispatch, FC, SetStateAction, useCallback, useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { TextField, Button } from "@mui/material";
import { fileTypes } from "../helpers";

interface IAddImagesProps {
  files: IImage[];
  setFile: Dispatch<SetStateAction<IImage[]>>;
  previewUrl: IImage[];
  setPreviewUrl: Dispatch<SetStateAction<IImage[]>>;
}

export const AddImages: FC<IAddImagesProps> = ({
  files,
  setFile,
  previewUrl,
  setPreviewUrl,
}) => {
  const [selectFiles, setSelectFiles] = useState<IImage[]>(
    files.length ? files : [{ url: "", orientation: "vertical" }]
  );

  const [valueInput, setValueInput] = useState<string[]>([]);

  const handleFile = useCallback(
    (file: any, index: number) => {
      if (file.length > 0) {
        setFile((prev) => {
          const array = [...prev];
          array[index] = file[index];
          return array;
        });
        setPreviewUrl(() => {
          let array = [...previewUrl];
          array[index] = { ...array[index], url: file };
          return array;
        });
      }
    },
    [previewUrl, setFile, setPreviewUrl]
  );

  const changeValueInput = useCallback((value: string, index: number) => {
    setValueInput((prev) => {
      const array = [...prev];
      array[index] = value;
      return array;
    });
  }, []);

  const addValueInputInPreview = useCallback(
    (value: string[], index: number) => {
      setPreviewUrl((prev) => {
        let array = [...prev];
        array[index] = { ...array[index], url: value[index] };
        return array;
      });
    },
    [setPreviewUrl]
  );

  const calculateSizes = useCallback(
    (currentWidth: number, currentHeight: number, index: number) => {
      setPreviewUrl((prev) => {
        const array = [...prev];
        array[index] = {
          ...array[index],
          orientation: currentWidth > currentHeight ? "horizontal" : "vertical",
        };
        return array;
      });
    },
    [setPreviewUrl]
  );

  const addEmptyImages = useCallback(() => {
    setSelectFiles((prev) => {
      const array = [...prev];
      array.push({ url: "", orientation: "vertical" });
      return array;
    });
    setPreviewUrl((prev) => {
      const array = [...prev];
      array.push({ url: "", orientation: "vertical" });
      return array;
    });
    setValueInput((prev) => {
      const array = [...prev];
      array.push("");
      return array;
    });
  }, [setPreviewUrl]);

  const viewImage = useCallback((url: any) => {
    if (typeof url === "string") return url;
    if (typeof url === "object") {
      return window.URL.createObjectURL(new Blob(url, { type: url.type }));
    }
    return "";
  }, []);

  return (
    <div className="product-modal__container__images">
      {selectFiles.map((item, index) => {
        return (
          <div
            key={viewImage(previewUrl[index].url) + index}
            className="product-modal__container__images__container"
          >
            <div className="product-modal__container__images__container__content">
              <img
                className="product-modal__container__images__container__content__img"
                src={viewImage(previewUrl[index].url)}
                alt=""
                onLoad={(event) =>
                  typeof previewUrl[index].url === "string" &&
                  calculateSizes(
                    event.currentTarget.naturalWidth,
                    event.currentTarget.naturalHeight,
                    index
                  )
                }
              />
              <div className="product-modal__container__images__container__content__main">
                <FileUploader
                  multiple={true}
                  handleChange={(file: any) => handleFile(file, index)}
                  name="file"
                  types={fileTypes as string[]}
                  hoverTitle="Drop here"
                  label="Добавьте файл здесь"
                  classes="product-modal__container__images__container__content__dnd"
                />
              </div>
            </div>
            <div className="product-modal__container__images__container__inputs">
              <TextField
                id="input-files"
                label="Введите ссылку на файл"
                variant="outlined"
                value={valueInput[index]}
                fullWidth
                onChange={(event) =>
                  changeValueInput(event.target.value, index)
                }
                autoComplete="off"
              />
              <Button
                disabled={valueInput[index] === ""}
                variant="contained"
                onClick={() => addValueInputInPreview(valueInput, index)}
              >
                Добавить
              </Button>
            </div>
            <Button
              disabled={selectFiles.length > 10 || previewUrl[index].url === ""}
              variant="contained"
              onClick={addEmptyImages}
            >
              Добавить еще изображение
            </Button>
          </div>
        );
      })}
    </div>
  );
};
