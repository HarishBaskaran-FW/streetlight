import StoryBookLayout from "..";

export default function SP_Badges({ badgeId, badgeDomain }) {
  const scriptSrc =
    "https://assets.freshgenie.com/status/embeds/badges/index.js";

  // Construct HTML string for script and badge
  const htmlContent = `
    <script type="module" src="${scriptSrc}"></script>
    <fs-status-badge
      badge-id="${badgeId}"
      domain="${badgeDomain}.status.freshexeg.com">
    </fs-status-badge>
  `;

  return (
    <div className="flex flex-col gap-10 bg-gray-300">
      <div className="flex flex-row gap-3">
        <p>Style 1 -</p>
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      </div>
    </div>
  );
}
