import {
    UilEstate,
    UilClipboardAlt,
    UilUsersAlt,
    UilPackage,
    UilChart,
    UilUsdSquare,
    UilMoneyWithdrawal
} from '@iconscout/react-unicons';

import img1 from '../images/img1.png';
import img2 from '../images/img2.png';
import img3 from '../images/img3.png'

export const SidebarData = [
    {
        icon: UilEstate,
        heading: "Dashboard"
    },
    {
        icon: UilClipboardAlt,
        heading: "Orders"
    },
    {
        icon: UilUsersAlt,
        heading: "Customers"
    },
    {
        icon: UilPackage,
        heading: "Products"
    },
    {
        icon: UilChart,
        heading: "Analytics"
    }
];

export const CardsData = [
    {
        title: "Sales",
        color: {
            bg: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
            boxShadow: "0px 10px 20px 0px #e0c6f5",
        },
        barValue: 70,
        value: "25,970",
        png: UilUsdSquare,
        series: [
            {
                name: "Sales",
                data: [31, 40, 28, 51, 42, 109, 100]
            }
        ]
    },
    {
        title: "Revenue",
        color: {
            bg: "linear-gradient(180deg, #ff919d 0%, #fc929d 100%)",
            boxShadow: "0px 10px 20px 0px #fdc0c7",
        },
        barValue: 80,
        value: "14,270",
        png: UilMoneyWithdrawal,
        series: [
            {
                name: "Revenue",
                data: [10, 100, 50, 70, 80, 30, 40]
            }
        ]
    },
    {
        title: "Expenses",
        color: {
            bg:  "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
            boxShadow: "0px 10px 20px 0px #f9d59b",
        },
        barValue: 60,
        value: "4,270",
        png: UilClipboardAlt,
        series: [
            {
                name: "Expenses",
                data: [10, 25, 15, 30, 12, 15, 20]
            }
        ]
    }
];

export const UpdatesData = [
    {
      img: img1,
      name: "Andrew Pinkman",
      noti: "has ordered 85\" Class QN90A Samsung Neo QLED 4K Smart TV.",
      time: "25 seconds ago",
    },
    {
      img: img2,
      name: "James Schmidt",
      noti: "has received M2 MacBook Pro 13\"",
      time: "30 minutes ago",
    },
    {
      img: img3,
      name: "Irene Wolf",
      noti: "has ordered Apple watchOS9, Samsung Gear 2500mh battery.",
      time: "2 hours ago",
    },
  ];