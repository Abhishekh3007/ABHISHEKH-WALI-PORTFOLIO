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
        fontFamily="var(--font-sans), system-ui, sans-serif"
        fontSize="200"
        letterSpacing="-0.05em"
      >
        <tspan fontWeight="800">A</tspan>
        <tspan fontWeight="300">W</tspan>
      </text>
    </svg>
  );
}

export function getMarkSVG(color: string) {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 512 256"><text x="256" y="180" text-anchor="middle" fill="${color}" font-family="system-ui, -apple-system, sans-serif" font-size="200" letter-spacing="-0.05em"><tspan font-weight="800">A</tspan><tspan font-weight="300">W</tspan></text></svg>`;
}

