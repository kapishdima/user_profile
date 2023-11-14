import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { FileText } from "lucide-react";
import { Typography } from "../typography";
import { useFormContext } from "react-hook-form";

type AcceptedFileItem = File & {
    preview: string;
};

type DropzoneProps = {
    name: string;
    multiple?: boolean;
};

export const Dropzone: React.FC<DropzoneProps> = ({
    name,
    multiple = true,
}) => {
    const { setValue } = useFormContext();
    const [files, setFiles] = useState<AcceptedFileItem[]>([]);

    const onDrop = (acceptedFiles: File[]) => {
        if (multiple) {
            acceptedFiles.forEach((file) => {
                setFiles((selectedFiles) => [
                    ...selectedFiles,
                    {
                        ...file,
                        preview: URL.createObjectURL(file),
                    },
                ]);
            });

            setValue(name, acceptedFiles);
        } else {
            const file = acceptedFiles[0];
            setFiles([{ ...file, preview: URL.createObjectURL(file) }]);
            setValue(name, file);
        }
    };

    const { getRootProps, getInputProps } = useDropzone({ onDrop });

    return (
        <>
            <div
                {...getRootProps()}
                className="flex flex-col items-center justify-center p-10 border-dashed border-slate-200 border rounded-md cursor-pointer"
            >
                <input {...getInputProps()} />
                <FileText />
                <Typography.Subtitle>Перетащие файлы сюда</Typography.Subtitle>
                <p className="text-xs text-slate-400">.png, .jpg, .jpeg </p>
            </div>
            <div className="flex items-center gap-x-2">
                {files.map((file) => (
                    <div className="w-8 h-8 rounded-md overflow-hidden">
                        <img src={file.preview} className="w-full h-full" />
                    </div>
                ))}
            </div>
        </>
    );
};
