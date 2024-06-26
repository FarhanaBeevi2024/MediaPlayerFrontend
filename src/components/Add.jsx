import { faCloudArrowUp, faFilm } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import { addVideoApi } from "../services/allApi";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Add({setAddStatus}) {
  // create a state to hold data from input
  const [video, setVideo] = useState({
    caption: "",
    image: "",
    url: "",
  });

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setVideo({
      caption: "",
      image: "",
      url: "",
    });
  };
  const handleShow = () => setShow(true);

  const validateLink = (e) => {
    console.log(e.target.value);
    const link = e.target.value;
    if (link.endsWith("?featured=shared")) {
      const yTkey = link.slice(-26, -15);
      console.log(yTkey);
      let embedLink = `http://www.youtube.com/embed/${yTkey}`;
      setVideo({ ...video, url: embedLink });
    } else if (link.startsWith("https://youtu.be")) {
      const yTkey = link.slice(17, 28);
      console.log(yTkey);
      let embedLink = `http://www.youtube.com/embed/${yTkey}`;
      setVideo({ ...video, url: embedLink });
    } else {
      const yTkey = link.slice(-11);
      console.log(yTkey);
      let embedLink = `https://www.youtube.com/embed/${yTkey}`;
      setVideo({ ...video, url: embedLink });
    }
  };

  //http://www.youtube.com/watch?v=tOM-nWPcR4U
  //https://youtu.be/toM-nWPcR4U?feature=shared
  //https://www.youtube.com/embed/tOM-nWPcR4U

  //https://youtu.be/KUN5Uf9mObQ?si=8PQSuz_l4edMEPMz //share

  //https://www.youtube.com/watch?v=KUN5Uf9mObQ //top searchtab

  // <iframe width="100%" height="315" src="https://www.youtube.com/embed/KUN5Uf9mObQ?si=sp0yCAzD_1PE6cDa ?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

  console.log(video);

  const handleUpload = async (e) => {
    e.preventDefault()

    const { caption, image, url } = video

    if (!caption || !image || !url) {
      toast.info("Please fill the form completely");
    } 
    else {
      const result = await addVideoApi(video)
      console.log(result);
      
      if (result.status >= 200 && result.status < 300) {
        toast.success("video Uploaded successfully");
        setAddStatus(result.data)
        handleClose();

      } else {
        toast.error("something went wrong");
        handleClose();
      }
    }
  }

  //   else{
  //     if(url.endsWith('?feature=shared')){
  //     const yTkey = url.slice(-26,-15)
  //     console.log(yTkey);
  //     let embedLink = `http://www.youtube.com/embed/${yTkey}`
  //     setVideo({...video, url:embedLink})
  //     console.log(video);
  //     }

  //     else if(url.startsWith('https://youtu.be')){
  //     const yTkey = url.slice(17,28)
  //     console.log(yTkey);
  //     let embedLink = `http://www.youtube.com/embed/${yTkey}`
  //     setVideo({...video, url:embedLink})
  //     console.log(video);
  //   }

  //   else{
  //     const yTkey = url.slice(-11)
  //     console.log(yTkey);
  //     let embedLink = `https://www.youtube.com/embed/${yTkey}`
  //     setVideo({...video,url:embedLink})
  //     console.log(video);
  //   }
  // }

 

  return (
    <>
      <div className="d-flex align-items-center">
        <h5>
          Upload <span id="h"> new Video </span>
        </h5>
        <button className="btn mb-2" onClick={handleShow}>
          {" "}
          <FontAwesomeIcon icon={faCloudArrowUp} size="xl" />
        </button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="text-warning">
            {" "}
            <FontAwesomeIcon icon={faFilm} className="me-2" />
            Upload Videos
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please fill the following details</p>
          <form className="border p-3 rounded border-secondary">
            <input
              type="text"
              placeholder="Video Caption"
              className="form-control"
              onChange={(e) => setVideo({ ...video, caption: e.target.value })}
            />

            <input
              type="text"
              placeholder="Video Image"
              className="form-control mt-3"
              onChange={(e) => setVideo({ ...video, image: e.target.value })}
            />

            <input
              type="text"
              placeholder="Video Url"
              className="form-control mt-3"
              onChange={(e) => validateLink(e)}
            />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="warning" onClick={handleUpload}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer theme="colored" position="top-center" autoClose={2000} />
    </>
  );
}

export default Add;
