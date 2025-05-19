import { ChangeEvent, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";


type UploadStatus= "idle"|"uploading"|'success'|'error';
export default function FileUploader(){
    const [file,setFile]=useState<File| null>(null);
    const [status,SetStatus]=useState<UploadStatus>('idle')
    function handleFileChange(e:ChangeEvent<HTMLInputElement>){
        if (e.target.files){
            setFile(e.target.files[0]);
             console.log(e.target.files[0])
        }
    }
     async function handFileUpload(){
        if(!file) return;
        SetStatus("uploading");

        const formData=new FormData();
        formData.append('file',file);
        try{
        const response = await fetch("http://localhost:3000/upload",{
            method:"POST",
            body:formData
        });
    if (!response.ok) throw new Error("Upload failed");

              const data = await response.json();
              console.log("Réponse du serveur :", data);
              SetStatus("success");
  } catch (err) {
    console.error("Erreur :", err);
    SetStatus("error");
  }
}
      
        
     
    return (
        <div className="space-y-4">
             
            <Input  id="file" type='file' onChange={handleFileChange}/>
            {file &&(
                <div className="mb-4 text-sm bg-text-500">
                    <p>File name: {file.name}</p>
                    <p>Size: {(file.size/1024).toFixed(2)}KB</p>
                    <p> Type:{file.type}</p>
                </div>
            )}
            {file && status !=='uploading'&& <button onClick={handFileUpload}>Upload</button> }
        </div>
    )
}