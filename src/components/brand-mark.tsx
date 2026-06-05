export function BrandMark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 512 256"
      {...props}
    >
      <text
        x="256"
        y="180"
        textAnchor="middle"
        fill="currentColor"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontWeight="700"
        fontSize="200"
      >
        AW
      </text>
    </svg>
  );
}

export function getMarkSVG(color: string) {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 512 256"><text x="256" y="180" text-anchor="middle" fill="${color}" font-family="system-ui, -apple-system, sans-serif" font-weight="700" font-size="200">AW</text></svg>`;
}

