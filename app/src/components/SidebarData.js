import React from 'react'
import * as AiIcons from 'react-icons/ai'
import * as MdIcons from 'react-icons/md'
import * as GoIcons from 'react-icons/go'
import * as BiIcons from 'react-icons/bi'




export const SidebarData = [
    {
        title: 'Dashboard',
        path: '/dashboard',
        icon: <BiIcons.BiRadioCircle />,
        icon2: <AiIcons.AiOutlineArrowRight />,
    },
    {
        title: 'Data UMKM',
        path: '/data-umkm',
        icon: <BiIcons.BiRadioCircle />,
        icon2: <AiIcons.AiOutlineArrowRight />,

        // iconClosed: <RiIcons.RiArrowDropDownFill />,
        // iconOpened: <RiIcons.RiArrowUpSFill />,
        // subNav: [
        //     {
        //         title: 'All Data',
        //         path: '/User/all-data',
        //         icon: <BsIcons.BsClipboardData />
        //     },
        //     {
        //         title: 'Location',
        //         path: '/User/Location',
        //         icon: <GoIcons.GoLocation />
        //     },
        //     {
        //         title: 'Business Type',
        //         path: '/User/business-type',
        //         icon: <MdIcons.MdBusiness/>
        //     }
        // ]
    },
    {
        title: 'Analisa Bisnis',
        path: '/analisa-bisnis',
        icon: <BiIcons.BiRadioCircle />,
        icon2: <AiIcons.AiOutlineArrowRight />,

    },
    {
        title: 'Analisa Menchatat',
        path: '/analisa-menchatat',
        icon: <BiIcons.BiRadioCircle />,
        icon2: <AiIcons.AiOutlineArrowRight />,

        // iconClosed: <RiIcons.RiArrowDropDownFill />,
        // iconOpened: <RiIcons.RiArrowUpSFill />,
        // subNav: [
        //     {
        //         title: 'Add Admin',
        //         path: '/User/add-admin',
        //         icon: <AiIcons.AiOutlineUserAdd />
        //     },
        //     {
        //         title: 'Location',
        //         path: '/User/Location',
        //         icon: <GoIcons.GoLocation />
        //     }
        // ]
    },
    {
        title: 'Data Voucher',
        path: '/data-voucher',
        icon: <BiIcons.BiRadioCircle />,
        icon2: <AiIcons.AiOutlineArrowRight />,

    },
    {
        title: 'Setting',
        path: '/setting',
        icon: <BiIcons.BiRadioCircle />,
        icon2: <AiIcons.AiOutlineArrowRight />,

    },

]