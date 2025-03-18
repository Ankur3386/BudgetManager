import { v2 as cloudinary } from 'cloudinary';
cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME  , 
    api_key:process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET // Click 'View API Keys' above to copy your API secret
});

export  const uploadResult = async(localPath)=>{
      try{ 
        const response= await cloudinary.uploader
       .upload(localPath,{ resource_type:"auto"} )
       fs.unlinkSync(localPath)
       return response
      }
      catch(error)  {
        fs.unlinkSync(localPath)
           console.log(error);
       };
    
    console.log(uploadResult);  
};