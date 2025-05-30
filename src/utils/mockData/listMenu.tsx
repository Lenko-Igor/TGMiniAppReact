import Appetizers from '../../assets/icons/appetizer_icon.svg?react'
import Salad from '../../assets/icons/salad_icon.svg?react'
import MainCourse from '../../assets/icons/main_course_icon.svg?react'
import Desserts from '../../assets/icons/dessert_icon.svg?react'
import Drinks from '../../assets/icons/drinks_icon.svg?react'


export const menuData = [
    {
        id: '1',
        section: {
            title: 'menu_sections:appetizers',
            Icon: Appetizers,
        },
    },
    {
        id: '2',
        section: {
            title: 'menu_sections:salads',
            Icon: Salad,
        },
    },
    {
        id: '3',
        section: {
            title: 'menu_sections:main_course',
            Icon: MainCourse,
        },
    },
    {
        id: '4',
        section: {
            title: 'menu_sections:desserts',
            Icon: Desserts,
        },
    },
    {
        id: '5',
        section: {
            title: 'menu_sections:drinks',
            Icon: Drinks,
        },
    },
]