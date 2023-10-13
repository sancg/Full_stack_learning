import path from "node:path";
export const root = path
    .join(path.dirname(import.meta.url), "../")
    .replace("file:", "")
    .trim();

const FilePath = {
    root,
};

export default FilePath;
