import dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

dotenv.config({
  path: "./.env",
});

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    //upload the file on cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    // file has been uploaded successfull
    //console.log("file is uploaded on cloudinary ", response.url);
    fs.unlinkSync(localFilePath);
    console.log(response);
    return response;
  } catch (error) {
    // console.log(localFilePath);
    console.error("Error uploading file to Cloudinary:", error);
    fs.unlinkSync(localFilePath); // remove the locally saved temporary file as the upload operation got failed
    return null;
  }
};

// const uploadOnCloudinary = async (localFilePath) => {
//   try {
//     if (!localFilePath) return null;

//     //upload the file on the cloudinary
//     const response = await cloudinary.uploader.upload(localFilePath, {
//       resource_type: "auto",
//     });

//     //file has been uploaded successfully
//     console.log("file is uploaded successfully on cloudinary", response.url);
//     return response;
//   } catch (error) {
//     fs.unlinkSync(localFilePath) // remove the locally saved temporary file as the upload operation got failed
//     return null;
//   }
// };

export { uploadOnCloudinary };

// In summary, this code defines a function (uploadOnCloudinary) that uploads a file to Cloudinary, taking care of both successful and unsuccessful upload scenarios. It relies on the Cloudinary SDK for the upload operation and uses environment variables to securely store Cloudinary credentials.
