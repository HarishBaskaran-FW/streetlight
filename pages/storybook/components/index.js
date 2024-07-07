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

export default function SB_Components() {
  // Dependent on two files Button.js and Logo.js
  const SB_Button = () => {
    return (
      <>
        <p className="font-bold underline text-sky-600">1. ButtonTypes :</p>

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
    const [lastName, setLastName] = useState("");
    const [profileName, setProfileName] = useState("");

    return (
      <>
        <p>Input Types :</p>
        <div className="flex gap-2">
          <Input
            placeholder="Enter your text here"
            value={inputName1}
            setValue={setInputName1}
          />
          <InputFloat
            id="last-name"
            label="Last Name"
            floatIcon="fas fa-person"
            value={lastName}
            setValue={setLastName}
          />
          <InputFloat
            id="profile-Name-1"
            placeholder="Profile Name"
            staticIcon="fas fa-users"
            value={profileName}
            setValue={setProfileName}
          />
          <InputFloating label="Name" size="medium" />
          <InputFloatingNoChange label="Name" />
        </div>
        <div className="flex gap-2 mt-3">
          <InputFloatBorder 
          label="floater"
          name="floater"
          />
          <InputFloat
            id="first-name"
            label="First Name"
            value={firstName}
            setValue={setFirstName}
          />
          <InputFloat
            id="last-name"
            label="Last Name"
            floatIcon="fas fa-person"
            value={lastName}
            setValue={setLastName}
          />
          <InputFloat
            id="profile-Name"
            label="Profile Name"
            staticIcon="fas fa-users"
            value={profileName}
            setValue={setProfileName}
          />
        </div>
        <p className="border-b-2 border-sky-600 my-2"></p>
      </>
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

  return (
    <StoryBookLayout>
      <div className="flex flex-col gap-2">
        {/* <PopupModal flag={false} containerStyles="bg-sky-600 !pt-1 !pb-2 !pl-0">
          <div>hi there we welcome you</div>
        </PopupModal> */}
        {SB_Button()}

        {SB_Input()}
        {SB_Toggle()}
        <div className="flex">
          <div className="flex flex-col gap-4 w-1/2">
            <Switch label="switch" />
            <Range />
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
