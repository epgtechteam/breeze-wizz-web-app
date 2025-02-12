import React, { Dispatch, SetStateAction } from "react";
import DropdownWithLabel from "./DropdownWithLabel";
import { LOAN_PURPOSE_TYPES_DROPDOWN } from "@/constants/persona";
import InputWithLabel from "./InputWithLabel";
import { Option } from "@/@types/dropdown";

const OFFER_FEATURES = [
  "View offers in minutes",
  "Low fixed rates",
  "Checking offers will not impact your credit score",
];
const OfferIframePlaceholder = ({
  setAmount,
  setLoanPurpose,
  onContinueClick,
}: {
  setAmount: Dispatch<SetStateAction<number>>;
  setLoanPurpose: Dispatch<SetStateAction<Option | undefined>>;
  onContinueClick: () => void;
}) => {
  return (
    <div className="h-[600px] flex flex-col w-full items-center justify-center bg-[#ECEEF1] mt-10 px-20">
      <div>
        <div>
          <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight sm:leading-snug md:leading-normal lg:leading-relaxed xl:leading-relaxed text-left mb-8">
            Check the latest offers we have for you!
          </h1>
        </div>
        <div>
          <ul className="list-none mb-8 text-left">
            {OFFER_FEATURES.map((offer, index) => (
              <li key={index} className="flex items-start mb-4">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                  >
                    <path
                      d="M28.5 15C28.5 22.4558 22.4558 28.5 15 28.5C7.54416 28.5 1.5 22.4558 1.5 15C1.5 7.54416 7.54416 1.5 15 1.5C22.4558 1.5 28.5 7.54416 28.5 15Z"
                      fill="white"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M15 29C22.7325 29 29 22.7325 29 15C29 7.26752 22.7325 1 15 1C7.26752 1 1 7.26752 1 15C1 22.7325 7.26752 29 15 29ZM23.2205 11.1935C23.6035 10.7956 23.5914 10.1625 23.1935 9.77951C22.7956 9.39652 22.1625 9.40862 21.7795 9.80653L12.875 19.058L9.22049 15.2611C8.8375 14.8632 8.20445 14.8511 7.80653 15.2341C7.40862 15.6171 7.39652 16.2501 7.77951 16.648L12.1545 21.1935C12.343 21.3893 12.6032 21.5 12.875 21.5C13.1468 21.5 13.407 21.3893 13.5955 21.1935L23.2205 11.1935Z"
                      fill="#2CA01C"
                    />
                  </svg>
                </div>

                <span className="pl-3">{offer}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-around flex-wrap mb-4">
          <InputWithLabel
            label="Request Amount"
            onChange={(val) => {
              setAmount(val);
            }}
            className="mt-5"
          />
          <DropdownWithLabel
            label="Loan Purpose"
            options={LOAN_PURPOSE_TYPES_DROPDOWN}
            onSelect={(val: Option) => {
              setLoanPurpose(val);
            }}
            className="mt-5"
          />
        </div>
        <div className="mt-16 text-center">
          <button
            className="bg-[#00892E] text-white px-24 font-semibold py-2 rounded hover:bg-green-700 transition duration-300"
            onClick={onContinueClick}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default OfferIframePlaceholder;
