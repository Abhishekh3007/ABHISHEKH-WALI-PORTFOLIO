import { ApertureIcon, ArrowUpRightIcon } from "lucide-react";

import { Panel, PanelContent, PanelHeader, PanelTitle } from "../panel";

export function BeyondCode() {
  return (
    <Panel id="beyond-code">
      <PanelHeader>
        <PanelTitle>Beyond Code</PanelTitle>
      </PanelHeader>

      <PanelContent className="space-y-6">
        <p className="leading-relaxed text-muted-foreground">
          Beyond building software, I like capturing the world through a
          different kind of lens. Photography gives me a way to slow down,
          notice small details, and turn ordinary moments into stories.
        </p>

        <p className="leading-relaxed text-muted-foreground">
          Through{" "}
          <a
            href="https://www.instagram.com/storiesthroughlenses_30/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-foreground underline-offset-4 hover:underline"
          >
            Stories Through My Lenses
          </a>
          , I explore nature, light, architecture, culture, spirituality, and
          everyday moments through photography and short cinematic videos.
        </p>

        <div className="screen-line-before screen-line-after -mx-4 px-4 py-5">
          <a
            href="https://www.instagram.com/storiesthroughlenses_30/"
            target="_blank"
            rel="noopener noreferrer"
            className="group/card flex items-start gap-4"
          >
            <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-muted-foreground/15 bg-muted ring-1 ring-edge ring-offset-1 ring-offset-background">
              <ApertureIcon className="size-4 text-muted-foreground" />
            </div>

            <div className="flex-1 space-y-1">
              <p className="leading-snug font-medium underline-offset-4 group-hover/card:underline">
                Stories Through My Lenses
              </p>
              <p className="font-mono text-sm text-muted-foreground">
                @storiesthroughlenses_30
              </p>
              <p className="text-sm text-muted-foreground">
                Nature · Light · Architecture · Culture · Everyday moments
              </p>
            </div>

            <ArrowUpRightIcon className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
          </a>
        </div>

        <a
          href="https://www.instagram.com/storiesthroughlenses_30/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 font-mono text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
        >
          Explore Stories Through My Lenses
          <ArrowUpRightIcon className="size-3.5" />
        </a>
      </PanelContent>
    </Panel>
  );
}
