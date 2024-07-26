import Button from "@/components/native/button";
import InputFloat from "@/components/native/input_float";
import { useState } from "react";
import StoryBookLayout from "..";
import Badge from "./badge";

export default function SP_Badges() {
  const [badgeId, setBadgeId] = useState("lTasnz");
  const [badgeDomain, setBadgeDomain] = useState("htafexegjul08-it");
  const [showBadge, setShowBadge] = useState(true);

  const handleButtonClick = () => {
    // Force re-render by toggling the showBadge state
    setShowBadge(false);
    setTimeout(() => setShowBadge(true), 0);
  };

  return (
    <StoryBookLayout>
      <div className="flex flex-col gap-5">
        <div className="flex flex-row">
          <InputFloat
            id="id-badge"
            label="Id"
            value={badgeId}
            setValue={setBadgeId}
          />
          <InputFloat
            id="domain-badge"
            label="Domain"
            value={badgeDomain}
            setValue={setBadgeDomain}
          />
        </div>
        <div className="flex flex-row gap-3">
          <p>{badgeId}</p>
          <p>{badgeDomain}</p>
        </div>
        <Button label="Re-render Badge" onClick={handleButtonClick} />
        {showBadge && <Badge badgeId={badgeId} badgeDomain={badgeDomain} />}
      </div>
    </StoryBookLayout>
  );
}
