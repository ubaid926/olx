import { DownOutlined } from '@ant-design/icons';
import { ConfigProvider, Dropdown, Space } from 'antd';
import { CiLocationOn } from "react-icons/ci";
import { IoMdAdd } from "react-icons/io";
import AppSearch from './search';
import { BiMessageRounded } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";
import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import {Link} from "react-router-dom";
import AppLocation from './location';

function AppDropdown() {
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
    const CustomButton = Modal
    // const routera = createBrowserRouter([
    //     {
    //     path: "/form",
    //     element: <Appform />
    //   },
    //   {
    //     path: "/form2",
    //     element: <Appform2 />
    //   }
    // ]
    // )
    return (
        <>
            <div className='flex gap-5 items-center justify-between' >
             <AppLocation/>
                <AppSearch />
                <div className='flex gap-3'>
                    <BiMessageRounded style={{ fontSize: "25px" }} />
                    <IoMdNotificationsOutline style={{ fontSize: "25px" }} />
                </div>
                <button className='loginbtn' onClick={showModal}>Login</button>
                <div className='divmodal'>
                <CustomButton JSX={{ backgroundColor: "red" }} className='bg-red-200' title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                    <button className='border'>Login with Google</button>
                    <button className='border'>Login with Facebook</button>
                    OR
                    <button className='border'>Login with Phone</button>
                    <button className='border'>Login with Email</button>
                </CustomButton>
                </div>
                <Link to="/form">
                <button className='flex items-center gap-1 sellbtn'>
                <IoMdAdd />
                    SELL
                </button>
                </Link>
                {/* <RouterProvider router={routera} /> */}
            </div>
        </>
    )
}
export default AppDropdown;