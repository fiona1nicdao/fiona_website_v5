import foodweatherPIC from '../../assets/images/foodweather.png'
import weatherPIC from '../../assets/images/weather.png'
import polariPIC from '../../assets/images/polari.png'
import sleepPIC from '../../assets/images/sleep_analysis.png'
import resnetPIC from '../../assets/images/sign_lan_resnet.png'
import fridatingPIC from '../../assets/images/fridatingPIC.png'

const data =[
    {
        id:1,
        imageSrc:resnetPIC,
        title:"Sign Language Resnet",
        description:" Developed image classification model (ResNet34) for American Sign Language Letters using TensorFlow and Keras. The model has a 92% accuracy for the test dataset.",
        website:"https://github.com/fiona1nicdao/signLanguageResnet34",
        github:"https://github.com/fiona1nicdao/signLanguageResnet34",
    },
    {
        id:2,
        imageSrc:sleepPIC,
        title:"Sleep Analysis",
        description:"This data mining project analyzes how age, gender, occupation, caffeine, BMI, and sleep disorders affect sleep, finding insomnia significantly reduces sleep, while occupation and BMI also influence sleep duration patterns.",
        website:"https://github.com/fiona1nicdao/DataMiningProject",
        github:"https://github.com/fiona1nicdao/DataMiningProject",
    },
    {
        id:3,
        imageSrc:fridatingPIC,
        title:"FRIDATING",
        description:"This project models the backend SQL database of the FRIDATING platform, including user accounts, chat functionality, subscription plans, and event management.",
        website:"https://github.com/fiona1nicdao/FRIDATING",
        github:"https://github.com/fiona1nicdao/FRIDATING",
    },
    {
        id:4,
        imageSrc:polariPIC,
        title:"Polari",
        description:"Polari is a dating website caterd to the LGBTQ community with an emphasis to educate users of their attachment styles.",
        website:"https://polari-attachments.herokuapp.com/",
        github:"https://github.com/polari-2022",

    },
    {
        id:5,
        imageSrc:weatherPIC,
        title:"Weather Dashboard",
        description:"Weather dashboard site that shows the weather outlook for multiple cities and for one city the five day future forecast.",
        website:"https://fiona1nicdao.github.io/weather/",
        github:"https://github.com/fiona1nicdao/weather",

    },
    {
        id:6,
        imageSrc:foodweatherPIC,
        title:"What's your Food Temp?",
        description:"Weather dashboard site that shows the weather outlook for multiple cities and for one city the five day future forecast.",
        website:"https://seasons-of-food.github.io/whats-your-food-temp/",
        github:"https://github.com/seasons-of-food/whats-your-food-temp",

    },
]
export default data;