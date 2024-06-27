import Button from "@/components/button";
import StoryBookLayout from "..";
import Cancel from "@/components/cancel_button";
import CheckMark from "@/components/check_button";
import Save from "@/components/save_button";
import Close from "@/components/close_button";
import Create from "@/components/create_button";
import Delete from "@/components/delete_button";
import Edit from "@/components/edit_button";
import Input from "@/components/input";
import InputNoChange from "@/components/inputNoChange";
import InputFloating from "@/components/input_floating";
import InputFloatingNoChange from "@/components/input_floating_NoChange";
import Toggle2 from "@/components/toggle2";
import Toggle3 from "@/components/toggle3";
import Toggle4 from "@/components/toggle4";
import Switch from "@/components/switch";
import MyComponent from "@/components/mycomponent";
import TextArea from "@/components/textarea";
import Header from "@/components/header";
import Range from "@/components/range";
import ProductTable from "@/components/table";
import PopupModal from "@/components/popup1";

export default function SB_Components() {
  const SB_Button = () => {
    return (
      <>
        <p>Button Types :</p>
        <div className="flex gap-2">
          <Button label="primary" type="primary" />
          <Button label="primary_inverse" type="primary_inverse" />
          <Button label="primary_link" type="primary_link" />
          <Button label="secondary" type="secondary" />
        </div>
      </>
    );
  };

  const SB_Icon_Button = () => {
    return (
      <>
        <p>Icon Button Types :</p>
        <div className="flex gap-2">
          <Cancel />
          <CheckMark />
          <Close />
          <Save />
          <Create />
          <Delete />
          <Edit />
          {/* 
            <Copy />
            <
          */}
        </div>
      </>
    );
  };

  const SB_Input = () => {
    return (
      <>
        <p>Input Types :</p>
        <div className="flex gap-2">
          <Input />
          <InputNoChange />
          <InputFloating label="Name" size="medium" />
          <InputFloatingNoChange label="Name" />
        </div>
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
        <PopupModal flag={true} containerStyles="bg-sky-600 !pt-1 !pb-2 !pl-0">
          <div>hi there we welcome you</div>
        </PopupModal>
        {SB_Button()}
        {SB_Icon_Button()}
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
