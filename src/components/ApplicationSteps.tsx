import styles from "./ApplicationSteps.module.css";
import StepOneImage from "../../public/step-one.svg";
import StepTwoImage from "../../public/step-two.svg";
import StepThreeImage from "../../public/step-three.svg";
import Image from "next/image";

const STEPS = [
  {
    icon: StepOneImage,
    title: "Prequalify",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing eli",
  },
  {
    icon: StepTwoImage,
    title: "Choose your terms",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing eli",
  },
  {
    icon: StepThreeImage,
    title: "Get your project done",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing eli",
  },
];
export default function ApplicationSteps() {
  return (
    <div className="pt-10 mt-10 pb-60 m-auto">
      <p className={styles.header}>Easy apply in 3 steps</p>
      <div className="flex mt-20">
        {STEPS.map((step, index) => (
          <div key={index} className="w-[280] mr-5">
            <div>
              <Image
                priority
                src={step.icon}
                className="block"
                alt={`step ${index + 1}`}
              />
            </div>
            <div className="pl-3">
              <p className={`${styles.stepTitle} text-center mt-4`}>
                {step.title}
              </p>
              <p className={`${styles.stepSubtitle}`}>{step.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
