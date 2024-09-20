import mime from 'mime/lite';

export const getExtension = (type)=>{
  return mime.getExtension(type)
}

