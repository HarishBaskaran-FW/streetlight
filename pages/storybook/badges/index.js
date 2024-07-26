import Button from "@/components/native/button";
import InputFloat from "@/components/native/input_float";
import { useState, useEffect, useRef } from "react";
import StoryBookLayout from "..";

export default function SP_Badges() {
  return (
    <StoryBookLayout>
      <div className="flex flex-col gap-10 bg-gray-300">
        <div className="flex flex-row gap-3">
          <p>Style 1 -</p>
          <fs-status-badge
            badge-id="Sb7VEp"
            domain="htafexegjul24-it-1.status.freshexeg.com"
          ></fs-status-badge>
        </div>

        <div className="flex flex-row gap-3 ">
          <p>Style 2 - without text</p>
          <fs-status-badge
            badge-id="GtV6o9"
            domain="htafexegjul24-it-1.status.freshexeg.com"
          ></fs-status-badge>
        </div>

        <div className="flex flex-row gap-3 align-center">
          <p>Style 2 - with text</p>
          <fs-status-badge
            badge-id="bhV4mG"
            domain="htafexegjul24-it-1.status.freshexeg.com"
          ></fs-status-badge>
        </div>

        <div className="flex flex-row gap-3 align-center">
          <p>Style 3 without logo and text</p>
          <fs-status-badge
            badge-id="Bzb2Wf"
            domain="htafexegjul24-it-1.status.freshexeg.com"
          ></fs-status-badge>
        </div>
        <div className="flex flex-row gap-3 align-center">
          <p>Style 3 without logo with text</p>
          <fs-status-badge
            badge-id="BoN2hc"
            domain="htafexegjul24-it-1.status.freshexeg.com"
          ></fs-status-badge>
        </div>
        <div className="flex flex-row gap-3 align-center">
          <p>Style 3 with logo without text</p>
          <fs-status-badge
            badge-id="9gfkmt"
            domain="htafexegjul24-it-1.status.freshexeg.com"
          ></fs-status-badge>
        </div>
        <div className="flex flex-row gap-3 align-center">
          <p>Style 3 with logo text</p>
          <a href="">link</a>
          <fs-status-badge
            badge-id="ltEPqV"
            domain="htafexegjul24-it-1.status.freshexeg.com"
          ></fs-status-badge>
        </div>
      </div>

      {/* <fs-status-badge
        badge-id="Sb7VEp"
        domain="htafexegjul24-it-1.status.freshexeg.com"
      ></fs-status-badge>
      <fs-status-badge
        badge-id="GtV6o9"
        domain="htafexegjul24-it-1.status.freshexeg.com"
      ></fs-status-badge>
      <fs-status-badge
        badge-id="bhV4mG"
        domain="htafexegjul24-it-1.status.freshexeg.com"
      ></fs-status-badge>
      <fs-status-badge
        badge-id="Bzb2Wf"
        domain="htafexegjul24-it-1.status.freshexeg.com"
      ></fs-status-badge>
      <fs-status-badge
        badge-id="BoN2hc"
        domain="htafexegjul24-it-1.status.freshexeg.com"
      ></fs-status-badge>
      <fs-status-badge
        badge-id="9gfkmt"
        domain="htafexegjul24-it-1.status.freshexeg.com"
      ></fs-status-badge>
      <fs-status-badge
        badge-id="ltEPqV"
        domain="htafexegjul24-it-1.status.freshexeg.com"
      ></fs-status-badge> */}
    </StoryBookLayout>
  );
}
