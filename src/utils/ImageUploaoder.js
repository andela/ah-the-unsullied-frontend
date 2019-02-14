import axios from 'axios'; 

export default imageUploader => {
    const path = 'https://api.cloudinary.com/v1_1/dadrqjrpw/upload'; 
    const formData = new FormData();
    const headers = { "Content-Type": "application/x-wwww-form-urlencoded"}
    formData.append("file", imageUploader.image)
    formData.append("upload_preset", "theunsullied_preset")
    return axios.post(path, formData, {"headers": headers})
}
