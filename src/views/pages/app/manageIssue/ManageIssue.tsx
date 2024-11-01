import React, { ChangeEvent, useRef, useState } from "react";
import { PageWrapper } from "src/views/pages/PageWrapper";
import bgimage from "src/assets/Group258.svg";
import bgimage2 from "src/assets/issuebg2.png";
import bgimage3 from "src/assets/issuebg3.png";
import img1 from "src/assets/issueimg1.png";
import person from "src/assets/personicon.png";
import dow from "src/assets/dow.png";
import cat from "src/assets/catimg.png";
import check from "src/assets/checkmark.png";
import down from "src/assets/arrowdown.png";
import up from "src/assets/arrowup.png";

interface ManageIssueProps {}

export function ManageIssue(props: ManageIssueProps) {
  const [isToggled, setIsToggled] = useState(false); // Start with 'Public' as true
  const [activeTab, setActiveTab] = useState("tab1"); // Default active tab

  const [counter, setcounter] = useState(10);
  const [inputValue, setInputValue] = useState(10);
  const inputRef = useRef(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    setInputValue(value);
    setcounter(value);
  };

  const increment = () => {
    setcounter(counter + 1);
  };
  const decrement = () => {
    setcounter(counter - 1);
  };

  const toggleSwitch = () => {
    setIsToggled(!isToggled); // Toggle the state
  };

  // Function to handle tab click
  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <PageWrapper>
      <div>
        <div
          className="md:pb-60 "
          style={{
            backgroundImage: `url(${bgimage2})`,
            backgroundPosition: "left 20%",
            backgroundSize: "60%",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div
            style={{
              backgroundImage: `url(${bgimage3})`,
              backgroundPosition: "right 2%",
              backgroundSize: "60%",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="flex items-center justify-center px-5">
              <div
                className="mt-20 py-5 px-3"
                style={{
                  backgroundImage: `url(${bgimage})`,
                  backgroundPosition: "top",
                  backgroundPositionY: "-320px",
                  backgroundSize: "1200px",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <h1 className="lg:text-[62px] text-[30px] text-center font-medium text-white md:mb-0 mb-5">
                  Fund an <span className="text-[#FF7E4B]">Issue</span>
                </h1>
                <div className="flex flex-wrap justify-center items-start gap-5 md:py-24">
                  <div>
                    <div className="xl:w-[670px] md:w-[590px] w-full">
                      <div className="padding sm:py-9 sm:px-10 montserrat flex items-center justify-between bg-[#0A1930] rounded-tl-3xl rounded-tr-3xl">
                        <div className="flex items-center gap-3">
                          <img className="w-[55px] h-[55px] cursor-pointer hover:underline" src={img1} alt="" />
                          <h2 className="text-2xl text-[#8693A4] cursor-pointer">
                            <span className="hover:underline">apache</span>{" "}
                            <span className="text-white ">
                              / <span className="hover:underline">pekko</span>
                            </span>
                          </h2>
                        </div>
                        <div>
                          <img className="w-[52px] h-[52px]" src={person} alt="" />
                        </div>
                      </div>
                      <div className="padding montserrat sm:py-7 sm:px-10 bg-[rgba(20,35,58,60%)] rounded-bl-3xl rounded-br-3xl">
                        <h1 className="text-lg cursor-pointer hover:underline transition-all duration-500 ease-in-out">
                          There is a problem in the display of the home page
                        </h1>
                        <h2 className="text-[rgba(255,255,255,70%)] cursor-pointer text-xl mt-1">
                          <span className="hover:underline ">#3949</span>{" "}
                          <span className="hover:underline text-[12px] cursor-pointer">updated on 14 Jul 2024</span>
                        </h2>
                        <div className="flex flex-wrap items-center gap-3 justify-between mt-12">
                          <div>
                            <div className="flex items-center gap-3">
                              <img className="w-[38px] h-[30px] cursor-pointer " src={dow} alt="" />
                              <h3 className="text-[20px] cursor-pointer ">
                                <span className="michroma">4.5</span> <span className="text-[#FF7E4B] michroma">DoW</span> refunded
                              </h3>
                            </div>
                            <h2 className="text-base cursor-pointer text-[#8693A4] mt-2">
                              <span className="hover:underline">octonato</span> closed the issue
                            </h2>
                          </div>
                          <div>
                            <div className="flex items-center gap-3">
                              <h2 className={` ${isToggled ? "text-white" : "text-gray-600"}`}>Private</h2>
                              <div
                                className="relative inline-flex items-center cursor-pointer bg-[rgba(255,255,255,10%)] rounded-full w-11 h-6"
                                onClick={toggleSwitch}
                              >
                                <span
                                  className={`absolute w-8 h-8 left-[-10px] bg-[#FF7E4B] rounded-full shadow transform transition-transform duration-300 ${
                                    isToggled ? "translate-x-[-1px]" : "translate-x-full"
                                  }`}
                                />
                              </div>
                              <h2 className={` ${isToggled ? "text-gray-600" : "text-white"}`}>Public</h2>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="padding sm:py-10 sm:pe-10 sm:px-24  text-center md:justify-between justify-center flex flex-wrap items-start  xl:w-[670px] md:w-[590px] w-full bg-[#14233A] mt-4 rounded-3xl">
                      <div className="flex flex-col gap-5">
                        <h1 className="text-[18px]">The community is here!</h1>
                        <h2 className="text-[18px] montserrat">
                          They support you! <br /> It is now time to solve the issue!
                        </h2>
                        <button className="border-1 border-[#FF518C] rounded-md p-3 text-[13px] hover:bg-[#FF518C] transition-all duration-500">
                          Solve the issue on GitHub
                        </button>
                      </div>
                      <div className="">
                        <img src={cat} className="w-[160px] h-[210px] mt-3 mt-md-0" alt="" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="padding sm:py-10 sm:px-10 text-center md:justify-between flex flex-col items-start xl:w-[670px] md:w-[590px] w-full bg-[#14233A] rounded-3xl">
                      <div className="relative p-[2px] mx-auto md:mx-0">
                        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#FF7E4B] via-[#FF518C] to-[#66319B]" />
                        <div className="bg-[#14233A] rounded-lg flex justify-between items-center relative z-10 p-2">
                          <button
                            className={`btnpadding  transition-all duration-500 ease-in-out py-3 px-5 focus:outline-none montserrat text-[12px] md:text-lg ${
                              activeTab === "tab1"
                                ? "text-white bg-[#FF518C] rounded-md shadow-[0_0_20px_5px_rgba(255,81,140,0.4)]"
                                : "bg-transparent text-gray-300"
                            }`}
                            onClick={() => handleTabClick("tab1")}
                          >
                            Reject the funding
                          </button>

                          <button
                            className={`btnpadding  transition-all duration-500 ease-in-out py-3 px-5 focus:outline-none montserrat text-[12px] md:text-lg ${
                              activeTab === "tab2"
                                ? "text-white bg-[#FF518C] rounded-md shadow-[0_0_20px_5px_rgba(255,81,140,0.4)]"
                                : "bg-transparent text-gray-300"
                            }`}
                            onClick={() => handleTabClick("tab2")}
                          >
                            Accept the funding
                          </button>
                        </div>
                      </div>

                      {/* Tab Content */}
                      <div className="mt-5 flex items-center justify-center ">
                        {activeTab === "tab1" && (
                          <div className=" md:px-[75px] ">
                            <div className="flex items-start sm:items-center gap-3">
                              <img src={check} className="w-4 h-4" alt="" />
                              <h2 className="montserrat md:text-lg font-normal text-start">All the amount collected will be refunded</h2>
                            </div>
                            <div className="flex items-start mt-2 gap-3">
                              <img src={check} className="w-4 h-4 mt-1" alt="" />
                              <h2 className="montserrat md:text-lg font-normal text-start">An other maintainer can not accept the to work on it </h2>
                            </div>
                            <p className="text-start mt-4 montserrat">Tell us the reason</p>
                            <textarea
                              name=""
                              className="w-100 mt-3 outline-none montserrat rounded-md bg-transparent border-1 border-[#8693A4] text-lg text-[#8693A4] p-2 h-[100px]"
                              id=""
                              placeholder="Tell us the reason"
                            ></textarea>
                            <p className="text-start mt-4 montserrat">Tell us the reason</p>
                            <select
                              id="country"
                              name="country"
                              className="bg-[rgba(255,255,255,10%)] montserrat   mt-3 rounded-[10px] border-0 p-3 form-select cursor-pointer  "
                            >
                              <option className="text-black" value="Afghanistan">
                                Afghanistan
                              </option>
                              <option className="text-black" value="Åland Islands">
                                Åland Islands
                              </option>
                              <option className="text-black" value="Albania">
                                Albania
                              </option>
                              <option className="text-black" value="Algeria">
                                Algeria
                              </option>
                              <option className="text-black" value="American Samoa">
                                American Samoa
                              </option>
                              <option className="text-black" value="Andorra">
                                Andorra
                              </option>
                              <option className="text-black" value="Angola">
                                Angola
                              </option>
                              <option className="text-black" value="Anguilla">
                                Anguilla
                              </option>
                              <option className="text-black" value="Antarctica">
                                Antarctica
                              </option>
                              <option className="text-black" value="Antigua and Barbuda">
                                Antigua and Barbuda
                              </option>
                              <option className="text-black" value="Argentina">
                                Argentina
                              </option>
                              <option className="text-black" value="Armenia">
                                Armenia
                              </option>
                              <option className="text-black" value="Aruba">
                                Aruba
                              </option>
                              <option className="text-black" value="Australia">
                                Australia
                              </option>
                              <option className="text-black" value="Austria">
                                Austria
                              </option>
                              <option className="text-black" value="Azerbaijan">
                                Azerbaijan
                              </option>
                              <option className="text-black" value="Bahamas">
                                Bahamas
                              </option>
                              <option className="text-black" value="Bahrain">
                                Bahrain
                              </option>
                              <option className="text-black" value="Bangladesh">
                                Bangladesh
                              </option>
                              <option className="text-black" value="Barbados">
                                Barbados
                              </option>
                              <option className="text-black" value="Belarus">
                                Belarus
                              </option>
                              <option className="text-black" value="Belgium">
                                Belgium
                              </option>
                              <option className="text-black" value="Belize">
                                Belize
                              </option>
                              <option className="text-black" value="Benin">
                                Benin
                              </option>
                              <option className="text-black" value="Bermuda">
                                Bermuda
                              </option>
                              <option className="text-black" value="Bhutan">
                                Bhutan
                              </option>
                              <option className="text-black" value="Bolivia">
                                Bolivia
                              </option>
                              <option className="text-black" value="Bosnia and Herzegovina">
                                Bosnia and Herzegovina
                              </option>
                              <option className="text-black" value="Botswana">
                                Botswana
                              </option>
                              <option className="text-black" value="Bouvet Island">
                                Bouvet Island
                              </option>
                              <option className="text-black" value="Brazil">
                                Brazil
                              </option>
                              <option className="text-black" value="British Indian Ocean Territory">
                                British Indian Ocean Territory
                              </option>
                              <option className="text-black" value="Brunei Darussalam">
                                Brunei Darussalam
                              </option>
                              <option className="text-black" value="Bulgaria">
                                Bulgaria
                              </option>
                              <option className="text-black" value="Burkina Faso">
                                Burkina Faso
                              </option>
                              <option className="text-black" value="Burundi">
                                Burundi
                              </option>
                              <option className="text-black" value="Cambodia">
                                Cambodia
                              </option>
                              <option className="text-black" value="Cameroon">
                                Cameroon
                              </option>
                              <option className="text-black" value="Canada">
                                Canada
                              </option>
                              <option className="text-black" value="Cape Verde">
                                Cape Verde
                              </option>
                              <option className="text-black" value="Cayman Islands">
                                Cayman Islands
                              </option>
                              <option className="text-black" value="Central African Republic">
                                Central African Republic
                              </option>
                              <option className="text-black" value="Chad">
                                Chad
                              </option>
                              <option className="text-black" value="Chile">
                                Chile
                              </option>
                              <option className="text-black" value="China">
                                China
                              </option>
                              <option className="text-black" value="Christmas Island">
                                Christmas Island
                              </option>
                              <option className="text-black" value="Cocos (Keeling) Islands">
                                Cocos (Keeling) Islands
                              </option>
                              <option className="text-black" value="Colombia">
                                Colombia
                              </option>
                              <option className="text-black" value="Comoros">
                                Comoros
                              </option>
                              <option className="text-black" value="Congo">
                                Congo
                              </option>
                              <option className="text-black" value="Congo, The Democratic Republic of The">
                                Congo, The Democratic Republic of The
                              </option>
                              <option className="text-black" value="Cook Islands">
                                Cook Islands
                              </option>
                              <option className="text-black" value="Costa Rica">
                                Costa Rica
                              </option>
                              <option className="text-black" value="Cote D'ivoire">
                                Cote D'ivoire
                              </option>
                              <option className="text-black" value="Croatia">
                                Croatia
                              </option>
                              <option className="text-black" value="Cuba">
                                Cuba
                              </option>
                              <option className="text-black" value="Cyprus">
                                Cyprus
                              </option>
                              <option className="text-black" value="Czech Republic">
                                Czech Republic
                              </option>
                              <option className="text-black" value="Denmark">
                                Denmark
                              </option>
                              <option className="text-black" value="Djibouti">
                                Djibouti
                              </option>
                              <option className="text-black" value="Dominica">
                                Dominica
                              </option>
                              <option className="text-black" value="Dominican Republic">
                                Dominican Republic
                              </option>
                              <option className="text-black" value="Ecuador">
                                Ecuador
                              </option>
                              <option className="text-black" value="Egypt">
                                Egypt
                              </option>
                              <option className="text-black" value="El Salvador">
                                El Salvador
                              </option>
                              <option className="text-black" value="Equatorial Guinea">
                                Equatorial Guinea
                              </option>
                              <option className="text-black" value="Eritrea">
                                Eritrea
                              </option>
                              <option className="text-black" value="Estonia">
                                Estonia
                              </option>
                              <option className="text-black" value="Ethiopia">
                                Ethiopia
                              </option>
                              <option className="text-black" value="Falkland Islands (Malvinas)">
                                Falkland Islands (Malvinas)
                              </option>
                              <option className="text-black" value="Faroe Islands">
                                Faroe Islands
                              </option>
                              <option className="text-black" value="Fiji">
                                Fiji
                              </option>
                              <option className="text-black" value="Finland">
                                Finland
                              </option>
                              <option className="text-black" value="France">
                                France
                              </option>
                              <option className="text-black" value="French Guiana">
                                French Guiana
                              </option>
                              <option className="text-black" value="French Polynesia">
                                French Polynesia
                              </option>
                              <option className="text-black" value="French Southern Territories">
                                French Southern Territories
                              </option>
                              <option className="text-black" value="Gabon">
                                Gabon
                              </option>
                              <option className="text-black" value="Gambia">
                                Gambia
                              </option>
                              <option className="text-black" value="Georgia">
                                Georgia
                              </option>
                              <option className="text-black" value="Germany">
                                Germany
                              </option>
                              <option className="text-black" value="Ghana">
                                Ghana
                              </option>
                              <option className="text-black" value="Gibraltar">
                                Gibraltar
                              </option>
                              <option className="text-black" value="Greece">
                                Greece
                              </option>
                              <option className="text-black" value="Greenland">
                                Greenland
                              </option>
                              <option className="text-black" value="Grenada">
                                Grenada
                              </option>
                              <option className="text-black" value="Guadeloupe">
                                Guadeloupe
                              </option>
                              <option className="text-black" value="Guam">
                                Guam
                              </option>
                              <option className="text-black" value="Guatemala">
                                Guatemala
                              </option>
                              <option className="text-black" value="Guernsey">
                                Guernsey
                              </option>
                              <option className="text-black" value="Guinea">
                                Guinea
                              </option>
                              <option className="text-black" value="Guinea-bissau">
                                Guinea-bissau
                              </option>
                              <option className="text-black" value="Guyana">
                                Guyana
                              </option>
                              <option className="text-black" value="Haiti">
                                Haiti
                              </option>
                              <option className="text-black" value="Heard Island and Mcdonald Islands">
                                Heard Island and Mcdonald Islands
                              </option>
                              <option className="text-black" value="Holy See (Vatican City State)">
                                Holy See (Vatican City State)
                              </option>
                              <option className="text-black" value="Honduras">
                                Honduras
                              </option>
                              <option className="text-black" value="Hong Kong">
                                Hong Kong
                              </option>
                              <option className="text-black" value="Hungary">
                                Hungary
                              </option>
                              <option className="text-black" value="Iceland">
                                Iceland
                              </option>
                              <option className="text-black" value="India">
                                India
                              </option>
                              <option className="text-black" value="Indonesia">
                                Indonesia
                              </option>
                              <option className="text-black" value="Iran, Islamic Republic of">
                                Iran, Islamic Republic of
                              </option>
                              <option className="text-black" value="Iraq">
                                Iraq
                              </option>
                              <option className="text-black" value="Ireland">
                                Ireland
                              </option>
                              <option className="text-black" value="Isle of Man">
                                Isle of Man
                              </option>
                              <option className="text-black" value="Israel">
                                Israel
                              </option>
                              <option className="text-black" value="Italy">
                                Italy
                              </option>
                              <option className="text-black" value="Jamaica">
                                Jamaica
                              </option>
                              <option className="text-black" value="Japan">
                                Japan
                              </option>
                              <option className="text-black" value="Jersey">
                                Jersey
                              </option>
                              <option className="text-black" value="Jordan">
                                Jordan
                              </option>
                              <option className="text-black" value="Kazakhstan">
                                Kazakhstan
                              </option>
                              <option className="text-black" value="Kenya">
                                Kenya
                              </option>
                              <option className="text-black" value="Kiribati">
                                Kiribati
                              </option>
                              <option className="text-black" value="Korea, Democratic People's Republic of">
                                Korea, Democratic People's Republic of
                              </option>
                              <option className="text-black" value="Korea, Republic of">
                                Korea, Republic of
                              </option>
                              <option className="text-black" value="Kuwait">
                                Kuwait
                              </option>
                              <option className="text-black" value="Kyrgyzstan">
                                Kyrgyzstan
                              </option>
                              <option className="text-black" value="Lao People's Democratic Republic">
                                Lao People's Democratic Republic
                              </option>
                              <option className="text-black" value="Latvia">
                                Latvia
                              </option>
                              <option className="text-black" value="Lebanon">
                                Lebanon
                              </option>
                              <option className="text-black" value="Lesotho">
                                Lesotho
                              </option>
                              <option className="text-black" value="Liberia">
                                Liberia
                              </option>
                              <option className="text-black" value="Libyan Arab Jamahiriya">
                                Libyan Arab Jamahiriya
                              </option>
                              <option className="text-black" value="Liechtenstein">
                                Liechtenstein
                              </option>
                              <option className="text-black" value="Lithuania">
                                Lithuania
                              </option>
                              <option className="text-black" value="Luxembourg">
                                Luxembourg
                              </option>
                              <option className="text-black" value="Macao">
                                Macao
                              </option>
                              <option className="text-black" value="Macedonia, The Former Yugoslav Republic of">
                                Macedonia, The Former Yugoslav Republic of
                              </option>
                              <option className="text-black" value="Madagascar">
                                Madagascar
                              </option>
                              <option className="text-black" value="Malawi">
                                Malawi
                              </option>
                              <option className="text-black" value="Malaysia">
                                Malaysia
                              </option>
                              <option className="text-black" value="Maldives">
                                Maldives
                              </option>
                              <option className="text-black" value="Mali">
                                Mali
                              </option>
                              <option className="text-black" value="Malta">
                                Malta
                              </option>
                              <option className="text-black" value="Marshall Islands">
                                Marshall Islands
                              </option>
                              <option className="text-black" value="Martinique">
                                Martinique
                              </option>
                              <option className="text-black" value="Mauritania">
                                Mauritania
                              </option>
                              <option className="text-black" value="Mauritius">
                                Mauritius
                              </option>
                              <option className="text-black" value="Mayotte">
                                Mayotte
                              </option>
                              <option className="text-black" value="Mexico">
                                Mexico
                              </option>
                              <option className="text-black" value="Micronesia, Federated States of">
                                Micronesia, Federated States of
                              </option>
                              <option className="text-black" value="Moldova, Republic of">
                                Moldova, Republic of
                              </option>
                              <option className="text-black" value="Monaco">
                                Monaco
                              </option>
                              <option className="text-black" value="Mongolia">
                                Mongolia
                              </option>
                              <option className="text-black" value="Montenegro">
                                Montenegro
                              </option>
                              <option className="text-black" value="Montserrat">
                                Montserrat
                              </option>
                              <option className="text-black" value="Morocco">
                                Morocco
                              </option>
                              <option className="text-black" value="Mozambique">
                                Mozambique
                              </option>
                              <option className="text-black" value="Myanmar">
                                Myanmar
                              </option>
                              <option className="text-black" value="Namibia">
                                Namibia
                              </option>
                              <option className="text-black" value="Nauru">
                                Nauru
                              </option>
                              <option className="text-black" value="Nepal">
                                Nepal
                              </option>
                              <option className="text-black" value="Netherlands">
                                Netherlands
                              </option>
                              <option className="text-black" value="Netherlands Antilles">
                                Netherlands Antilles
                              </option>
                              <option className="text-black" value="New Caledonia">
                                New Caledonia
                              </option>
                              <option className="text-black" value="New Zealand">
                                New Zealand
                              </option>
                              <option className="text-black" value="Nicaragua">
                                Nicaragua
                              </option>
                              <option className="text-black" value="Niger">
                                Niger
                              </option>
                              <option className="text-black" value="Nigeria">
                                Nigeria
                              </option>
                              <option className="text-black" value="Niue">
                                Niue
                              </option>
                              <option className="text-black" value="Norfolk Island">
                                Norfolk Island
                              </option>
                              <option className="text-black" value="Northern Mariana Islands">
                                Northern Mariana Islands
                              </option>
                              <option className="text-black" value="Norway">
                                Norway
                              </option>
                              <option className="text-black" value="Oman">
                                Oman
                              </option>
                              <option className="text-black" value="Pakistan">
                                Pakistan
                              </option>
                              <option className="text-black" value="Palau">
                                Palau
                              </option>
                              <option className="text-black" value="Palestinian Territory, Occupied">
                                Palestinian Territory, Occupied
                              </option>
                              <option className="text-black" value="Panama">
                                Panama
                              </option>
                              <option className="text-black" value="Papua New Guinea">
                                Papua New Guinea
                              </option>
                              <option className="text-black" value="Paraguay">
                                Paraguay
                              </option>
                              <option className="text-black" value="Peru">
                                Peru
                              </option>
                              <option className="text-black" value="Philippines">
                                Philippines
                              </option>
                              <option className="text-black" value="Pitcairn">
                                Pitcairn
                              </option>
                              <option className="text-black" value="Poland">
                                Poland
                              </option>
                              <option className="text-black" value="Portugal">
                                Portugal
                              </option>
                              <option className="text-black" value="Puerto Rico">
                                Puerto Rico
                              </option>
                              <option className="text-black" value="Qatar">
                                Qatar
                              </option>
                              <option className="text-black" value="Reunion">
                                Reunion
                              </option>
                              <option className="text-black" value="Romania">
                                Romania
                              </option>
                              <option className="text-black" value="Russian Federation">
                                Russian Federation
                              </option>
                              <option className="text-black" value="Rwanda">
                                Rwanda
                              </option>
                              <option className="text-black" value="Saint Helena">
                                Saint Helena
                              </option>
                              <option className="text-black" value="Saint Kitts and Nevis">
                                Saint Kitts and Nevis
                              </option>
                              <option className="text-black" value="Saint Lucia">
                                Saint Lucia
                              </option>
                              <option className="text-black" value="Saint Pierre and Miquelon">
                                Saint Pierre and Miquelon
                              </option>
                              <option className="text-black" value="Saint Vincent and The Grenadines">
                                Saint Vincent and The Grenadines
                              </option>
                              <option className="text-black" value="Samoa">
                                Samoa
                              </option>
                              <option className="text-black" value="San Marino">
                                San Marino
                              </option>
                              <option className="text-black" value="Sao Tome and Principe">
                                Sao Tome and Principe
                              </option>
                              <option className="text-black" value="Saudi Arabia">
                                Saudi Arabia
                              </option>
                              <option className="text-black" value="Senegal">
                                Senegal
                              </option>
                              <option className="text-black" value="Serbia">
                                Serbia
                              </option>
                              <option className="text-black" value="Seychelles">
                                Seychelles
                              </option>
                              <option className="text-black" value="Sierra Leone">
                                Sierra Leone
                              </option>
                              <option className="text-black" value="Singapore">
                                Singapore
                              </option>
                              <option className="text-black" value="Slovakia">
                                Slovakia
                              </option>
                              <option className="text-black" value="Slovenia">
                                Slovenia
                              </option>
                              <option className="text-black" value="Solomon Islands">
                                Solomon Islands
                              </option>
                              <option className="text-black" value="Somalia">
                                Somalia
                              </option>
                              <option className="text-black" value="South Africa">
                                South Africa
                              </option>
                              <option className="text-black" value="South Georgia and The South Sandwich Islands">
                                South Georgia and The South Sandwich Islands
                              </option>
                              <option className="text-black" value="Spain">
                                Spain
                              </option>
                              <option className="text-black" value="Sri Lanka">
                                Sri Lanka
                              </option>
                              <option className="text-black" value="Sudan">
                                Sudan
                              </option>
                              <option className="text-black" value="Suriname">
                                Suriname
                              </option>
                              <option className="text-black" value="Svalbard and Jan Mayen">
                                Svalbard and Jan Mayen
                              </option>
                              <option className="text-black" value="Swaziland">
                                Swaziland
                              </option>
                              <option className="text-black" value="Sweden">
                                Sweden
                              </option>
                              <option className="text-black" value="Switzerland" selected>
                                Switzerland
                              </option>
                              <option className="text-black" value="Syrian Arab Republic">
                                Syrian Arab Republic
                              </option>
                              <option className="text-black" value="Taiwan">
                                Taiwan
                              </option>
                              <option className="text-black" value="Tajikistan">
                                Tajikistan
                              </option>
                              <option className="text-black" value="Tanzania, United Republic of">
                                Tanzania, United Republic of
                              </option>
                              <option className="text-black" value="Thailand">
                                Thailand
                              </option>
                              <option className="text-black" value="Timor-leste">
                                Timor-leste
                              </option>
                              <option className="text-black" value="Togo">
                                Togo
                              </option>
                              <option className="text-black" value="Tokelau">
                                Tokelau
                              </option>
                              <option className="text-black" value="Tonga">
                                Tonga
                              </option>
                              <option className="text-black" value="Trinidad and Tobago">
                                Trinidad and Tobago
                              </option>
                              <option className="text-black" value="Tunisia">
                                Tunisia
                              </option>
                              <option className="text-black" value="Turkey">
                                Turkey
                              </option>
                              <option className="text-black" value="Turkmenistan">
                                Turkmenistan
                              </option>
                              <option className="text-black" value="Turks and Caicos Islands">
                                Turks and Caicos Islands
                              </option>
                              <option className="text-black" value="Tuvalu">
                                Tuvalu
                              </option>
                              <option className="text-black" value="Uganda">
                                Uganda
                              </option>
                              <option className="text-black" value="Ukraine">
                                Ukraine
                              </option>
                              <option className="text-black" value="United Arab Emirates">
                                United Arab Emirates
                              </option>
                              <option className="text-black" value="United Kingdom">
                                United Kingdom
                              </option>
                              <option className="text-black" value="United States">
                                United States
                              </option>
                              <option className="text-black" value="United States Minor Outlying Islands">
                                United States Minor Outlying Islands
                              </option>
                              <option className="text-black" value="Uruguay">
                                Uruguay
                              </option>
                              <option className="text-black" value="Uzbekistan">
                                Uzbekistan
                              </option>
                              <option className="text-black" value="Vanuatu">
                                Vanuatu
                              </option>
                              <option className="text-black" value="Venezuela">
                                Venezuela
                              </option>
                              <option className="text-black" value="Viet Nam">
                                Viet Nam
                              </option>
                              <option className="text-black" value="Virgin Islands, British">
                                Virgin Islands, British
                              </option>
                              <option className="text-black" value="Virgin Islands, U.S.">
                                Virgin Islands, U.S.
                              </option>
                              <option className="text-black" value="Wallis and Futuna">
                                Wallis and Futuna
                              </option>
                              <option className="text-black" value="Western Sahara">
                                Western Sahara
                              </option>
                              <option className="text-black" value="Yemen">
                                Yemen
                              </option>
                              <option className="text-black" value="Zambia">
                                Zambia
                              </option>
                              <option className="text-black" value="Zimbabwe">
                                Zimbabwe
                              </option>
                            </select>
                            <button className="mt-7  border-1 border-[#FF518C] hover:bg-[#FF518C] transition-all duration-500 ease-in-out py-3 rounded-md w-[282px]">
                              Reject
                            </button>
                          </div>
                        )}
                        {activeTab === "tab2" && (
                          <div className=" md:px-[75px] ">
                            <h1 className="montserrat text-start">Requested Amount </h1>
                            <div className="mt-4 bg-[rgba(255,255,255,10%)] rounded-[10px] py-[12px] px-3 w-[100%]">
                              <div className="flex items-center gap-4 justify-between">
                                <div>
                                  <div className="d-flex items-center gap-3 mt-1">
                                    <input
                                      type="number"
                                      ref={inputRef}
                                      value={counter}
                                      placeholder="10"
                                      onChange={handleInputChange}
                                      className="border-0 outline-none md:text-[18px] text-[16px] md:w-24 sm:w-28 w-20 bg-transparent"
                                    />

                                    <div className="d-flex flex-col gap-2">
                                      <img src={up} className="md:w-[11px] w-[11px] h-2 cursor-pointer " onClick={() => increment()} alt="" />
                                      <img
                                        src={down}
                                        className={`md:w-[11px] w-[11px] h-2 cursor-pointer ${counter === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
                                        onClick={() => decrement()}
                                        alt=""
                                        style={{
                                          pointerEvents: counter === 0 ? "none" : "auto",
                                        }}
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div>
                                  <h2 className="gradient-texts font-bold md:text-[16px] text-[12px] ">DoW</h2>
                                  <style>{`
                                  .gradient-texts {
                                    background: linear-gradient(
                                      90deg,
                                      #ff7e4b,
                                      #ff518c
                                    );
                                    -webkit-background-clip: text;
                                    -webkit-text-fill-color: transparent;
                                  }
                                `}</style>
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center gap-3 mt-5">
                              <img src={check} className="w-4 h-4" alt="" />
                              <h2 className="montserrat md:text-lg font-normal text-start">I will lead this issue</h2>
                            </div>
                            <div className="flex items-start mt-3 gap-3">
                              <img src={check} className="w-4 h-4 mt-1" alt="" />
                              <h2 className="montserrat md:text-lg font-normal text-start">
                                I will split fairly the amount collected among <br /> contributors and reviewers
                              </h2>
                            </div>
                            <button className="mt-40 flex items-center justify-center mx-auto border-1 border-[#FF518C] hover:bg-[#FF518C] transition-all duration-500 ease-in-out py-3 rounded-md w-[282px]">
                              Request amount
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
