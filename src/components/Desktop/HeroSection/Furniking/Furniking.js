import FurnikingIcon from "../../../../assets/icon/Furniking/FurnikingLogo.png"
import FurnikingCategorieIcon from "../../../../assets/icon/Furniking/IconBlack.png"
import FurnikingSearchIcon from "../../../../assets/icon/SearchFurniking.png"
import FurnikingIconShop from "../../../../assets/icon/Furniking/IconShop.png"
import FurnikingIconNotification from "../../../../assets/icon/Furniking/Iconly_Light_Notification.svg"
import FurnikingIconAvatar from "../../../../assets/icon/Furniking/avatar.png"

const FurnikingApi = [
    {
        id: 0,
        furnikingTitle: [
            {
                id: 0,
                titleIcon: FurnikingIcon,
                title: "Furniking"
            }
        ],
        furnikingInput: [
            {
                id: 0,
                text: "Search here"
            }
        ],
        furnikingCategories: [
            {
                id: 0,
                catogries: "Categories",
                categoriesIcon: FurnikingCategorieIcon,
                searchIcon: FurnikingSearchIcon
            }
        ],
        furnikingIcons: [
            {
                id: 0,
                icon: FurnikingIconShop
            },
            {
                id: 1,
                icon: FurnikingIconNotification
            },
            {
                id: 2,
                icon: FurnikingIconAvatar
            }
        ]
    }
]
export default FurnikingApi