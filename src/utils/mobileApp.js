// card icons
import iosIcon from "../assets/icons/apple.svg";
import androidIcon from "../assets/icons/android.svg";
import crossplatformIcon from "../assets/icons/crossplatform.svg";

// tech card icons
import swiftIcon from "../assets/icons/swift.svg";
import kotlinIcon from "../assets/icons/kotlin.svg";
import flutterIcon from "../assets/icons/flutter.svg";

const mobileCardData = [
  {
    id: 1,
    cardIcon: iosIcon,
    title: "iOS",
    cardType: "science",
  },
  {
    id: 2,
    cardIcon: androidIcon,
    title: "Android",
    cardType: "science",
  },
  {
    id: 3,
    cardIcon: crossplatformIcon,
    title: "Crossplatform",
    cardType: "science",
  },
];

const mobileTechCardData = [
  {
    id: 1,
    cardIcon: swiftIcon,
    title: "Swift",
  },
  {
    id: 2,
    cardIcon: kotlinIcon,
    title: "Kotlin",
  },
  {
    id: 3,
    cardIcon: flutterIcon,
    title: "Flutter",
  },
];

const mobilePageText = `In collaboration with startups, we have learned how to create a creative and functional user interface for mobile applications.`;

export default mobileCardData;
export { mobileTechCardData, mobilePageText };
