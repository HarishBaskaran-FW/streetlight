import StoryBookLayout from "..";

export default function SP_Badges() {
  const scriptContent = `const fsWidgetConfig = {
    domain: "automation-status-page-9-240726140910.status.freshexeg.com",
    id: "RVDBF9"
  };
`;

  // RMMkRJ - 1
  // Gf6vTI - 2
  // hc8lg6 - 13
  // 9EUMgC - 14
  // RVDBF9 - 15

  return (
    <StoryBookLayout>
      <div className="flex flex-col gap-10 bg-gray-300">
        <div className="flex flex-row gap-3">
          <p>Style 1 -</p>
          <div
            dangerouslySetInnerHTML={{
              __html: `
                <script>
                  ${scriptContent}
                </script>
              `,
            }}
          />
        </div>
      </div>
    </StoryBookLayout>
  );
}
