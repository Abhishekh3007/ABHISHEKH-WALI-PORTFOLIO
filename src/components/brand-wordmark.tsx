export function BrandWordmark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1700 300"
      fill="none"
      {...props}
    >
      <text
        x="850"
        y="220"
        textAnchor="middle"
        fill="currentColor"
        fontFamily="var(--font-sans), system-ui, sans-serif"
        fontSize="200"
        letterSpacing="-0.02em"
      >
        <tspan fontWeight="800">Abhishek</tspan>
        <tspan fontWeight="300" dx="30">Wali</tspan>
      </text>
    </svg>
  );
}

export function getWordmarkSVG(color: string) {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 1700 300"><text x="850" y="220" text-anchor="middle" fill="${color}" font-family="system-ui, -apple-system, sans-serif" font-size="200" letter-spacing="-0.02em"><tspan font-weight="800">Abhishek</tspan><tspan font-weight="300" dx="30">Wali</tspan></text></svg>`;
}

