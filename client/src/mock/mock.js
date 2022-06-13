import { test_image } from '../consts/general.const';

export const mock_posts = [
    {
        userId: "629dc9fd848ff7ba0365fc89",
        name: 'Indian Chicken curry michal',
        content:  `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        `,
        likes: [1,2,3],
        comments: ["a", "b", "c"],
        date: new Date(),
    },
];

export const mock_recipes = [
    {
        userId: "629dc9fd848ff7ba0365fc89",
        name: 'Indian Chicken curry michal',
        content:  `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
        est laborum.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
        est laborum.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
        est laborum.
        `,
        likes: [1,2,3],
        comments: ["a", "b", "c"],
        date: new Date(),
        image: test_image,
    },
    {
        userId: "629dc9fd848ff7ba0365fc89",
        name: 'Indian Chicken curry',
        content:  `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
        est laborum.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
        est laborum.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
        est laborum.
        `,
        likes: [1,2,3,4],
        comments: ["a", "b", "c", "asa", "asas"],
        date: new Date(7888879587),
        image: test_image,
    }
];
export const mock_reviews = [
    {
        userId: "629dc9fd848ff7ba0365fc89",
        restaurantName: 'Hudson Brasserie',
        content: `This imessive paella is a perfect party dish and a fun meal to cooktogether with your guests. Add 1 cup of frozen peas along with the mussels,if you like.
        This impressive paella is a perfect party dish and a fun meal to cook
        together with your guests. Add 1 cup of frozen peas along with the mussels,
        if you like.
        This impressive paella is a perfect party dish and a fun meal to cook
        together with your guests. Add 1 cup of frozen peas along with the mussels,
        if you like.This impressive paella is a perfect party dish and a fun meal to cook
        together with your guests. Add 1 cup of frozen peas along with the mussels,
        if you like.
        This impressive paella is a perfect party dish and a fun meal to cook
        together with your guests. Add 1 cup of frozen peas along with the mussels,
        if you like.This impressive paella is a perfect party dish and a fun meal to cook
        together with your guests. Add 1 cup of frozen peas along with the mussels,
        if you like.
                This impressive paella is a perfect party dish and a fun meal to cook
        together with your guests. Add 1 cup of frozen peas along with the mussels,
        if you like.This impressive paella is a perfect party dish and a fun meal to cook
        together with your guests. Add 1 cup of frozen peas along with the mussels,
        if you like.
        `,
        rating: 3,
        likes: [1,2,3],
        comments: ["a", "b", "c"],
        images: [test_image],
        date: new Date(),
        dishes: ["Bacon, Omelet"],
        price: 2000
    },
    {
        userId: "629dc9fd848ff7ba0365fc89",
        restaurantName: 'Hudson Brasserie',
        content: `
        This impressive paella is a perfect party dish and a fun meal to cook
        together with your guests. Add 1 cup of frozen peas along with the mussels,
        if you like.
        `,
        rating: 3,
        likes: [1,2,3],
        comments: ["a", "b", "c"],
        images: [test_image],
        date: new Date()
    },
    {
        userId: "629dc9fd848ff7ba0365fc89",
        restaurantName: 'Hudson Brasserie',
        content: `
        This impressive paella is a perfect party dish and a fun meal to cook
        together with your guests. Add 1 cup of frozen peas along with the mussels,
        if you like.
        `,
        rating: 3,
        likes: [1,2,3],
        comments: ["a", "b", "c"],
        images: [test_image],
        date: new Date()
    },
    {
        userId: "629dc9fd848ff7ba0365fc89",
        restaurantName: 'Hudson Brasserie',
        content: `
        This impressive paella is a perfect party dish and a fun meal to cook
        together with your guests. Add 1 cup of frozen peas along with the mussels,
        if you like.
        `,
        rating: 3,
        likes: [1,2,3],
        comments: ["a", "b", "c"],
        images: [test_image],
        date: new Date()
    },
    {
        userId: "629dc9fd848ff7ba0365fc89",
        restaurantName: 'Hudson Brasserie',
        content: `
        This impressive paella is a perfect party dish and a fun meal to cook
        together with your guests. Add 1 cup of frozen peas along with the mussels,
        if you like.
        `,
        rating: 3,
        likes: [1,2,3],
        comments: ["a", "b", "c"],
        images: [test_image],
        date: new Date()
    },
    {
        userId: "629dc9fd848ff7ba0365fc89",
        restaurantName: 'Hudson Brasserie',
        content: `
        This impressive paella is a perfect party dish and a fun meal to cook
        together with your guests. Add 1 cup of frozen peas along with the mussels,
        if you like.
        `,
        rating: 3,
        likes: [1,2,3],
        comments: ["a", "b", "c"],
        images: [test_image],
        date: new Date()
    }
]