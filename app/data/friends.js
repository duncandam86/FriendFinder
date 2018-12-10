let peopleArr = [
    {
        "name": "Sonny",
        "photo": "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjYivTPz5DfAhWInoMKHY7ADjwQjRx6BAgBEAU&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F406661041336887484%2F&psig=AOvVaw0VAlMLcGLuxqGGqrJusPDR&ust=1544371851594524",
        "scores": [
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
        ]
    },
    {
        "name": "David",
        "photo": "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjGpozYz5DfAhVH9IMKHVtJDdAQjRx6BAgBEAU&url=http%3A%2F%2Fwww.ebaumsworld.com%2Fpictures%2F23-funny-pictures-and-memes%2F85677228%2F&psig=AOvVaw0VAlMLcGLuxqGGqrJusPDR&ust=1544371851594524",
        "scores": [
            3,
            2,
            5,
            2,
            5,
            3,
            1,
            4,
            5,
            2
        ]
    },
    {
        "name": "Matt B.",
        "photo": "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwihmvngz5DfAhUM9IMKHfQGD2cQjRx6BAgBEAU&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F332914597441850132%2F&psig=AOvVaw0VAlMLcGLuxqGGqrJusPDR&ust=1544371851594524",
        "scores": [
            3,
            2,
            3,
            3,
            3,
            4,
            5,
            2,
            2,
            5
        ]
    },
    {
        "name": "Josh",
        "photo": "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwj0nbf0z5DfAhWNw4MKHQV6DDEQjRx6BAgBEAU&url=https%3A%2F%2Fwww.askideas.com%2F32-funniest-memes-for-facebook-comments-pictures-and-images%2F&psig=AOvVaw0VAlMLcGLuxqGGqrJusPDR&ust=1544371851594524",
        "scores": [
            1,
            5,
            4,
            4,
            1,
            5,
            5,
            2,
            1,
            4
        ]
    },
    {
        "name": "Wilson",
        "photo": "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwil9OL9z5DfAhULoYMKHSDWBQ8QjRx6BAgBEAU&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F394768723577212501%2F&psig=AOvVaw0VAlMLcGLuxqGGqrJusPDR&ust=1544371851594524",
        "scores": [
            1,
            4,
            5,
            2,
            1,
            2,
            5,
            4,
            5,
            2
        ]
    },
    {
        "name": "Matt M.",
        "photo": "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiC06CI0JDfAhVQ_oMKHfokAPAQjRx6BAgBEAU&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DCM_9FwfMBrM&psig=AOvVaw0VAlMLcGLuxqGGqrJusPDR&ust=1544371851594524",
        "scores": [
            2,
            3,
            4,
            5,
            1,
            2,
            3,
            4,
            5,
            1
        ]
    },
    {
        "name": "Randy",
        "photo": "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwj72pKT0JDfAhWm0YMKHXvXAKwQjRx6BAgBEAU&url=http%3A%2F%2Fwww.fundoes.com%2Fcategories.aspx%3Fcategory%3Dfamily%2F7&psig=AOvVaw0VAlMLcGLuxqGGqrJusPDR&ust=1544371851594524",
        "scores": [
            1,
            1,
            2,
            2,
            5,
            2,
            3,
            2,
            3,
            3
        ]
    },
    {
        "name": "James",
        "photo": "https://www.google.com/search?q=funny+pictures&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjaxafMz5DfAhUC_4MKHeeDBeQQ_AUIDigB&biw=1260&bih=635#imgrc=l_wbtznOp94TWM:",
        "scores": [
            2,
            4,
            4,
            4,
            2,
            3,
            2,
            3,
            4,
            5
        ]
    },
    {
        "name": "Duncan",
        "photo": "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjmyd2s0JDfAhUj0YMKHTjEA6IQjRx6BAgBEAU&url=https%3A%2F%2Fmemesbams.com%2Fdirty-memes%2F&psig=AOvVaw0VAlMLcGLuxqGGqrJusPDR&ust=1544371851594524",
        "scores": [
            4,
            4,
            4,
            4,
            3,
            3,
            3,
            2,
            2,
            2
        ]
    },
    {
        "name": "Justin",
        "photo": "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjw0_i20JDfAhVQ_oMKHfokAPAQjRx6BAgBEAU&url=https%3A%2F%2Fwww.downloadfeast.com%2Ffunny-mobile-using-joke-funny-jokes%2F&psig=AOvVaw0VAlMLcGLuxqGGqrJusPDR&ust=1544371851594524",
        "scores": [
            1,
            1,
            2,
            2,
            4,
            5,
            2,
            3,
            3,
            2
        ]
    },
    {
        "name": "Shawn",
        "photo": "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwii-aLf0JDfAhUR8YMKHcOiBg0QjRx6BAgBEAU&url=https%3A%2F%2Fwww.facebook.com%2Fpicturesfunnyjoke%2F&psig=AOvVaw0VAlMLcGLuxqGGqrJusPDR&ust=1544371851594524",
        "scores": [
            2,
            1,
            3,
            5,
            1,
            5,
            3,
            4,
            4,
            3
        ]
    },
    {
        "name": "Nick",
        "photo": "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjdp8fn0JDfAhXkyoMKHSXqDJ8QjRx6BAgBEAU&url=http%3A%2F%2Fwww.funnypart.com%2Ffunny%2Farmy-baby.shtml&psig=AOvVaw0VAlMLcGLuxqGGqrJusPDR&ust=1544371851594524",
        "scores": [
            5,
            2,
            2,
            3,
            2,
            5,
            5,
            3,
            5,
            2
        ]
    },
];

module.exports = peopleArr;