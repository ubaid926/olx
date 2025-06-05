import { DownOutlined } from '@ant-design/icons';
import { ConfigProvider, Dropdown, Space } from 'antd';
import { CiLocationOn } from "react-icons/ci";
import { IoSearchOutline } from "react-icons/io5";
function AppLocation({ styleCustom, search, title }) {
    const items = [
        {
            label: (
                <a href="https://www.antgroup.com" target="_blank" rel="noopener noreferrer" >
                    Use Current Location
                </ a >
            ),
            key: '0',
        },
        {
            type: 'divider',
        },
        {
            label: (
                <a href="https://www.antgroup.com" target="_blank" rel="noopener noreferrer" >
                    Sindh,Pakistan
                </ a >
            ),
            key: '1',
        },
        {
            label: (
                <a href="https://www.aliyun.com" target="_blank" rel="noopener noreferrer" >
                    Punjab,Pakistan
                </a>
            ),
            key: '2',
        },
        {
            label: 'Azad Kashmir',
            key: '3',
        },
        {
            label: 'Balochistan',
            key: '4',
        },
    ]
    // {console.log(widthprop)}
    return (
        <Dropdown menu={{ items }} trigger={['click']} >
            <a onClick={e => e.preventDefault()}>
                <Space style={styleCustom ? styleCustom : {
                    border: "#d8dfe0 solid 1px",
                    borderRadius: "4px", height: "48px", fontSize: "1.2rem", padding: "10px",
                    letterSpacing: "normal",
                    lineHeight: "1.5",
                    color: "black",
                    width: "310px",
                    display: "flex",
                    // backgroundColor:"brown",
                    // flexDirection:"column",
                    justifyContent: "space-between"
                }}>
                    <div className='flex items-center gap-2'>
                        {search ? <IoSearchOutline style={{ fontWeight: "bold" }} className='font-bold' /> : <CiLocationOn />}

                       {title? title: "Pakistan"}
                    </div>
                    {!search && < DownOutlined />}
                </Space>
            </a>
        </Dropdown>
    )
}
export default AppLocation