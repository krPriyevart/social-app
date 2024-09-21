import { useState } from "react";
import { ImagePlus } from 'lucide-react';
import boy2 from '../../assets/boy2.jpg';

function PreviewMultipleImages({ onFileSelect }){

   const [images, setImages] = useState([]);

   const handleMultipleImages =(evnt)=>{
      const selectedFIles =[];
      const targetFiles =evnt.target.files;
      const targetFilesObject= [...targetFiles]
      targetFilesObject.map((file)=>{
         return selectedFIles.push(URL.createObjectURL(file))
      })
      setImages(selectedFIles);
      onFileSelect(selectedFIles);
    }
    
return(
    <>
      
        <div className='w-4/12 h-full  relative' >
          <div className='w-full h-10  relative text-[#00FF09]'>
            <p className='absolute top-2 left-2'>Attachments</p>
            <div class="upload-btn-wrapper absolute right-2 top-2 w-8 h-8 ">
                <ImagePlus  />
                <input type="file" name="attachment" className='cursor-pointer' onChange={handleMultipleImages} multiple accept="image/png, image/jpeg"/>
            </div>
            
          </div>    
          <div className='attachments w-fit h-[480px] p-2  top-20px right-0 absolute overflow-scroll border-0 border-red-800 '  >
            {
        images.map((url)=>{
            return (
                
                
                <img src={url} className="w-1/3"/>
               
                
            )
        })
        }
           
          </div>
          </div> 
   </>
)
}
export default PreviewMultipleImages