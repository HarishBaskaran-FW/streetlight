import Button from "@/components/native/button";
import StoryBookLayout from "..";
import Input from "@/components/native/input";
import InputNoChange from "@/components/native/inputNoChange";
import InputFloat from "@/components/native/input_float";
import InputFloatBorder from "@/components/native/input_float_border";
import InputFloating from "@/components/native/input_floating";
import InputFloatingNoChange from "@/components/native/input_floating_NoChange";
import Toggle2 from "@/components/native/toggle2";
import Toggle3 from "@/components/native/toggle3";
import Toggle4 from "@/components/native/toggle4";
import Switch from "@/components/native/switch";
import MyComponent from "@/components/native/mycomponent";
import TextArea from "@/components/native/textarea";
import Header from "@/components/native/header";
import Range from "@/components/native/range";
import ProductTable from "@/components/native/table";
import PopupModal from "@/components/native/popup1";
import Logo from "@/components/native/logo";
import { useState } from "react";
import CheckBox from "@/components/native/checkbox";
import Radio from "@/components/native/radio";
import MultiRangeSlider from "@/components/native/range_double";

export default function SB_Components() {
  // Dependent on two files Button.js and Logo.js
  const SB_Button = () => {
    return (
      <>
        <p className="font-bold underline text-sky-600">ButtonTypes :</p>

        <div className="flex gap-2">
          <p className="ml-10 pt-2"> Style : </p>
          <Button label="primary" />
          <Button label="primary" className="rounded-full" />
          <Button label="1" className="rounded-full " />

          <Button label="with icon" type="primary" icon="fas fa-house" />
          <Button
            label="with icon"
            icon="fas fa-house"
            className="rounded-full"
          />
          <Button icon="fas fa-house" />
        </div>

        <div className="flex gap-2">
          <p className="ml-10 pt-2"> Sizes : </p>
          <Button label="small" size="small" />
          <Button label="medium" size="medium" />
          <Button label="large" size="large" />
          <Button label="EXTRA LARGE" size="extralarge" />
        </div>

        <div className="flex gap-2">
          <p className="ml-10 pt-1">Color : </p>
          <Button label="primary" type="primary" />
          <Button label="primary_inverse" type="primary_inverse" />

          <Button label="secondary" type="secondary" />
          <Button label="info" type="info" />
          <Button label="success" type="success" />
          <Button label="warning" type="warning" />
          <Button label="error" type="error" />

          <Button label="primary_link" type="primary_link" />
        </div>

        <div className="flex gap-2 ">
          <p className="pt-1">Icon Button Types :</p>
          <Button icon="fas fa-xmark" type="secondary" />
          <Button icon="fas fa-circle-check" type="info" />
          <Button icon="fas fa-trash" type="success" />
          <Button icon="fas fa-pen" type="warning" />
          <Button icon="fas fa-check" type="error" />
          <Button
            icon="fas fa-check"
            type="primary_link"
            className="w-[37px] h-[37px] bg-green-300"
          />
          <Button
            icon="fas fa-folder-plus"
            type="primary_link"
            className="w-[37px] h-[37px] bg-green-300"
          />
        </div>

        <p className="border-b-2 border-sky-600 my-2"></p>
      </>
    );
  };

  const SB_Input = () => {
    const [inputName1, setInputName1] = useState("");
    const [firstName, setFirstName] = useState("");
    const [middleName, setMiddleName] = useState("");
    const [lastName, setLastName] = useState("");
    const [profileName, setProfileName] = useState("");

    return (
      <>
        <p className="font-bold underline text-sky-600">Input Types :</p>
        <div className="flex gap-2">
          <Input
            placeholder="Enter your text here"
            value={inputName1}
            setValue={setInputName1}
          />
          <InputFloat
            id="name-title"
            label="Title"
            floatIcon="fas fa-person"
            value={lastName}
            setValue={setLastName}
          />
          <InputFloat
            id="profile-Name"
            placeholder="Profile Name"
            staticIcon="fas fa-users"
            value={profileName}
            setValue={setProfileName}
          />
          <InputFloating label="Name" size="medium" />
          <InputFloatingNoChange label="Name" />
        </div>
        <div className="flex gap-2 mt-3">
          <InputFloatBorder label="floater" name="floater" />
          <InputFloat
            id="first-name"
            label="First Name"
            value={firstName}
            setValue={setFirstName}
          />
          <InputFloat
            id="middle-name"
            label="Middle Name"
            staticIcon="fas fa-users"
            value={middleName}
            setValue={setMiddleName}
          />
          <InputFloat
            id="last-Name"
            label="Last Name"
            floatIcon="fas fa-person"
            staticIcon="fas fa-users"
            value={lastName}
            setValue={setLastName}
          />
        </div>
        <p className="border-b-2 border-sky-600 my-2"></p>
      </>
    );
  };

  const SB_Checkbox = () => {
    var options = [
      {
        id: 1,
        label: "option 1",
        selected: false,
      },
      {
        id: 2,
        label: "option 2",
        selected: true,
      },
      {
        id: 3,
        label: "option 3 - not selected grayed out",
        selected: false,
      },
      {
        id: 4,
        label: "option 4 - selected grayed out",
        selected: true,
      },
    ];

    const [checkedOptions, setCheckedOptions] = useState(options);

    const handleOptions = (e, path) => {
      const tempList = checkedOptions.map((item) =>
        item.id === path.id ? { ...item, selected: e.target.checked } : item
      );

      setCheckedOptions(tempList);
    };

    return (
      <div>
        <p className="font-bold underline text-sky-600 mb-2">Check Boxes</p>
        {checkedOptions.map((option) => (
          <div className="flex gap-2">
            <CheckBox
              key={option.id}
              onChange={(e) => handleOptions(e, option)}
              checked={option.selected}
              disabled={option.id >= 3 ? true : false}
            />
            <p className="px-2 !text-left text-sm">{option.label}</p>
          </div>
        ))}
      </div>
    );
  };

  const SB_Radio = () => {
    var radioOptions = [
      {
        id: 1,
        label: "option 1",
        selected: false,
      },
      {
        id: 2,
        label: "option 2",
        selected: true,
      },
      {
        id: 3,
        label: "option 3 - not selected grayed out",
        selected: false,
      },
      {
        id: 4,
        label: "option 4 - selected grayed out",
        selected: true,
      },
    ];

    const [checkedOptions, setCheckedOptions] = useState(radioOptions);

    const handleOptions = (e, path) => {
      const tempList = checkedOptions.map((item) =>
        item.id < 3
          ? item.id === path.id
            ? { ...item, selected: true }
            : { ...item, selected: false }
          : item
      );

      setCheckedOptions(tempList);
    };

    return (
      <div>
        <p className="font-bold underline text-sky-600 mb-2">Radio Buttons</p>
        {checkedOptions.map((option) => (
          <div className="flex gap-2">
            <Radio
              key={option.id}
              onChange={(e) => handleOptions(e, option)}
              checked={option.selected}
              disabled={option.id >= 3 ? true : false}
            />
            <p className="px-2 !text-left text-sm">{option.label}</p>
          </div>
        ))}
      </div>
    );
  };

  const SB_Switch = () => {
    var switchOptions = [
      {
        id: 1,
        label: "option 1",
        selected: false,
      },
      {
        id: 2,
        label: "option 2",
        selected: true,
      },
      {
        id: 3,
        label: "option 3 - not selected grayed out",
        selected: false,
      },
      {
        id: 4,
        label: "option 4 - selected grayed out",
        selected: true,
      },
    ];

    const [checkedOptions, setCheckedOptions] = useState(switchOptions);

    const handleOptions = (e, path) => {
      const tempList = checkedOptions.map((item) =>
        item.id < 3
          ? item.id === path.id
            ? { ...item, selected: e.target.checked }
            : item
          : item
      );

      setCheckedOptions(tempList);
    };

    return (
      <div>
        <p className="font-bold underline text-sky-600 mb-2">
          Switch Toggle Types :
        </p>
        <div className="flex flex-col gap-2">
          {checkedOptions.map((option) => (
            <Switch
              label={option.label}
              checked={option.selected}
              onChange={(e) => handleOptions(e, option)}
              disabled={option.id >= 3 ? true : false}
            />
          ))}
        </div>
      </div>
    );
  };

  const SB_Toggle = () => {
    return (
      <>
        <p>Toggle Types :</p>
        <div className="flex gap-2">
          <Toggle2 left="left" right="right" />
          <Toggle3 left="left" middle="middle" right="right" />
          <Toggle4
            first="first"
            second="second"
            third="third"
            fourth="fourth"
          />
        </div>
      </>
    );
  };

  const SB_Range = () => {
    const [rangeValue, setRangeValue] = useState(8);
    const [sliderValues, setSliderValues] = useState({ min: 0, max: 100 });

    const handleSliderChange = (values) => {
      setSliderValues(values);
      // Handle any other logic here based on the slider values
    };

    return (
      <div className="flex flex-col gap-3">
         <p className="font-bold underline text-sky-600 mb-2">
          Range Types :
        </p>
        <div className="flex gap-2">
          <Range value={rangeValue} setValue={setRangeValue} />
          <p>Range Value: {rangeValue}</p>
        </div>
        <div>
          <MultiRangeSlider min={1} max={100} onChange={handleSliderChange} />
          <p>sliderValues: {JSON.stringify(sliderValues)}</p>
        </div>
      </div>
    );
  };

  return (
    <StoryBookLayout>
      <div className="flex flex-col gap-2">
        {/* <PopupModal flag={false} containerStyles="bg-sky-600 !pt-1 !pb-2 !pl-0">
          <div>hi there we welcome you</div>
        </PopupModal> */}
        {SB_Button()}
        {SB_Input()}
        <div className="flex gap-2 ">
          {SB_Checkbox()}
          <p className="border-r-2 border-sky-600 mx-3" />
          {SB_Radio()}
          <p className="border-r-2 border-sky-600 mx-3" />
          {SB_Switch()}
          <p className="border-r-2 border-sky-600 mx-3" />
          {SB_Range()}
        </div>
        <p className="border-b-2 border-sky-600 my-2" />

        {SB_Toggle()}
        <div className="flex">
          <div className="flex flex-col gap-4 w-1/2">
            <Header label="TextArea Header" />
            <TextArea />
            <MyComponent />
          </div>
          <div className="border-r-2 m-2 border-sky-600"></div>
          <div className="flex flex-col gap-4 w-1/2">
            <ProductTable />
          </div>
        </div>
      </div>
    </StoryBookLayout>
  );
}
