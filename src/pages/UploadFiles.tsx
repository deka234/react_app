import { ChangeEvent, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";

type UploadStatus= "idle"|"uploading"|'success'|'error';
export default function FileUploader(){
    const [file,setFile]=useState<File| null>(null);
    const [status,SetStatus]=useState<UploadStatus>('idle')
    function handleFileChange(e:ChangeEvent<HTMLInputElement>){
        if (e.target.files && e.target.files[0]){
            
            const selected_file=e.target.files[0];
            if(selected_file.type=="application/pdf"){
                setFile(selected_file);

            }
            else{
               // alert("veuillez choisir un fichier pdf")
                 setFile(null);
            }
             

             
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
        <Card className="h-50  border-4 border-blue-800 rounded-3xl">
        <div className="space-y-4">
            
            <Input className="border-4 border-blue-900 rounded-2xl" id="file" type='file' accept="application/pdf" onChange={handleFileChange}/>
            {file &&(
                <div className="mb-4 text-sm bg-text-500">
                    <p>File name: {file.name}</p>
                    <p>Size: {(file.size/1024).toFixed(2)}KB</p>
                    <p> Type:{file.type}</p>
                </div>
            )}
            {file && status !=='uploading'&& <button onClick={handFileUpload}>Upload</button> }
        </div>
        </Card>
    )
}