import React, { useState , useRef} from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import Resizer from 'react-image-file-resizer';
import { Link } from 'react-router-dom';

function Updatephoto() {
    const [image, setImage] = useState(null);
    const [crop, setCrop] = useState({ aspect: 1 });
    const [croppedImage, setCroppedImage] = useState(null);
    const imageRef = useRef(null);
  
    const handleImageUpload = (event) => {
      if (event.target.files && event.target.files[0]) {
        Resizer.imageFileResizer(
          event.target.files[0], // uploaded file
          250, // max width
          250, // max height
          'JPEG', // compress format
          100, // quality
          0, // rotation
          (uri) => {
            // uri is the resized image
            setImage(uri);
          },
          'base64' // output type
        );
      }
    };
  
    const handleImageCrop = (crop) => {
      setCrop(crop);
    };
  
    const handleImageSave = () => {
      const canvas = document.createElement('canvas');
      canvas.width = crop.width;
      canvas.height = crop.height;
      const ctx = canvas.getContext('2d');
      const imageObj = imageRef.current;
      imageObj.onload = function () {
        ctx.drawImage(
          imageObj,
          crop.x,
          crop.y,
          crop.width,
          crop.height,
          0,
          0,
          crop.width,
          crop.height
        );
        const croppedImageUrl = canvas.toDataURL('image/png');
        setCroppedImage(croppedImageUrl);
      };
      imageObj.src = image;
    };
  
  
	return (
        <div>
        <section className="vh-100">
            <div className="container ">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                  <div className="card bg-dark text-white" style={{'borderRadius':"1 rem" , height:"700px"}}>
                    <div className=" text-center">
                      <h3 className="fw-bold mb-2 text-uppercase">Update Photo</h3>
                      <div>
      
                        <div class="input-group">
                            <input type="file" accept="image/*" onChange={handleImageUpload} class="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload"/>
                            <button class="btn btn-outline-secondary" type="button" onClick={handleImageSave} id="inputGroupFileAddon04">Crop Image</button>
                        </div>
                        
                        {image && (
                            <div>
                            <img
                                src={image}
                                alt="Original"
                                ref={imageRef}
                                style={{ display: 'none' }}
                            />
                            <ReactCrop
                                src={image}
                                crop={crop}
                                onChange={setCrop}
                                onComplete={handleImageCrop}
                            />
                            </div>
                        )}
                        {/* <button >Crop Image</button> */}
                        {croppedImage && <img src={croppedImage} alt="Cropped" />}                      
                        </div>
                        <div className="row mt-4 pt-2">
                            <div className="col-md-6 mb-4">
                                <div className="form-outline">
                                <Link to="/Seller/Displayitem"><input className="btn btn-outline-primary btn-lg" type="button" value="⬅️ Back" /></Link>
                                </div>

                            </div>
                            <div className="col-md-6 mb-4">

                                <div className="form-outline">
                                <input className="btn btn-outline-primary btn-lg" type="button" value="Save " />
                                </div>

                            </div>
                         </div>





                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
	  
	);
  }
  

export default Updatephoto;
