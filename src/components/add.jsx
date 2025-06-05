import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { MdCancelPresentation } from "react-icons/md";
import { BiSolidEditAlt } from "react-icons/bi";
import { useState, useRef } from 'react';
// import { Modal } from 'antd';
import * as React from 'react';
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { ModalTitle } from 'react-bootstrap';

function AppAdd() {
    const style = {
        borderRadius: '7px',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        height: '420px',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const adds = localStorage.getItem("adds")
    let recAdd = []
    if (adds) {
        recAdd = JSON.parse(adds)
    }
    const [modalTitle, setModalTitle] = useState("")
    const [updateStorage, setupdateStorage] = useState()
    const [open, setOpen] = React.useState(false);
    const modalNumRef = useRef(null);
    const handleOpen = (id) => {
        setOpen(true)
        // setModalTitle(recAdd[i])
        modalNumRef.current = i;
        // console.log(id)
        // modalNum=i
        // console.log(modalTitle)
    };

    const [addUpdateObj, setAddUpdateObj] = useState({})
    // let addUpdateObj = {}

    let searched
    const updateAdd =
        () => {
            const recArr2 = JSON.parse(localStorage.getItem("adds"));
            handleClose()
            let modalNum = modalNumRef.current
            let recArr2Obj = recArr2[modalNum]
            // const keysUpdateobj = Object.keys(addUpdateObj);
            const keysrecArr2 = Object.keys(recArr2Obj);
            // console.log(recArr2)
            // for (let key in addUpdateObj) {
            searched = keysrecArr2.filter(key => !(key in addUpdateObj));
            // console.log(key, "addupdateobj")
            // }
            // for (let key2 in recArr2Obj) {
            //     for (let i = 0; i < searched.length; i++) {
            //         if (key2 == searched[i]) {
            //             setAddUpdateObj(prevInput => ({
            //                 ...prevInput,
            //                 [key2]: recArr2Obj[key2]
            //             })
            //             )
            //         }
            //     }
            // }
            const newEntries = {};
            searched.forEach(key => {
                newEntries[key] = recArr2Obj[key];
            });

            // Update state once
            setAddUpdateObj(prev => ({
                ...prev,
                ...newEntries
            }));

            // Also update recArr2 with the merged object
            recArr2[modalNum] = { ...addUpdateObj, ...newEntries };

            // Save to localStorage
            localStorage.setItem("adds", JSON.stringify(recArr2));

            // recArr2[modalNum] = addUpdateObj
            // let recArrString = JSON.stringify(recArr2)
            // localStorage.setItem("adds", recArrString)

        }


    const handleClose = () => setOpen(false);
    const [urlState2, setUrlState2] = useState(null)
    // let urlVar = ""

    const addUpdateImage = () => {
        //  console.log(urlVar)
        // addUpdateObj.image_url = urlVar
        setAddUpdateObj(prevInput => ({
            ...prevInput,
            image_url: urlState2
        })
        )
        // urlVar = ""
        setUrlState2(null)
    }
    // console.log(urlVar)
    const addUpdatedPrice = (e) => {
        setAddUpdateObj(prevInput => ({
            ...prevInput,
            price: e.target.value
        })
        )
        // addUpdateObj.price = e.target.value
    }
    const addUpdatedAdress = (e) => {
        setAddUpdateObj(prevInput => ({
            ...prevInput,
            adress: e.target.value
        })
        )
        // addUpdateObj.adress = e.target.value
    }
    const addUpdatedMake = (e) => {
        setAddUpdateObj(prevInput => ({
            ...prevInput,
            make: e.target.value
        })
        )
        // addUpdateObj.make = e.target.value
    }

    return (
        <>
            {/* )} */}
            {recAdd.map((v, i) =>
                <Card key={i} style={{
                    width: '18.5rem', border: '1px solid #ccd5d6',
                    position: 'relative', borderRadius: '5px',
                    height: '312px', textTransform: 'capitalize', lineHeight: '2rem'
                }}>
                    <Modal
                        //  key={i}
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description">
                        <Box sx={style} className='flex flex-col gap-4'>
                            <h1>Edit your details</h1>
                            <TextField
                                style={{ width: '100%' }}
                                type='file'
                                id="outlined-required"
                                title='afjsdlkjafsjk'
                                // itemID='Textfield'
                                // onClick={(e) => e.target.type = "file"}
                                // label="Title"
                                // defaultValue={modalTitle.image_url}
                                onChange={
                                    async (e) => {
                                        const file = e.target.files[0];
                                        if (!file) return
                                        const data = new FormData()
                                        data.append("file", file)
                                        data.append("upload_preset", "olx_ad_image")
                                        data.append("cloud_name", "dcjsi7kem")
                                        const res = await fetch("https://api.cloudinary.com/v1_1/dcjsi7kem/image/upload",
                                            {
                                                method: "POST",
                                                body: data
                                            })
                                        const uploadImageUrl = await res.json()
                                        // console.log(uploadImageUrl.url);
                                        const imgUrl = uploadImageUrl.url
                                        setUrlState2(imgUrl)
                                        // ;
                                        // urlVar = imgUrl
                                        //  console.log(urlVar)
                                    }}

                            />
                            {urlState2 &&
                                addUpdateImage()
                            }
                            <label htmlFor="Textfield">Click me to upload image</label>
                            <TextField
                                style={{ width: '100%' }}
                                className='Textfield'
                                // id="outlined-required"
                                label="Make"
                                defaultValue={modalTitle.make}
                                onChange={(e) => addUpdatedMake(e)}
                            />
                            {/* <p>{v.make}</p> */}
                            <TextField
                                style={{ width: '100%' }}
                                id="outlined-required"
                                label="Adress"
                                defaultValue={modalTitle.adress}
                                onChange={(e) => addUpdatedAdress(e)}
                            />
                            <TextField
                                style={{ width: '100%' }}
                                type='number'
                                id="outlined-required"
                                label="Price"
                                defaultValue={modalTitle.price}
                                onChange={(e) => addUpdatedPrice(e)}
                            />
                            <button style={{
                                backgroundColor: 'hwb(216.85deg 4.31% 18.43%)',
                                borderRadius: '3px', color: 'white', height: '40px',
                                padding: '5px'
                            }}
                                onClick={updateAdd}>Update</button>

                        </Box>
                    </Modal>
                    {/* {console.log(i)} */}
                    <button onClick={() => {
                        let storage = JSON.parse(localStorage.getItem("adds"))
                        storage.splice(i, 1)
                        setupdateStorage(storage)
                        localStorage.setItem('adds', JSON.stringify(storage))
                    }} style={{ position: 'absolute', right: '0', top: '0', border: 'none' }}>
                        <MdCancelPresentation style={{
                            color: 'white', fontSize: '20px'
                        }} />
                    </button>
                    <button style={{ position: 'absolute', right: '0', top: '25px', border: 'none' }}
                        onClick={()=>{
                            handleOpen(recAdd[i].id)}
                            // console.log(i)
                        
                        } >
                        <BiSolidEditAlt style={{
                            color: 'white', fontSize: '20px'
                        }} />
                    </button>
                    <Card.Img variant="top" src={v.image_url} alt='picture' style={{ height: '160px', width: '100%', objectFit: 'cover' }} />
                    <Card.Body style={{ padding: '15px', fontSize: '17px' }}>
                        <Card.Title className='font-bold'>
                            {v.price}
                        </Card.Title>
                        <Card.Text>
                            {v.make}
                        </Card.Text>
                        <Card.Text>
                            {v.adress}
                        </Card.Text>
                    </Card.Body>
                </Card>)
            }
        </>
    );
}
export default AppAdd