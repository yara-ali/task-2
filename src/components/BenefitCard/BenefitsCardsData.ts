
import { cardsIcons } from "./icons";

interface befefitsData { 
  icon: string,
  title: string,
  description: string
}
export const benefitsCardsData : befefitsData[] = [
  {
    icon: cardsIcons.graduationCap, 
    title: "Holistic Learning Approach",
    description: "Our curriculum focuses on nurturing cognitive, social, emotional, and physical development, ensuring a well-rounded education."
  },
  {
    icon: cardsIcons.crown,
    title: "Experienced Educators",
    description: "Our passionate and qualified teachers create a supportive and stimulating learning environment."
  },
  {
    icon: cardsIcons.faceMask,
    title: "Nurturing Environment",
    description: "We prioritize safety and provide a warm and caring atmosphere for every child."
  },
  {
    icon: cardsIcons.flag,
    title: "Play-Based Learning",
    description: "We believe in the power of play to foster creativity, problem-solving skills, and imagination."
  },
  {
    icon: cardsIcons.lifeRing,
    title: "Individualized Attention",
    description: "Our small class sizes enable personalized attention, catering to each child's unique needs."
  },
  {
    icon: cardsIcons.people,
    title: "Parent Involvement",
    description: "We foster a strong parent-school partnership to ensure seamless communication and collaboration."
  }
];